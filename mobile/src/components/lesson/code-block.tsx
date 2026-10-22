import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Fonts, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type CodeBlockProps = {
  code: string;
  /** Shown in a small header when known, e.g. "python". */
  language?: string;
};

/** Monospace code that scrolls horizontally instead of wrapping, so indentation stays readable. */
export function CodeBlock({ code, language }: CodeBlockProps) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
      {language ? (
        <View style={[styles.header, { borderBottomColor: theme.border }]}>
          <ThemedText type="label" themeColor="textSecondary">
            {language}
          </ThemedText>
        </View>
      ) : null}
      <ScrollView horizontal contentContainerStyle={styles.content}>
        <ThemedText style={styles.code} selectable>
          {code}
        </ThemedText>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Radius.medium,
    borderWidth: 1,
    overflow: 'hidden',
  },
  header: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderBottomWidth: 1,
  },
  content: {
    padding: Spacing.three,
  },
  code: {
    fontFamily: Fonts.mono,
    fontSize: 13,
    lineHeight: 21,
  },
});
