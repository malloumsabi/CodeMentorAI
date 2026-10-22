import { DarkTheme, DefaultTheme, Stack, ThemeProvider, type Theme } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { Colors } from '@/constants/theme';
import { ProgressProvider } from '@/hooks/use-progress';

SplashScreen.preventAutoHideAsync();

/** Navigation theme (headers, screen backgrounds) built from the CodeMentor AI palette. */
function getNavigationTheme(scheme: 'light' | 'dark'): Theme {
  const base = scheme === 'dark' ? DarkTheme : DefaultTheme;
  const colors = Colors[scheme];

  return {
    ...base,
    colors: {
      ...base.colors,
      primary: colors.primary,
      background: colors.background,
      card: colors.background,
      text: colors.text,
      border: colors.border,
    },
  };
}

export default function RootLayout() {
  const colorScheme = useColorScheme() === 'dark' ? 'dark' : 'light';

  return (
    <ThemeProvider value={getNavigationTheme(colorScheme)}>
      <ProgressProvider>
        <AnimatedSplashOverlay />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="course/[courseId]" options={{ headerBackTitle: 'Retour' }} />
          <Stack.Screen name="lesson/[courseId]/[lessonId]" options={{ headerBackTitle: 'Retour' }} />
        </Stack>
      </ProgressProvider>
    </ThemeProvider>
  );
}
