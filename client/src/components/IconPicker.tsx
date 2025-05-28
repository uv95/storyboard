import { icons } from '@/lib/icons';
import clsx from 'clsx';

interface IconPickerProps {
  selected: string;
  setIcon: (icon: string) => void;
}

export default function IconPicker({ selected, setIcon }: IconPickerProps) {
  return (
    <div className="grid grid-cols-4 gap-4 p-2">
      {icons.map(({ label, value, Icon }) => (
        <button
          key={value}
          onClick={() => setIcon(value)}
          className={clsx(
            'flex flex-col items-center p-2 border rounded-lg hover:bg-gray-100',
            selected === value
              ? 'border-blue-500 ring-2 ring-blue-300'
              : 'border-gray-300'
          )}
          aria-label={`Select icon: ${label}`}
          type="button"
        >
          <Icon className="w-6 h-6 mb-1" />
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  );
}
