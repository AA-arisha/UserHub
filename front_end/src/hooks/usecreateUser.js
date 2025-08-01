import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createUserFn } from '../api/users/createUser';
import { useQueryClient } from '@tanstack/react-query';

export const useCreateUser = () => {
const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUserFn,
    onSuccess: (data) => {
        queryClient.invalidateQueries(['users']);
        toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || 'User creation failed');
    },
  });
};
