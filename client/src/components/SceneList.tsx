'use client';

import { useGetScenes, useReorderScenes } from '@/features/scene/hooks';
import { Scene } from '@/lib/types';
import { useDndMonitor, useDroppable } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { useEffect, useMemo, useState } from 'react';
import SceneCard from './SceneCard';

interface SceneListProps {
  storyboardId: string;
  items: Scene[];
}

const SceneList = ({ storyboardId, items }: SceneListProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  const { data, loading, error } = useGetScenes(storyboardId);
  const [reorderScenes] = useReorderScenes();
  const serverScenes = data?.getStoryboardScenes || items;

  const [scenes, setScenes] = useState<Scene[]>(
    [...serverScenes].sort((a, b) => a.order - b.order)
  );
  const sceneIds = useMemo(() => scenes.map((s) => s.id!), [scenes]);

  useEffect(() => {
    if (!serverScenes.length) {
      setScenes([]);
    } else {
      setScenes([...serverScenes].sort((a, b) => a.order - b.order));
    }
  }, [serverScenes]);

  useDndMonitor({
    onDragEnd(event) {
      const { active, over } = event;

      if (!over || active.id === over.id) {
        return;
      }

      const oldIndex = scenes.findIndex((scene) => scene.id === active.id);
      const newIndex = scenes.findIndex((scene) => scene.id === over.id);
      const newScenes = arrayMove(scenes, oldIndex, newIndex);

      setScenes(newScenes);

      const reorderScenesInput = newScenes.map((scene, index) => ({
        id: scene.id!,
        order: index + 1,
      }));

      reorderScenes({
        variables: { scenes: reorderScenesInput },
      });
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <SortableContext items={sceneIds}>
      <div
        className="flex gap-4 w-full flex-wrap"
        ref={setNodeRef}
        style={style}
      >
        {scenes.length ? (
          scenes.map((scene: Scene) => (
            <SceneCard key={scene.id} scene={scene} />
          ))
        ) : (
          <div>No scenes yet</div>
        )}
      </div>
    </SortableContext>
  );
};

export default SceneList;
