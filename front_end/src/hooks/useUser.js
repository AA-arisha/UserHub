import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../api/users/fetchUser';
export const useUser = () => {
  const { user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // Fetch user on mount if not already available
  useEffect(() => {
    if (!user) dispatch(fetchUser());
  }, [ user, dispatch]);

  return { user };
};
