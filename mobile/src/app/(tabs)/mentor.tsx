import { MentorChat } from '@/components/mentor/mentor-chat';
import { BottomTabInset, Spacing } from '@/constants/theme';

export default function MentorScreen() {
  return <MentorChat bottomPadding={BottomTabInset + Spacing.two} safeAreaEdges={['top']} />;
}
