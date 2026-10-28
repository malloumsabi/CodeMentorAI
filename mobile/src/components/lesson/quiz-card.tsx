import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { CodeBlock } from '@/components/lesson/code-block';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Label } from '@/components/ui/label';
import { Fonts, Radius, Spacing, type ThemeColor } from '@/constants/theme';
import type { Quiz } from '@/data/lessons';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';

const OPTION_KEYS = ['A', 'B', 'C', 'D', 'E', 'F'];

type QuizCardProps = {
  quiz: Quiz;
  onCorrectAnswer: () => void;
};

/** Multiple choice: a wrong answer can be retried until the right one is found. */
export function QuizCard({ quiz, onCorrectAnswer }: QuizCardProps) {
  const theme = useTheme();
  const { t } = useI18n();
  const [selected, setSelected] = useState<number | null>(null);
  const isCorrect = selected === quiz.answerIndex;

  function choose(index: number) {
    setSelected(index);
    if (index === quiz.answerIndex) {
      onCorrectAnswer();
    }
  }

  /** Only the chosen option is colored: green when right, red when wrong. */
  function getTone(index: number): 'success' | 'error' | null {
    if (selected !== index) {
      return null;
    }
    return isCorrect ? 'success' : 'error';
  }

  return (
    <Card>
      <Label themeColor="primary">{t.quiz.label}</Label>
      <ThemedText style={styles.question}>{quiz.question}</ThemedText>
      {quiz.code && <CodeBlock code={quiz.code} />}

      {quiz.options.map((option, index) => {
        const tone = getTone(index);
        const keyColor: ThemeColor = tone ?? 'textSecondary';
        return (
          <Pressable
            key={option}
            role="button"
            accessibilityState={{ selected: selected === index, disabled: isCorrect }}
            disabled={isCorrect}
            onPress={() => choose(index)}
            style={({ pressed }) => [
              styles.option,
              {
                borderColor: tone ? theme[tone] : theme.border,
                backgroundColor: tone ? theme[`${tone}Soft`] : theme.background,
              },
              pressed && styles.pressed,
            ]}>
            <View style={[styles.key, { borderColor: tone ? theme[tone] : theme.border }]}>
              {tone ? (
                <Icon name={tone === 'success' ? 'check' : 'close'} size={14} color={tone} />
              ) : (
                <ThemedText themeColor={keyColor} style={styles.keyText}>
                  {OPTION_KEYS[index] ?? index + 1}
                </ThemedText>
              )}
            </View>
            <ThemedText style={styles.optionText}>{option}</ThemedText>
          </Pressable>
        );
      })}

      {selected !== null && (
        <View
          style={[
            styles.feedback,
            {
              backgroundColor: theme[isCorrect ? 'successSoft' : 'errorSoft'],
              borderColor: theme[isCorrect ? 'success' : 'error'],
            },
          ]}>
          <ThemedText
            accessibilityLiveRegion="polite"
            type="small"
            themeColor={isCorrect ? 'success' : 'error'}
            style={styles.feedbackText}>
            {isCorrect ? t.quiz.correct(quiz.explanation) : t.quiz.wrong}
          </ThemedText>
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  question: {
    fontWeight: 600,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    minHeight: 52,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Radius.medium,
    borderWidth: 1.5,
  },
  pressed: {
    opacity: 0.8,
  },
  key: {
    width: 26,
    height: 26,
    borderRadius: Radius.small - 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    fontFamily: Fonts.mono,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 600,
  },
  optionText: {
    flex: 1,
  },
  feedback: {
    padding: Spacing.three,
    borderRadius: Radius.medium,
    borderLeftWidth: 3,
  },
  feedbackText: {
    fontWeight: 600,
    lineHeight: 21,
  },
});
