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

export enum Entity {
  STORYBOARD = 'storyboard',
  SCENE = 'scene',
}

export type CreateSceneInput = {
  data: {
    description?: string;
    icon?: string;
    order: number;
    storyboardId: string;
    title: string;
  };
};

export type CreateStoryboardInput = {
  data: { title: string };
};

export type UpdateSceneInput = {
  data: {
    description?: string;
    icon?: string;
    order?: number;
    storyboardId?: string;
    title?: string;
  };
};

export type DeleteSceneInput = {
  id: string;
};

export type UpdateStoryboardInput = {
  data: { title?: string };
};

export type DeleteStoryboardInput = {
  id: string;
};

export type CreateSceneMutationResult = {
  data: { createScene: Scene };
};

export type CreateStoryboardMutationResult = {
  data: { createStoryboard: Storyboard };
};

export type DeleteSceneMutationResult = {
  data: { deleteScene: Scene };
};

export type DeleteStoryboardMutationResult = {
  data: { deleteStoryboard: Storyboard };
};

export type UpdateSceneMutationResult = {
  data: { updateScene: Scene };
};

export type UpdateStoryboardMutationResult = {
  data: { updateStoryboard: Storyboard };
};
