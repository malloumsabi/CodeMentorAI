import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Spacing } from '@/constants/theme';
import { LANGUAGE_NAMES, LANGUAGES, useI18n } from '@/i18n';

/** One button per supported language; the current one is highlighted. */
export function LanguagePicker() {
  const { language, setLanguage, t } = useI18n();

  return (
    <View role="radiogroup" accessibilityLabel={t.courses.language} style={styles.row}>
      {LANGUAGES.map((code) => (
        <Button
          key={code}
          title={LANGUAGE_NAMES[code]}
          variant={code === language ? 'primary' : 'secondary'}
          role="radio"
          accessibilityState={{ checked: code === language }}
          onPress={() => setLanguage(code)}
          style={styles.option}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  option: {
    flex: 1,
    paddingHorizontal: Spacing.two,
  },
});
