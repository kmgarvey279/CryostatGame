import React from 'react';
import PropTypes from 'prop-types';
import File from '../File/File';
import './Select.css';


function Select(props){
  let fileOne = <File number={1} name={props.saves[1].player.name} saves={props.saves} game={props.game} relation={'normal'}/>;
  let fileTwo = <File number={2} name={props.saves[2].player.name} saves={props.saves} game={props.game} relation={'normal'}/>;
  let fileThree = <File number={3} name={props.saves[3].player.name} saves={props.saves} game={props.game} relation={'normal'}/>;
  if(props.menu.selectedMenu === 'start'){ 
    if(props.menu.selectedOption === 1){
      fileOne = <div>Select a difficulty<br/><div id="difficulty-options"><span id="difficulty-option" className={props.difficulty === 'normal' ? 'selected-difficulty' : ''}>Normal</span>  <span id="difficulty-option" className={props.difficulty === 'hard' ? 'selected-difficulty' : ''}>Hard</span></div></div>
    } else if(props.menu.selectedOption === 2){
      fileTwo = <div>Select a difficulty<br/><div id="difficulty-options"><span id="difficulty-option" className={props.difficulty === 'normal' ? 'selected-difficulty' : ''}>Normal</span><span className={props.difficulty === 'hard' ? 'selected-difficulty' : ''}>Hard</span></div></div>
    } else if(props.menu.selectedOption === 3){
      fileThree = <div>Select a difficulty<br/><div id="difficulty-options"><span id="difficulty-option" className={props.difficulty === 'normal' ? 'selected-difficulty' : ''}>Normal</span><span className={props.difficulty === 'hard' ? 'selected-difficulty' : ''}>Hard</span></div></div>
    }
  }
  let deleteFile = "DELETE FILE";
  let copyFile = "COPY FILE";

  let heading;
  if (props.menu.selectedMenu == 'select' || props.menu.selectedMenu == 'start'){
    heading = "Select a File";
  } else if (props.menu.selectedMenu == 'delete'){
    heading = "Select a File to Delete";
    deleteFile = "RETURN TO FILE SELECT";
  } else if (props.menu.selectedMenu == 'copy'){
    heading = "Select a File to Copy";
    copyFile = "RETURN TO FILE SELECT";
  } else if (props.menu.selectedMenu == 'copySelected'){
    heading = "Select a File to Copy To";
    copyFile = "RETURN TO FILE SELECT";
  };

  function isSelected(option) {
    if (props.menu.selectedOption == option) {
      if(props.menu.selectedMenu == 'delete' && option < 4) {
        return "delete";
      } else if(props.menu.selectedMenu === 'copy' && option < 4) {
        return "copy";
      } else if(props.menu.selectedMenu == 'copySelected' && option < 4) {
        return "copyTo";
      } else {
        return "selected";
      };
    };
    if (props.menu.selectedMenu === 'copySelected' && props.menu.gameToCopy === option) {
      return "copy";
    } 
  }

  return (
    <div className="select-wrap">
      <div className="selectScreen">
        <h2>{heading}</h2>
        <div id={isSelected(1)+'File'} className="file">
          {fileOne}
        </div>
        <div id={isSelected(2)+'File'} className="file">
          {fileTwo}
        </div>
        <div id={isSelected(3)+'File'} className="file">
          {fileThree} 
        </div>
        <div id={isSelected(4)}>
          <h4>{deleteFile}</h4>
        </div>
        <div id={isSelected(5)}>
          <h4>{copyFile}</h4>
        </div>
        <div id={isSelected(6)}>
          <h4>RETURN TO TITLE</h4>
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  menu: PropTypes.object.isRequired,
  player: PropTypes.object,
  game: PropTypes.object,
  saves: PropTypes.object,
  difficulty: PropTypes.string
}

export default Select;
