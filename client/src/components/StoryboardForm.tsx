import { ButtonStyle, Storyboard } from '@/lib/types';
import { Field, Fieldset, Input, Label } from '@headlessui/react';
import clsx from 'clsx';
import {
  useCreateStoryboard,
  useUpdateStoryboard,
} from '@/features/storyboard/hooks';
import { FormEvent, useRef } from 'react';
import Modal from './Modal';
import Button from './Button';

interface StoryboardFormProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Storyboard;
  formTitle: string;
}

const StoryboardForm = ({
  isOpen,
  onClose,
  initialData,
  formTitle,
}: StoryboardFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const [createStoryboard] = useCreateStoryboard();
  const [updateStoryboard] = useUpdateStoryboard();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!titleRef.current) {
      return;
    }

    const title = titleRef.current.value;

    if (initialData) {
      updateStoryboard({
        variables: {
          id: initialData.id!,
          data: { title },
        },
      });
    } else {
      createStoryboard({
        variables: { data: { title } },
      });
    }

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={formTitle}>
      <form onSubmit={onSubmit} className="w-full">
        <Fieldset className="flex flex-col gap-4">
          <Field>
            <Label className="block text-sm font-medium text-gray-700">
              Title
            </Label>
            <Input
              ref={titleRef}
              name="title"
              defaultValue={initialData?.title}
              className={clsx(
                'border mt-1 block w-full rounded-lg px-3 py-2',
                'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              )}
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
              Save
            </Button>
          </div>
        </Fieldset>
      </form>
    </Modal>
  );
};

export default StoryboardForm;
