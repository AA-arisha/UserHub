import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../api/users/fetchUsers"; // path as per your structure

export const useUsers = () => {
  const { users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Array.isArray(users) || users.length === 0) {
      dispatch(fetchUsers()); 
    }
  }, [users, dispatch]);

  return users;
};
