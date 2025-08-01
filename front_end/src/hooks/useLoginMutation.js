import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginUserFn } from '../api/users/loginUser';
import { useDispatch } from 'react-redux';
import { setUser } from '../slices/authslice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const useLoginMutation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginUserFn,  // actual POST call to backend

    onSuccess: (data) => {
      queryClient.invalidateQueries(['users']);
      dispatch(setUser(data.user));  // save to Redux
      toast.success(data.message || 'Login successful');
      navigate('/profile');
    },

    onError: (error) => {
      toast.error(error.message || 'Login failed');
    }
  });
};
