import { GET_STORYBOARD_SCENES } from '@/features/scene/graphql';
import { useCreateScene, useUpdateScene } from '@/features/scene/hooks';
import { ButtonStyle, Scene } from '@/lib/types';
import { useApolloClient } from '@apollo/client';
import { Field, Fieldset, Input, Label, Textarea } from '@headlessui/react';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { FormEvent, memo, useRef, useState } from 'react';
import Button from './Button';
import IconPicker from './IconPicker';
import Modal from './Modal';

interface SceneFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Scene;
  formTitle: string;
}

const SceneForm = ({
  isOpen,
  onClose,
  initialData,
  formTitle,
}: SceneFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedIcon, setSelectedIcon] = useState(
    initialData?.icon || 'smile'
  );
  const [createScene] = useCreateScene();
  const [updateScene] = useUpdateScene();
  const client = useApolloClient();
  const { id: storyboardId } = useParams<{ id: string }>();

  const { getStoryboardScenes: scenes } = client.readQuery({
    query: GET_STORYBOARD_SCENES,
    variables: { storyboardId },
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    const formData = new FormData(formRef.current);

    const sceneData: Partial<Scene> = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      order: initialData?.order || scenes.length + 1,
      icon: selectedIcon,
    };

    if (initialData) {
      updateScene({
        variables: {
          id: initialData.id!,
          data: sceneData,
        },
      });
    } else {
      createScene({
        variables: {
          data: {
            storyboardId,
            title: sceneData.title as string,
            order: sceneData.order as number,
            description: sceneData.description,
            icon: sceneData.icon,
          },
        },
      });
    }

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={formTitle}>
      <form ref={formRef} onSubmit={onSubmit} className="w-full">
        <Fieldset className="flex flex-col gap-4">
          <Field>
            <Label className="block text-sm font-medium text-gray-700">
              Title
            </Label>
            <Input
              name="title"
              required
              defaultValue={initialData?.title}
              className={clsx(
                'border mt-1 block w-full rounded-lg px-3 py-2',
                'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              )}
            />
          </Field>
          <Field>
            <Label className="block text-sm font-medium text-gray-700">
              Description
            </Label>
            <Textarea
              name="description"
              defaultValue={initialData?.description}
              className={clsx(
                'border mt-1 block w-full rounded-lg px-3 py-2',
                'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              )}
            />
          </Field>
          <IconPicker selected={selectedIcon} setIcon={setSelectedIcon} />
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
              Save
            </Button>
          </div>
        </Fieldset>
      </form>
    </Modal>
  );
};

export default memo(SceneForm);
