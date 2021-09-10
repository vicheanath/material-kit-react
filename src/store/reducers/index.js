import { combineReducers } from "redux";
import authReducer from "src/store/reducers/auth"
import uiReducer from "src/store/reducers/ui";
import userReducer from "src/store/reducers/user";
export default combineReducers({
  auth: authReducer,
  ui: uiReducer,
  user: userReducer
})
