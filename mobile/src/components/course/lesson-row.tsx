import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type LessonStatus = 'done' | 'next' | 'locked';

type LessonRowProps = {
  number: number;
  title: string;
  status: LessonStatus;
  onPress: () => void;
};

const statusLabels: Record<LessonStatus, string> = {
  done: 'Terminée · Revoir',
  next: 'À faire maintenant',
  locked: 'Verrouillée',
};

export function LessonRow({ number, title, status, onPress }: LessonRowProps) {
  const theme = useTheme();
  const isLocked = status === 'locked';

  const circleColor = status === 'done' ? theme.success : status === 'next' ? theme.primary : theme.backgroundSelected;

  return (
    <Pressable
      role="button"
      accessibilityLabel={`Leçon ${number} : ${title}. ${statusLabels[status]}`}
      accessibilityState={{ disabled: isLocked }}
      disabled={isLocked}
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        {
          backgroundColor: theme.backgroundElement,
          borderColor: status === 'next' ? theme.primary : theme.border,
        },
        pressed && styles.pressed,
        isLocked && styles.locked,
      ]}>
      <View style={[styles.circle, { backgroundColor: circleColor }]}>
        <ThemedText type="smallBold" themeColor={isLocked ? 'textSecondary' : 'onPrimary'}>
          {status === 'done' ? '✓' : number}
        </ThemedText>
      </View>
      <View style={styles.text}>
        <ThemedText style={styles.title} numberOfLines={2}>
          {title}
        </ThemedText>
        <ThemedText type="small" themeColor={status === 'next' ? 'primary' : 'textSecondary'}>
          {statusLabels[status]}
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
  locked: {
    opacity: 0.6,
  },
});
