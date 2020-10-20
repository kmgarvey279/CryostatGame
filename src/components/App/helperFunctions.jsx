export function getDifference(direction) {
  if(direction == 'north') {
    return -1;
  } else if (direction == 'east') {
    return 13;
  } else if (direction == 'south') {
    return 1;
  } else if (direction == 'west'){
    return -13;
  } else if (direction == 'northWest') {
    return -14;
  } else if (direction == 'northEast') {
    return 12;
  } else if (direction == 'southWest') {
    return -12;
  } else if (direction == 'southEast') {
    return 14;
  };
}

export function reverseDirection(direction) {
  if (direction == 'north') {
    return 'south';
  } else if (direction == 'south') {
    return 'north';
  } else if (direction == 'east') {
    return 'west';
  } else if (direction == 'west'){
    return 'east';
  } else if (direction == 'northEast'){
    return 'southWest';
  } else if (direction == 'southWest'){
    return 'northEast';
  } else if (direction == 'northWest'){
    return 'southEast';
  } else if (direction == 'southEast'){
    return 'northWest';
  }
}

export function getDirection(num) {
  const north = [15, 28, 41, 54, 67, 80, 93, 106, 119, 132];
  const south = [26, 39, 52, 65, 78, 91, 104, 117, 130, 143];
  if(north.includes(num)){
    return 'south';
  } else if (south.includes(num)){
    return 'north';
  } else if (num < 13) {
    return 'east';
  } else if (num > 145) {
    return 'west';
  };
}

export function checkForPlayer(enemyLocation, playerLocation) {
    if (enemyLocation - 1 === playerLocation || enemyLocation -2 === playerLocation) {
      return 'north'
    } else if (enemyLocation + 13 == playerLocation || enemyLocation + 26 == playerLocation) {
      return 'east';
    } else if (enemyLocation + 1 == playerLocation || enemyLocation + 2 == playerLocation ) {
      return 'south';
    } else if (enemyLocation -13 == playerLocation || enemyLocation -26 == playerLocation) {
      return 'west';
    } else {
      return false;
    }
  }
