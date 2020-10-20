import React from 'react';
import PropTypes from 'prop-types';
import './MPBar.css';
import playerParticleEast from '../../assets/images/player/playerParticleEast.gif';

function MPBar(props) {
  let magic = props.magic + '%';
  return (
    <div className="bar-container">
      <div className="entanglement-bar" style={{width: magic}}>
      </div>
      <span id="bar-background"></span>
    </div>
  );
}

MPBar.propTypes = {
  magic: PropTypes.number.isRequired
};

export default MPBar;