import api from "../axiosConfig";

export const fetchUsersFn = async () => {
  const { data } = await api.get('/ViewUsers');
  console.log("fetch users:", data.users);
  
  return data.users; // assuming the response shape is { users: [...] }
};
