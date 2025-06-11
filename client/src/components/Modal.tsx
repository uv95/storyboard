import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
          <DialogTitle
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900 mb-4"
          >
            Add New Scene
          </DialogTitle>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
