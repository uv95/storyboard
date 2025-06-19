import { icons } from '@/lib/icons';
import { Scene } from '@/lib/types';
import Card from './Card';

interface SceneCardProps {
  scene: Scene;
}

const SceneCard = ({ scene }: SceneCardProps) => {
  const Icon = icons.find((icon) => icon.value === scene.icon)?.Icon;
  return (
    <Card>
      <>
        {Icon && <Icon className="w-8 h-8 ml-4 flex-shrink-0" />}
        <div className="flex flex-col justify-between py-4">
          <p className="font-bold">{scene.name}</p>
          <p className="text-sm text-gray-600 line-clamp-2">
            {scene.description}
          </p>
        </div>
      </>
    </Card>
  );
};

export default SceneCard;
