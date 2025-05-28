import {
  Smile,
  Plane,
  Book,
  Camera,
  Home,
  Star,
  User,
  Pizza,
  LucideIcon,
} from 'lucide-react';

type IconOption = {
  label: string;
  value: string;
  Icon: LucideIcon;
};

export const icons: IconOption[] = [
  { label: 'Smile', value: 'smile', Icon: Smile },
  { label: 'Plane', value: 'plane', Icon: Plane },
  { label: 'Book', value: 'book', Icon: Book },
  { label: 'Camera', value: 'camera', Icon: Camera },
  { label: 'Home', value: 'home', Icon: Home },
  { label: 'Star', value: 'star', Icon: Star },
  { label: 'User', value: 'user', Icon: User },
  { label: 'Pizza', value: 'pizza', Icon: Pizza },
];
