'use client';

import { useGetScenes } from '@/features/scene/hooks';
import { Scene } from '@/lib/types';
import SceneCard from './SceneCard';

interface SceneListProps {
  storyboardId: string;
  items: Scene[];
}

const SceneList = ({ storyboardId, items }: SceneListProps) => {
  const { data, error } = useGetScenes(storyboardId);
  const scenes = data?.getStoryboardScenes || items;

  if (error) return <div>{error.message}</div>;

  if (!scenes) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-4 w-full">
      {scenes.length ? (
        scenes.map((scene: Scene) => <SceneCard key={scene.id} scene={scene} />)
      ) : (
        <div>No scenes yet</div>
      )}
    </div>
  );
};

export default SceneList;
