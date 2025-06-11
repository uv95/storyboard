import { Scene } from '@/lib/types';
import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Textarea,
} from '@headlessui/react';
import clsx from 'clsx';
import { FormEvent, useState } from 'react';
import IconPicker from './IconPicker';
import Modal from './Modal';

interface AddSceneProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddScene = ({ isOpen, onClose }: AddSceneProps) => {
  const [formData, setFormData] = useState<Scene>({
    name: '',
    description: '',
    order: 0,
    icon: 'smile',
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit} className="w-full">
        <Fieldset className="flex flex-col gap-4">
          <Field>
            <Label className="block text-sm font-medium text-gray-700">
              Name
            </Label>
            <Input
              name="name"
              className={clsx(
                'border mt-1 block w-full rounded-lg px-3 py-2',
                'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              )}
              onChange={onChange}
            />
          </Field>
          <Field>
            <Label className="block text-sm font-medium text-gray-700">
              Description
            </Label>
            <Textarea
              name="description"
              className={clsx(
                'border mt-1 block w-full rounded-lg px-3 py-2',
                'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              )}
              onChange={onChange}
            />
          </Field>
          <IconPicker
            selected={formData.icon}
            setIcon={(icon) => setFormData({ ...formData, icon })}
          />
          <div className="flex gap-3 mt-4">
            <Button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Scene
            </Button>
          </div>
        </Fieldset>
      </form>
    </Modal>
  );
};

export default AddScene;
