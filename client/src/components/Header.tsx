'use client';

import { ButtonStyle } from '@/lib/types';
import Button from './Button';
import ThemeSwitcher from './ThemeSwitcher';
import { useEffect, useState } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import MobileMenuButton from './MobileMenuButton';

const SCREEN_WIDTH_SM = 640;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (isMobileMenuOpen && width && width > SCREEN_WIDTH_SM) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen, width]);

  return (
    <header className="w-full flex gap-4 justify-between items-center px-4 py-2 bg-background border-b border-surface sm:px-8 sm:py-4 z-2 fixed sm:static">
      <h1 className="text-foreground text-xl sm:text-2xl font-bold flex-shrink-0">
        Storyboard Editor
      </h1>
      <div className="flex items-center gap-4 flex-shrink-0 justify-between">
        <Button className="hidden sm:block" btnStyle={ButtonStyle.RED}>
          Export as PDF
        </Button>
        <ThemeSwitcher />
        <MobileMenuButton
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>

      <div
        className={`w-full h-screen overflow-y-scroll px-4 py-2 fixed z-2 bg-background inset-0 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } transition-opacity sm:opacity-0`}
      >
        <h1 className="text-foreground text-xl sm:text-2xl font-bold">
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
