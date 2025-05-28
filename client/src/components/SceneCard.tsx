import { icons } from '@/lib/icons';
import { Scene } from '@/lib/types';
// import { Icon, LucideIcon } from 'lucide-react';

interface SceneCardProps {
  scene: Scene;
}

const SceneCard = ({ scene }: SceneCardProps) => {
  const Icon = icons.find((icon) => icon.value === scene.icon)?.Icon;
  return (
    <div className="border p-2 flex flex-col gap-1">
      <div className="flex gap-2">
        {Icon && <Icon />}
        <p>{scene.name}</p>
      </div>
      <p>{scene.description}</p>
    </div>
  );
};

export default SceneCard;
