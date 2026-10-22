import { StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const suggestions = [
  'Explique-moi une boucle for',
  'Pourquoi mon code ne marche pas ?',
  'Donne-moi un exercice facile',
];

/** Static preview: the AI is not connected yet. */
export default function MentorScreen() {
  const theme = useTheme();

  return (
    <Screen title="Mentor IA">
      <Card style={[styles.notice, { borderColor: theme.warning }]}>
        <ThemedText type="smallBold" themeColor="warning">
          Aperçu
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          Le mentor IA n’est pas encore connecté. Cet écran montre à quoi ressemblera la
          conversation.
        </ThemedText>
      </Card>

      <View style={styles.messages}>
        <View style={[styles.bubble, styles.mentorBubble, { backgroundColor: theme.backgroundElement }]}>
          <ThemedText type="smallBold" themeColor="accent">
            Mentor
          </ThemedText>
          <ThemedText>
            Salut ! Je suis ton mentor. Pose-moi une question sur ton code ou sur une leçon, et je
            t’explique pas à pas.
          </ThemedText>
        </View>

        <View style={[styles.bubble, styles.userBubble, { backgroundColor: theme.primary }]}>
          <ThemedText themeColor="onPrimary">C’est quoi une variable ?</ThemedText>
        </View>

        <View style={[styles.bubble, styles.mentorBubble, { backgroundColor: theme.backgroundElement }]}>
          <ThemedText type="smallBold" themeColor="accent">
            Mentor
          </ThemedText>
          <ThemedText>Une variable, c’est une boîte avec un nom, dans laquelle on range une valeur :</ThemedText>
          <View style={[styles.code, { backgroundColor: theme.backgroundSelected }]}>
            <ThemedText type="code">age = 17</ThemedText>
          </View>
        </View>
      </View>

      <View style={styles.suggestions}>
        <ThemedText type="small" themeColor="textSecondary">
          Questions suggérées
        </ThemedText>
        {suggestions.map((suggestion) => (
          <Button key={suggestion} title={suggestion} variant="secondary" disabled />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  notice: {
    borderWidth: 1,
  },
  messages: {
    gap: Spacing.three,
  },
  bubble: {
    maxWidth: '85%',
    padding: Spacing.three,
    borderRadius: Radius.large,
    gap: Spacing.one,
  },
  mentorBubble: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: Radius.small,
  },
  userBubble: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: Radius.small,
  },
  code: {
    marginTop: Spacing.one,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.small,
  },
  suggestions: {
    gap: Spacing.two,
  },
});
