import * as roomConsts from '../../redux/modules/rooms/roomConstants';
import React from 'react';
import PropTypes from 'prop-types';
import './Door.css';
import doorReducer from '../../redux/modules/doors';

function Door(props){
  let doorArr = props.content.find(function(content) {
    return content[0] == 'door';
  });
  let door = props.doors[doorArr[1]];
  let direction = door.direction.charAt(0).toUpperCase() + door.direction.slice(1);
  let status;
  let sprite;
  if(door.isLocked === true && door.status === 'closed'){
    status = 'locked';
  } else {
    status = door.status;
  };
  let key = ''; 
  if(typeof door.isLocked === "string"){
    key = door.isLocked.charAt(0).toUpperCase() + door.isLocked.slice(1);
  };
  if(props.branch === 'prologue'){
    if(door.doorId === 'P7-A' || door.doorId === 'P8-A'){
      sprite = '';
    } else if(door.doorId.includes('double1')){
      if(status === 'openPrologue'){
        sprite = 'openPrologueDoor' + direction + 1
      } else {
        sprite = 'closedPrologueDoor' + direction + 1 
      };
    } else if(door.doorId.includes('double2')){
      if(status === 'openPrologue'){
        sprite = 'openPrologueDoor' + direction + 2
      } else {
        sprite = 'closedPrologueDoor' + direction + 2
      };
    } else if(status === 'openPrologue'){
      sprite = 'openPrologueDoor' + direction
    } else {
      sprite = 'closedPrologueDoor' + direction
    };
  } else if(props.branch === 3 && (direction === 'East' || direction === 'West')){
    sprite = status + 'Door' + direction + key + 'Spooky'
  } else if(status === 'open' || door.isLocked === 'open'){
    sprite = 'openDoor' + direction
  } else {
    sprite = status + 'Door' + direction + key
  };

  return (
    <div id={"door" + direction}>
      {roomConsts.sprites[sprite]}
    </div>
  )
};

Door.propTypes = {
  content: PropTypes.array,
  doors: PropTypes.object,
  branch: PropTypes.string,
  playerLocation: PropTypes.number
};

export default Door;
