import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateStatus } from '../api/users/UpdateStatus.js';
import { toast } from 'react-hot-toast';

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateStatus,
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(['users'], (oldUsers) => {
        if (!oldUsers) return [];
        return oldUsers.map(user =>
          user.Email === updatedUser.Email ? updatedUser : user
        );
      });

      toast.success('Status updated successfully!');
    },
    onError: (error) => {
      console.error("Error changing user status:", error);
      toast.error('Failed to update user status');
    },
  });

  return mutation;
};
