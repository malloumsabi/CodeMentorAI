/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://unistyl.es/), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

/**
 * CodeMentor AI palette. Every key must exist in both `light` and `dark`.
 * - primary: main actions (buttons, active tab, progress). `onPrimary` is the text drawn on top of it.
 *   `primarySoft` / `primaryBorder`: tinted surface for the one card that should stand out.
 * - accent: code and AI-related highlights.
 * - success / warning / error: feedback (correct answer, hint, mistake).
 */
export const Colors = {
  light: {
    text: '#0B1020',
    textSecondary: '#5B6275',
    background: '#FFFFFF',
    backgroundElement: '#F6F7F9',
    backgroundSelected: '#ECEEF2',
    border: '#E4E7EC',
    primary: '#4F46E5',
    onPrimary: '#FFFFFF',
    primarySoft: '#EEF0FE',
    primaryBorder: '#C7CCFA',
    accent: '#0E7490',
    success: '#15803D',
    warning: '#B45309',
    error: '#DC2626',
  },
  dark: {
    text: '#E6EAF2',
    textSecondary: '#9AA4B2',
    background: '#0B0F17',
    backgroundElement: '#121826',
    backgroundSelected: '#1A2130',
    border: '#1E2633',
    primary: '#818CF8',
    onPrimary: '#0B0F17',
    primarySoft: '#151A33',
    primaryBorder: '#2B3366',
    accent: '#22D3EE',
    success: '#4ADE80',
    warning: '#FBBF24',
    error: '#F87171',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const Radius = {
  small: 8,
  medium: 12,
  large: 20,
  full: 999,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
