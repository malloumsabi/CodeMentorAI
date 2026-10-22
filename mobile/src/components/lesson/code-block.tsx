import * as Clipboard from 'expo-clipboard';
import { useEffect, useState } from 'react';
import { AccessibilityInfo, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Icon } from '@/components/ui/icon';
import { Fonts, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';

const COPIED_FEEDBACK_MS = 2000;

type CodeBlockProps = {
  code: string;
  /** Shown in the header when known, e.g. "python". */
  language?: string;
};

/** Monospace code that scrolls horizontally instead of wrapping, so indentation stays readable. */
export function CodeBlock({ code, language }: CodeBlockProps) {
  const theme = useTheme();
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timer = setTimeout(() => setCopied(false), COPIED_FEEDBACK_MS);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    if (await Clipboard.setStringAsync(code)) {
      setCopied(true);
      AccessibilityInfo.announceForAccessibility(t.common.copied);
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
      <View style={[styles.header, { borderBottomColor: theme.border }]}>
        <ThemedText type="label" themeColor="textSecondary">
          {language ?? ''}
        </ThemedText>
        <Pressable
          role="button"
          accessibilityLabel={copied ? t.common.copied : t.common.copyCode}
          onPress={copy}
          hitSlop={8}
          style={({ pressed }) => [styles.copy, pressed && styles.pressed]}>
          <Icon name={copied ? 'check' : 'copy'} size={16} color={copied ? 'success' : 'textSecondary'} />
        </Pressable>
      </View>
      <ScrollView horizontal contentContainerStyle={styles.content}>
        <ThemedText style={styles.code} selectable>
          {code}
        </ThemedText>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Radius.medium,
    borderWidth: 1,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: Spacing.three,
    paddingRight: Spacing.one,
    borderBottomWidth: 1,
  },
  copy: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.6,
  },
  content: {
    padding: Spacing.three,
  },
  code: {
    fontFamily: Fonts.mono,
    fontSize: 13,
    lineHeight: 21,
  },
});
