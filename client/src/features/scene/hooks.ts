import {
  CreateSceneInput,
  CreateSceneMutationResult,
  DeleteSceneMutationResult,
  IdInput,
  ReorderScenesInput,
  ReorderScenesResult,
  UpdateSceneInput,
  UpdateSceneMutationResult,
} from '@/lib/types';
import {
  MutationHookOptions,
  QueryHookOptions,
  useMutation,
  useQuery,
} from '@apollo/client';
import {
  CREATE_SCENE,
  DELETE_SCENE,
  GET_SCENE,
  GET_STORYBOARD_SCENES,
  REORDER_SCENES,
  UPDATE_SCENE,
} from './graphql';

export const useGetScenes = (
  storyboardId: string,
  options?: QueryHookOptions
) =>
  useQuery(GET_STORYBOARD_SCENES, {
    variables: { storyboardId },
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    ...options,
  });

export const useGetSceneById = (id: string, options?: QueryHookOptions) =>
  useQuery(GET_SCENE, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
    ...options,
  });

export const useCreateScene = (
  options?: MutationHookOptions<CreateSceneMutationResult, CreateSceneInput>
) =>
  useMutation<CreateSceneMutationResult, CreateSceneInput>(CREATE_SCENE, {
    refetchQueries: [GET_STORYBOARD_SCENES],
    ...options,
  });

export const useUpdateScene = (
  options?: MutationHookOptions<UpdateSceneMutationResult, UpdateSceneInput>
) =>
  useMutation<UpdateSceneMutationResult, UpdateSceneInput>(
    UPDATE_SCENE,
    options
  );

export const useDeleteScene = (
  options?: MutationHookOptions<DeleteSceneMutationResult, IdInput>
) =>
  useMutation<DeleteSceneMutationResult, IdInput>(DELETE_SCENE, {
    refetchQueries: [GET_STORYBOARD_SCENES],
    ...options,
  });

export const useReorderScenes = (
  options?: MutationHookOptions<ReorderScenesResult, ReorderScenesInput>
) =>
  useMutation<ReorderScenesResult, ReorderScenesInput>(REORDER_SCENES, {
    refetchQueries: [GET_STORYBOARD_SCENES],
    ...options,
  });
