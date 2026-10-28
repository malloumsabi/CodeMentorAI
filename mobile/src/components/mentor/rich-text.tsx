import { StyleSheet, Text, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Fonts, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

/** `**bold**` and `` `code` `` spans; anything else is kept as typed. */
const INLINE = /(\*\*[^*\n]+\*\*|`[^`\n]+`)/;
/** "- item", "* item" or "1. item". */
const LIST_ITEM = /^\s*(?:[-*•]|(\d+)[.)])\s+(.*)$/;

/** Plain `Text` spans, so they inherit the size and color of the paragraph around them. */
function Inline({ text }: { text: string }) {
  const theme = useTheme();

  return text.split(INLINE).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <Text key={index} style={styles.bold}>
          {part.slice(2, -2)}
        </Text>
      );
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return (
        <Text key={index} style={[styles.code, { color: theme.accent, backgroundColor: theme.backgroundSelected }]}>
          {part.slice(1, -1)}
        </Text>
      );
    }
    return part;
  });
}

/**
 * The light Markdown the mentor is allowed to use: bold, inline code and lists.
 * Code blocks are split out before, by the message bubble.
 */
export function RichText({ text }: { text: string }) {
  const paragraphs = text.split(/\n{2,}/).filter((paragraph) => paragraph.trim().length > 0);

  return (
    <View style={styles.container}>
      {paragraphs.map((paragraph, index) => {
        const lines = paragraph.split('\n');
        if (lines.every((line) => LIST_ITEM.test(line) || line.trim() === '')) {
          return (
            <View key={index} style={styles.list}>
              {lines
                .map((line) => line.match(LIST_ITEM))
                .filter((match) => match !== null)
                .map((match, itemIndex) => (
                  <View key={itemIndex} style={styles.item}>
                    <ThemedText themeColor="textSecondary" style={[styles.text, styles.marker]}>
                      {match[1] ? `${match[1]}.` : '•'}
                    </ThemedText>
                    <ThemedText selectable style={[styles.text, styles.itemText]}>
                      <Inline text={match[2]} />
                    </ThemedText>
                  </View>
                ))}
            </View>
          );
        }
        return (
          <ThemedText key={index} selectable style={styles.text}>
            <Inline text={paragraph} />
          </ThemedText>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.two + 2,
  },
  text: {
    fontSize: 15,
    lineHeight: 23,
  },
  bold: {
    fontWeight: 700,
  },
  code: {
    fontFamily: Fonts.mono,
    fontSize: 13,
  },
  list: {
    gap: Spacing.one,
  },
  item: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  marker: {
    minWidth: 14,
  },
  itemText: {
    flex: 1,
  },
});
