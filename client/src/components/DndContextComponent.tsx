'use client';

import {
  closestCorners,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { ReactNode } from 'react';

interface DndContextComponentProps {
  children: ReactNode;
}

const DndContextComponent = ({ children }: DndContextComponentProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners}>
      {children}
    </DndContext>
  );
};

export default DndContextComponent;
