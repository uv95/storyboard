export interface Scene {
  id?: string;
  order: number;
  title: string;
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
  PRIMARY = 'primary',
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
  id: string;
  data: {
    description?: string;
    icon?: string;
    order?: number;
    storyboardId?: string;
    title?: string;
  };
};

export type IdInput = {
  id: string;
};

export type UpdateStoryboardInput = {
  id: string;
  data: { title?: string };
};

export type ReorderScenesInput = {
  scenes: { id: string; order: number }[];
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

export type ReorderScenesResult = {
  data: { reorderScenes: { id: string } };
};
