'use client';

import { icons } from '@/lib/icons';
import { Entity, Scene as SceneType } from '@/lib/types';
import Card from './Card';
import { CSSProperties, useState } from 'react';
import DeleteModal from './DeleteModal';
import SceneForm from './SceneForm';
import Scene from './Scene';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface SceneCardProps {
  scene: SceneType;
}

const SceneCard = ({ scene }: SceneCardProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: scene.id! });

  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenScene, setIsOpenScene] = useState(false);

  const style: CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition,
    outline: isDragging ? '2px solid var(--foreground)' : 'none',
    zIndex: isDragging ? '999' : '0',
  };

  const Icon = icons.find((icon) => icon.value === scene.icon)?.Icon;
  return (
    <>
      <Card
        ref={setNodeRef}
        handleEdit={() => setIsEdit(true)}
        handleDelete={() => setIsDelete(true)}
        onClick={() => setIsOpenScene(true)}
        style={style}
        {...listeners}
        {...attributes}
      >
        <>
          {Icon && (
            <Icon className="w-6 sm:w-8 h-6 sm:h-8 ml-4 flex-shrink-0" />
          )}
          <div className="flex flex-col py-4 min-w-10">
            <p
              className={`font-bold line-clamp-${
                scene.description ? '1' : '2'
              }`}
            >
              {scene.order}. {scene.title}
            </p>
            <p className="text-sm leading-tight line-clamp-2">
              {scene.description}
            </p>
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

      {isOpenScene && (
        <Scene
          scene={scene}
          isOpen={isOpenScene}
          onClose={() => setIsOpenScene(false)}
        />
      )}
    </>
  );
};

export default SceneCard;
