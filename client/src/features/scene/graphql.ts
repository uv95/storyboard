import { gql } from '@apollo/client';

const FIELDS = gql`
  fragment SceneFields on Scene {
    id
    icon
    description
    order
    title
  }
`;

export const GET_STORYBOARD_SCENES = gql`
  ${FIELDS}
  query getStoryboardScenes($storyboardId: UUID!) {
    getStoryboardScenes(storyboardId: $storyboardId) {
      ...SceneFields
    }
  }
`;

export const GET_SCENE = gql`
  ${FIELDS}
  query getScene($id: UUID!) {
    getScene(id: $id) {
      ...SceneFields
    }
  }
`;

export const CREATE_SCENE = gql`
  ${FIELDS}
  mutation createScene($data: CreateSceneInput!) {
    createScene(data: $data) {
      ...SceneFields
    }
  }
`;

export const UPDATE_SCENE = gql`
  ${FIELDS}
  mutation updateScene($data: UpdateSceneInput!, $id: UUID!) {
    updateScene(data: $data, id: $id) {
      ...SceneFields
    }
  }
`;

export const DELETE_SCENE = gql`
  mutation deleteScene($id: UUID!) {
    deleteScene(id: $id) {
      id
    }
  }
`;

export const REORDER_SCENES = gql`
  mutation reorderScenes($scenes: [ReorderScenesInput!]!) {
    reorderScenes(scenes: $scenes) {
      id
    }
  }
`;
