import { DELETE_CONTACT } from "../actions/delete.action";

const initialState = {
  data: [],
  error: null,
};

const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CONTACT:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default deleteReducer;
