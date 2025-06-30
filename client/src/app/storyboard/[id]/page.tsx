import AddButton from '@/components/AddButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import ErrorMessage from '@/components/ErrorMessage';
import SceneListDnD from '@/components/SceneListDnD';
import { GET_STORYBOARD_SCENES } from '@/features/scene/graphql';
import { GET_STORYBOARD_TITLE } from '@/features/storyboard/graphql';
import { query } from '@/lib/apollo-client';
import { Entity } from '@/lib/types';
import { ApolloError } from '@apollo/client';

export default async function Storyboard({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const { data } = await query({
      query: GET_STORYBOARD_SCENES,
      variables: { storyboardId: id },
    });
    const { data: storyboardTitle } = await query({
      query: GET_STORYBOARD_TITLE,
      variables: { id },
    });

    return (
      <main className="w-full h-full min-h-[480px] pb-8 flex-grow flex flex-col bg-inherit">
        <div className="w-full px-4 sm:px-8 py-2 sm:py-4 flex flex-col 2xs:flex-row items-center justify-end gap-4 mb-2 xs:mb-4">
          <Breadcrumbs storyboardTitle={storyboardTitle.getStoryboard.title} />
          <AddButton entity={Entity.SCENE} />
        </div>
        <div className="w-full px-4 sm:px-8 flex relative bg-inherit">
          <SceneListDnD items={data.getStoryboardScenes} storyboardId={id} />
        </div>
      </main>
    );
  } catch (error) {
    if (error instanceof ApolloError) {
      return <ErrorMessage message={error.message} />;
    }
  }
}
