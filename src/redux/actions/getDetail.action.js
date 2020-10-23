import axios from "axios";
export const GET_DETAIL_REQUEST = "GET_DETAIL_REQUEST";
export const GET_DETAIL_SUCCESS = "GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAILED = "GET_DETAIL_FAILED";

export const getDetailRequest = () => {
  return {
    type: GET_DETAIL_REQUEST,
  };
};

export const getDetailSuccess = (value) => {
  return {
    type: GET_DETAIL_SUCCESS,
    payload:value,
  };
};

export const getDetailFailed = (error) => {
  return {
    type: GET_DETAIL_FAILED,
    error,
  };
};

export function getDetailActions(id) {
  return function (dispatch) {
    dispatch(getDetailRequest(id));
    // console.log("tes action detail");
    const contactId = id;
    const getUrl = process.env.REACT_APP_CONTACT_API;
    const url1 = `${getUrl}/${contactId}`;
    axios
      .get(url1)
      .then((result) => dispatch(getDetailSuccess(result.data)))
      .catch((error) => dispatch(getDetailFailed(error)));
  };
}
