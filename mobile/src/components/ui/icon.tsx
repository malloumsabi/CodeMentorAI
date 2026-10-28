import { SymbolView, type SymbolViewProps } from 'expo-symbols';

import type { ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

/** The app's icons: SF Symbols on iOS, Material Symbols on Android and web. */
const ICONS = {
  appearance: { ios: 'circle.lefthalf.filled', android: 'contrast', web: 'contrast' },
  arrowLeft: { ios: 'arrow.left', android: 'arrow_back', web: 'arrow_back' },
  arrowRight: { ios: 'arrow.right', android: 'arrow_forward', web: 'arrow_forward' },
  arrowUp: { ios: 'arrow.up', android: 'arrow_upward', web: 'arrow_upward' },
  check: { ios: 'checkmark', android: 'check', web: 'check' },
  chevronRight: { ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' },
  close: { ios: 'xmark', android: 'close', web: 'close' },
  code: { ios: 'chevron.left.forwardslash.chevron.right', android: 'code', web: 'code' },
  copy: { ios: 'doc.on.doc', android: 'content_copy', web: 'content_copy' },
  flame: { ios: 'flame.fill', android: 'local_fire_department', web: 'local_fire_department' },
  flag: { ios: 'flag.checkered', android: 'sports_score', web: 'sports_score' },
  language: { ios: 'globe', android: 'language', web: 'language' },
  plus: { ios: 'plus', android: 'add', web: 'add' },
  reset: { ios: 'arrow.counterclockwise', android: 'restart_alt', web: 'restart_alt' },
  settings: { ios: 'gearshape', android: 'settings', web: 'settings' },
  target: { ios: 'scope', android: 'track_changes', web: 'track_changes' },
} satisfies Record<string, SymbolViewProps['name']>;

export type IconName = keyof typeof ICONS;

type IconProps = {
  name: IconName;
  size?: number;
  color?: ThemeColor;
};

/** Decorative by default: give the surrounding button an accessibility label. */
export function Icon({ name, size = 20, color = 'text' }: IconProps) {
  const theme = useTheme();
  return (
    <SymbolView
      name={ICONS[name]}
      size={size}
      tintColor={theme[color]}
      accessibilityElementsHidden
      importantForAccessibility="no"
    />
  );
}
