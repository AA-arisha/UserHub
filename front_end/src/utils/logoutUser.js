import Cookies from 'js-cookie'
export const logoutUser = () => {
  Cookies.remove('accessToken');
  return true;
};