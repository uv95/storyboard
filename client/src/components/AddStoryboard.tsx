import { ButtonStyle, Storyboard } from '@/lib/types';
import { Field, Fieldset, Input, Label } from '@headlessui/react';
import clsx from 'clsx';
import { FormEvent, useState } from 'react';
import Button from './Button';
import Modal from './Modal';

interface AddStoryboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddStoryboard = ({ isOpen, onClose }: AddStoryboardProps) => {
  const [formData, setFormData] = useState<Partial<Storyboard>>({
    title: '',
  });

  const onChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('formData', formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Storyboard">
      <form onSubmit={onSubmit} className="w-full">
        <Fieldset className="flex flex-col gap-4">
          <Field>
            <Label className="block text-sm font-medium text-gray-700">
              Title
            </Label>
            <Input
              name="title"
              className={clsx(
                'border mt-1 block w-full rounded-lg px-3 py-2',
                'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              )}
              onChange={onChange}
            />
          </Field>

          <div className="flex gap-3 mt-4">
            <Button
              type="button"
              btnStyle={ButtonStyle.OUTLINE}
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              btnStyle={ButtonStyle.BLUE}
              className="flex-1"
            >
              Add Storyboard
            </Button>
          </div>
        </Fieldset>
      </form>
    </Modal>
  );
};

export default AddStoryboard;
