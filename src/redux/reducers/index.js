import { combineReducers } from "redux";
import getCrudReducer from "./getCrud.reducer";
import getDetailReducer from "./getDetail.reducer";
import createReducer from "./create.reducer";
import updateReducer from "./update.reducer";
import deleteReducer from "./delete.reducer";

const rootReducer = combineReducers({
  getCrudReducer,
  getDetailReducer,
  createReducer,
  updateReducer,
  deleteReducer,
});

export default rootReducer;
