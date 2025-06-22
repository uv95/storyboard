import {
  MutationHookOptions,
  QueryHookOptions,
  useMutation,
  useQuery,
} from '@apollo/client';
import {
  CREATE_STORYBOARD,
  DELETE_STORYBOARD,
  GET_STORYBOARD,
  GET_STORYBOARDS,
  UPDATE_STORYBOARD,
} from './graphql';
import {
  CreateStoryboardInput,
  CreateStoryboardMutationResult,
  DeleteStoryboardInput,
  DeleteStoryboardMutationResult,
  UpdateStoryboardInput,
  UpdateStoryboardMutationResult,
} from '@/lib/types';

export const useGetStoryboards = (options?: QueryHookOptions) =>
  useQuery(GET_STORYBOARDS, { fetchPolicy: 'cache-and-network', ...options });

export const useGetStoryboardById = (id: string, options?: QueryHookOptions) =>
  useQuery(GET_STORYBOARD, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
    ...options,
  });

export const useCreateStoryboard = (
  options?: MutationHookOptions<
    CreateStoryboardMutationResult,
    CreateStoryboardInput
  >
) =>
  useMutation<CreateStoryboardMutationResult, CreateStoryboardInput>(
    CREATE_STORYBOARD,
    {
      refetchQueries: [GET_STORYBOARDS],
      ...options,
    }
  );

export const useUpdateStoryboard = (
  options?: MutationHookOptions<
    UpdateStoryboardMutationResult,
    UpdateStoryboardInput
  >
) =>
  useMutation<UpdateStoryboardMutationResult, UpdateStoryboardInput>(
    UPDATE_STORYBOARD,
    options
  );

export const useDeleteStoryboard = (
  options?: MutationHookOptions<
    DeleteStoryboardMutationResult,
    DeleteStoryboardInput
  >
) =>
  useMutation<DeleteStoryboardMutationResult, DeleteStoryboardInput>(
    DELETE_STORYBOARD,
    {
      refetchQueries: [GET_STORYBOARDS],
      ...options,
    }
  );
