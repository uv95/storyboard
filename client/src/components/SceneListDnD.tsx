'use client';

import { Scene } from '@/lib/types';
import DndContextComponent from './DndContextComponent';
import dynamic from 'next/dynamic';
const SceneList = dynamic(() => import('@/components/SceneList'), {
  ssr: false,
});

interface SceneListDnDProps {
  storyboardId: string;
  items: Scene[];
}

const SceneListDnD = ({ storyboardId, items }: SceneListDnDProps) => {
  return (
    <DndContextComponent>
      <SceneList items={items} storyboardId={storyboardId} />
    </DndContextComponent>
  );
};

export default SceneListDnD;
