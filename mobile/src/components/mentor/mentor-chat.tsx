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

import { MessageBubble } from '@/components/mentor/message-bubble';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { askMentor, MAX_MESSAGE_LENGTH, type LessonRef, type MentorMessage } from '@/utils/mentor-api';

const WELCOME: MentorMessage = {
  role: 'assistant',
  content:
    'Salut ! Je suis ton mentor. Pose-moi une question sur ton code ou sur une leçon, et je t’explique pas à pas.',
};

const LESSON_WELCOME: MentorMessage = {
  role: 'assistant',
  content: 'Je connais la leçon que tu es en train de suivre. Qu’est-ce qui te bloque ?',
};

const generalSuggestions = [
  'Explique-moi une boucle for',
  'Pourquoi mon code ne marche pas ?',
  'Donne-moi un exercice facile',
];

const lessonSuggestions = [
  'Explique-moi cette leçon autrement',
  'Donne-moi un autre exemple',
  'Aide-moi pour le quiz sans me donner la réponse',
];

type MentorChatProps = {
  /** When set, the mentor answers in the context of this lesson. */
  lesson?: LessonRef;
  /** Shown under the title, e.g. the lesson name. */
  subtitle?: string;
  /** When set, a "Fermer" button is shown in the header. */
  onClose?: () => void;
  /** Room to leave under the composer (tab bar or bottom safe area). */
  bottomPadding: number;
  safeAreaEdges: Edge[];
};

export function MentorChat({ lesson, subtitle, onClose, bottomPadding, safeAreaEdges }: MentorChatProps) {
  const theme = useTheme();
  const scrollRef = useRef<ComponentRef<typeof ScrollView>>(null);
  const [messages, setMessages] = useState<MentorMessage[]>([]);
  const [draft, setDraft] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  /** The reply being streamed, shown as it arrives; null when no reply is in progress. */
  const [partialReply, setPartialReply] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const suggestions = lesson ? lessonSuggestions : generalSuggestions;

  async function send(text: string) {
    const question = text.trim();
    if (!question || isLoading) {
      return;
    }

    const history: MentorMessage[] = [...messages, { role: 'user', content: question }];
    setMessages(history);
    setDraft('');
    setError(null);
    setIsLoading(true);
    try {
      const reply = await askMentor(history, setPartialReply, lesson);
      setMessages([...history, { role: 'assistant', content: reply }]);
    } catch (e) {
      // Drop the unanswered question (and any partial reply) so the history keeps alternating,
      // and give the question back for a retry.
      setMessages(messages);
      setDraft(question);
      setError(e instanceof Error ? e.message : 'Une erreur est survenue.');
    } finally {
      setPartialReply(null);
      setIsLoading(false);
    }
  }

  function startOver() {
    setMessages([]);
    setError(null);
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={safeAreaEdges} style={styles.container}>
        <KeyboardAvoidingView
          style={[styles.container, styles.column, { paddingBottom: bottomPadding }]}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.header}>
            <View style={styles.titleBlock}>
              <ThemedText role="heading" style={styles.title}>
                Mentor IA
              </ThemedText>
              {subtitle && (
                <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>
                  {subtitle}
                </ThemedText>
              )}
            </View>
            {messages.length > 0 && !isLoading && (
              <Button
                title="Recommencer"
                accessibilityLabel="Nouvelle conversation"
                variant="ghost"
                onPress={startOver}
              />
            )}
            {onClose && <Button title="Fermer" variant="ghost" onPress={onClose} />}
          </View>

          <ScrollView
            ref={scrollRef}
            style={styles.container}
            contentContainerStyle={styles.messages}
            keyboardShouldPersistTaps="handled"
            onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}>
            <MessageBubble message={lesson ? LESSON_WELCOME : WELCOME} />
            {messages.map((message, index) => (
              <MessageBubble key={index} message={message} />
            ))}

            {partialReply ? <MessageBubble message={{ role: 'assistant', content: partialReply }} /> : null}

            {isLoading && !partialReply && (
              <View style={styles.thinking} accessibilityLiveRegion="polite">
                <ActivityIndicator color={theme.primary} />
                <ThemedText type="small" themeColor="textSecondary">
                  Le mentor réfléchit…
                </ThemedText>
              </View>
            )}

            {error && (
              <ThemedText type="small" themeColor="error" accessibilityLiveRegion="polite">
                {error}
              </ThemedText>
            )}

            {messages.length === 0 && !isLoading && (
              <View style={styles.suggestions}>
                <ThemedText type="small" themeColor="textSecondary">
                  Questions suggérées
                </ThemedText>
                {suggestions.map((suggestion) => (
                  <Button key={suggestion} title={suggestion} variant="secondary" onPress={() => send(suggestion)} />
                ))}
              </View>
            )}
          </ScrollView>

          <View style={styles.composer}>
            <TextInput
              value={draft}
              onChangeText={setDraft}
              placeholder="Pose ta question…"
              placeholderTextColor={theme.textSecondary}
              multiline
              maxLength={MAX_MESSAGE_LENGTH}
              editable={!isLoading}
              accessibilityLabel="Ta question pour le mentor"
              style={[
                styles.input,
                { color: theme.text, backgroundColor: theme.backgroundElement, borderColor: theme.border },
              ]}
            />
            <Button title="Envoyer" disabled={!draft.trim() || isLoading} onPress={() => send(draft)} />
          </View>
          <ThemedText type="small" themeColor="textSecondary" style={styles.disclaimer}>
            Le mentor est une IA : ses réponses peuvent contenir des erreurs.
          </ThemedText>
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
    gap: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.two,
  },
  titleBlock: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: 700,
  },
  messages: {
    paddingHorizontal: Spacing.three,
    paddingBottom: Spacing.three,
    gap: Spacing.three,
  },
  thinking: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  suggestions: {
    gap: Spacing.two,
  },
  composer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.two,
  },
  input: {
    flex: 1,
    minHeight: 48,
    maxHeight: 140,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Radius.medium,
    borderWidth: 1,
    fontSize: 16,
  },
  disclaimer: {
    textAlign: 'center',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.one,
    fontSize: 12,
  },
});
