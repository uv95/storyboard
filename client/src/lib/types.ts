export interface Scene {
  id?: string;
  order: number;
  name: string;
  description: string;
  icon: string;
}

export enum ButtonStyle {
  OUTLINE = 'outline',
  RED = 'red',
  BLUE = 'blue',
}
