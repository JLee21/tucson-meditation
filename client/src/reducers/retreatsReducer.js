import { STORE_RETREATS } from "../actions/types";

export default function retreats(state = {}, action) {
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
