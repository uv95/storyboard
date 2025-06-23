import AddButton from '@/components/AddButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import SceneList from '@/components/SceneList';
import { GET_STORYBOARD_SCENES } from '@/features/scene/graphql';
import { query } from '@/lib/apollo-client';
import { Entity } from '@/lib/types';

export default async function Storyboard({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data } = await query({
    query: GET_STORYBOARD_SCENES,
    variables: { storyboardId: id },
  });

  return (
    <main className="w-full h-full min-h-[480px] px-8 pb-8 flex-grow flex flex-col bg-inherit">
      <div className="w-full flex align-center justify-end gap-4 mb-4">
        <Breadcrumbs storyboardTitle={'My storyboard'} />
        <AddButton entity={Entity.SCENE} />
      </div>
      <div className="w-full h-full flex relative bg-inherit">
        <SceneList items={data.getStoryboardScenes} storyboardId={id}/>
      </div>
    </main>
  );
}
