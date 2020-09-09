//Constants
// export const UPDATE_PROJECTILE = "UPDATE_PROJECTILE";
export const UPDATE_LASERS = "UPDATE_LASERS";
export const NULL_ALL_LASERS = "NULL_ALL_LASERS";

//Action Creators
export function updateLasers(newLasers) {
  return {
    type: UPDATE_LASERS,
    lasers: newLasers
  }
}

export function nullAllLasers() {
  return {
    type: NULL_ALL_LASERS
  }
}

//Initial State
const initialState = {
    lasers: []
};

//Reducer
const projectilesReducer = (state = initialState, action) => {
  let newState;
  let newSwitch;
  const { lasers } = action;
  switch (action.type) {
    case UPDATE_LASERS:
    newState = Object.assign({}, state, {
        lasers: lasers
    });
    return newState;
    case NULL_ALL_LASERS:
    newState = Object.assign({}, state, {
        lasers: []
    });
    return newState;
  default:
    return state;
  }
};

export default projectilesReducer;