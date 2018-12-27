import { getInitialData } from "../utils/api";
import {
  STORE_RETREATS,
  STORE_TEACHERS,
  STORE_LOCATIONS,
  STORE_FEES
} from "./types";

/*
    Make a API call to our "database" to get our initial data.
    These API calls are Promises and will resolve with a .then()
    Deconstruct the returned data { users, questions }

    Then, dispatch the resolved data from the API using dispatch()
 */

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ retreats, teachers, locations, fees }) => {
      dispatch(storeRetreats(retreats));
      dispatch(storeTeachers(teachers));
      dispatch(storeLocations(locations));
      dispatch(storeFees(fees));
    });
  };
}

function storeRetreats(retreats) {
  return {
    type: STORE_RETREATS,
    retreats
  };
}

function storeTeachers(teachers) {
  return {
    type: STORE_TEACHERS,
    teachers
  };
}

function storeLocations(locations) {
  return {
    type: STORE_LOCATIONS,
    locations
  };
}

function storeFees(fees) {
  return {
    type: STORE_FEES,
    fees
  };
}
