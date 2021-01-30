import React from 'react';

//Constants
export const SET_ROOMID = "SET_ROOMID";
export const SET_PREVIOUS_ROOMID = "SET_PREVIOUS_ROOMID";
export const CHANGE_GAMESTATE = "CHANGE_GAMESTATE";
export const SET_RESPAWNPOINT = "SET_RESPAWNPOINT";
export const TOGGLE_WEST = "TOGGLE_WEST";
export const TOGGLE_EAST = "TOGGLE_EAST";
export const TOGGLE_NORTH = "TOGGLE_NORTH";
export const TOGGLE_SOUTH = "TOGGLE_SOUTH";
export const TOGGLE_FIRE = "TOGGLE_FIRE";
export const TOGGLE_SKILL = "TOGGLE_SKILL";
export const UPDATE_TIMERS = "UPDATE_TIMERS";
export const CLEAR_TIMERS = "CLEAR_TIMERS";
export const LOAD_GAME = "LOAD_GAME";
export const SET_FILE = "SET_FILE";
export const SET_BRANCH = "SET_BRANCH";
export const SET_EYE = "SET_EYE";
export const CHANGE_DESTINATION = "CHANGE_DESTINATION";
export const TOGGLE_LIGHTS = "TOGGLE_LIGHTS";
export const CHANGE_FILTER = "CHANGE_FILTER";
export const TOGGLE_DISPLAY_BRANCH = "TOGGLE_DISPLAY_BRANCH";
export const TOGGLE_SPECIAL = "TOGGLE_SPECIAL";
export const CHANGE_MIND_DEPTH = "CHANGE_MIND_DEPTH";
export const CHANGE_DIFFICULTY = "CHANGE_DIFFICULTY";
export const TOGGLE_POWER_LEFT = "TOGGLE_POWER_LEFT";
export const TOGGLE_POWER_RIGHT = "TOGGLE_POWER_RIGHT";


//Action Creators
export function loadGame(gameToLoad) {
  return {
    type: LOAD_GAME,
    gameToLoad: gameToLoad
  }
};
export function changeGameState(newGameState) {
  return {
    type: CHANGE_GAMESTATE,
    gameState: newGameState
  };
};
export function setRoomId(newRoomId) {
  return {
    type: SET_ROOMID,
    roomId: newRoomId
  };
};
export function setPreviousRoomId(newPreviousRoomId) {
  return {
    type: SET_PREVIOUS_ROOMID,
    previousRoomId: newPreviousRoomId
  };
};

export function setRespawnPoint(newRespawnPoint) {
  return {
    type: SET_RESPAWNPOINT,
    respawnPoint: newRespawnPoint
  }
};

export function toggleNorth(newBool) {
  return {
    type: TOGGLE_NORTH,
    north: newBool
  }
};

export function toggleEast(newBool) {
  return {
    type: TOGGLE_EAST,
    east: newBool
  }
};

export function toggleWest(newBool) {
  return {
    type: TOGGLE_WEST,
    west: newBool
  }
};

export function toggleSouth(newBool) {
  return {
    type: TOGGLE_SOUTH,
    south: newBool
  }
};

export function toggleFire(newBool) {
  return {
    type: TOGGLE_FIRE,
    fire: newBool
  }
};

export function toggleSkill(newBool) {
  return {
    type: TOGGLE_SKILL,
    skill: newBool
  }
};

  export function updateTimers(newTimerArr) {
    return {
      type: UPDATE_TIMERS,
      timers: newTimerArr
    }
  };

  export function clearTimers() {
    return {
      type: CLEAR_TIMERS,
      timers: [],
    }
  };

  export function setFile(file) {
    return {
      type: SET_FILE,
      file: file
    }
  }

  export function setBranch(branch) {
    return {
      type: SET_BRANCH,
      branch: branch
    }
  }

  export function setEye(eyeState) {
    return {
      type: SET_EYE,
      eye: eyeState
    }
  }

  export function changeDestination(destination) {
    return {
      type: CHANGE_DESTINATION,
      destination: destination
    }
  }

  export function toggleLights(lightState) {
    return {
      type: TOGGLE_LIGHTS,
      lights: lightState
    }
  }

  export function changeFilter(filter) {
    return {
      type: CHANGE_FILTER,
      filter: filter
    }
  }

  export function toggleDisplayBranch(newBool) {
    return {
      type: TOGGLE_DISPLAY_BRANCH,
      displayBranch: newBool
    }
  }

  export function toggleSpecial(newBool) {
    return {
      type: TOGGLE_SPECIAL,
      special: newBool
    }
  }

  export function changeMindDepth(newDepth) {
    return {
      type: CHANGE_MIND_DEPTH,
      mindDepth: newDepth
    }
  }

  export function changeDifficulty(newDifficulty) {
    return {
      type: CHANGE_DIFFICULTY,
      difficulty: newDifficulty
    }
  }

  export function togglePowerLeft(newBool) {
    return {
      type: TOGGLE_POWER_LEFT,
      powerLeft: newBool
    }
  }

  export function togglePowerRight(newBool) {
    return {
      type: TOGGLE_POWER_RIGHT,
      powerRight: newBool
    }
  }


//Initial State
const initialState = {
  branch: 2,
  difficulty: 'normal',
  roomId: 5,
  previousRoomId: 'hallway2',
  gameState: 'title',
  respawnPoint: '',
  timers: [],
  east: false,
  west: false,
  south: false,
  north: false,
  fire: false,
  skill: false,
  file: '',
  eye: 'none',
  lights: 'on',
  filter: '',
  destination: '',
  displayBranch: false,
  special: false,
  powerRight: true,
  powerLeft: false,
  mindDepth: 0
}

//Reducer
const gameReducer = (state = initialState, action) => {
  let newState;
  const { gameToLoad, gameState, roomId, respawnPoint, previousRoomId, difficulty, north, east, west, south, fire,  skill, timers, filter, file, branch, eye, destination, lights, displayBranch, special, mindDepth, powerLeft, powerRight} = action;
  switch (action.type) {
    case LOAD_GAME:
      return gameToLoad;
    case CHANGE_GAMESTATE:
      newState = Object.assign({}, state, {
        gameState: gameState
      });
      return newState;
    case SET_ROOMID:
      newState = Object.assign({}, state, {
        roomId: roomId
      });
      return newState;
    case SET_PREVIOUS_ROOMID:
      newState = Object.assign({}, state, {
        previousRoomId: previousRoomId
      });
      return newState;
    case SET_RESPAWNPOINT:
      newState = Object.assign({}, state, {
        respawnPoint: respawnPoint
      });
      return newState;
    case TOGGLE_NORTH:
      newState = Object.assign({}, state, {
        north: north
      });
      return newState;
    case TOGGLE_SOUTH:
      newState = Object.assign({}, state, {
        south: south
      });
      return newState;
    case TOGGLE_EAST:
      newState = Object.assign({}, state, {
        east: east
      });
      return newState;
    case TOGGLE_WEST:
      newState = Object.assign({}, state, {
        west: west
      });
      return newState;
    case TOGGLE_FIRE:
      newState = Object.assign({}, state, {
        fire: fire
      });
      return newState;
    case TOGGLE_SKILL:
      newState = Object.assign({}, state, {
        skill: skill
      });
      return newState;
    case UPDATE_TIMERS:
      newState = Object.assign({}, state, {
        timers: timers
      });
      return newState;
    case CLEAR_TIMERS:
      newState = Object.assign({}, state, {
        timers: []
      });
      return newState;
    case SET_FILE:
      newState = Object.assign({}, state, {
        file: file
      });
      return newState;
    case SET_BRANCH:
      newState = Object.assign({}, state, {
        branch: branch
      });
      return newState;
    case SET_EYE:
      newState = Object.assign({}, state, {
        eye: eye
      });
      return newState;
    case CHANGE_DESTINATION:
      newState = Object.assign({}, state, {
        destination: destination
      });
        return newState;
    case TOGGLE_LIGHTS:
      newState = Object.assign({}, state, {
        lights: lights
      });
        return newState;
    case CHANGE_FILTER:
      newState = Object.assign({}, state, {
        filter: filter
      });
        return newState;
    case TOGGLE_DISPLAY_BRANCH:
      newState = Object.assign({}, state, {
        displayBranch: displayBranch
      });
        return newState;
    case TOGGLE_SPECIAL:
      newState = Object.assign({}, state, {
        special: special
      });
        return newState;
    case CHANGE_MIND_DEPTH:
      newState = Object.assign({}, state, {
        mindDepth: mindDepth
      });
        return newState;
    case CHANGE_DIFFICULTY:
      newState = Object.assign({}, state, {
        difficulty: difficulty
      });
        return newState;
    case TOGGLE_POWER_LEFT:
      newState = Object.assign({}, state, {
        powerLeft: powerLeft
      });
        return newState;
    case TOGGLE_POWER_RIGHT:
      newState = Object.assign({}, state, {
        powerRight: powerRight
      });
        return newState;
  default:
    return state;
  }
};

export default gameReducer;
