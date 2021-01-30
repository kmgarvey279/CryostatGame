import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as menuModule from '../../redux/modules/menu';
import * as soundsModule from '../../redux/modules/sounds';
import * as savesModule from '../../redux/modules/save-data';
import * as gameModule from '../../redux/modules/game';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom';
import Select from '../Select/Select';
import Title from '../Title/Title';
import Error from '../Error/Error';
import './TitleContainer.css';
import * as soundConsts from '../App/SoundsLibrary';

class TitleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 'normal'
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, false);
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false);
  };

  handleKeyPress(event){
    if(this.props.menu.selectedMenu === 'start'){
      if(event.keyCode === 37 || event.keyCode === 65){
        event.preventDefault();
        this.cycleOption(-1);
      } else if(event.keyCode === 39 || event.keyCode === 68){
        event.preventDefault();
        this.cycleOption(1);
      };
    } else if(this.props.menu.selectedMenu !== 'title'){
      if(event.keyCode === 38 || event.keyCode === 87){
        event.preventDefault();
        this.cycleOption(-1);
      } else if(event.keyCode === 40 || event.keyCode === 83){
        event.preventDefault();
        this.cycleOption(1);
      }
    }
    if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      this.selectOption();
    }
  };

  cycleOption(direction) {
    soundConsts.select.play();
    if(this.props.menu.selectedMenu === 'start'){
      if(this.state.difficulty === 'normal'){
        this.setState({
          difficulty: 'hard'
        });
        this.props.dispatch(gameModule.changeDifficulty('hard'));
      } else {
        this.setState({
          difficulty: 'normal'
        });
        this.props.dispatch(gameModule.changeDifficulty('normal'));
      }
    } else {
      let nextOption = this.props.menu.selectedOption + direction;
      if (nextOption > 6) {
        this.props.dispatch(menuModule.changeOption(1));
      } else if (nextOption <= 0) {
        this.props.dispatch(menuModule.changeOption(6));
      } else {
        this.props.dispatch(menuModule.changeOption(nextOption));
      };
    }
  };

  selectOption(){
    let selectNum = this.props.menu.selectedOption;
    //Title Screen
    if (this.props.menu.selectedMenu == 'title') {
      this.props.dispatch(menuModule.changeMenu('select'));
      soundConsts.ping.play();
      this.props.dispatch(soundsModule.changeMusic('title'));
    //select file
    } else if (this.props.menu.selectedMenu == 'select'){
      if (selectNum <= 3) {
        this.props.dispatch(gameModule.setFile(selectNum));
        if(this.props.saves[selectNum].fileStatus === 'empty') {
          this.props.dispatch(menuModule.changeMenu('start'));
        } else {
          soundConsts.entangle.play();
          this.props.handleLoad();
          this.props.dispatch(menuModule.changeMenu('title'));
          this.props.dispatch(menuModule.changeOption(1));
        }
      } else if (selectNum == 4) {
        this.props.dispatch(menuModule.changeMenu('delete'));
      } else if (selectNum == 5) {
        this.props.dispatch(menuModule.changeMenu('copy'));
      } else if (selectNum == 6) {
        this.props.dispatch(menuModule.changeMenu('title'));
      };
    //File Start
    } else if (this.props.menu.selectedMenu == 'start'){
      soundConsts.entangle.play();
      this.props.handleStart();
      this.props.dispatch(menuModule.changeMenu('title'));
      this.props.dispatch(menuModule.changeOption(1));
    //File Delete
    } else if (this.props.menu.selectedMenu == 'delete'){
      if (selectNum <= 3) {
        soundConsts.dead.play();
        this.props.dispatch(savesModule.eraseGame(selectNum))
      } else if (selectNum == 4) {
        this.props.dispatch(menuModule.changeMenu('select'));
      } else if (selectNum == 5) {
        this.props.dispatch(menuModule.changeMenu('copy'));
      } else if (selectNum == 6) {
        this.props.dispatch(menuModule.changeMenu('title'));
      }
    //Select File To Copy
    } else if (this.props.menu.selectedMenu == 'copy'){
      if (selectNum <= 3) {
        this.props.dispatch(menuModule.setGameToCopy(selectNum));
        this.props.dispatch(menuModule.changeMenu('copySelected'));
      } else if (selectNum == 4) {
        this.props.dispatch(menuModule.changeMenu('delete'));
      } else if (selectNum == 5) {
        this.props.dispatch(menuModule.changeMenu('select'));
      } else if (selectNum == 6) {
        this.props.dispatch(menuModule.changeMenu('title'));
      }
    //Select file to copy to
    } else if (this.props.menu.selectedMenu == 'copySelected'){
      if (selectNum <= 3) {
        if (selectNum === this.props.menu.gameToCopy) {
        } else {
          soundConsts.merge.play();
          this.props.dispatch(savesModule.copyGame(selectNum, this.props.saves[this.props.menu.gameToCopy]));
          this.props.dispatch(menuModule.setGameToCopy(null));
        }
      } else if (selectNum == 4) {
        this.props.dispatch(menuModule.setGameToCopy(null));
        this.props.dispatch(menuModule.changeMenu('delete'));
      } else if (selectNum == 5) {
        this.props.dispatch(menuModule.setGameToCopy(null));
        this.props.dispatch(menuModule.changeMenu('select'));
      } else if (selectNum == 6) {
        this.props.dispatch(menuModule.setGameToCopy(null));
        this.props.dispatch(menuModule.changeMenu('title'));
      }
    }
  };

  render() {
    if(this.props.menu.selectedMenu === 'title') {
      return (
        <div>
          <Title/>
        </div>
      );
    } else {
      return (
        <div>
          <Select difficulty={this.state.difficulty} menu={this.props.menu} game={this.props.game} player={this.props.player} saves={this.props.saves}/>
        </div>
      );
    }
  }
};


TitleContainer.propTypes = {
  menu: PropTypes.object.isRequired,
  handleStart: PropTypes.func,
  handleLoad: PropTypes.func,
  sounds: PropTypes.object,
  player: PropTypes.object,
  game: PropTypes.object,
  saves: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    menuModule : bindActionCreators(menuModule, dispatch),
    soundsModule : bindActionCreators(soundsModule, dispatch),
    savesModule : bindActionCreators(savesModule, dispatch),
    gameModule : bindActionCreators(gameModule, dispatch)
  }
};

export default withRouter(connect(mapDispatchToProps)(TitleContainer));
