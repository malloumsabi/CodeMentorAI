import { DarkTheme, DefaultTheme, Stack, ThemeProvider, type Theme } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { Colors } from '@/constants/theme';
import { AppearanceProvider } from '@/hooks/use-appearance';
import { ProfileProvider, useProfile } from '@/hooks/use-profile';
import { ProgressProvider } from '@/hooks/use-progress';
import { I18nProvider, useI18n } from '@/i18n';

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
      <AppearanceProvider>
        <I18nProvider>
          <ProfileProvider>
            <ProgressProvider>
              <AnimatedSplashOverlay />
              <RootStack />
            </ProgressProvider>
          </ProfileProvider>
        </I18nProvider>
      </AppearanceProvider>
    </ThemeProvider>
  );
}

/** Separate component so the header texts can use the current language and the profile. */
function RootStack() {
  const { t } = useI18n();
  const { profile, isLoaded } = useProfile();
  // Only once the stored profile is loaded, so returning users never see the welcome screen flash.
  const needsWelcome = isLoaded && !profile;

  return (
    <Stack>
      <Stack.Protected guard={!needsWelcome}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="course/[courseId]" options={{ headerBackTitle: t.common.back }} />
        <Stack.Screen name="lesson/[courseId]/[lessonId]" options={{ headerBackTitle: t.common.back }} />
        <Stack.Screen
          name="lesson/[courseId]/[lessonId]/mentor"
          options={{ presentation: 'modal', headerShown: false }}
        />
        <Stack.Screen name="edit-profile" options={{ presentation: 'modal', headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={needsWelcome}>
        <Stack.Screen name="welcome" options={{ headerShown: false, gestureEnabled: false }} />
      </Stack.Protected>
    </Stack>
  );
}
