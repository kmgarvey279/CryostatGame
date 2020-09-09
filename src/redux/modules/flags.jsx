//Constants
export const TRIGGER_FLAG = "TRIGGER_FLAG";
export const LOAD_FLAGS = "LOAD_FLAGS";

//Action Creators
export function loadFlags(flagsToLoad){
  return {
    type: LOAD_FLAGS,
    flagsToLoad: flagsToLoad
  }
};
export function triggerFlag(flagId) {
  return {
    type: TRIGGER_FLAG,
    flagId: flagId,
    triggered: true
  }
};

//Initial State
const initialState = {
  'bootUp1': {triggered: false},
  //enter room 6
  'intercom1': {triggered: false},
  //enter room 7
  'mutiny1': {triggered: false},
  //finish initial conversation with mutiny
  'mutinyWindow': {triggered: false},
  //examine tube
  'mutinyBigTube': {triggered: false},
  //exit room 7
  'mutiny2': {triggered: false},
  //approach belt in room 7
  'mutiny3': {triggered: false},
  //pass back over belt
  'mutiny4': {triggered: false},
  //enter room 3
  'mutiny5': {triggered: false},
  //fail room 3 puzzle
  'mutiny6': {triggered: false},
  //enter room 4
  'mutiny7': {triggered: false},
  //activate machine in room 4
  'mutiny8': {triggered: false},
  //enter study for first time
  'specialRoom1': {triggered: false},
  //get powerup
  'specialRoom2': {triggered: false},
  //return after getting keycard
  'specialRoom3': {triggered: false},
  //enter room 1 in branch 3
  'clone': {triggered: false},
}

//Reducer
const flagsReducer = (state = initialState, action) => {
  let newState;
  let newFlag;
  const { flagsToLoad, flagId, triggered } = action;

  switch (action.type) {
    case LOAD_FLAGS:
      return flagsToLoad;
    case TRIGGER_FLAG:
      newFlag = Object.assign({}, state[flagId], {triggered});
      newState = Object.assign({}, state, {
        [flagId]: newFlag
      });
      return newState;
  default:
    return state;
  }
};

export default flagsReducer;
