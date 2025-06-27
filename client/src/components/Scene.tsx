import { Scene as SceneType } from '@/lib/types';
import Modal from './Modal';
import { icons } from '@/lib/icons';

interface SceneProps {
  isOpen: boolean;
  onClose: () => void;
  scene: SceneType;
}

const Scene = ({ isOpen, onClose, scene }: SceneProps) => {
  const Icon = icons.find((icon) => icon.value === scene.icon)?.Icon;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`${scene.order}. ${scene.title}`}
      className="relative"
    >
      {Icon && (
        <Icon className="w-16 h-16 absolute top-2 right-2 text-surface z-1" />
      )}
      <div className="w-full flex gap-3 mt-4">{scene.description}</div>
    </Modal>
  );
};

export default Scene;
