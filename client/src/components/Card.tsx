import { Pencil, Trash2 } from 'lucide-react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`${className} h-24 rounded-lg flex items-center gap-4 bg-white shadow-sm`}
    >
      {children}
      <div className="ml-auto p-4 flex gap-2 self-start">
        <Pencil className="w-4 h-4 cursor-pointer" />
        <Trash2 className="w-4 h-4 text-pantone cursor-pointer" />
      </div>
    </div>
  );
};

export default Card;
