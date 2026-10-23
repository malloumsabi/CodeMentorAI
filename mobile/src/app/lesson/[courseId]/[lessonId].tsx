import { router, Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CodeBlock } from '@/components/lesson/code-block';
import { PracticeQuiz } from '@/components/lesson/practice-quiz';
import { QuizCard } from '@/components/lesson/quiz-card';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useCourses, useProgress } from '@/hooks/use-progress';
import { useI18n } from '@/i18n';

export default function LessonScreen() {
  const { courseId, lessonId } = useLocalSearchParams<{ courseId: string; lessonId: string }>();
  const insets = useSafeAreaInsets();
  const { completeLesson } = useProgress();
  const [isQuizSolved, setIsQuizSolved] = useState(false);
  const { t } = useI18n();

  const course = useCourses().find((item) => item.id === courseId);
  const lessonIndex = course ? course.lessons.findIndex((item) => item.id === lessonId) : -1;
  const lesson = course?.lessons[lessonIndex];

  const contentStyle = [styles.content, { paddingBottom: insets.bottom + Spacing.four }];

  if (!course || !lesson) {
    return (
      <ScrollView contentContainerStyle={contentStyle}>
        <Stack.Screen options={{ title: t.lesson.fallbackTitle }} />
        <ThemedText type="heading">{t.lesson.notFound}</ThemedText>
        <ThemedText themeColor="textSecondary">{t.lesson.notFoundHint}</ThemedText>
        <Button title={t.common.back} variant="secondary" onPress={() => router.back()} />
      </ScrollView>
    );
  }

  if (lessonIndex > course.lessonsCompleted) {
    return (
      <ScrollView contentContainerStyle={contentStyle}>
        <Stack.Screen options={{ title: course.title }} />
        <ThemedText type="heading">{t.lesson.locked}</ThemedText>
        <ThemedText themeColor="textSecondary">{t.lesson.lockedHint(course.title)}</ThemedText>
        <Button title={t.common.back} variant="secondary" onPress={() => router.back()} />
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

  let finishTitle = t.lesson.answerQuizToFinish;
  if (isQuizSolved) {
    finishTitle = followingLesson ? t.lesson.nextLesson : t.lesson.finishCourse;
  }

  return (
    <ScrollView contentContainerStyle={contentStyle}>
      <Stack.Screen options={{ title: course.title }} />

      <View style={styles.header}>
        <ThemedText type="small" themeColor={isReview ? 'success' : 'textSecondary'}>
          {t.lesson.counter(lessonIndex + 1, course.lessonsTotal)}
          {isReview ? t.lesson.alreadyDone : ''}
        </ThemedText>
        <ThemedText role="heading" type="heading">
          {lesson.title}
        </ThemedText>
        <ProgressBar
          progress={lessonIndex / course.lessonsTotal}
          accessibilityLabel={t.lesson.positionOf(course.title)}
        />
      </View>

      {lesson.blocks.map((block, index) =>
        block.type === 'code' ? (
          <CodeBlock key={index} code={block.code} />
        ) : (
          <ThemedText key={index}>{block.text}</ThemedText>
        )
      )}

      <Button
        title={t.lesson.askMentor}
        variant="secondary"
        onPress={() =>
          router.push({
            pathname: '/lesson/[courseId]/[lessonId]/mentor',
            params: { courseId: course.id, lessonId: lesson.id },
          })
        }
      />

      <QuizCard quiz={lesson.quiz} onCorrectAnswer={() => setIsQuizSolved(true)} />

      {isReview ? (
        <Button title={t.common.back} variant="secondary" onPress={() => router.back()} />
      ) : (
        <Button title={finishTitle} disabled={!isQuizSolved} onPress={finishLesson} />
      )}

      <PracticeQuiz key={lesson.id} lesson={{ courseId: course.id, lessonId: lesson.id }} />
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
});
