'use client';

import { Storyboard } from '@/lib/types';
import Link from 'next/link';
import StoryboardCard from './StoryboardCard';
import { useGetStoryboards } from '@/features/storyboard/hooks';

interface StoryboardListProps {
  items: Storyboard[];
}

const StoryboardList = ({ items }: StoryboardListProps) => {
  const { data, error } = useGetStoryboards();
  const storyboards = data?.getStoryboards || items;

  if (error) return <div>{error.message}</div>;

  if (!storyboards) return <div>Loading...</div>;

  const storyboardsInOrder = [...storyboards].sort(
    (a: Storyboard, b: Storyboard) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  return (
    <div className="flex gap-4 w-full flex-wrap">
      {storyboardsInOrder.length ? (
        storyboardsInOrder.map((storyboard: Storyboard) => (
          <Link href={`/storyboard/${storyboard.id}`} key={storyboard.id}>
            <StoryboardCard storyboard={storyboard} />
          </Link>
        ))
      ) : (
        <div>No storyboards yet</div>
      )}
    </div>
  );
};

export default StoryboardList;
