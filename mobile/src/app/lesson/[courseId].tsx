import { router, Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CodeBlock } from '@/components/lesson/code-block';
import { QuizCard } from '@/components/lesson/quiz-card';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { courses, getCourseProgress } from '@/data/courses';
import { getLesson } from '@/data/lessons';

export default function LessonScreen() {
  const { courseId } = useLocalSearchParams<{ courseId: string }>();
  const insets = useSafeAreaInsets();
  const [isQuizSolved, setIsQuizSolved] = useState(false);

  const course = courses.find((item) => item.id === courseId);
  const lesson = course && getLesson(course.id);

  const contentStyle = [styles.content, { paddingBottom: insets.bottom + Spacing.four }];

  if (!course || !lesson) {
    return (
      <ScrollView contentContainerStyle={contentStyle}>
        <Stack.Screen options={{ title: 'Leçon' }} />
        <ThemedText style={styles.title}>Leçon introuvable</ThemedText>
        <ThemedText themeColor="textSecondary">Cette leçon n’existe pas ou n’est plus disponible.</ThemedText>
        <Button title="Retour" variant="secondary" onPress={() => router.back()} />
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={contentStyle}>
      <Stack.Screen options={{ title: course.title }} />

      <View style={styles.header}>
        <ThemedText type="small" themeColor="textSecondary">
          Leçon {course.lessonsCompleted + 1}/{course.lessonsTotal}
        </ThemedText>
        <ThemedText role="heading" style={styles.title}>
          {course.nextLesson}
        </ThemedText>
        <ProgressBar
          progress={getCourseProgress(course)}
          accessibilityLabel={`Progression ${course.title}`}
        />
      </View>

      {lesson.blocks.map((block, index) =>
        block.type === 'code' ? (
          <CodeBlock key={index} code={block.code} />
        ) : (
          <ThemedText key={index}>{block.text}</ThemedText>
        )
      )}

      <QuizCard quiz={lesson.quiz} onCorrectAnswer={() => setIsQuizSolved(true)} />

      <Button
        title={isQuizSolved ? 'Terminer la leçon' : 'Réponds au quiz pour terminer'}
        disabled={!isQuizSolved}
        onPress={() => router.back()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    gap: Spacing.three,
  },
  header: {
    gap: Spacing.two,
    marginBottom: Spacing.two,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: 700,
  },
});
