'use client';

import AddScene from '@/components/AddScene';
import SceneList from '@/components/SceneList';
import { useState } from 'react';

export default function Home() {
  const [isAddSceneOpen, setIsAddSceneOpen] = useState(false);

  return (
    <main className="w-full h-full min-h-[480px] p-8 border flex-grow flex flex-col bg-inherit">
      <div className="w-full h-full flex relative bg-inherit">
        <SceneList />
        <AddScene
          isOpen={isAddSceneOpen}
          onClose={() => setIsAddSceneOpen(false)}
        />
      </div>
      <button
        className="border mt-auto"
        onClick={() => setIsAddSceneOpen(true)}
      >
        Add scene
      </button>
    </main>
  );
}
