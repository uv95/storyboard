'use client';

import { ButtonStyle } from '@/lib/types';
import Button from './Button';
import ThemeSwitcher from './ThemeSwitcher';
import { useState } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';

const SCREEN_WIDTH_SM = 640;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { width } = useWindowSize();

  const afterStyles = `after:block after:h-[1.5px] after:w-[22px] after:bg-foreground after:transition-transform after:translate-y-${
    isMobileMenuOpen ? '0' : '1'
  } after:-rotate-${isMobileMenuOpen ? '45' : '0'}`;

  const beforeStyles = `before:content-[''] before:h-[1.5px] before:block before:w-[22px] before:bg-foreground before:transition-transform ${
    isMobileMenuOpen ? 'before:translate-y-[1px]' : 'before:-translate-y-1'
  } before:rotate-${isMobileMenuOpen ? '45' : '0'}`;

  if (isMobileMenuOpen && width && width > SCREEN_WIDTH_SM) {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="w-full flex flex-wrap gap-4 justify-between items-center px-4 py-2 bg-background border-b border-surface sm:px-8 sm:py-4 z-2 fixed sm:static">
      <h1 className="text-foreground text-2xl font-bold">Storyboard Editor</h1>
      <div className="flex items-center gap-4 flex-shrink-0 justify-between">
        <Button className="hidden sm:block" btnStyle={ButtonStyle.RED}>
          Export as PDF
        </Button>
        <ThemeSwitcher />
        <div
          className={`block w-5 sm:hidden z-3 ${beforeStyles} ${afterStyles}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        ></div>
      </div>

      <div
        className={`w-full h-screen overflow-y-scroll px-4 py-2 fixed z-2 bg-background inset-0 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } transition-opacity sm:opacity-0`}
      >
        <h1 className="text-foreground text-2xl font-bold">
          Storyboard Editor
        </h1>
        <div className="flex flex-col mt-8">
          <Button btnStyle={ButtonStyle.RED}>Export as PDF</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
