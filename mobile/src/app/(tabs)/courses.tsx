import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { CourseCard } from '@/components/home/course-card';
import { CourseList } from '@/components/home/course-list';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Label } from '@/components/ui/label';
import { SegmentedPicker } from '@/components/ui/segmented-picker';
import { Radius, Spacing } from '@/constants/theme';
import { COURSE_GROUPS, getGroupForYear, searchCourses, type CourseGroup } from '@/data/courses';
import { useProfile, type StudyYear } from '@/hooks/use-profile';
import { useCourses } from '@/hooks/use-progress';
import { useTheme } from '@/hooks/use-theme';
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
  const theme = useTheme();
  const [filter, setFilter] = useState<CourseFilter>(() => defaultFilter(profile?.year));
  const [query, setQuery] = useState('');

  const isSearching = query.trim() !== '';
  const lessonsTotal = courses.reduce((total, course) => total + course.lessonsTotal, 0);
  const filterOptions = FILTERS.map((value) => ({ value, label: t.courses.filters[value] }));

  const searchField = (
    <TextInput
      value={query}
      onChangeText={setQuery}
      placeholder={t.courses.searchPlaceholder}
      placeholderTextColor={theme.textSecondary}
      accessibilityLabel={t.courses.searchLabel}
      autoCorrect={false}
      autoCapitalize="none"
      returnKeyType="search"
      clearButtonMode="while-editing"
      style={[styles.search, { color: theme.text, backgroundColor: theme.backgroundElement, borderColor: theme.border }]}
    />
  );

  // A search looks through every course, whatever the year filter.
  if (isSearching) {
    const results = searchCourses(courses, query);
    return (
      <Screen eyebrow={t.courses.summary(courses.length, lessonsTotal)} title={t.courses.title}>
        {searchField}
        {results.length === 0 ? (
          <ThemedText themeColor="textSecondary">{t.courses.noResults(query.trim())}</ThemedText>
        ) : (
          <View>
            <Label style={styles.listLabel}>{t.courses.results(results.length)}</Label>
            <CourseList courses={results} showProgress />
          </View>
        )}
      </Screen>
    );
  }

  const shown = filter === 'all' ? courses : courses.filter((course) => course.group === filter);
  const started = shown.filter((course) => course.lessonsCompleted > 0);
  const notStarted = shown.filter((course) => course.lessonsCompleted === 0);

  return (
    <Screen eyebrow={t.courses.summary(courses.length, lessonsTotal)} title={t.courses.title}>
      {searchField}

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
          <CourseList courses={notStarted} />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  search: {
    minHeight: 48,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.medium,
    borderWidth: 1,
    fontSize: 16,
  },
  section: {
    gap: Spacing.two + 2,
  },
  listLabel: {
    paddingBottom: Spacing.two,
  },
});
