import React from 'react';
import PropTypes from 'prop-types';
import './Sprite.css';

class Sprite extends React.PureComponent{
  constructor(props) {
    super(props)
  };
render(){
    return (
        <div>{this.props.sprite}</div>
    )
  }
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
