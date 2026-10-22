import { SegmentedPicker } from '@/components/ui/segmented-picker';
import { LANGUAGE_NAMES, LANGUAGES, useI18n } from '@/i18n';

const options = LANGUAGES.map((code) => ({ value: code, label: LANGUAGE_NAMES[code] }));

/** One button per supported language; the current one is highlighted. */
export function LanguagePicker() {
  const { language, setLanguage, t } = useI18n();

  return (
    <SegmentedPicker
      options={options}
      value={language}
      onChange={setLanguage}
      accessibilityLabel={t.profile.language}
    />
  );
}
