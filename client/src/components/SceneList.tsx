import { mockScenes } from '@/lib/mock-scenes';
import SceneCard from './SceneCard';

interface SceneListProps {}

const SceneList = ({}: SceneListProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {mockScenes.length ? (
        mockScenes.map((scene) => <SceneCard key={scene.id} scene={scene} />)
      ) : (
        <div>No scenes yet</div>
      )}
    </div>
  );
};

export default SceneList;
