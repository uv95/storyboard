import { Scene, Storyboard } from './types';

export const mockScenes: Scene[] = [
  {
    id: '1',
    order: 1,
    name: 'The Ordinary Day',
    description: 'Introduction to the main character and their daily life.',
    icon: 'home',
  },
  {
    id: '2',
    order: 2,
    name: 'The Journey Begins',
    description:
      'The character decides to embark on a journey to find answers.',
    icon: 'plane',
  },
  {
    id: '3',
    order: 3,
    name: 'A Strange Discovery',
    description: 'During the journey, the character finds a mysterious object.',
    icon: 'star',
  },
  {
    id: '4',
    order: 4,
    name: 'Meeting the Sage',
    description: 'The character meets a wise old sage who gives them advice.',
    icon: 'user',
  },
  {
    id: '5',
    order: 5,
    name: 'A Life Lesson',
    description:
      'The character returns home, having learned an important lesson.',
    icon: 'smile',
  },
];

export const mockStoryboards: Storyboard[] = [
  {
    id: '1',
    title: 'My storyboard',
    scenes: [],
    createdAt: '',
  },
];
