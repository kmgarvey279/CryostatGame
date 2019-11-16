import React from 'react';
import PropTypes from 'prop-types';
import './Sprite.css';

function Sprite(props){
  let spriteClass;
  if (props.squareValue == 'boss') {
    spriteClass = 'boss-sprite';
  } else if (props.player.location === props.squareId && props.player.cloneLocation !== null && props.player.status !== 'dash') {
    if(props.player.activeClone === 1) {
      spriteClass = 'split-player1';
    } else {
      spriteClass = 'split-player2';
    };
  } else if (props.lights === 'off'){
    spriteClass = 'dark-sprite';
  } else {
    spriteClass = 'sprite';
  };

  return (
      <div className={spriteClass} id={props.transition}>{props.sprite}</div>
  )
}

Sprite.propTypes = {
  lights: PropTypes.string,
  sprite: PropTypes.string,
  squareId: PropTypes.number,
  transition: PropTypes.string,
  squareValue: PropTypes.string,
  player: PropTypes.object
};

export default Sprite;
