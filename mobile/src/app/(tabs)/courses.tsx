import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { CourseCard } from '@/components/home/course-card';
import { CourseRow } from '@/components/home/course-row';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Label } from '@/components/ui/label';
import { SegmentedPicker } from '@/components/ui/segmented-picker';
import { Spacing } from '@/constants/theme';
import { COURSE_GROUPS, getGroupForYear, type CourseGroup } from '@/data/courses';
import { useProfile, type StudyYear } from '@/hooks/use-profile';
import { useCourses } from '@/hooks/use-progress';
import { useI18n } from '@/i18n';

type CourseFilter = 'all' | CourseGroup;

const FILTERS: readonly CourseFilter[] = ['all', ...COURSE_GROUPS];

/** Opens on the student's own year; the prep year starts with the basics. */
function defaultFilter(year: StudyYear | undefined): CourseFilter {
  return (year && getGroupForYear(year)) ?? 'all';
}

/** Every course is open to every student, whatever their year: the filter only helps to find them. */
export default function CoursesScreen() {
  const courses = useCourses();
  const { profile } = useProfile();
  const { t } = useI18n();
  const [filter, setFilter] = useState<CourseFilter>(() => defaultFilter(profile?.year));

  const shown = filter === 'all' ? courses : courses.filter((course) => course.group === filter);
  const started = shown.filter((course) => course.lessonsCompleted > 0);
  const notStarted = shown.filter((course) => course.lessonsCompleted === 0);
  const lessonsTotal = courses.reduce((total, course) => total + course.lessonsTotal, 0);
  const filterOptions = FILTERS.map((value) => ({ value, label: t.courses.filters[value] }));

  return (
    <Screen eyebrow={t.courses.summary(courses.length, lessonsTotal)} title={t.courses.title}>
      <SegmentedPicker
        options={filterOptions}
        value={filter}
        onChange={setFilter}
        accessibilityLabel={t.courses.filterLabel}
        columns={3}
      />

      {shown.length === 0 && <ThemedText themeColor="textSecondary">{t.courses.empty}</ThemedText>}

      {started.length > 0 && (
        <View style={styles.section}>
          <Label>{t.courses.inProgress}</Label>
          {started.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </View>
      )}

      {notStarted.length > 0 && (
        <View>
          <Label style={styles.listLabel}>{t.courses.toDiscover}</Label>
          {notStarted.map((course) => (
            <CourseRow key={course.id} course={course} />
          ))}
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: Spacing.two + 2,
  },
  listLabel: {
    paddingBottom: Spacing.two,
  },
});
