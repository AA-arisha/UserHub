import api from "../axiosConfig";
import { setUser } from "../../slices/authslice";


export const fetchUser = ()=> async (dispatch) => {
  try {
    const { data } = await api.get('/me');
    dispatch(setUser(data.user));
  } catch {
    dispatch(setUser(null)); // If fetch fails, clear user
  }
};