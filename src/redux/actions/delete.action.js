import axios from "axios";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const setDelete = (value) => {
  return {
    type: DELETE_CONTACT,
    payload: value,
  };
};

export const deleteActions = (id) => (dispatch) => {
  return axios
    .delete(`${process.env.REACT_APP_CONTACT_API}/${id}`)
    .then((response) => {
        console.log("res delete", response);
    //   dispatch(getCrudRequest());
        dispatch(setDelete(response.data));
      document.location.href = "/";
    })
    .catch((error) => {
      console.log(error);
    });
};
