'use client';

import { Switch } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="group relative flex h-7 w-14 cursor-pointer rounded-xl bg-surface p-1 ease-in-out focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white shadow-sm scale-75 xs:scale-100"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-cerulean shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
      />
    </Switch>
  );
};

export default ThemeSwitcher;
