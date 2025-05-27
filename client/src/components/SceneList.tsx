import SceneCard from './SceneCard';

interface SceneListProps {}

const SceneList = ({}: SceneListProps) => {
  return (
    <div className="border flex flex-col gap-4">
      <SceneCard />
      <SceneCard />
      <SceneCard />
    </div>
  );
};

export default SceneList;
