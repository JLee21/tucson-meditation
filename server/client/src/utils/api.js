import {
  _getRetreats,
  _getTeachers,
  _getLocations,
  _getFees
} from "./_data.js";

/*
  Execute multiple Promise objects using .all
  Once all have resolved, implicit return a object literal shorthand.
 */
export function getInitialData() {
  return Promise.all([
    _getRetreats(),
    _getTeachers(),
    _getLocations(),
    _getFees()
  ]).then(([retreats, teachers, locations, fees]) => ({
    retreats,
    teachers,
    locations,
    fees
  }));
}
