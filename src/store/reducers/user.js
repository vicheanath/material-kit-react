import * as t from 'src/store/type'

const initalState = {
  data: [],
}

const userReducer = (state = initalState, action) => {
  const { type, payload } = action
  switch (type) {
    case t.GET_USER_DATA:
      return {
        ...state,
        data:payload
      }
    default:
      return state
  }
}

export default userReducer
