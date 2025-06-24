import { gql } from '@apollo/client';

const FIELDS = gql`
  fragment StoryboardFields on Storyboard {
    id
    createdAt
    title
  }
`;

export const GET_STORYBOARDS = gql`
  ${FIELDS}
  query getStoryboards {
    getStoryboards {
      ...StoryboardFields
    }
  }
`;

export const GET_STORYBOARD = gql`
  ${FIELDS}
  query getStoryboard($id: UUID!) {
    getStoryboard(id: $id) {
      ...StoryboardFields
    }
  }
`;

export const GET_STORYBOARD_TITLE = gql`
  query getStoryboard($id: UUID!) {
    getStoryboard(id: $id) {
      title
    }
  }
`;

export const CREATE_STORYBOARD = gql`
  ${FIELDS}
  mutation createStoryboard($data: CreateStoryboardInput!) {
    createStoryboard(data: $data) {
      ...StoryboardFields
    }
  }
`;

export const UPDATE_STORYBOARD = gql`
  ${FIELDS}
  mutation updateStoryboard($data: UpdateStoryboardInput!, $id: UUID!) {
    updateStoryboard(data: $data, id: $id) {
      ...StoryboardFields
    }
  }
`;

export const DELETE_STORYBOARD = gql`
  mutation deleteStoryboard($id: UUID!) {
    deleteStoryboard(id: $id) {
      id
    }
  }
`;
