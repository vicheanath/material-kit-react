import axios from "axios";
import env from 'src/utils/env'

const instance = axios.create({
  baseURL: env.API_URL,
  headers: {
    Authorization: localStorage.getItem('access_token')
      ? 'JWT ' + localStorage.getItem('access_token')
      : null,
    'Content-Type': 'application/json',
    accept: 'application/json',

  }
});
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (typeof error.response === 'undefined') {
      alert(
        'A server/network error occurred. ' +
        'Looks like CORS might be the problem. ' +
        'Sorry about this - we will get it fixed shortly.'
      );
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest.url === env.API_URL + 'user/token/refresh/'
    ) {
      window.location.href = '/login/';
      return Promise.reject(error);
    }

    if (
      error.response.data.code === 'token_not_valid' &&
      error.response.status === 401 &&
      error.response.statusText === 'Unauthorized'
    ) {
      const refreshToken = localStorage.getItem('refresh_token');
      if (refreshToken) {
        console.log(refreshToken)
        const tokenParts = JSON.parse(window.atob(refreshToken.split('.')[1]));
        const now = Math.ceil(Date.now() / 1000);
        console.log(tokenParts.exp);

        if (tokenParts.exp > now) {
          return instance
            .post('user/token/refresh/', { refresh: refreshToken })
            .then((response) => {
              localStorage.setItem('access_token', response.data.access);
              // localStorage.setItem('refresh_token', response.data.refresh);

              instance.defaults.headers['Authorization'] =
                'JWT ' + response.data.access;
              originalRequest.headers['Authorization'] =
                'JWT ' + response.data.access;
              return instance(originalRequest);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log('Refresh token is expired', tokenParts.exp, now);
          window.location.href = '/login/';
        }
      } else {
        console.log('Refresh token not available.');
        window.location.href = '/login/';
      }
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export default instance
