import { useQuery } from '@tanstack/react-query';
import { fetchUserFn } from '../api/users/fetchUser';

export const useUser = () => {
  const { data: user, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUserFn,
    staleTime: 1000 * 60 * 5, // optional: cache for 5 minutes
    retry: false,             // optional: don’t retry on failure
  });

  return { user, isLoading, isError };
};
