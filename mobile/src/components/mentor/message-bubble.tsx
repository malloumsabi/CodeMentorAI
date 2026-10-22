import { StyleSheet, View } from 'react-native';

import { CodeBlock } from '@/components/lesson/code-block';
import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';
import type { MentorMessage } from '@/utils/mentor-api';

type Segment = { type: 'text' | 'code'; value: string };

/** Splits a reply on ``` fences: odd parts are code (the optional language name on the first line is dropped). */
function splitCode(content: string): Segment[] {
  return content
    .split('```')
    .map((part, index): Segment =>
      index % 2 === 1
        ? { type: 'code', value: part.replace(/^[\w+-]*\n/, '').replace(/\n$/, '') }
        : { type: 'text', value: part.trim() }
    )
    .filter((segment) => segment.value.length > 0);
}

export function MessageBubble({ message }: { message: MentorMessage }) {
  const theme = useTheme();
  const { t } = useI18n();
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <View style={[styles.bubble, styles.userBubble, { backgroundColor: theme.primary }]}>
        <ThemedText themeColor="onPrimary" selectable>
          {message.content}
        </ThemedText>
      </View>
    );
  }

  return (
    <View style={[styles.bubble, styles.mentorBubble, { backgroundColor: theme.backgroundElement }]}>
      <ThemedText type="smallBold" themeColor="accent">
        {t.mentor.author}
      </ThemedText>
      {splitCode(message.content).map((segment, index) =>
        segment.type === 'code' ? (
          <CodeBlock key={index} code={segment.value} />
        ) : (
          <ThemedText key={index} selectable>
            {segment.value}
          </ThemedText>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    maxWidth: '90%',
    padding: Spacing.three,
    borderRadius: Radius.large,
    gap: Spacing.two,
  },
  mentorBubble: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: Radius.small,
  },
  userBubble: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: Radius.small,
  },
});
