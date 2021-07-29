import { combineReducers } from "redux";
import todoListPage from "../pages/TodoListPage/reducers";

const rootReducer = combineReducers({ todoListPage });

export default rootReducer;
