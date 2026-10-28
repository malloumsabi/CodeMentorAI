import { StyleSheet, View } from 'react-native';

import { CodeBlock } from '@/components/lesson/code-block';
import { RichText } from '@/components/mentor/rich-text';
import { ThemedText } from '@/components/themed-text';
import { Icon } from '@/components/ui/icon';
import { Label } from '@/components/ui/label';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';
import type { MentorMessage } from '@/utils/mentor-api';

type Segment = { type: 'text'; value: string } | { type: 'code'; value: string; language?: string };

/** Splits a reply on ``` fences: odd parts are code, whose optional first-line language name is kept. */
function splitCode(content: string): Segment[] {
  return content
    .split('```')
    .map((part, index): Segment => {
      if (index % 2 === 0) {
        return { type: 'text', value: part.trim() };
      }
      const language = part.match(/^([\w+#-]+)\n/)?.[1];
      return {
        type: 'code',
        value: part.replace(/^[\w+#-]*\n/, '').replace(/\n$/, ''),
        language,
      };
    })
    .filter((segment) => segment.value.length > 0);
}

/** The student's messages are bubbles; the mentor's are plain text, easier to read when long. */
export function MessageBubble({ message }: { message: MentorMessage }) {
  const theme = useTheme();
  const { t } = useI18n();

  if (message.role === 'user') {
    return (
      <View style={[styles.userBubble, { backgroundColor: theme.primary }]}>
        <ThemedText themeColor="onPrimary" selectable style={styles.userText}>
          {message.content}
        </ThemedText>
      </View>
    );
  }

  return (
    <View style={styles.reply}>
      <View style={styles.author}>
        <View style={[styles.avatar, { backgroundColor: theme.primarySoft, borderColor: theme.primaryBorder }]}>
          <Icon name="code" size={12} color="primary" />
        </View>
        <Label themeColor="primary">{t.mentor.author}</Label>
      </View>
      {splitCode(message.content).map((segment, index) =>
        segment.type === 'code' ? (
          <CodeBlock key={index} code={segment.value} language={segment.language} />
        ) : (
          <RichText key={index} text={segment.value} />
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  userBubble: {
    alignSelf: 'flex-end',
    maxWidth: '82%',
    paddingHorizontal: Spacing.three - 2,
    paddingVertical: Spacing.two + 4,
    borderRadius: Radius.large - 4,
    borderBottomRightRadius: Radius.small - 4,
  },
  userText: {
    fontSize: 15,
    lineHeight: 21,
  },
  reply: {
    gap: Spacing.two + 2,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  avatar: {
    width: 22,
    height: 22,
    borderRadius: Radius.small - 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
