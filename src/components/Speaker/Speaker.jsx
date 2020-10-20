import React from 'react';
import PropTypes from 'prop-types';
import './Speaker.css';
import mutinyPortrait from '../../assets/images/npc/mutiny-portrait.gif';
import blainePortrait from '../../assets/images/npc/blaine-portrait.gif';
import clairePortrait from '../../assets/images/npc/claire-portrait.gif';
import lucyYoungPortrait from '../../assets/images/npc/lucy-young-portrait.gif';
import lucyYoungPortraitAnnoyed from '../../assets/images/npc/lucy-young-portrait-annoyed.gif';

function Speaker(props){
  let color;
  let portrait;
  if (props.speaker === 'Automated System'){
    color = 'default-speaker';
  } else if (props.speaker === 'Claire'){
    color = 'claire-speaker';
    portrait = <img src={clairePortrait} height="200" width="210" className="claire-portrait"/>
  } else if (props.speaker === 'Spikey Haired Girl' || props.speaker === 'Mutiny'){
    color = 'mutiny-speaker';
    portrait = <img src={mutinyPortrait} height="200" width="210" className="claire-portrait"/>
  };
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
