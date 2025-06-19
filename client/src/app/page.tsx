'use client';

import AddStoryboard from '@/components/AddStoryboard';
import Button from '@/components/Button';
import StoryboardList from '@/components/StoryboardList';
import { ButtonStyle } from '@/lib/types';
import { useState } from 'react';

export default function Home() {
  const [isAddStoryboardOpen, setIsAddStoryboardOpen] = useState(false);

  return (
    <main className="w-full h-full min-h-[480px] px-8 pb-8 flex-grow flex flex-col bg-inherit">
      <div className="w-full flex align-center justify-end gap-4 mb-4">
        <Button
          btnStyle={ButtonStyle.BLUE}
          onClick={() => setIsAddStoryboardOpen(true)}
        >
          Add storyboard
        </Button>
      </div>
      <div className="w-full h-full flex relative bg-inherit">
        <StoryboardList />
        <AddStoryboard
          isOpen={isAddStoryboardOpen}
          onClose={() => setIsAddStoryboardOpen(false)}
        />
      </div>
    </main>
  );
}
