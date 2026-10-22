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
import { useCourses, useProgress } from '@/hooks/use-progress';

export default function LessonScreen() {
  const { courseId, lessonId } = useLocalSearchParams<{ courseId: string; lessonId: string }>();
  const insets = useSafeAreaInsets();
  const { completeLesson } = useProgress();
  const [isQuizSolved, setIsQuizSolved] = useState(false);

  const course = useCourses().find((item) => item.id === courseId);
  const lessonIndex = course ? course.lessons.findIndex((item) => item.id === lessonId) : -1;
  const lesson = course?.lessons[lessonIndex];

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

  if (lessonIndex > course.lessonsCompleted) {
    return (
      <ScrollView contentContainerStyle={contentStyle}>
        <Stack.Screen options={{ title: course.title }} />
        <ThemedText style={styles.title}>Leçon verrouillée 🔒</ThemedText>
        <ThemedText themeColor="textSecondary">
          Termine d’abord les leçons précédentes de « {course.title} ».
        </ThemedText>
        <Button title="Retour" variant="secondary" onPress={() => router.back()} />
      </ScrollView>
    );
  }

  const isReview = lessonIndex < course.lessonsCompleted;
  const followingLesson = course.lessons[lessonIndex + 1];

  const finishLesson = () => {
    completeLesson(course.id, lesson.id);
    if (followingLesson) {
      // Replace instead of push, so "back" returns to the course and not to the finished lesson.
      router.replace({
        pathname: '/lesson/[courseId]/[lessonId]',
        params: { courseId: course.id, lessonId: followingLesson.id },
      });
    } else {
      router.back();
    }
  };

  let finishTitle = 'Réponds au quiz pour terminer';
  if (isQuizSolved) {
    finishTitle = followingLesson ? 'Leçon suivante' : 'Terminer le parcours';
  }

  return (
    <ScrollView contentContainerStyle={contentStyle}>
      <Stack.Screen options={{ title: course.title }} />

      <View style={styles.header}>
        <ThemedText type="small" themeColor={isReview ? 'success' : 'textSecondary'}>
          Leçon {lessonIndex + 1}/{course.lessonsTotal}
          {isReview ? ' · Déjà terminée' : ''}
        </ThemedText>
        <ThemedText role="heading" style={styles.title}>
          {lesson.title}
        </ThemedText>
        <ProgressBar
          progress={lessonIndex / course.lessonsTotal}
          accessibilityLabel={`Position dans le parcours ${course.title}`}
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

      {isReview ? (
        <Button title="Retour" variant="secondary" onPress={() => router.back()} />
      ) : (
        <Button title={finishTitle} disabled={!isQuizSolved} onPress={finishLesson} />
      )}
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
