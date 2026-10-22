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
import { SafeAreaView } from 'react-native-safe-area-context';

import { MessageBubble } from '@/components/mentor/message-bubble';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { askMentor, MAX_MESSAGE_LENGTH, type MentorMessage } from '@/utils/mentor-api';

const WELCOME: MentorMessage = {
  role: 'assistant',
  content:
    'Salut ! Je suis ton mentor. Pose-moi une question sur ton code ou sur une leçon, et je t’explique pas à pas.',
};

const suggestions = [
  'Explique-moi une boucle for',
  'Pourquoi mon code ne marche pas ?',
  'Donne-moi un exercice facile',
];

export default function MentorScreen() {
  const theme = useTheme();
  const scrollRef = useRef<ComponentRef<typeof ScrollView>>(null);
  const [messages, setMessages] = useState<MentorMessage[]>([]);
  const [draft, setDraft] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      const reply = await askMentor(history);
      setMessages([...history, { role: 'assistant', content: reply }]);
    } catch (e) {
      // Drop the unanswered question so the history keeps alternating, and give it back for a retry.
      setMessages(messages);
      setDraft(question);
      setError(e instanceof Error ? e.message : 'Une erreur est survenue.');
    } finally {
      setIsLoading(false);
    }
  }

  function startOver() {
    setMessages([]);
    setError(null);
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.container}>
        <KeyboardAvoidingView
          style={[styles.container, styles.column]}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.header}>
            <ThemedText role="heading" style={styles.title}>
              Mentor IA
            </ThemedText>
            {messages.length > 0 && !isLoading && (
              <Button title="Nouvelle conversation" variant="ghost" onPress={startOver} />
            )}
          </View>

          <ScrollView
            ref={scrollRef}
            style={styles.container}
            contentContainerStyle={styles.messages}
            keyboardShouldPersistTaps="handled"
            onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}>
            <MessageBubble message={WELCOME} />
            {messages.map((message, index) => (
              <MessageBubble key={index} message={message} />
            ))}

            {isLoading && (
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
    paddingBottom: BottomTabInset + Spacing.two,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.two,
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
