import React from 'react';
import PropTypes from 'prop-types';
import './File.css';
import * as text from '../../redux/modules/text/textConstants';
function File(props){
  let fileInfo;
  let difficulty = 'Normal';
  if(props.saves[props.number].game.difficulty === 'hard'){
    difficulty = 'Hard';
  }
  if(props.saves[props.number].fileStatus === 'empty') {
    fileInfo = 
    <div>
      <span id="file-num">File {props.number}</span> - New Game
    </div>;
  } else {
    fileInfo = 
    <div>
      <span id="file-num">File {props.number}</span> - {difficulty} <br/> Cryonics Storage Facility: {text.roomNames[props.saves[props.number].game.roomId - 1]}
    </div>;
  };
  return (
    <div>
        {fileInfo}
    </div>
  );
  };
  
  File.propTypes = {
    saves: PropTypes.object,
    number: PropTypes.string,
    name: PropTypes.string,
    game: PropTypes.string,
    relation: PropTypes.string
  }
  
  export default File;
  