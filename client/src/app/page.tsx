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
    <main className="w-full h-full min-h-[480px] pb-8 flex-grow flex flex-col bg-inherit">
      <div className="w-full px-8 py-3 flex align-center justify-end gap-4 mb-4">
        <AddButton entity={Entity.STORYBOARD} />
      </div>
      <div className="w-full h-full px-8 flex relative bg-inherit">
        <StoryboardList items={data.getStoryboards} />
      </div>
    </main>
  );
}
