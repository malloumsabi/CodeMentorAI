import { useRef, useState, type ComponentRef } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';

import { EmptyState } from '@/components/mentor/empty-state';
import { MessageBubble } from '@/components/mentor/message-bubble';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { IconButton } from '@/components/ui/icon-button';
import { Fonts, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useSavedConversation } from '@/hooks/use-saved-conversation';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';
import { confirmDestructive } from '@/utils/confirm';
import { askMentor, MAX_MESSAGE_LENGTH, type LessonRef, type MentorMessage } from '@/utils/mentor-api';

type MentorChatProps = {
  /** When set, the mentor answers in the context of this lesson. */
  lesson?: LessonRef;
  /** Shown under the title, e.g. the lesson name. */
  subtitle?: string;
  /** When set, a close button is shown in the header. */
  onClose?: () => void;
  /** Room to leave under the composer (tab bar or bottom safe area). */
  bottomPadding: number;
  safeAreaEdges: Edge[];
};

export function MentorChat({ lesson, subtitle, onClose, bottomPadding, safeAreaEdges }: MentorChatProps) {
  const theme = useTheme();
  const { language, t } = useI18n();
  const scrollRef = useRef<ComponentRef<typeof ScrollView>>(null);
  const { messages, setMessages, isLoaded } = useSavedConversation(lesson);
  const [draft, setDraft] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  /** The reply being streamed, shown as it arrives; null when no reply is in progress. */
  const [partialReply, setPartialReply] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const suggestions = lesson ? t.mentor.lessonSuggestions : t.mentor.suggestions;
  const welcome: MentorMessage = { role: 'assistant', content: lesson ? t.mentor.lessonWelcome : t.mentor.welcome };
  const canSend = draft.trim().length > 0 && !isLoading && isLoaded;
  const isEmpty = isLoaded && messages.length === 0 && !isLoading;

  async function send(text: string) {
    const question = text.trim();
    if (!question || isLoading || !isLoaded) {
      return;
    }

    const history: MentorMessage[] = [...messages, { role: 'user', content: question }];
    setMessages(history);
    setDraft('');
    setError(null);
    setIsLoading(true);
    try {
      const reply = await askMentor(history, setPartialReply, { language, lesson });
      setMessages([...history, { role: 'assistant', content: reply }]);
    } catch (e) {
      // Drop the unanswered question (and any partial reply) so the history keeps alternating,
      // and give the question back for a retry.
      setMessages(messages);
      setDraft(question);
      setError(e instanceof Error ? e.message : t.mentorErrors.generic);
    } finally {
      setPartialReply(null);
      setIsLoading(false);
    }
  }

  /** The conversation is saved on the device, so clearing it cannot be undone. */
  function askStartOver() {
    confirmDestructive({
      title: t.mentor.startOverConfirmTitle,
      message: t.mentor.startOverConfirmMessage,
      confirmLabel: t.mentor.startOverConfirmLabel,
      cancelLabel: t.common.cancel,
      onConfirm: () => {
        setMessages([]);
        setError(null);
      },
    });
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={safeAreaEdges} style={styles.container}>
        <KeyboardAvoidingView
          style={[styles.container, styles.column, { paddingBottom: bottomPadding }]}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={[styles.header, { borderBottomColor: theme.border }]}>
            <View style={[styles.mark, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
              <Icon name="code" size={18} color="primary" />
            </View>
            <View style={styles.titleBlock}>
              <ThemedText role="heading" style={styles.title}>
                {t.mentor.title}
              </ThemedText>
              {subtitle && (
                <ThemedText type="small" themeColor="textSecondary" numberOfLines={1} style={styles.subtitle}>
                  {subtitle}
                </ThemedText>
              )}
            </View>
            {messages.length > 0 && !isLoading && (
              <IconButton icon="plus" accessibilityLabel={t.mentor.startOverLabel} onPress={askStartOver} />
            )}
            {onClose && <Button title={t.common.close} variant="ghost" onPress={onClose} />}
          </View>

          <ScrollView
            ref={scrollRef}
            style={styles.container}
            contentContainerStyle={[styles.messages, isEmpty && styles.emptyMessages]}
            keyboardShouldPersistTaps="handled"
            onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}>
            {isEmpty ? (
              <EmptyState welcome={welcome.content} suggestions={suggestions} onPick={send} />
            ) : (
              <MessageBubble message={welcome} />
            )}
            {messages.map((message, index) => (
              <MessageBubble key={index} message={message} />
            ))}

            {partialReply ? <MessageBubble message={{ role: 'assistant', content: partialReply }} /> : null}

            {isLoading && !partialReply && (
              <View style={styles.thinking} accessibilityLiveRegion="polite">
                <ActivityIndicator color={theme.primary} />
                <ThemedText type="small" themeColor="textSecondary">
                  {t.mentor.thinking}
                </ThemedText>
              </View>
            )}

            {error && (
              <ThemedText type="small" themeColor="error" accessibilityLiveRegion="polite">
                {error}
              </ThemedText>
            )}
          </ScrollView>

          <View style={[styles.composer, { borderTopColor: theme.border }]}>
            <View style={styles.inputRow}>
              <TextInput
                value={draft}
                onChangeText={setDraft}
                placeholder={t.mentor.placeholder}
                placeholderTextColor={theme.textSecondary}
                multiline
                maxLength={MAX_MESSAGE_LENGTH}
                editable={!isLoading}
                accessibilityLabel={t.mentor.inputLabel}
                style={[
                  styles.input,
                  { color: theme.text, backgroundColor: theme.backgroundElement, borderColor: theme.border },
                ]}
              />
              <IconButton
                icon="arrowUp"
                variant="primary"
                size={48}
                accessibilityLabel={t.mentor.send}
                disabled={!canSend}
                onPress={() => send(draft)}
              />
            </View>
            <ThemedText type="small" themeColor="textSecondary" style={styles.disclaimer}>
              {t.mentor.disclaimer}
            </ThemedText>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  column: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    paddingHorizontal: Spacing.three + Spacing.one,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.three,
    borderBottomWidth: 1,
  },
  mark: {
    width: 40,
    height: 40,
    borderRadius: Radius.medium,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBlock: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 700,
  },
  subtitle: {
    fontFamily: Fonts.mono,
    fontSize: 12,
  },
  messages: {
    padding: Spacing.three + Spacing.one,
    gap: Spacing.four - 4,
  },
  thinking: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  // The start screen is centered in the free height.
  emptyMessages: {
    flexGrow: 1,
  },
  composer: {
    gap: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    borderTopWidth: 1,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Spacing.two,
  },
  input: {
    flex: 1,
    minHeight: 48,
    maxHeight: 140,
    paddingHorizontal: Spacing.three,
    paddingTop: 13,
    paddingBottom: 13,
    borderRadius: Radius.medium + 2,
    borderWidth: 1,
    fontSize: 15,
  },
  disclaimer: {
    textAlign: 'center',
    fontSize: 11,
    lineHeight: 16,
  },
});
