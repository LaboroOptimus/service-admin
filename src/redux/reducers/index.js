import {combineReducers} from "redux";
import loginReducer from "./login";
import requestReducer from "./request";

export default combineReducers({
    login:loginReducer,
    request: requestReducer,
})