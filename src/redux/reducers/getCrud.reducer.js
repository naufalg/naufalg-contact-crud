import {
    GET_DATA_REQUEST,
    GET_DATA_SUCCESS,
    GET_DATA_FAILED,
  } from "../actions/getCrud.action";
  
  const initialCrudState = {
    data: [],
    isLoading: false,
    error: null,
  };
  const getCrudReducer = (state = initialCrudState, action) => {
    switch (action.type) {
      case GET_DATA_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case GET_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case GET_DATA_FAILED:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  

  export default getCrudReducer;
