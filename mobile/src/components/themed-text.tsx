import { Platform, StyleSheet, Text, type TextProps } from 'react-native';

import { Fonts, ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
  type?:
    | 'default'
    | 'title'
    | 'heading'
    | 'section'
    | 'small'
    | 'smallBold'
    | 'subtitle'
    | 'label'
    | 'stat'
    | 'link'
    | 'linkPrimary'
    | 'code';
  themeColor?: ThemeColor;
};

export function ThemedText({ style, type = 'default', themeColor, ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return <Text style={[{ color: theme[themeColor ?? 'text'] }, styles[type], style]} {...rest} />;
}

const styles = StyleSheet.create({
  small: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 400,
  },
  smallBold: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 600,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
  },
  /** Screen title. */
  heading: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: 700,
    letterSpacing: -0.4,
  },
  /** Section title inside a screen. */
  section: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: 600,
  },
  /** Small monospaced caps, e.g. "EN COURS · PYTHON": use <Label>, which uppercases for the app language. */
  label: {
    fontFamily: Fonts.mono,
    fontSize: 11,
    lineHeight: 16,
    fontWeight: 600,
    letterSpacing: 0.8,
  },
  /** A number shown on its own, e.g. a statistic. */
  stat: {
    fontFamily: Fonts.mono,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 600,
  },
  title: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: 52,
  },
  subtitle: {
    fontSize: 32,
    lineHeight: 44,
    fontWeight: 600,
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
  },
  linkPrimary: {
    lineHeight: 30,
    fontSize: 14,
    color: '#3c87f7',
  },
  code: {
    fontFamily: Fonts.mono,
    fontWeight: Platform.select({ android: 700 }) ?? 500,
    fontSize: 12,
  },
});
