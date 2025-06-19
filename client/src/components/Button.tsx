import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button as HeadlessUiButton } from '@headlessui/react';
import { ButtonStyle } from '@/lib/types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  btnStyle: ButtonStyle;
}

const Button = (props: ButtonProps) => {
  const { children, className, onClick, btnStyle, type, ...otherProps } = props;

  const styles: Record<ButtonStyle, string> = {
    [ButtonStyle.OUTLINE]: 'border border-gray-300 text-gray-700 bg-white',
    [ButtonStyle.RED]: 'bg-pantone text-white',
    [ButtonStyle.BLUE]: 'bg-cerulean text-white',
  };

  return (
    <HeadlessUiButton
      {...otherProps}
      onClick={onClick}
      type={type}
      className={`${className} text-sm rounded-xl py-2 px-4 ${styles[btnStyle]}`}
    >
      {children}
    </HeadlessUiButton>
  );
};

export default Button;
