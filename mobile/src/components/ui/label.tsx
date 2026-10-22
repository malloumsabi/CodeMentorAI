import { ThemedText, type ThemedTextProps } from '@/components/themed-text';
import { useI18n } from '@/i18n';

type LabelProps = Omit<ThemedTextProps, 'type' | 'children'> & {
  children: string;
};

/**
 * Small monospaced caps. Uppercased here with the app language's rules rather than with
 * `textTransform`, which can get Turkish wrong (i → İ, not I).
 */
export function Label({ children, themeColor = 'textSecondary', ...rest }: LabelProps) {
  const { language } = useI18n();

  return (
    <ThemedText type="label" themeColor={themeColor} {...rest}>
      {children.toLocaleUpperCase(language)}
    </ThemedText>
  );
}
