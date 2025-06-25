import { Pencil, Trash2 } from 'lucide-react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  handleEdit: () => void;
  handleDelete: () => void;
  onClick?: () => void;
}

const Card = ({
  children,
  className,
  handleEdit,
  handleDelete,
  onClick,
}: CardProps) => {
  return (
    <div
      className={`${className} h-24 rounded-lg flex items-center gap-4 bg-surface shadow-sm`}
      onClick={onClick}
    >
      {children}
      <div className="ml-auto p-4 flex gap-2 self-start text-foreground">
        <Pencil
          className="w-4 h-4 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleEdit();
          }}
        />
        <Trash2
          className="w-4 h-4 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDelete();
          }}
        />
      </div>
    </div>
  );
};

export default Card;
