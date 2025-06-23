'use client';

import { ButtonStyle, Entity } from '@/lib/types';
import { useState } from 'react';
import Button from './Button';
import StoryboardForm from './StoryboardForm';
import SceneForm from './SceneForm';

interface AddButtonProps {
  entity: Entity;
}

const AddButton = ({ entity }: AddButtonProps) => {
  const [isAddStoryboardOpen, setIsAddStoryboardOpen] = useState(false);
  const [isAddSceneOpen, setIsAddSceneOpen] = useState(false);

  return (
    <>
      <Button
        btnStyle={ButtonStyle.BLUE}
        onClick={() =>
          (entity === Entity.STORYBOARD
            ? setIsAddStoryboardOpen
            : setIsAddSceneOpen)(true)
        }
      >
        Add {entity}
      </Button>

      {entity === Entity.STORYBOARD && isAddStoryboardOpen ? (
        <StoryboardForm
          isOpen={isAddStoryboardOpen}
          onClose={() => setIsAddStoryboardOpen(false)}
          formTitle="Add New Storyboard"
        />
      ) : (
        ''
      )}

      {entity === Entity.SCENE && isAddSceneOpen ? (
        <SceneForm
          formTitle="Add new scene"
          isOpen={isAddSceneOpen}
          onClose={() => setIsAddSceneOpen(false)}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default AddButton;
