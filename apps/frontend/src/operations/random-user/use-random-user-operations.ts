/* !IMPORTANT NOTE! */
/*  @Example usage of operations: useRandomUserOperations() */
/* */
// import { useRandomUserOperations } from "~/operations/random-user/use-random-user-queries";
//
// const { randomUserData, isGetRandomUserLoading } = useRandomUserOperations().getRandomUser();
// const { onCreateRandomUser, isCreateRandomUserLoading } = useRandomUserOperations().createRandomUser();
/* */
/* */

"use client";

import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { createRandomUserService, getRandomUserService } from "~/services";
import { QUERY_KEY } from "~/operations/query-key";
import type { User } from "~/services/random-user/type";

/* Example of using useQuery() */
/* Get random users */
const useGetRandomUser = () => {
  const query = useQuery({
    queryKey: [QUERY_KEY.RANDOM_USER],
    queryFn: () => getRandomUserService(),
    select: (axiosResponse) => axiosResponse.data.results,
  });
  return {
    randomUserData: query.data,
    isGetRandomUserLoading: query.isLoading,
    ...query,
  };
};

/* Example of using useMutation() */
/* Create a random user */
const useCreateRandomUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (data: User) => createRandomUserService(data), // Not an actual service, just a placeholder.
    /**
     * After a successful mutation, invalidate the cache for the random users query so that the latest data is fetched from the server.
     */
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.RANDOM_USER],
      });
    },
  });
  return {
    onCreateRandomUser: mutation.mutate,
    isCreateRandomUserLoading: mutation.isPending,
    ...mutation,
  };
};

/* Example of using useInfiniteQuery() */
/* Get random users and fetch more when the user scrolls to the bottom that added new random users to original random users (no true pagination) */
const useGetRandomUserInfinitely = () => {
  const queryClient = useQueryClient();
  const query = useInfiniteQuery({
    enabled: false,
    queryKey: [QUERY_KEY.RANDOM_USER],
    queryFn: () => getRandomUserService(),
    select: (axiosResponse) => {
      return axiosResponse.pages.flatMap((page) => page.data.results);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!lastPage) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    // getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
    //   if (firstPageParam <= 1) {
    //     return undefined
    //   }
    //   return firstPageParam - 1
    // },
  });
  return {
    resetRandomUserData: () =>
      queryClient.resetQueries({
        queryKey: [QUERY_KEY.RANDOM_USER],
      }),
    cancelRandomUserFetching: () =>
      queryClient.cancelQueries({
        queryKey: [QUERY_KEY.RANDOM_USER],
      }),
    randomUserData: query.data,
    isGetRandomUserFetching: query.isFetching,
    fetchMoreRandomUser: query.fetchNextPage,
    ...query,
  };
};

/* */
/* Then finally combines hooks that groups all random user operations and renames them to be more descriptive */
/* */
/*  @Example usage of an operation */
// import { useRandomUserOperations } from "~/operations/random-user/use-random-user-queries";
//
// const { randomUserData, isGetRandomUserLoading } = useRandomUserOperations().getRandomUser();
// const { onCreateRandomUser, isCreateRandomUserLoading } = useRandomUserOperations().createRandomUser();
/* */
/* */
const useRandomUserOperations = () => {
  return {
    getRandomUser: useGetRandomUser,
    createRandomUser: useCreateRandomUser,
    getRandomUserInfinitely: useGetRandomUserInfinitely,
  };
};

export { useRandomUserOperations };
