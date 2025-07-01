import AddButton from '@/components/AddButton';
import StoryboardList from '@/components/StoryboardList';
import { GET_STORYBOARDS } from '@/features/storyboard/graphql';
import { query } from '@/lib/apollo-client';
import { Entity } from '@/lib/types';

export default async function Home() {
  const { data } = await query({
    query: GET_STORYBOARDS,
  });

  return (
    <>
      <div className="w-full px-4 sm:px-8 py-2 sm:py-4 flex items-center justify-end gap-4 mb-2 xs:mb-4">
        <AddButton entity={Entity.STORYBOARD} />
      </div>
      <div className="w-full h-full px-4 sm:px-8 flex relative bg-inherit">
        <StoryboardList items={data.getStoryboards} />
      </div>
    </>
  );
}
