import { Switch } from '@headlessui/react';
import Button from './Button';
import { ButtonStyle } from '@/lib/types';

const Header = () => {
  return (
    <header className="h-20 w-full flex justify-between items-center px-4 bg-foreground shadow-sm">
      <h1 className="text-background text-3xl font-bold">Storyboard Editor</h1>
      <div className="flex items-center gap-4">
        <Button btnStyle={ButtonStyle.RED}>Export as PDF</Button>
        <Switch
          //   checked={enabled}
          //   onChange={toggleTheme}
          className="group relative flex h-7 w-14 cursor-pointer rounded-xl bg-foreground p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-background data-focus:outline data-focus:outline-white"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-cerulean shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
          />
        </Switch>
      </div>
    </header>
  );
};

export default Header;
