import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Icon } from '@/components/ui/icon';
import { Label } from '@/components/ui/label';
import { Fonts, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';

/** Every lesson is open: 'next' is only the suggested one. */
export type LessonStatus = 'done' | 'next' | 'todo';

type LessonRowProps = {
  number: number;
  /** Small line above the title, e.g. "Semaine 3". */
  caption: string;
  title: string;
  status: LessonStatus;
  onPress: () => void;
  /** Tag of an exam review week, e.g. "Révision vize": its node shows a flag instead of the number. */
  milestone?: string;
  /** First and last steps of the path have no line above / below their node. */
  isFirst?: boolean;
  isLast?: boolean;
};

/** One step of the course path: a node on a vertical line, then the lesson. */
export function LessonRow({
  number,
  caption,
  title,
  status,
  onPress,
  milestone,
  isFirst = false,
  isLast = false,
}: LessonRowProps) {
  const theme = useTheme();
  const { t } = useI18n();
  const statusLabel = t.lessonRow[status];
  const isDone = status === 'done';
  const isNext = status === 'next';

  return (
    <Pressable
      role="button"
      accessibilityLabel={t.lessonRow.accessibilityLabel(number, title, statusLabel)}
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
      <View style={styles.rail}>
        <View style={[styles.line, { backgroundColor: isFirst ? 'transparent' : theme.border }]} />
        <View
          style={[
            styles.node,
            {
              backgroundColor: isDone ? theme.success : theme.background,
              borderColor: isDone ? theme.success : isNext ? theme.primary : theme.border,
              borderWidth: isNext ? 2 : 1,
            },
          ]}>
          {isDone ? (
            <Icon name="check" size={14} color="onPrimary" />
          ) : milestone ? (
            <Icon name="flag" size={14} color={isNext ? 'primary' : 'textSecondary'} />
          ) : (
            <ThemedText themeColor={isNext ? 'primary' : 'textSecondary'} style={styles.number}>
              {number}
            </ThemedText>
          )}
        </View>
        <View style={[styles.line, { backgroundColor: isLast ? 'transparent' : theme.border }]} />
      </View>

      <View
        style={[
          styles.body,
          isNext && { backgroundColor: theme.primarySoft, borderColor: theme.primaryBorder },
        ]}>
        <View style={styles.captionLine}>
          <ThemedText type="small" themeColor={isNext ? 'primary' : 'textSecondary'} style={styles.caption}>
            {caption}
          </ThemedText>
          {isNext ? (
            <Label themeColor="primary">{statusLabel}</Label>
          ) : (
            milestone && <Label>{milestone}</Label>
          )}
        </View>
        <ThemedText
          type="smallBold"
          themeColor={status === 'todo' ? 'textSecondary' : 'text'}
          style={styles.title}
          numberOfLines={2}>
          {title}
        </ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  pressed: {
    opacity: 0.7,
  },
  rail: {
    width: 32,
    alignItems: 'center',
  },
  line: {
    flex: 1,
    width: 2,
    minHeight: Spacing.two,
  },
  node: {
    width: 32,
    height: 32,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontFamily: Fonts.mono,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 600,
  },
  body: {
    flex: 1,
    gap: Spacing.half,
    marginVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two + 2,
    borderRadius: Radius.medium,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  captionLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  caption: {
    fontFamily: Fonts.mono,
    fontSize: 12,
  },
  title: {
    fontSize: 15,
  },
});
