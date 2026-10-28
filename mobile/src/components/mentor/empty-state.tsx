import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Label } from '@/components/ui/label';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';

type EmptyStateProps = {
  /** Shown under the title: the general or the lesson welcome. */
  welcome: string;
  suggestions: readonly string[];
  onPick: (suggestion: string) => void;
};

/** Start screen of an empty conversation: the mentor's mark, a welcome and questions to start with. */
export function EmptyState({ welcome, suggestions, onPick }: EmptyStateProps) {
  const theme = useTheme();
  const { t } = useI18n();

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={[styles.mark, { backgroundColor: theme.primarySoft, borderColor: theme.primaryBorder }]}>
          <Icon name="code" size={26} color="primary" />
        </View>
        <ThemedText type="heading" role="heading" style={styles.centered}>
          {t.mentor.emptyTitle}
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary" style={[styles.centered, styles.welcome]}>
          {welcome}
        </ThemedText>
      </View>

      <View style={styles.suggestions}>
        <Label>{t.mentor.suggestionsTitle}</Label>
        <Card variant="outline" style={styles.list}>
          {suggestions.map((suggestion, index) => (
            <Pressable
              key={suggestion}
              role="button"
              onPress={() => onPick(suggestion)}
              style={({ pressed }) => [
                styles.row,
                index > 0 && { borderTopWidth: 1, borderTopColor: theme.border },
                pressed && { backgroundColor: theme.backgroundElement },
              ]}>
              <ThemedText type="smallBold" style={styles.rowText}>
                {suggestion}
              </ThemedText>
              <Icon name="chevronRight" size={14} color="textSecondary" />
            </Pressable>
          ))}
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: Spacing.five,
  },
  hero: {
    alignItems: 'center',
    gap: Spacing.three,
  },
  mark: {
    width: 64,
    height: 64,
    borderRadius: Radius.large,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centered: {
    textAlign: 'center',
  },
  welcome: {
    maxWidth: 320,
  },
  suggestions: {
    gap: Spacing.two,
  },
  list: {
    paddingVertical: 0,
    gap: 0,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    minHeight: 52,
    marginHorizontal: -Spacing.three,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two + 2,
  },
  rowText: {
    flex: 1,
    fontSize: 15,
  },
});
