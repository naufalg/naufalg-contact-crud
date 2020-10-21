import { combineReducers } from "redux";
import getCrudReducer from "./getCrud.reducer";
import getDetailReducer from "./getDetail.reducer";
import createReducer from "./create.reducer";

const rootReducer = combineReducers({
  getCrudReducer,
  getDetailReducer,
  createReducer,
});

export default rootReducer;
