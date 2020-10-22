import axios from "axios";
export const EDIT_CONTACT = "EDIT_CONTACT";

export const setEdit = (value) => {
  return {
    type: EDIT_CONTACT,
    payload: value,
  };
};

export const updateActions = (values, event, history, id) => (dispatch) => {
  event.preventDefault();
  return axios
    .put(`${process.env.REACT_APP_CONTACT_API}/${id}`, values)
    .then((response) => {
      console.log("res update", response);
      dispatch(setEdit(response.data));
      document.location.href = `/`;
    })
    .catch((error) => {
      console.log(error);
    });
};
