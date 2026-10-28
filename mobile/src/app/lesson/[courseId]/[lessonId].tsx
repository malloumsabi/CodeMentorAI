import { router, Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CourseBadge } from '@/components/home/course-badge';
import { CodeBlock } from '@/components/lesson/code-block';
import { ExerciseCard } from '@/components/lesson/exercise-card';
import { LessonNavigation } from '@/components/lesson/lesson-navigation';
import { PracticeQuiz } from '@/components/lesson/practice-quiz';
import { QuizCard } from '@/components/lesson/quiz-card';
import { ThemedText } from '@/components/themed-text';
import { BottomBar } from '@/components/ui/bottom-bar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { WeekTrack } from '@/components/ui/week-track';
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

  if (!course || !lesson) {
    return (
      <ScrollView contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + Spacing.four }]}>
        <Stack.Screen options={{ title: t.lesson.fallbackTitle }} />
        <ThemedText type="heading">{t.lesson.notFound}</ThemedText>
        <ThemedText themeColor="textSecondary">{t.lesson.notFoundHint}</ThemedText>
        <Button title={t.common.back} variant="secondary" onPress={() => router.back()} />
      </ScrollView>
    );
  }

  // Every lesson is open: a completed one is shown as a review.
  const isReview = course.completedLessonIds.includes(lesson.id);
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
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Stack.Screen options={{ title: course.title }} />

        <View style={styles.header}>
          <View style={styles.eyebrow}>
            <CourseBadge label={course.badge} />
            <Label themeColor={isReview ? 'success' : 'textSecondary'} style={styles.eyebrowText}>
              {(lesson.week
                ? t.lesson.weekCounter(lesson.week, course.lessonsTotal)
                : t.lesson.counter(lessonIndex + 1, course.lessonsTotal)) + (isReview ? t.lesson.alreadyDone : '')}
            </Label>
          </View>
          <ThemedText role="heading" type="heading">
            {lesson.title}
          </ThemedText>
          <WeekTrack course={course} currentLessonId={lesson.id} accessibilityLabel={t.lesson.positionOf(course.title)} />
        </View>

        {lesson.blocks.map((block, index) => {
          switch (block.type) {
            case 'code':
              return <CodeBlock key={index} code={block.code} />;
            case 'heading':
              return (
                <ThemedText key={index} role="heading" type="section" style={styles.blockHeading}>
                  {block.text}
                </ThemedText>
              );
            case 'exercise':
              return <ExerciseCard key={index} question={block.question} code={block.code} solution={block.solution} />;
            default:
              return (
                <ThemedText key={index} style={styles.paragraph}>
                  {block.text}
                </ThemedText>
              );
          }
        })}

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

        <LessonNavigation course={course} lessonIndex={lessonIndex} />

        <PracticeQuiz key={lesson.id} lesson={{ courseId: course.id, lessonId: lesson.id }} />
      </ScrollView>

      <BottomBar>
        {isReview ? (
          <Button title={t.common.back} variant="secondary" onPress={() => router.back()} />
        ) : (
          <Button title={finishTitle} disabled={!isQuizSolved} onPress={finishLesson} />
        )}
      </BottomBar>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.four,
    gap: Spacing.three,
  },
  header: {
    gap: Spacing.three,
    marginBottom: Spacing.two,
  },
  eyebrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two + 2,
  },
  eyebrowText: {
    flex: 1,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 26,
  },
  blockHeading: {
    marginTop: Spacing.two,
  },
});
