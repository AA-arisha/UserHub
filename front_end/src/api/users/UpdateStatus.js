import api from "../axiosConfig";
import { setUserStatus } from "../../slices/authslice";

export const UpdateStatus = (user) => async (dispatch) => {
    console.log("data at endpoint:" , user);
  try {
    const { data } = await api.post('/updateStatus', { createdUser: user });
    dispatch(setUserStatus(data.user)); 
  } catch (error) {
    console.error("Error changing user status:", error);
  }
};
