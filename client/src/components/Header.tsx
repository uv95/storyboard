import { ButtonStyle } from '@/lib/types';
import Button from './Button';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 bg-background border-b border-surface">
      <h1 className="text-foreground text-2xl font-bold">Storyboard Editor</h1>
      <div className="flex items-center gap-4">
        <Button btnStyle={ButtonStyle.RED}>Export as PDF</Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
