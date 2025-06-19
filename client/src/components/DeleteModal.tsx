import { ButtonStyle } from '@/lib/types';
import Button from './Button';
import Modal from './Modal';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  entity: 'storyboard' | 'scene';
}

const DeleteModal = ({ isOpen, onClose, entity }: DeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Delete ${entity}?`}>
      <div className="w-full flex gap-3 mt-4">
        <Button className="flex-1" btnStyle={ButtonStyle.RED} onClick={onClose}>
          No
        </Button>
        <Button className="flex-1" btnStyle={ButtonStyle.BLUE}>
          Yes
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
