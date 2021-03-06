import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameModule from '../../redux/modules/game';
import * as textModule from '../../redux/modules/text/text';
import './TextBoxes.css'
import Options from '../Options/Options';
import Speaker from '../Speaker/Speaker';
import * as textConsts from '../../redux/modules/text/textConstants';

class TextBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      image: false
    }
  }

  startDownload(){
    let downloadTimer = setInterval(() => {
      let currentProgress = this.state.progress;
      if(currentProgress === 100){
        clearInterval(downloadTimer);
      } else {
        this.setState({
          progress : currentProgress + 1
        })
      }
    }, 200);
  }

  render(){
    let paragraphToRender;
    let activeSpeaker;
    let speakerColor;
    let lineToRender;
    if(this.props.text.activeText !== '' && this.props.text.activeText !== undefined){
      //get paragraph and speaker (if applicable)
      if(this.props.text.activeTextType == 'dialogue'){
        activeSpeaker = textConsts.dialogue[this.props.text.activeText][this.props.text.paragraph][0];
        paragraphToRender = textConsts.dialogue[this.props.text.activeText][this.props.text.paragraph][1];
      }
      if(activeSpeaker !== undefined){
        if(activeSpeaker === 'Mutiny' || activeSpeaker === 'Spiky Haired Girl') {
          speakerColor = 'mutiny-color';
        } else if (activeSpeaker === 'Claire') {
          speakerColor = 'claire-color';
        } else if (activeSpeaker === 'Lucy'){
          speakerColor = 'lucy-color';
        } else if (activeSpeaker === 'President'){
          speakerColor = 'president-color';
        } else if (activeSpeaker === 'Shad'){
          speakerColor = 'shad-color';
        } else if (activeSpeaker === 'Blaine' || activeSpeaker === 'Tacticool'){
          speakerColor = 'blaine-color';
        }
      } else {
        paragraphToRender = textConsts.examine[this.props.text.activeText][this.props.text.paragraph];
      }
      //get line
      lineToRender = paragraphToRender[this.props.text.line];
      //download bar
      if(this.props.text.activeText === 'mapTerminal'){
        if(this.props.text.line === 0){
          this.startDownload();
        } else {
          this.setState({
            progress : 100
          });
        };
      };
      //add special text styling
      if(lineToRender.includes('Wound')){
        let before = '';
        let after = '';
        let special = '';
        let lineArr = lineToRender.split(" ");
        for (let i=0; i < lineArr.length; i++){
          if(lineArr[i] === 'Wound'){
            special = <span className="exit-text">Wound </span>
            if(i > 0){
              for(let j=0; j < i; j++){
                before = before.concat(lineArr[j]) + ' ';
              };
            };
            if(i < lineArr.length){
              for(let j=i+1; j < lineArr.length; j++){
                after = after.concat(lineArr[j]) + ' ';
              };
            };
          };
        };
        if(special !== ''){
          lineToRender = <span>{before}{special}{after}</span>;
        }
      }
    }
  
  if(this.props.text.activeText === 'mapTerminal'){
    return (
      <div id="wrap">
        <div id="box-content">
        <div id="dialogueText">{lineToRender}</div>
          <div className="progress-container">
            <div className="entanglement-bar" style={{width: this.state.progress + '%'}}>
            </div>
            <span className="progress-background"></span>
          </div>
        </div>
      </div>
    )
  } else if (this.props.text.options !== null) {
      return (
        <div id="wrap">
          <div id="box-content">
            <Options text={this.props.text} menu={this.props.menu}/>
          </div>
        </div>
      );
    } else if (this.props.text.activeTextType == 'dialogue') {
      return (
        <div id="wrap">
          <div className={speakerColor} id="box-content">
            <Speaker speaker={activeSpeaker}/>
            <div id="dialogueText">{lineToRender}</div>
            <div id="next-prompt"></div>
          </div>
        </div>
      );
    } else if(this.props.text.activeText !== '') {
      return (
        <div id="wrap">
          <div id="box-content">
            <div id="text">{lineToRender}</div>
            <div id="next-prompt"></div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

TextBoxes.propTypes = {
  text: PropTypes.object.isRequired,
  menu: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    textModule: bindActionCreators(textModule, dispatch),
    gameModule: bindActionCreators(gameModule, dispatch)
  }
}

export default (connect(mapDispatchToProps)(TextBoxes));
