import { CREATE_CONTACT } from "../actions/create.action";

const initialState = {
  data: [],
  error: null,
};

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default createReducer;
