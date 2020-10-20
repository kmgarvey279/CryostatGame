import React from 'react';
import PropTypes from 'prop-types';
import './Player.css';
import playerReducer from '../../redux/modules/player/player';
import * as playerConsts from '../../redux/modules/player/playerConstants';

function Player(props){
  let direction = props.player.direction;
  let status = props.player.status;
  let sprite;
  if(status === 'slide'){
    sprite = playerConsts.sprites.stand[direction];
  } else if(status === "stand" || status === "walk" || status === "knockback" || status === "strike" || status === "dash" || status === 'guard'){
    sprite = playerConsts.sprites[status][direction];
  } else if(status === 'dead' || status === 'fall' || status === 'sink' || status === 'bright'){
    sprite = playerConsts.sprites[status];
  } else if (status === "shoot"){
    sprite = playerConsts.sprites.shoot[props.player.currentWeapon][direction];
  } else {
    sprite = playerConsts.sprites['stand'][direction];
  }

  return (
    <div>
      {sprite}
    </div>
  )
};

Player.propTypes = {
  player: PropTypes.object,
};

export default Player;