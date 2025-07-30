import { logout } from "../slices/authslice";
export const LogoutUser = (dispatch) => {
  dispatch(logout())
  window.location.href = "/"
};