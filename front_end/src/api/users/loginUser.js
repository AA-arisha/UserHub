import api from "../axiosConfig";
import { setToken } from "../../utils/setToken";

// This is your mutationFn — no dispatch here
export const loginUserFn = async (credentials) => {
  const { data } = await api.post('/login', credentials);

  if (!data.accessToken) {
    throw new Error('No token received');
  }

  setToken(data.accessToken); // store token in localStorage or cookies

  return data; // return full response so onSuccess can access data.user etc.
};
