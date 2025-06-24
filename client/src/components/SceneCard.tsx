import { icons } from '@/lib/icons';
import { Entity, Scene } from '@/lib/types';
import Card from './Card';
import { useState } from 'react';
import DeleteModal from './DeleteModal';
import SceneForm from './SceneForm';

interface SceneCardProps {
  scene: Scene;
}

const SceneCard = ({ scene }: SceneCardProps) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const Icon = icons.find((icon) => icon.value === scene.icon)?.Icon;
  return (
    <>
      <Card
        handleEdit={() => setIsEdit(true)}
        handleDelete={() => setIsDelete(true)}
      >
        <>
          {Icon && <Icon className="w-8 h-8 ml-4 flex-shrink-0" />}
          <div className="flex flex-col justify-between py-4">
            <p className="font-bold">{scene.title}</p>
            <p className="text-sm line-clamp-2">{scene.description}</p>
          </div>
        </>
      </Card>

      {isDelete && (
        <DeleteModal
          entity={Entity.SCENE}
          onClose={() => setIsDelete(false)}
          isOpen={isDelete}
          id={scene.id!}
        />
      )}

      {isEdit && (
        <SceneForm
          formTitle="Edit Scene"
          isOpen={isEdit}
          initialData={scene}
          onClose={() => setIsEdit(false)}
        />
      )}
    </>
  );
};

export default SceneCard;
