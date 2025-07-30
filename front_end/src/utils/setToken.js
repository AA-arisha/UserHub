import Cookies from 'js-cookie'
export const setToken =(accessToken)=>{
    Cookies.set('accessToken', accessToken, { expires: 1 });

}