export interface Scene {
  id?: string;
  order: number;
  name: string;
  description?: string;
  icon?: string;
  storyboard: Storyboard;
  storyboardId: string;
}

export interface Storyboard {
  id?: string;
  title: string;
  createdAt: string;
  scenes: Scene[];
}

export enum ButtonStyle {
  OUTLINE = 'outline',
  RED = 'red',
  BLUE = 'blue',
}

export type CreateSceneInput = {
  description?: string;
  icon?: string;
  order: number;
  storyboardId: string;
  title: string;
};

export type CreateStoryboardInput = {
  title: string;
};

export type UpdateSceneInput = {
  description?: string;
  icon?: string;
  order?: number;
  storyboardId?: string;
  title?: string;
};

export type DeleteSceneInput = {
  id: string;
};

export type UpdateStoryboardInput = {
  title?: string;
};

export type DeleteStoryboardInput = {
  id: string;
};

export type CreateSceneMutationResult = {
  createScene: Scene;
};

export type CreateStoryboardMutationResult = {
  createStoryboard: Storyboard;
};

export type DeleteSceneMutationResult = {
  deleteScene: Scene;
};

export type DeleteStoryboardMutationResult = {
  deleteStoryboard: Storyboard;
};

export type UpdateSceneMutationResult = {
  updateScene: Scene;
};

export type UpdateStoryboardMutationResult = {
  updateStoryboard: Storyboard;
};
