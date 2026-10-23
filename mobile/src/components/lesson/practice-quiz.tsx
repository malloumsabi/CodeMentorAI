import { useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { QuizCard } from '@/components/lesson/quiz-card';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Spacing } from '@/constants/theme';
import type { Quiz } from '@/data/lessons';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';
import type { LessonRef } from '@/utils/mentor-api';
import { generatePracticeQuiz } from '@/utils/quiz-api';

/** Extra questions on a lesson, written by the mentor on demand. Answering them doesn't change the progress. */
export function PracticeQuiz({ lesson }: { lesson: LessonRef }) {
  const theme = useTheme();
  const { language, t } = useI18n();
  const [questions, setQuestions] = useState<Quiz[]>([]);
  /** Part of the cards' keys, so each new set starts unanswered. */
  const [round, setRound] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    setIsLoading(true);
    setError(null);
    try {
      setQuestions(await generatePracticeQuiz(lesson, language));
      setRound((value) => value + 1);
    } catch (e) {
      setError(e instanceof Error ? e.message : t.mentorErrors.generic);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.section}>
      <ThemedText role="heading" type="section">
        {t.practice.title}
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {t.practice.intro}
      </ThemedText>

      {questions.map((quiz, index) => (
        <QuizCard key={`${round}-${index}`} quiz={quiz} onCorrectAnswer={() => {}} />
      ))}

      {isLoading && (
        <View style={styles.loading} accessibilityLiveRegion="polite">
          <ActivityIndicator color={theme.primary} />
          <ThemedText type="small" themeColor="textSecondary">
            {t.practice.loading}
          </ThemedText>
        </View>
      )}

      {error && (
        <ThemedText type="small" themeColor="error" accessibilityLiveRegion="polite">
          {error}
        </ThemedText>
      )}

      <Button
        title={questions.length > 0 ? t.practice.regenerate : t.practice.generate}
        variant="secondary"
        disabled={isLoading}
        onPress={generate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: Spacing.three,
    marginTop: Spacing.three,
  },
  loading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
});
