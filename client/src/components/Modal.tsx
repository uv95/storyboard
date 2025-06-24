import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal = ({ children, isOpen, onClose, title }: ModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto p-2 sm:p-4">
        <div className="min-h-full flex items-center justify-center">
          <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-background p-4 sm:p-6 text-left align-middle shadow-xl transition-all">
            <DialogTitle as="h3" className="text-xl mb-4 font-medium leading-6">
              {title}
            </DialogTitle>
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
