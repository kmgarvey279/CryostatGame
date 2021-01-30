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
  //prologue
  'startGame': {triggered: false},
  'annoyLucy': {triggered: false},
  'exitStartingRoom': {triggered: false},
  'exitStairway': {triggered: false},
  //part 1
  'smashMachine': {triggered: false},
  //get bracelet in first room
  'getBracelet': {triggered: false},
  //enter hallway1
  'hallwayFight': {triggered: false},
  'hallwayClear': {triggered: false},
  //enter room 7
  'mutinyExit': {triggered: false},
  //open door to midboss
  'midbossOpen': {triggered: false},
  //talk to mutiny
  'mutinyIntro': {triggered: false},
  //exit room 7
  'mutinyExit2': {triggered: false},
  //exit hallway3
  'mutinyExit3': {triggered: false},
  //exit hallway4
  'mutinyExit4': {triggered: false},
  //mutiny enters wound
  'mutinyEnterWound': {triggered: false},
  //funeral dream
  'enterFuneral': {triggered: false},
  'exitFuneral': {triggered: false},
  'exitWound': {triggered: false},
  //mutiny exit room 10
  'mutinyCoreTalk': {triggered: false},
  //talk to mutiny in computer room
  'mutinyComputerTalk': {triggered: false},
  //
  'mutinyMessage': {triggered: false},
  //
  'mutinyMessage2': {triggered: false},
  //activate 5/9 warp 
  'warpOn': {triggered: false},
  //
  'mutinyEnterWound2': {triggered: false},
  'blaineIntro': {triggered: false},
  //mutiny enters wound... again
  'mutinyEnterWound2': {triggered: false},
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
