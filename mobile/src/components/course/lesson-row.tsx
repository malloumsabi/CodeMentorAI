import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';

/** Every lesson is open: 'next' is only the suggested one. */
export type LessonStatus = 'done' | 'next' | 'todo';

type LessonRowProps = {
  number: number;
  title: string;
  status: LessonStatus;
  onPress: () => void;
};

export function LessonRow({ number, title, status, onPress }: LessonRowProps) {
  const theme = useTheme();
  const { t } = useI18n();
  const statusLabel = t.lessonRow[status];

  const circleColor = status === 'done' ? theme.success : status === 'next' ? theme.primary : theme.backgroundSelected;

  return (
    <Pressable
      role="button"
      accessibilityLabel={t.lessonRow.accessibilityLabel(number, title, statusLabel)}
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        {
          backgroundColor: theme.backgroundElement,
          borderColor: status === 'next' ? theme.primary : theme.border,
        },
        pressed && styles.pressed,
      ]}>
      <View style={[styles.circle, { backgroundColor: circleColor }]}>
        <ThemedText type="smallBold" themeColor={status === 'todo' ? 'textSecondary' : 'onPrimary'}>
          {status === 'done' ? '✓' : number}
        </ThemedText>
      </View>
      <View style={styles.text}>
        <ThemedText style={styles.title} numberOfLines={2}>
          {title}
        </ThemedText>
        <ThemedText type="small" themeColor={status === 'next' ? 'primary' : 'textSecondary'}>
          {statusLabel}
        </ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    padding: Spacing.three,
    borderRadius: Radius.large,
    borderWidth: 1,
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
  },
  title: {
    fontWeight: 600,
  },
  pressed: {
    opacity: 0.8,
  },
});
