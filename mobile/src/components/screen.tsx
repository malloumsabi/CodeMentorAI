import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, Fonts, MaxContentWidth, Spacing } from '@/constants/theme';

type ScreenProps = {
  /** Small monospaced line above the title, e.g. "4 parcours · 12 leçons". */
  eyebrow?: string;
  title?: string;
  /** Shown at the right of the title, e.g. the profile avatar. */
  accessory?: ReactNode;
  children: ReactNode;
};

/** Shared layout for tab screens: safe area, scrolling, max width and room for the tab bar. */
export function Screen({ eyebrow, title, accessory, children }: ScreenProps) {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          {(eyebrow || title) && (
            <View style={styles.header}>
              <View style={styles.headerText}>
                {eyebrow && (
                  <ThemedText type="small" themeColor="textSecondary" style={styles.eyebrow}>
                    {eyebrow}
                  </ThemedText>
                )}
                {title && (
                  <ThemedText type="heading" role="heading">
                    {title}
                  </ThemedText>
                )}
              </View>
              {accessory}
            </View>
          )}
          {children}
        </ScrollView>
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
    paddingHorizontal: Spacing.three + Spacing.one,
    paddingTop: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.four,
    gap: Spacing.four,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  headerText: {
    flex: 1,
    gap: Spacing.one,
  },
  eyebrow: {
    fontFamily: Fonts.mono,
    fontSize: 12,
  },
});
