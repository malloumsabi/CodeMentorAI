import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomBar } from '@/components/ui/bottom-bar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChoiceList } from '@/components/ui/choice-list';
import { Icon } from '@/components/ui/icon';
import { IconButton } from '@/components/ui/icon-button';
import { Fonts, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { MAX_NAME_LENGTH, STUDY_YEARS, useProfile, type StudyYear } from '@/hooks/use-profile';
import { useTheme } from '@/hooks/use-theme';
import { LANGUAGE_NAMES, LANGUAGES, useI18n } from '@/i18n';

/** The intro, then one question per step, like the onboarding of learning apps. */
const STEPS = ['intro', 'language', 'name', 'year'] as const;
/** The intro is not counted in the "1/3" progress. */
const QUESTION_COUNT = STEPS.length - 1;

/**
 * Shown once, until the user has a profile. Saving it makes the root layout switch to the tabs.
 */
export default function WelcomeScreen() {
  const theme = useTheme();
  const { t, language, setLanguage } = useI18n();
  const { saveProfile } = useProfile();
  const [stepIndex, setStepIndex] = useState(0);
  const [name, setName] = useState('');
  const [year, setYear] = useState<StudyYear | null>(null);

  const step = STEPS[stepIndex];
  const languageOptions = LANGUAGES.map((code) => ({ value: code, label: LANGUAGE_NAMES[code] }));
  const yearOptions = STUDY_YEARS.map((value) => ({ value, label: t.years[value] }));

  const canContinue = (step !== 'name' || name.trim().length > 0) && (step !== 'year' || year !== null);
  let buttonTitle = t.welcome.next;
  if (step === 'intro') {
    buttonTitle = t.welcome.letsGo;
  } else if (step === 'year') {
    buttonTitle = t.welcome.start;
  }

  function goNext() {
    if (!canContinue) {
      return;
    }
    if (step === 'year' && year) {
      saveProfile({ name, year });
      return;
    }
    setStepIndex((index) => index + 1);
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          {step !== 'intro' && (
            <View style={[styles.header, styles.column]}>
              <IconButton
                icon="arrowLeft"
                accessibilityLabel={t.common.back}
                onPress={() => setStepIndex((index) => index - 1)}
                size={40}
              />
              <View
                accessibilityRole="progressbar"
                accessibilityLabel={t.welcome.stepOf(stepIndex, QUESTION_COUNT)}
                accessibilityValue={{ min: 0, max: QUESTION_COUNT, now: stepIndex }}
                style={styles.progress}>
                {STEPS.slice(1).map((item, index) => (
                  <View
                    key={item}
                    style={[
                      styles.segment,
                      { backgroundColor: index < stepIndex ? theme.primary : theme.backgroundSelected },
                    ]}
                  />
                ))}
              </View>
              <ThemedText type="small" themeColor="textSecondary" style={styles.count}>
                {stepIndex}/{QUESTION_COUNT}
              </ThemedText>
            </View>
          )}

          <ScrollView
            contentContainerStyle={[styles.content, styles.column, step === 'intro' && styles.introContent]}
            keyboardShouldPersistTaps="handled">
            {step === 'intro' && (
              <>
                <View style={styles.hero}>
                  <View style={[styles.logo, { backgroundColor: theme.primary }]}>
                    <ThemedText themeColor="onPrimary" style={styles.logoText}>
                      {'</>'}
                    </ThemedText>
                  </View>
                  <ThemedText role="heading" type="heading" style={styles.centered}>
                    {t.welcome.title}
                  </ThemedText>
                  <ThemedText themeColor="textSecondary" style={styles.centered}>
                    {t.welcome.subtitle}
                  </ThemedText>
                </View>
                <Card variant="outline" style={styles.features}>
                  {t.welcome.features.map((feature) => (
                    <View key={feature} style={styles.feature}>
                      <View style={[styles.featureMark, { backgroundColor: theme.primarySoft }]}>
                        <Icon name="check" size={14} color="primary" />
                      </View>
                      <ThemedText type="small" style={styles.featureText}>
                        {feature}
                      </ThemedText>
                    </View>
                  ))}
                </Card>
              </>
            )}

            {step === 'language' && (
              <>
                <Question title={t.welcome.languageTitle} hint={t.welcome.languageHint} />
                <Card variant="outline" style={styles.choices}>
                  <ChoiceList
                    options={languageOptions}
                    value={language}
                    onChange={setLanguage}
                    accessibilityLabel={t.welcome.language}
                  />
                </Card>
              </>
            )}

            {step === 'name' && (
              <>
                <Question title={t.welcome.nameTitle} hint={t.welcome.nameHint} />
                <TextInput
                  value={name}
                  onChangeText={setName}
                  onSubmitEditing={goNext}
                  placeholder={t.profileForm.namePlaceholder}
                  placeholderTextColor={theme.textSecondary}
                  maxLength={MAX_NAME_LENGTH}
                  autoFocus
                  autoCapitalize="words"
                  autoComplete="given-name"
                  textContentType="givenName"
                  returnKeyType="next"
                  accessibilityLabel={t.profileForm.nameLabel}
                  style={[
                    styles.input,
                    { color: theme.text, backgroundColor: theme.backgroundElement, borderColor: theme.border },
                  ]}
                />
              </>
            )}

            {step === 'year' && (
              <>
                <Question title={t.welcome.yearTitle} hint={t.welcome.yearHint} />
                <Card variant="outline" style={styles.choices}>
                  <ChoiceList
                    options={yearOptions}
                    value={year}
                    onChange={setYear}
                    accessibilityLabel={t.profileForm.yearLabel}
                  />
                </Card>
              </>
            )}
          </ScrollView>

          <BottomBar>
            <Button title={buttonTitle} disabled={!canContinue} onPress={goNext} />
          </BottomBar>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ThemedView>
  );
}

function Question({ title, hint }: { title: string; hint: string }) {
  return (
    <View style={styles.question}>
      <ThemedText role="heading" type="heading">
        {title}
      </ThemedText>
      <ThemedText themeColor="textSecondary">{hint}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  column: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    gap: Spacing.one,
  },
  segment: {
    flex: 1,
    height: 6,
    borderRadius: 3,
  },
  count: {
    fontFamily: Fonts.mono,
    fontSize: 12,
  },
  content: {
    padding: Spacing.four,
    gap: Spacing.four,
  },
  // The intro is centered in the free height.
  introContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  hero: {
    alignItems: 'center',
    gap: Spacing.three,
  },
  logo: {
    width: 72,
    height: 72,
    borderRadius: Radius.large,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.two,
  },
  logoText: {
    fontFamily: Fonts.mono,
    fontSize: 26,
    lineHeight: 32,
    fontWeight: 700,
  },
  centered: {
    textAlign: 'center',
  },
  features: {
    gap: Spacing.three,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  featureMark: {
    width: 26,
    height: 26,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    flex: 1,
    fontSize: 15,
  },
  question: {
    gap: Spacing.two,
  },
  choices: {
    paddingVertical: 0,
    gap: 0,
    overflow: 'hidden',
  },
  input: {
    minHeight: 52,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.medium,
    borderWidth: 1,
    fontSize: 17,
  },
});
