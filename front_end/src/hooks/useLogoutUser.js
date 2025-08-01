import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authslice';
import { logoutUser } from '../utils/logoutUser';

export const useLogoutUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      dispatch(logout());           // Clear Redux state
      navigate('/');                
    },
  });
};
