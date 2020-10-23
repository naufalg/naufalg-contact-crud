import axios from 'axios';
export const CREATE_CONTACT = 'CREATE_CONTACT';


export const setCreate = (value) => {
    return {
        type: CREATE_CONTACT,
        payload: value,
    };
};

export const createActions = (values, event, history) => (dispatch) => {
    event.preventDefault();
    return axios
        .post(`${process.env.REACT_APP_CONTACT_API}`, values)
        .then((response) => {
            // console.log('res create', response);
            dispatch(setCreate(response.data));
            history.push('/');
        })
        .catch((error) => {
            console.log(error);
        });
};
