import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { CodeBlock } from '@/components/lesson/code-block';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Radius, Spacing, type ThemeColor } from '@/constants/theme';
import type { Quiz } from '@/data/lessons';
import { useTheme } from '@/hooks/use-theme';

type QuizCardProps = {
  quiz: Quiz;
  onCorrectAnswer: () => void;
};

export function QuizCard({ quiz, onCorrectAnswer }: QuizCardProps) {
  const theme = useTheme();
  const [selected, setSelected] = useState<number | null>(null);
  const isCorrect = selected === quiz.answerIndex;

  function choose(index: number) {
    setSelected(index);
    if (index === quiz.answerIndex) {
      onCorrectAnswer();
    }
  }

  function getBorderColor(index: number): ThemeColor {
    if (selected !== index) {
      return 'border';
    }
    return isCorrect ? 'success' : 'error';
  }

  return (
    <Card elevated>
      <ThemedText type="smallBold" themeColor="primary">
        À TOI DE JOUER
      </ThemedText>
      <ThemedText style={styles.question}>{quiz.question}</ThemedText>
      {quiz.code && <CodeBlock code={quiz.code} />}

      {quiz.options.map((option, index) => (
        <Pressable
          key={option}
          role="button"
          accessibilityState={{ selected: selected === index, disabled: isCorrect }}
          disabled={isCorrect}
          onPress={() => choose(index)}
          style={({ pressed }) => [
            styles.option,
            { borderColor: theme[getBorderColor(index)], backgroundColor: theme.background },
            pressed && styles.pressed,
          ]}>
          <ThemedText>{option}</ThemedText>
        </Pressable>
      ))}

      {selected !== null && (
        <ThemedText
          accessibilityLiveRegion="polite"
          type="small"
          themeColor={isCorrect ? 'success' : 'error'}
          style={styles.feedback}>
          {isCorrect ? `Bonne réponse ! ${quiz.explanation}` : 'Pas tout à fait. Réessaie !'}
        </ThemedText>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  question: {
    fontWeight: 600,
  },
  option: {
    minHeight: 48,
    justifyContent: 'center',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Radius.medium,
    borderWidth: 2,
  },
  pressed: {
    opacity: 0.8,
  },
  feedback: {
    fontWeight: 600,
  },
});
