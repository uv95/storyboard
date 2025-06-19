'use client';

import AddScene from '@/components/AddScene';
import Breadcrumbs from '@/components/Breadcrumbs';
import Button from '@/components/Button';
import SceneList from '@/components/SceneList';
import { ButtonStyle } from '@/lib/types';
import { useState } from 'react';

export default function Storyboard() {
  const [isAddSceneOpen, setIsAddSceneOpen] = useState(false);

  return (
    <main className="w-full h-full min-h-[480px] px-8 pb-8 flex-grow flex flex-col bg-inherit">
      <div className="w-full flex align-center justify-end gap-4 mb-4">
        <Breadcrumbs storyboardTitle={'My storyboard'} />
        <Button
          btnStyle={ButtonStyle.BLUE}
          onClick={() => setIsAddSceneOpen(true)}
        >
          Add scene
        </Button>
      </div>
      <div className="w-full h-full flex relative bg-inherit">
        <SceneList />
        <AddScene
          isOpen={isAddSceneOpen}
          onClose={() => setIsAddSceneOpen(false)}
        />
      </div>
    </main>
  );
}
