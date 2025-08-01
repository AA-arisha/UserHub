import { useQuery } from '@tanstack/react-query';
import { fetchUsersFn } from '../api/users/fetchUsers';

export const useUsers = () => {
  const { data: users, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsersFn,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
    retry: 1,                 // retry once if it fails
  });

  return { users, isLoading, isError };
};
