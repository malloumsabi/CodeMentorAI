import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { SegmentedPicker } from '@/components/ui/segmented-picker';
import { Radius, Spacing } from '@/constants/theme';
import { MAX_NAME_LENGTH, STUDY_YEARS, type Profile, type StudyYear } from '@/hooks/use-profile';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';

type ProfileFormProps = {
  initialProfile?: Profile | null;
  submitLabel: string;
  onSubmit: (profile: Profile) => void;
};

/** First name and year of study; used by the welcome screen and the edit screen. */
export function ProfileForm({ initialProfile, submitLabel, onSubmit }: ProfileFormProps) {
  const theme = useTheme();
  const { t } = useI18n();
  const [name, setName] = useState(initialProfile?.name ?? '');
  const [year, setYear] = useState<StudyYear | null>(initialProfile?.year ?? null);

  const yearOptions = STUDY_YEARS.map((value) => ({ value, label: t.years[value] }));
  const canSubmit = name.trim().length > 0 && year !== null;

  return (
    <View style={styles.form}>
      <View style={styles.field}>
        <ThemedText type="smallBold">{t.profileForm.nameLabel}</ThemedText>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder={t.profileForm.namePlaceholder}
          placeholderTextColor={theme.textSecondary}
          maxLength={MAX_NAME_LENGTH}
          autoCapitalize="words"
          autoComplete="given-name"
          textContentType="givenName"
          returnKeyType="done"
          accessibilityLabel={t.profileForm.nameLabel}
          style={[
            styles.input,
            { color: theme.text, backgroundColor: theme.backgroundElement, borderColor: theme.border },
          ]}
        />
      </View>

      <View style={styles.field}>
        <ThemedText type="smallBold">{t.profileForm.yearLabel}</ThemedText>
        <SegmentedPicker
          options={yearOptions}
          value={year}
          onChange={setYear}
          accessibilityLabel={t.profileForm.yearLabel}
          columns={2}
        />
      </View>

      <Button
        title={submitLabel}
        disabled={!canSubmit}
        onPress={() => year && onSubmit({ name, year })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: Spacing.four,
  },
  field: {
    gap: Spacing.two,
  },
  input: {
    minHeight: 48,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.medium,
    borderWidth: 1,
    fontSize: 16,
  },
});
