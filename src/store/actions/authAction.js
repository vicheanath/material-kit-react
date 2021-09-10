import * as t from 'src/store/type'
import axios from 'src/utils/axios'

const setAuthorizationHeader = (token) => {
  console.log(token)
  localStorage.setItem('access_token', token.access);
  localStorage.setItem('refresh_token', token.refresh);
  localStorage.setItem('isAuth',true);
  axios.defaults.headers.common["Authorization"] = 'JWT ' + localStorage.getItem('access_token')
};
export const login = (userData, navigate) => async (dispatch) => {
  await axios.post('user/login/', userData)
    .then(res => {
      setAuthorizationHeader(res.data.credential)
      dispatch({
        type: t.LOGIN,
        payload: res.data
      })
      localStorage.setItem('user', JSON.stringify(res.data.user));
    })
    .catch((err) => dispatch({
      type: t.SET_ERROR_AUTH,
      payload: err,
    }));
  navigate("/dashboard")
  window.location.reload();
}

export const logOut = () => async (dispatch) => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('isAuth')
  localStorage.removeItem('user')
  window.location.reload()
}


export const setUserToState = (userData = JSON.parse(localStorage.getItem('user'))) => async (dispatch) => {
  dispatch({
    type: t.SET_USER,
    payload: userData
  })
}


