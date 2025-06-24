import { Pencil, Trash2 } from 'lucide-react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  handleEdit: () => void;
  handleDelete: () => void;
}

const Card = ({ children, className, handleEdit, handleDelete }: CardProps) => {
  return (
    <div
      className={`${className} h-24 rounded-lg flex items-center gap-4 bg-surface shadow-sm`}
    >
      {children}
      <div className="ml-auto p-4 flex gap-2 self-start text-foreground">
        <Pencil
          className="w-4 h-4 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            handleEdit();
          }}
        />
        <Trash2
          className="w-4 h-4 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            handleDelete();
          }}
        />
      </div>
    </div>
  );
};

export default Card;
