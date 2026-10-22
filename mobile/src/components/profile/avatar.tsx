import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useI18n, type Language } from '@/i18n';

/** Up to two initials, uppercased with the rules of the app language (e.g. Turkish i → İ). */
function getInitials(name: string, language: Language) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toLocaleUpperCase(language))
    .join('');
}

type AvatarProps = {
  name: string;
  size?: number;
  /** `primary`: filled with the accent color; `subtle`: surface with a border. */
  tone?: 'primary' | 'subtle';
};

/** Decorative: the name is always shown or announced next to it. */
export function Avatar({ name, size = 44, tone = 'subtle' }: AvatarProps) {
  const theme = useTheme();
  const { language } = useI18n();
  const isPrimary = tone === 'primary';

  return (
    <View
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          backgroundColor: isPrimary ? theme.primary : theme.backgroundElement,
          borderColor: isPrimary ? theme.primary : theme.border,
        },
      ]}>
      <ThemedText
        themeColor={isPrimary ? 'onPrimary' : 'text'}
        style={{ fontSize: size * 0.36, lineHeight: size * 0.46, fontWeight: 600 }}>
        {getInitials(name, language) || '?'}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: Radius.full,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
