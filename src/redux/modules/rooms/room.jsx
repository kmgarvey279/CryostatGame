

//Constants
export const NULL_ROOM = "NULL_ROOM";
export const ADD_SQUARE = "ADD_SQUARE";
export const UPDATE_CONTENT = "UPDATE_CONTENT";
export const UPDATE_VALUE = "UPDATE_VALUE";
export const UPDATE_SPRITE = "UPDATE_SPRITE";
export const UPDATE_EMOTE = "UPDATE_EMOTE";
export const UPDATE_TRANSITION = "UPDATE_TRANSITION";
export const TOGGLE_ALERT = "TOGGLE_ALERT";
export const UPDATE_PLAYER_BULLET = "UPDATE_PLAYER_BULLET";
export const UPDATE_BULLET = "UPDATE_BULLET";
export const SET_EXPLOSION = "SET_EXPLOSION";
export const SET_WATERDROP = "SET_WATERDROP";
export const SET_WARNING = "SET_WARNING";
export const SET_SHATTER = "SET_SHATTER";
export const SET_TILE_OVERLAY = "SET_TILE_OVERLAY";

//Action Creators
export function nullRoom() {
  return {
    type: NULL_ROOM,
  };
}
export function addSquare(newSquareId, newValue, newContent, newTileImage, newSprite, newTransition, alertBool, explosion = null, playerBullet = [], bullet = [], warning = false, shatter = 'none', newTileOverlay = 'none', newEmote = null, waterdrop = false) {
  return {
    type: ADD_SQUARE,
    squareId: newSquareId,
    value: newValue,
    content: newContent,
    tileImage: newTileImage,
    sprite: newSprite,
    emote: newEmote,
    transition: newTransition,
    alert: alertBool,
    playerBullet: playerBullet,
    bullet: bullet,
    explosion: explosion,
    waterdrop: waterdrop,
    warning: warning,
    shatter: shatter,
    tileOverlay: newTileOverlay
  };
}
export function updateContent(squareId, newContent) {
  return {
    type: UPDATE_CONTENT,
    squareId: squareId,
    content: newContent,
  };
}
export function updateSprite(squareIdToUpdate, newSprite) {
  return {
    type: UPDATE_SPRITE,
    squareId: squareIdToUpdate,
    sprite: newSprite
  };
}
export function updateEmote(squareIdToUpdate, newEmote) {
  return {
    type: UPDATE_EMOTE,
    squareId: squareIdToUpdate,
    emote: newEmote
  };
}
export function updateTransition(squareIdToUpdate, newTransition) {
  return {
    type: UPDATE_TRANSITION,
    squareId: squareIdToUpdate,
    transition: newTransition
  };
}
export function updateValue(squareIdToUpdate, newValue, newTileImage) {
  return {
    type: UPDATE_VALUE,
    squareId: squareIdToUpdate,
    value: newValue,
    tileImage: newTileImage
  };
}
export function toggleAlert(squareId, alertBool){
  return {
    type: TOGGLE_ALERT,
    squareId: squareId,
    alert: alertBool
  }
}

export function updatePlayerBullet(squareId, playerBullet){
  return {
    type: UPDATE_PLAYER_BULLET,
    squareId: squareId,
    playerBullet: playerBullet
  }
}

export function updateBullet(squareId, bullet){
  return {
    type: UPDATE_BULLET,
    squareId: squareId,
    bullet: bullet
  }
}

export function setExplosion(squareId, explosion){
  return {
    type: SET_EXPLOSION,
    squareId: squareId,
    explosion: explosion
  }
}

export function setWarning(squareId, warning){
  return {
    type: SET_WARNING,
    squareId: squareId,
    warning: warning
  }
}

export function setShatter(squareId, shatter){
  return {
    type: SET_SHATTER,
    squareId: squareId,
    shatter: shatter
  }
}

export function setWaterdrop(squareId, waterdrop){
  return {
    type: SET_WATERDROP,
    squareId: squareId,
    waterdrop: waterdrop
  }
}

export function setTileOverlay(squareId, tileOverlay){
  return {
    type: SET_TILE_OVERLAY,
    squareId: squareId,
    tileOverlay: tileOverlay
  }
}

//Initial State

//Reducer
const roomReducer = (state = {}, action) => {
  let newState;
  let newSquare;
  const { squareId, value, content, tileImage, sprite, emote, transition, alert, playerBullet, bullet, explosion, warning, shatter, tileOverlay, waterdrop} = action;

  switch (action.type) {
    case NULL_ROOM:
      newState = {};
      return newState;
    case ADD_SQUARE:
        newState = Object.assign({}, state, {
          [squareId]: {
            squareId: squareId,
            value: value,
            content: content,
            tileImage: tileImage,
            sprite: sprite,
            emote: emote,
            transition: transition,
            alert: alert,
            bullet: bullet,
            playerBullet: playerBullet,
            explosion: explosion,
            warning: warning,
            shatter: shatter,
            tileOverlay: tileOverlay,
            waterdrop: waterdrop
          }
        });
        return newState;
    case UPDATE_VALUE:
      newSquare = Object.assign({}, state[squareId], {value, tileImage});
      newState = Object.assign({}, state, {
        [squareId]: newSquare
      });
        return newState;
    case UPDATE_CONTENT:
      newSquare = Object.assign({}, state[squareId], {content});
      newState = Object.assign({}, state, {
        [squareId]: newSquare
      });
        return newState;
    case UPDATE_SPRITE:
      newSquare = Object.assign({}, state[squareId], {sprite});
      newState = Object.assign({}, state, {
        [squareId]: newSquare
      });
        return newState;
    case UPDATE_EMOTE:
      newSquare = Object.assign({}, state[squareId], {emote});
      newState = Object.assign({}, state, {
        [squareId]: newSquare
      });
        return newState;
    case TOGGLE_ALERT:
      newSquare = Object.assign({}, state[squareId], {alert});
      newState = Object.assign({}, state, {
        [squareId]: newSquare
      });
        return newState;
    case UPDATE_TRANSITION:
      newSquare = Object.assign({}, state[squareId], {transition});
      newState = Object.assign({}, state, {
        [squareId]: newSquare
      });
        return newState;

    case UPDATE_BULLET:
      newSquare = Object.assign({}, state[squareId], {bullet});
      newState = Object.assign({}, state, {
        [squareId]: newSquare
      });
        return newState;

    case UPDATE_PLAYER_BULLET:
      newSquare = Object.assign({}, state[squareId], {playerBullet});
      newState = Object.assign({}, state, {
        [squareId]: newSquare
      });
        return newState;
        
    case SET_EXPLOSION:
      newSquare = Object.assign({}, state[squareId], {explosion});
      newState = Object.assign({}, state, {
        [squareId]: newSquare
      });
        return newState;
    case SET_WARNING:
        newSquare = Object.assign({}, state[squareId], {warning});
        newState = Object.assign({}, state, {
          [squareId]: newSquare
        });
          return newState;
    case SET_SHATTER:
      newSquare = Object.assign({}, state[squareId], {shatter});
      newState = Object.assign({}, state, {
        [squareId]: newSquare
      });
        return newState;
    case SET_WATERDROP:
      newSquare = Object.assign({}, state[squareId], {waterdrop});
      newState = Object.assign({}, state, {
        [squareId]: newSquare
      });
        return newState;
    case SET_TILE_OVERLAY:
      newSquare = Object.assign({}, state[squareId], {tileOverlay});
      newState = Object.assign({}, state, {
        [squareId]: newSquare
      });
        return newState;
  default:
    return state;
  }
};

export default roomReducer;
