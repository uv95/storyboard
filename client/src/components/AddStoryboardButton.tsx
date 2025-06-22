'use client';

import { ButtonStyle } from '@/lib/types';
import { useState } from 'react';
import Button from './Button';
import StoryboardForm from './StoryboardForm';

const AddStoryboardButton = () => {
  const [isAddStoryboardOpen, setIsAddStoryboardOpen] = useState(false);

  return (
    <>
      <Button
        btnStyle={ButtonStyle.BLUE}
        onClick={() => setIsAddStoryboardOpen(true)}
      >
        Add storyboard
      </Button>
      <StoryboardForm
        isOpen={isAddStoryboardOpen}
        onClose={() => setIsAddStoryboardOpen(false)}
        title="Add New Storyboard"
      />
    </>
  );
};

export default AddStoryboardButton;
