import { icons } from '@/lib/icons';
import { Scene } from '@/lib/types';
import { Pencil, Trash2 } from 'lucide-react';

interface SceneCardProps {
  scene: Scene;
}

const SceneCard = ({ scene }: SceneCardProps) => {
  const Icon = icons.find((icon) => icon.value === scene.icon)?.Icon;
  return (
    <div className="h-24 rounded-lg flex items-center gap-4 bg-white shadow-sm">
      {Icon && <Icon className="w-8 h-8 ml-4 flex-shrink-0" />}
      <div className="flex flex-col justify-between py-4">
        <p className="font-bold">{scene.name}</p>
        <p className="text-sm text-gray-600 line-clamp-2">
          {scene.description}
        </p>
      </div>
      <div className="ml-auto p-4 flex gap-2 self-start">
        <Pencil className="w-4 h-4 cursor-pointer" />
        <Trash2 className="w-4 h-4 text-[#e07a5f] cursor-pointer" />
      </div>
    </div>
  );
};

export default SceneCard;
