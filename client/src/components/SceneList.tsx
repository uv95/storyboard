import { mockScenes } from '@/lib/mock-scenes';
import SceneCard from './SceneCard';

interface SceneListProps {}

const SceneList = ({}: SceneListProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {mockScenes.map((scene) => (
        <SceneCard scene={scene} key={scene.id} />
      ))}
    </div>
  );
};

export default SceneList;
