import api from "../axiosConfig";

export const createUserFn = async (payload) => {
  const res = await api.post("/create", payload);
  return res.data;
};
