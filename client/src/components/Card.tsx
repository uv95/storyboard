'use client';

import { Pencil, Trash2 } from 'lucide-react';
import { CSSProperties, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  handleEdit: () => void;
  handleDelete: () => void;
  onClick?: () => void;
  ref?: (element: HTMLElement | null) => void;
  style?: CSSProperties | undefined;
}

const Card = ({
  children,
  className,
  handleEdit,
  handleDelete,
  onClick,
  ref,
  style,
  ...otherProps
}: CardProps) => {
  return (
    <div
      className={`${
        className || ''
      } h-20 sm:h-24 rounded-lg flex items-center gap-4 bg-surface shadow-sm sm:w-96 w-full cursor-pointer`}
      onClick={onClick}
      ref={ref}
      style={style}
      {...otherProps}
    >
      {children}
      <div className="ml-auto py-4 px-2 sm:p-4 flex gap-2 self-start text-foreground">
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
