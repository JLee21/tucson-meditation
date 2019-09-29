import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
// import retreatsReducer from "./retreatsReducer";
import {
  STORE_RETREATS,
  STORE_TEACHERS,
  STORE_LOCATIONS,
  STORE_FEES
} from "../actions/types";

export default combineReducers({
  retreats,
  teachers,
  locations,
  fees,
  form: formReducer
});

function retreats(state = {}, action) {
  switch (action.type) {
    case STORE_RETREATS:
      return {
        ...state,
        ...action.retreats
      };
    default:
      return state;
  }
}

function teachers(state = {}, action) {
  switch (action.type) {
    case STORE_TEACHERS:
      return {
        ...state,
        ...action.teachers
      };
    default:
      return state;
  }
}

function locations(state = {}, action) {
  switch (action.type) {
    case STORE_LOCATIONS:
      return {
        ...state,
        ...action.locations
      };
    default:
      return state;
  }
}

function fees(state = {}, action) {
  switch (action.type) {
    case STORE_FEES:
      return {
        ...state,
        ...action.fees
      };
    default:
      return state;
  }
}
