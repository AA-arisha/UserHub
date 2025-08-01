import api from "../axiosConfig";

// A pure function that posts the updated status to the backend
export const updateStatus = async (user) => {
  const { data } = await api.post('/updateStatus', { createdUser: user });
  return data.user; // assuming response shape: { user: {...} }
};
