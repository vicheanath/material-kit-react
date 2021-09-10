import * as t from 'src/store/type'
import axios from 'src/utils/axios'
export const getUserData = () => async (dispatch) => {
  await axios.get('user/', { withCredentials: false })
    .then(res => {
      dispatch({
        type: t.GET_USER_DATA,
        payload: res.data
      })
    })
    .catch((err) => console.log(err));
}
