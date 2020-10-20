
//Constants
export const UPDATE_BOSS_KIND = "UPDATE_BOSS_KIND";
export const UPDATE_BOSS_NAME = "UPDATE_BOSS_NAME";
export const UPDATE_BOSS_TITLES = "UPDATE_BOSS_TITLES";
export const UPDATE_BOSS_STATUS = "UPDATE_BOSS_STATUS";
export const UPDATE_BOSS_LOCATION = "UPDATE_BOSS_LOCATION";
export const UPDATE_BOSS_DIRECTION = "UPDATE_BOSS_DIRECTION";
export const UPDATE_BOSS_HEALTH = "UPDATE_ENEMY_HEALTH";
export const UPDATE_TILE_ARRAY = "UPDATE_TILE_ARRAY";
export const UPDATE_BOSS_ATTACK = "UPDATE_BOSS_ATTACK";
export const UPDATE_BEAM = "UPDATE_BEAM";

//Action Creators
export function updateBossName(newName) {
    return {
      type: UPDATE_BOSS_NAME,
      name: newName,
    }
  }

  export function updateBossKind(newKind) {
    return {
      type: UPDATE_BOSS_KIND,
      kind: newKind,
    }
  }

  export function updateBossTitles(newTitles) {
    return {
      type: UPDATE_BOSS_TITLES,
      titles: newTitles,
    }
  }

export function updateBossLocation(newLocation) {
  return {
    type: UPDATE_BOSS_LOCATION,
    location: newLocation,
  }
}

export function updateBossDirection(newDirection) {
  return {
    type: UPDATE_BOSS_DIRECTION,
    direction: newDirection,
  }
}

export function updateBossStatus(newStatus) {
  return {
    type: UPDATE_BOSS_STATUS,
    status: newStatus
  }
}

export function updateBossHealth(newHealth) {
  return {
    type: UPDATE_BOSS_HEALTH,
    health: newHealth
  }
}

export function updateTileArray(newArray) {
    return {
      type: UPDATE_TILE_ARRAY,
      tileArr: newArray
    }
  }

  export function updateBossAttack(attackStatus) {
    return {
      type: UPDATE_BOSS_ATTACK,
      attack: attackStatus
    }
  }

  export function updateBeam(beam) {
    return {
      type: UPDATE_BEAM,
      beam: beam
    }
  }
  


//Initial State
const initialState = {
    status: null,
    location: 0,
    direction: 'south',
    health: '',
    tileArr: [],
    name: '',
    kind: '',
    titles: [],
    attack: false,
    beam: null
}

//Reducer
const bossReducer = (state = initialState, action) => {
  let newState;
  const { name, kind, titles, status, location, direction, health, tileArr, attack, beam} = action;
  switch (action.type) {
        case UPDATE_BOSS_NAME:
            newState = Object.assign({}, state, {
              name: name
            });
            return newState;
        case UPDATE_BOSS_KIND:
          newState = Object.assign({}, state, {
            kind: kind
          });
          return newState;
        case UPDATE_BOSS_TITLES:
            newState = Object.assign({}, state, {
                titles: titles
            });
            return newState;
        case UPDATE_BOSS_STATUS:
            newState = Object.assign({}, state, {
              status: status
            });
            return newState;
        case UPDATE_BOSS_LOCATION:
            newState = Object.assign({}, state, {
              location: location,
            });
            return newState;
        case UPDATE_BOSS_DIRECTION:
          newState = Object.assign({}, state, {
            direction: direction,
          });
          return newState;
        case UPDATE_BOSS_HEALTH:
            newState = Object.assign({}, state, {
              health: health
            });
            return newState;
        case UPDATE_TILE_ARRAY:
            newState = Object.assign({}, state, {
                tileArr: tileArr
            });
            return newState;
        case UPDATE_BOSS_ATTACK:
          newState = Object.assign({}, state, {
              attack: attack
          });
          return newState;
        case UPDATE_BEAM:
          newState = Object.assign({}, state, {
              beam: beam
          });
          return newState;
        default:
            return state;
          }
        };
    

export default bossReducer;
