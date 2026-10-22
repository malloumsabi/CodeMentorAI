import { ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type CodeBlockProps = {
  code: string;
};

/** Monospace code that scrolls horizontally instead of wrapping, so indentation stays readable. */
export function CodeBlock({ code }: CodeBlockProps) {
  const theme = useTheme();

  return (
    <ScrollView
      horizontal
      style={[styles.container, { backgroundColor: theme.backgroundSelected }]}
      contentContainerStyle={styles.content}>
      <ThemedText type="code" style={styles.code}>
        {code}
      </ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Radius.medium,
    flexGrow: 0,
  },
  content: {
    padding: Spacing.three,
  },
  code: {
    fontSize: 14,
    lineHeight: 22,
  },
});
