import { ButtonStyle } from '@/lib/types';
import Button from './Button';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="w-full flex flex-wrap gap-4 justify-between items-center px-4 py-2 bg-background border-b border-surface sm:px-8 sm:py-4">
      <h1 className="text-foreground text-2xl font-bold">Storyboard Editor</h1>
      <div className="flex items-center gap-4 flex-shrink-0 justify-between">
        <Button btnStyle={ButtonStyle.RED}>Export as PDF</Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
