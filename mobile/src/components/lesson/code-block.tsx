import * as Clipboard from 'expo-clipboard';
import { useEffect, useState } from 'react';
import { AccessibilityInfo, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Icon } from '@/components/ui/icon';
import { Label } from '@/components/ui/label';
import { Fonts, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';

const COPIED_FEEDBACK_MS = 2000;

type CodeBlockProps = {
  code: string;
  /** Shown in the header when known, e.g. "python". */
  language?: string;
};

/**
 * Monospace code that scrolls horizontally instead of wrapping, so indentation stays readable.
 * The line numbers sit outside the scroll view, so they stay visible while scrolling.
 */
export function CodeBlock({ code, language }: CodeBlockProps) {
  const theme = useTheme();
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);
  // A trailing newline would add an empty numbered line.
  const shownCode = code.replace(/\n$/, '');
  const lineCount = shownCode.split('\n').length;

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
        <Label>{language || t.common.code}</Label>
        <Pressable
          role="button"
          accessibilityLabel={copied ? t.common.copied : t.common.copyCode}
          onPress={copy}
          hitSlop={8}
          style={({ pressed }) => [styles.copy, pressed && styles.pressed]}>
          <Icon name={copied ? 'check' : 'copy'} size={16} color={copied ? 'success' : 'textSecondary'} />
        </Pressable>
      </View>
      <View style={styles.body}>
        <View
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          style={[styles.gutter, { borderRightColor: theme.border }]}>
          <ThemedText themeColor="textSecondary" style={[styles.code, styles.lineNumbers]}>
            {Array.from({ length: lineCount }, (_, index) => index + 1).join('\n')}
          </ThemedText>
        </View>
        <ScrollView horizontal contentContainerStyle={styles.content}>
          <ThemedText style={styles.code} selectable>
            {shownCode}
          </ThemedText>
        </ScrollView>
      </View>
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
  body: {
    flexDirection: 'row',
  },
  gutter: {
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.two + 2,
    borderRightWidth: 1,
  },
  lineNumbers: {
    textAlign: 'right',
    opacity: 0.7,
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
