import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LanguagePicker } from '@/components/language-picker';
import { ProfileForm } from '@/components/profile/profile-form';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useProfile } from '@/hooks/use-profile';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';

/**
 * Shown once, until the user has a profile. Saving it makes the root layout switch to the tabs.
 */
export default function WelcomeScreen() {
  const theme = useTheme();
  const { t } = useI18n();
  const { saveProfile } = useProfile();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
            <View style={styles.hero}>
              <View style={[styles.logo, { backgroundColor: theme.primary }]}>
                <ThemedText themeColor="onPrimary" style={styles.logoText}>
                  {'</>'}
                </ThemedText>
              </View>
              <ThemedText role="heading" style={styles.title}>
                {t.welcome.title}
              </ThemedText>
              <ThemedText themeColor="textSecondary">{t.welcome.subtitle}</ThemedText>
            </View>

            <View style={styles.field}>
              <ThemedText type="smallBold">{t.welcome.language}</ThemedText>
              <LanguagePicker />
            </View>

            <ProfileForm submitLabel={t.welcome.start} onSubmit={saveProfile} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    padding: Spacing.four,
    gap: Spacing.four,
  },
  hero: {
    gap: Spacing.two,
    paddingTop: Spacing.four,
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: Radius.large,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.two,
  },
  logoText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 700,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: 700,
  },
  field: {
    gap: Spacing.two,
  },
});
