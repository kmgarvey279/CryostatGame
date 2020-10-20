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
  if(door.isLocked === true){
    status = 'locked';
  } else {
    status = door.status;
  };
  // if(status === 'open'){
  //   sprite = '';
  // } else {
    let key = ''; 
    if(typeof door.isLocked === "string"){
      key = door.isLocked.charAt(0).toUpperCase() + door.isLocked.slice(1);
    };
    if(props.branch === 'prologue'){
      sprite = status + 'PrologueDoor' + direction
    } else {
      sprite = status + 'Door' + direction + key
    };
  // }

  return (
    <div id={"door" + direction}>
      {roomConsts.sprites[sprite]}
    </div>
  )
};

Door.propTypes = {
  content: PropTypes.array,
  doors: PropTypes.object,
  branch: PropTypes.string
};

export default Door;
