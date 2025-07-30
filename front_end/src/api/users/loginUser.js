import api from "../axiosConfig";
import { setToken } from "../../utils/setToken";
import { setUser } from "../../slices/authslice";


export const LoginUser = async(credentials , dispatch) => {
  try {
    const { data } = await api.post('/login', credentials);
    if (!data.accessToken) return { success: false, message: 'No token received' };
    dispatch(setUser(data.user));
    setToken(data.accessToken);
    

    return { success: true, message: data.message || 'Login successful' };
  } catch (error) {
    dispatch(setUser(null));

    const message =
      error.response?.data?.message || 'Something went wrong while logging in';

    return { success: false, message };
  }
};