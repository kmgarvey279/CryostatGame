import React from 'react';
import PropTypes from 'prop-types';
import './Sprite.css';

function Sprite(props){
  let spriteClass;
if (props.player.location === props.squareId && props.player.cloneLocation !== null && props.player.status !== 'dash') {
    if(props.player.activeClone === 1) {
      spriteClass = 'split-player1';
    } else {
      spriteClass = 'split-player2';
    };
  } else if (props.lights === 'off'){
    spriteClass = 'dark-sprite';
  } else if (props.roomId === 3 && props.squareId === 67 && props.special === true){
    spriteClass = 'background-sprite';
  } else if((props.branch === 2 && props.roomId === 3 || props.branch === 3 && props.roomId === 5) && props.squareValue === 'T' && props.squareId === 24){
    spriteClass = 'item';
  } else if(props.squareValue === 'Lzr'){
    spriteClass = 'drone-sprite';
  } else {
    spriteClass = 'sprite';
  };

  return (
      <div className={spriteClass} id={props.transition}>{props.sprite}</div>
  )
}

Sprite.propTypes = {
  boss: PropTypes.object,
  lights: PropTypes.string,
  sprite: PropTypes.string,
  squareId: PropTypes.number,
  transition: PropTypes.string,
  squareValue: PropTypes.string,
  player: PropTypes.object,
  branch: PropTypes.number,
  special: PropTypes.bool, 
  roomId: PropTypes.number
};

export default Sprite;
