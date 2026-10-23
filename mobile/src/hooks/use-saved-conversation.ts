import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import type { LessonRef, MentorMessage } from '@/utils/mentor-api';

/** Bump the version suffix if the stored shape or meaning changes. */
const STORAGE_PREFIX = 'codementor/mentor/v1';

/** Even, so a trimmed conversation still starts with a question. Only the last few are sent to the mentor anyway. */
const MAX_SAVED_MESSAGES = 100;

/** The general mentor and every lesson each keep their own conversation. */
function storageKey(lesson?: LessonRef) {
  return lesson ? `${STORAGE_PREFIX}/lesson/${lesson.courseId}/${lesson.lessonId}` : `${STORAGE_PREFIX}/general`;
}

/** The mentor conversation for a lesson (or the general mentor), kept on the device between sessions. */
export function useSavedConversation(lesson?: LessonRef) {
  const key = storageKey(lesson);
  /** Tagged with its key, so a conversation is never shown or saved under another lesson's key. */
  const [conversation, setConversation] = useState<{ key: string; messages: MentorMessage[] } | null>(null);
  const isLoaded = conversation?.key === key;
  const messages = isLoaded ? conversation.messages : [];

  useEffect(() => {
    let isCurrent = true;
    let loaded: MentorMessage[] = [];

    AsyncStorage.getItem(key)
      .then((stored) => {
        if (stored) {
          loaded = JSON.parse(stored);
        }
      })
      .catch((error) => console.warn('Could not load the mentor conversation', error))
      .finally(() => {
        if (isCurrent) {
          setConversation({ key, messages: loaded });
        }
      });

    return () => {
      isCurrent = false;
    };
  }, [key]);

  function setMessages(next: MentorMessage[]) {
    setConversation({ key, messages: next });
    // Saving before the stored conversation is loaded would overwrite it.
    // Only complete exchanges are saved: a question left without its answer (app closed while waiting)
    // would be followed by another question, which breaks the alternation the server expects.
    if (!isLoaded || next.length % 2 !== 0) {
      return;
    }

    const saving =
      next.length === 0
        ? AsyncStorage.removeItem(key)
        : AsyncStorage.setItem(key, JSON.stringify(next.slice(-MAX_SAVED_MESSAGES)));
    saving.catch((error) => console.warn('Could not save the mentor conversation', error));
  }

  return { messages, setMessages, isLoaded };
}
