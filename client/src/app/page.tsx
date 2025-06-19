'use client';

import AddScene from '@/components/AddScene';
import Button from '@/components/Button';
import SceneList from '@/components/SceneList';
import { ButtonStyle } from '@/lib/types';
import { useState } from 'react';

export default function Home() {
  const [isAddSceneOpen, setIsAddSceneOpen] = useState(false);
  const [isAddStoryboardOpen, setIsAddStoryboardOpen] = useState(false);

  return (
    <main className="w-full h-full min-h-[480px] px-8 pb-8 flex-grow flex flex-col bg-inherit">
      <div className="w-full flex justify-end gap-4 mb-4">
        <Button
          btnStyle={ButtonStyle.BLUE}
          onClick={() => setIsAddStoryboardOpen(true)}
        >
          Add storyboard
        </Button>
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
