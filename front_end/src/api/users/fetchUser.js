import api from "../axiosConfig";

export const fetchUserFn =async () => {
    const { data } = await api.get('/me');
    return data.user;
};