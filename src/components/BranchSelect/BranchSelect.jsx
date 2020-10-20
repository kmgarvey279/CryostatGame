import React from 'react';
import PropTypes from 'prop-types';
import File from '../File/File';
import './BranchSelect.css';

function BranchSelect(props){
    let fileOne;
    let fileTwo;
    let fileThree;
    let grayScale;
    if (props.game.file == 1) {
      if(props.game.branch === 1){
        fileOne = <File number={1} name={props.player.name} saves={props.saves} game={props.game} relation={'current'}/>;
        fileTwo = <File number={2} name={props.player.name} saves={props.saves} game={props.game} relation={'new'}/>;
        fileThree = <File number={3} name={props.player.name} saves={props.saves} game={props.game} relation={'null'}/>;
        grayScale = 1;
      } else {
        fileOne = <File number={1} name={props.player.name} saves={props.saves} game={props.game} relation={'new'}/>;
        fileTwo = <File number={2} name={props.player.name} saves={props.saves} game={props.game} relation={'current'}/>;
        fileThree = <File number={3} name={props.player.name} saves={props.saves} game={props.game} relation={'null'}/>;
        grayScale = 2;
      };
    } else if (props.game.file == 2) {
      if(props.game.branch === 1){
        fileOne = <File number={1} name={props.player.name} saves={props.saves} game={props.game} relation={'null'}/>;
        fileTwo = <File number={2} name={props.player.name} saves={props.saves} game={props.game} relation={'current'}/>;
        fileThree = <File number={3} name={props.player.name} saves={props.saves} game={props.game} relation={'new'}/>;
        grayScale = 2;
      } else {
        fileOne = <File number={1} name={props.player.name} saves={props.saves} game={props.game} relation={'null'}/>;
        fileTwo = <File number={2} name={props.player.name} saves={props.saves} game={props.game} relation={'new'}/>;
        fileThree = <File number={3} name={props.player.name} saves={props.saves} game={props.game} relation={'current'}/>;
        grayScale = 3;
      }
    } else {
      if(props.game.branch === 1){
        fileOne = <File number={1} name={props.player.name} saves={props.saves} game={props.game} relation={'null'}/>;
        fileTwo = <File number={2} name={props.player.name} saves={props.saves} game={props.game} relation={'current'}/>;
        fileThree = <File number={3} name={props.player.name} saves={props.saves} game={props.game} relation={'new'}/>;
        grayScale = 2;
      } else {
        fileOne = <File number={1} name={props.player.name} saves={props.saves} game={props.game} relation={'null'}/>;
        fileTwo = <File number={2} name={props.player.name} saves={props.saves} game={props.game} relation={'new'}/>;
        fileThree = <File number={3} name={props.player.name} saves={props.saves} game={props.game} relation={'current'}/>;
        grayScale = 3;
      }
     };

  function isSelected(option) {
    if (grayScale === option && props.menu.selectedOption == option) {
      return "selectedVoid";
    } else if (grayScale === option) {
      return "void";
    } else if (props.menu.selectedOption == option) {
      return "selected";
    } 
  }

  return (
    <div className="select-wrap">
      <div className="selectScreen-2">
        <h2>Select a File</h2>
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
          <h4>DELETE FILE</h4>
        </div>
        <div id={isSelected(5)}>
          <h4>COPY FILE</h4>
        </div>
        <div id={isSelected(6)}>
          <h4>RETURN TO TITLE</h4>
        </div>
        <div>
          <h4><span className="button-prompt">Enter</span> / <span className="button-prompt">Space</span> : Confirm Selection</h4>
        </div>
      </div>
    </div>
  );
}

BranchSelect.propTypes = {
  menu: PropTypes.object.isRequired,
  player: PropTypes.object,
  game: PropTypes.object,
  saves: PropTypes.object
}

export default BranchSelect;