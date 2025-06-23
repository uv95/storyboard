'use client';

import { Entity, Storyboard } from '@/lib/types';
import { useState } from 'react';
import Card from './Card';
import DeleteModal from './DeleteModal';
import StoryboardForm from './StoryboardForm';

interface StoryboardCardProps {
  storyboard: Storyboard;
}

const StoryboardCard = ({ storyboard }: StoryboardCardProps) => {
  const [isDelete, setIsDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <Card
        className="min-w-96 pl-4 cursor-pointer"
        handleEdit={() => setIsEdit(true)}
        handleDelete={() => setIsDelete(true)}
      >
        <strong className="text-lg">{storyboard.title}</strong>
      </Card>

      {isDelete && (
        <DeleteModal
          entity={Entity.STORYBOARD}
          onClose={() => setIsDelete(false)}
          isOpen={isDelete}
          id={storyboard.id!}
        />
      )}

      {isEdit && (
        <StoryboardForm
          title="Edit storyboard"
          isOpen={isEdit}
          initialData={storyboard}
          onClose={() => setIsEdit(false)}
        />
      )}
    </>
  );
};

export default StoryboardCard;
