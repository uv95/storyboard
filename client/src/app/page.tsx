import AddStoryboardButton from '@/components/AddStoryboardButton';
import StoryboardList from '@/components/StoryboardList';
import { GET_STORYBOARDS } from '@/features/storyboard/graphql';
import { query } from '@/lib/apollo-client';

export default async function Home() {
  const { data } = await query({
    query: GET_STORYBOARDS,
  });

  return (
    <main className="w-full h-full min-h-[480px] px-8 pb-8 flex-grow flex flex-col bg-inherit">
      <div className="w-full flex align-center justify-end gap-4 mb-4">
        <AddStoryboardButton />
      </div>
      <div className="w-full h-full flex relative bg-inherit">
        <StoryboardList items={data.getStoryboards} />
      </div>
    </main>
  );
}
