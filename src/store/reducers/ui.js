import * as t from 'src/store/type'

const initalState = {
  modal: false,
}

const uiReducer = (state = initalState, action) => {
  const { type, payload } = action
  switch (type) {
    case t.UI_OPEN_MODAL:
      return {
        ...state,
        modal: true
      }
    case t.UI_CLOSE_MODAL:
      return {
        ...state,
        modal: false
      }
    default:
      return state
  }
}

export default uiReducer
