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
  } else if(status === "stand" || status === "rise" || status === "sink" || status === "walk" || status === "knockback" || status === "strike" || status === "dash" || status === 'guard'){
    sprite = playerConsts.sprites[status][direction];
  } else if(status === 'dead' || status === 'sick' || status === 'dead2' || status === 'fall' | status === 'vision' || status === 'warp' || status === 'sink' || status === 'sit' || status === 'sit2' || status === 'bright' || status === 'cryo'){
    sprite = playerConsts.sprites[status];
  } else if (status === "shoot"){
    sprite = playerConsts.sprites.shoot[props.player.currentWeapon][direction];
  } else if (status === "charge"){
    sprite = playerConsts.sprites.charge[props.player.currentWeapon][direction];
  } else {
    sprite = playerConsts.sprites['stand'][direction];
  };
  let specialClass = '';
  if(props.player.charge === true){
    specialClass = 'player-charge-animation';
  } else if (props.value === 'WR'){ 
    specialClass = 'player-up';
  }
  let staminaBar;
  let stamina = (props.player.stamina * 2) + '%';
  let barType;
  if(props.player.staminaRecover){
    barType ="stamina-bar-recover";
  } else {
    barType = "stamina-bar";
  };
  if(props.player.stamina < 50){
    staminaBar = <div className="stamina-bar-container"><div className={barType} style={{width: stamina}}></div></div>
  }


  return (
    <div className={specialClass}>
      {staminaBar}
      {sprite}
    </div>
  )
};

Player.propTypes = {
  player: PropTypes.object,
  value: PropTypes.string
};

export default Player;