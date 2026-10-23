import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { CodeBlock } from '@/components/lesson/code-block';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Spacing } from '@/constants/theme';
import { useI18n } from '@/i18n';

type ExerciseCardProps = {
  question: string;
  code?: string;
  solution: string;
};

/** An exam-style exercise: the student tries it first, then reveals the step-by-step solution. */
export function ExerciseCard({ question, code, solution }: ExerciseCardProps) {
  const { t } = useI18n();
  const [isSolutionShown, setIsSolutionShown] = useState(false);

  return (
    <Card>
      <Label themeColor="primary">{t.exercise.label}</Label>
      <ThemedText style={styles.question}>{question}</ThemedText>
      {code && <CodeBlock code={code} />}

      <Button
        title={isSolutionShown ? t.exercise.hideSolution : t.exercise.showSolution}
        variant="secondary"
        accessibilityState={{ expanded: isSolutionShown }}
        onPress={() => setIsSolutionShown((shown) => !shown)}
      />

      {isSolutionShown && (
        <View style={styles.solution}>
          <ThemedText type="smallBold" themeColor="success">
            {t.exercise.solution}
          </ThemedText>
          <ThemedText>{solution}</ThemedText>
        </View>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  question: {
    fontWeight: 600,
  },
  solution: {
    gap: Spacing.one,
  },
});
