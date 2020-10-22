import { EDIT_CONTACT } from "../actions/update.action";

const initialState = {
  data: [],
  error: null,
};

const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_CONTACT:
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export default updateReducer;
