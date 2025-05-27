'use client';

import AddScene from '@/components/AddScene';
import SceneList from '@/components/SceneList';
import { useState } from 'react';

export default function Home() {
  const [isAddSceneOpen, setIsAddSceneOpen] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-inherit">
      <header className="border w-full flex justify-between px-4">
        <h1 className="border">Storyboard Editor</h1>
        <div className="border flex gap-2">
          <button className="border">Export as PDF</button>
          <button className="border">Theme</button>
        </div>
      </header>
      <main className="w-full h-full min-h-[480px] border flex flex-col bg-inherit">
        <div className="w-full h-full flex relative bg-inherit">
          <SceneList />
          <AddScene isOpen={isAddSceneOpen} />
        </div>
        <button
          className="border mt-auto"
          onClick={() => setIsAddSceneOpen(!isAddSceneOpen)}
        >
          Add scene
        </button>
      </main>
      <footer className="w-full border">Footer</footer>
    </div>
  );
}
