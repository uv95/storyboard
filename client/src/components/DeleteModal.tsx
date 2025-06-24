import { ButtonStyle, Entity } from '@/lib/types';
import Button from './Button';
import Modal from './Modal';
import { useDeleteStoryboard } from '@/features/storyboard/hooks';
import { useDeleteScene } from '@/features/scene/hooks';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  entity: Entity;
  id: string;
}

const DeleteModal = ({ isOpen, onClose, entity, id }: DeleteModalProps) => {
  const [deleteStoryboard] = useDeleteStoryboard();
  const [deleteScene] = useDeleteScene();

  function handleDelete() {
    (entity === Entity.SCENE ? deleteScene : deleteStoryboard)({
      variables: { id },
    });
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Delete ${entity}?`}>
      <div className="w-full flex gap-3 mt-4">
        <Button className="flex-1" btnStyle={ButtonStyle.RED} onClick={onClose}>
          No
        </Button>
        <Button
          className="flex-1"
          btnStyle={ButtonStyle.OUTLINE}
          onClick={handleDelete}
        >
          Yes
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
