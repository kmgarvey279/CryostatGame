import React from 'react';
import PropTypes from 'prop-types';
import './Speaker.css';

function Speaker(props){
  let color;
  let portrait;
  if (props.speaker === ''){
    color = 'null-speaker';
  } else if (props.speaker === 'Claire'){
    color = 'claire-speaker';
  } else if (props.speaker === 'Lucy'){
    color = 'lucy-speaker';
  } else if (props.speaker === 'Blaine' || props.speaker === 'Tacticool'){
    color = 'blaine-speaker';
  } else if (props.speaker === 'President'){
    color = 'president-speaker';
  } else if (props.speaker === 'Shad'){
    color = 'shad-speaker';
  } else if (props.speaker === 'Spiky Haired Girl'){
    color = 'mutiny-speaker-long';
  } else if (props.speaker === 'Mutiny'){
    color = 'mutiny-speaker';
  } else if (props.speaker === 'Weird Machine'){
    color = 'default-speaker-long';
  } else {
    color = 'default-speaker';
  }
  return (
    <div className={color}>
      {portrait}
      <span id="speaker-text">{props.speaker}</span>
    </div>
  )
}

Speaker.propTypes = {
  speaker: PropTypes.string
};

export default Speaker;
