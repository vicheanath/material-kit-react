import * as t from 'src/store/type'

const initalState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  register_success: false,
}

const authReducer = (state = initalState, action) => {
  const { type, payload } = action
  switch (type) {
    case t.LOGIN:
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
      }
    case t.SET_USER:
      return {
        ...state,
        user: payload
      }
    case t.SET_ERROR_AUTH:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}

export default authReducer
