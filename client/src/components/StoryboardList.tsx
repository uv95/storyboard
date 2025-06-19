import { mockStoryboards } from '@/lib/mock-scenes';
import Card from './Card';
import Link from 'next/link';

interface StoryboardListProps {}

const StoryboardList = ({}: StoryboardListProps) => {
  return (
    <div className="flex gap-4 w-full flex-wrap">
      {mockStoryboards.map((storyboard) => (
        <Link href={`/storyboard/${storyboard.id}`} key={storyboard.id}>
          <Card className="min-w-96 pl-4 cursor-pointer">
            {storyboard.title}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default StoryboardList;
