import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gameModule from '../../redux/modules/game';
import * as textModule from '../../redux/modules/text/text';
import * as soundsModule from '../../redux/modules/sounds';
import * as soundConsts from '../App/SoundsLibrary';
import './Options.css';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress, false);
  }

  handleKeyPress(event){
    if(event.keyCode === 38 || event.keyCode === 87){
      this.cycleOption(-1);
    } else if(event.keyCode === 40 || event.keyCode === 83){
      this.cycleOption(1);
    } else if (event.keyCode === 32) {
      if (this.props.text.activeText.includes("terminal")){
        soundConsts.confirm.play();
      } else if(this.props.text.activeText === 'save') {
        soundConsts.merge.play();
      };
      if(this.props.text.selectedOption === 0 && (this.props.text.activeText === 'Lucy1' || this.props.text.activeText === 'Lucy1B' || this.props.text.activeText === 'Lucy1BB')){
        this.props.dispatch(gameModule.changeFilter('fade-in'));
        this.props.dispatch(soundsModule.changeEffect('birds'));
      } else if(this.props.text.selectedOption === 0 && this.props.text.activeText === 'wakeUp1'){
        this.props.dispatch(gameModule.changeFilter('fade-in'));
      }
      this.props.dispatch(textModule.setLine(0));
      this.props.dispatch(textModule.setParagraph(1));
      if(this.props.text.selectedOption === 0) {
        this.props.dispatch(textModule.setActiveText(this.props.text.activeText + 'A', this.props.text.activeTextType));
      } else if (this.props.text.selectedOption === 1){
        this.props.dispatch(textModule.setActiveText(this.props.text.activeText + 'B', this.props.text.activeTextType));
      } else if (this.props.text.selectedOption === 2) {
        this.props.dispatch(textModule.setActiveText(this.props.text.activeText + 'C', this.props.text.activeTextType));
      };
      this.props.dispatch(textModule.selectOption(0));
      this.props.dispatch(textModule.setOptions(null));
    }
  }

  cycleOption(next) {
    soundConsts.select.play();
    let newOption = this.props.text.selectedOption + next
    if (newOption === this.props.text.options.length) {
      this.props.dispatch(textModule.selectOption(0));
    } else if (newOption < 0) {
      this.props.dispatch(textModule.selectOption(this.props.text.options.length - 1));
    } else {
      this.props.dispatch(textModule.selectOption(newOption));
    }
  }

  isSelected(optionNum){
    if(optionNum === this.props.text.selectedOption){
      return 'selected-option';
    };
  }

  render(){
    let options = [];
    for(let i = 0; i < this.props.text.options.length; i++){
      options.push(<div id={this.isSelected(i)}>{this.props.text.options[i]}</div>)
    };
    return (
      <div className="options-wrap">
        {options}
      </div>
    );
  }
}

Options.propTypes = {
  text: PropTypes.object
}

function mapDispatchToProps(dispatch) {
  return {
    textModule: bindActionCreators(textModule, dispatch),
    gameModule: bindActionCreators(gameModule, dispatch),
    soundsModule: bindActionCreators(soundsModule, dispatch)
  }
}

export default (connect(mapDispatchToProps)(Options));
