import { router, useLocalSearchParams } from 'expo-router';

import { MentorChat } from '@/components/mentor/mentor-chat';
import { Spacing } from '@/constants/theme';
import { useCourses } from '@/hooks/use-progress';
import { useI18n } from '@/i18n';

/** Mentor chat opened as a modal over a lesson; closing it returns to the lesson as it was left. */
export default function LessonMentorScreen() {
  const { courseId, lessonId } = useLocalSearchParams<{ courseId: string; lessonId: string }>();
  const course = useCourses().find((item) => item.id === courseId);
  const lesson = course?.lessons.find((item) => item.id === lessonId);
  const { t } = useI18n();

  return (
    <MentorChat
      lesson={course && lesson ? { courseId: course.id, lessonId: lesson.id } : undefined}
      subtitle={course && lesson ? t.mentor.about(lesson.title, course.title) : undefined}
      onClose={() => router.back()}
      bottomPadding={Spacing.two}
      safeAreaEdges={['top', 'bottom']}
    />
  );
}
