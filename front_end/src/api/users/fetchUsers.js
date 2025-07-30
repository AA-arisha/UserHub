import api from "../axiosConfig";
import { setUsers } from "../../slices/authslice";

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await api.get('/ViewUsers');
    dispatch(setUsers(data.users));
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
