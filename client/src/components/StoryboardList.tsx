import { mockStoryboards } from '@/lib/mock-scenes';
import Link from 'next/link';
import StoryboardCard from './StoryboardCard';

interface StoryboardListProps {}

const StoryboardList = ({}: StoryboardListProps) => {
  return (
    <div className="flex gap-4 w-full flex-wrap">
      {mockStoryboards.map((storyboard) => (
        <Link href={`/storyboard/${storyboard.id}`} key={storyboard.id}>
          <StoryboardCard storyboard={storyboard} />
        </Link>
      ))}
    </div>
  );
};

export default StoryboardList;
