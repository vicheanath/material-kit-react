import * as t from 'src/store/type'
export const openModal = () => async (dispatch) => {
  dispatch({
    type: t.UI_OPEN_MODAL
  })
}
export const closeModal = () => async (dispatch) => {
  dispatch({
    type: t.UI_CLOSE_MODAL
  })
}
