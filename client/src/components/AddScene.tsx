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
import { Scene } from '@/lib/types';

interface AddSceneProps {
  isOpen: boolean;
}

const AddScene = ({ isOpen }: AddSceneProps) => {
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
    <form
      onSubmit={onSubmit}
      className={clsx(
        'border overflow-hidden max-w-0 w-96 h-full ml-auto duration-150 absolute top-0 right-0 z-1 bg-inherit',
        isOpen && 'max-w-96'
      )}
    >
      <Fieldset className="p-2 flex flex-col gap-2 h-full">
        <Field>
          <Label className="">Name</Label>
          <Input
            name="name"
            className={clsx(
              'border mt-3 block w-full rounded-lg px-3 py-1.5',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
            )}
            onChange={onChange}
          />
        </Field>
        <Field>
          <Label className="">Description</Label>
          <Textarea
            name="description"
            className={clsx(
              'border mt-3 block w-full rounded-lg px-3 py-1.5',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
            )}
            onChange={onChange}
          />
        </Field>
        <IconPicker
          selected={formData.icon}
          setIcon={(icon) => setFormData({ ...formData, icon })}
        />
        <Button className="mt-auto border" data-hover data-active type="submit">
          Add
        </Button>
      </Fieldset>
    </form>
  );
};

export default AddScene;
