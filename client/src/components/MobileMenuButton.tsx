import { SetStateAction } from 'react';

interface MobileMenuButtonProps {
  setIsMobileMenuOpen: (value: SetStateAction<boolean>) => void;
  isMobileMenuOpen: boolean;
}

const MobileMenuButton = ({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}: MobileMenuButtonProps) => {
  return (
    <button
      className="block w-5 h-5 sm:hidden z-3 relative"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <span
        className={`absolute top-0 left-0 w-full h-0.5 bg-foreground transition-all duration-200 ${
          isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      ></span>
      <span
        className={`absolute top-2 left-0 w-full h-0.5 bg-foreground transition-all duration-200 ${
          isMobileMenuOpen ? 'opacity-0' : ''
        }`}
      ></span>
      <span
        className={`absolute top-4 left-0 w-full h-0.5 bg-foreground transition-all duration-200 ${
          isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      ></span>
    </button>
  );
};

export default MobileMenuButton;
