import {
  FAIL_CONTACT,
  GET_CONTACT,
  GET_CONTACTS,
  LOAD_CONTACT,
} from "../actionsTyes/contact";

const initialState = {
  contacList: [],
  loadContact: false,
  errors: null,
  contact: {},
};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACT:
      return { ...state, loadContact: true };
    case GET_CONTACTS:
      return { ...state, contacList: payload.response, loadContact: false };
    case FAIL_CONTACT:
      return { ...state, loadContact: false, errors: payload };
    case GET_CONTACT:
      return {
        ...state,
        contact: payload.response,
      };
    default:
      return state;
  }
};
export default contactReducer;
