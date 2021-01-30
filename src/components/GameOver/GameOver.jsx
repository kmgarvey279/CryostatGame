import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as gameModule from '../../redux/modules/game';
import * as menuModule from '../../redux/modules/menu';
import * as playerModule from '../../redux/modules/player/player';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom';
import './GameOver.css';
import { changeGameState } from '../../redux/modules/game';

class GameOver extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress, false);
    this.props.dispatch(menuModule.changeMenu('gameOver'));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  handleKeyPress(event){
    if(event.keyCode === 38 || event.keyCode === 87){
      event.preventDefault();
      this.cycleOption();
    } else if(event.keyCode === 40 || event.keyCode === 83){
      event.preventDefault();
      this.cycleOption();
    } else if (event.keyCode === 32 || event.keyCode === 13) {
      event.preventDefault();
      this.selectOption();
    }
  }

  cycleOption() {
    if (this.props.menu.selectedOption === 1) {
      this.props.dispatch(menuModule.changeOption(2));
    } else if (this.props.menu.selectedOption === 2){
      this.props.dispatch(menuModule.changeOption(1));
    }
  }

  selectOption(){
    if (this.props.menu.selectedOption === 1) {
      if(this.props.game.branch === 'prologue'){
        this.props.dispatch(gameModule.changeGameState('dialogue'));
        this.props.dispatch(gameModule.changeFilter('fade-in'));
      } else {
        this.props.dispatch(playerModule.updatePlayerHealth(50));
        this.props.dispatch(gameModule.changeGameState('postDeath'));
        this.props.handleLoad();
      };
    } else if (this.props.menu.selectedOption === 2) {
      this.props.dispatch(menuModule.changeMenu('title'));
      this.props.history.push('/');
      window.location.reload();
    }
  }

  render() {
    if(this.props.menu.selectedOption === 1) {
      return (
        <div className="game-over">
          <h1>Game Over</h1>
          <div className='game-over-selected'><h4>Restart From Last Save</h4></div>
          <div className="game-over-unselected">Embrace The Void</div>
        </div>
      );
    } else {
      return (
        <div className="game-over">
          <h1>Game Over</h1>
          <div className="game-over-unselected">Restart From Last Save</div>
          <div className='game-over-selected'><h4>Embrace The Void</h4></div>
        </div>
      );
    }
  }
}


GameOver.propTypes = {
  menu: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleLoad: PropTypes.func.isRequired,
  nullAll: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    menuModule : bindActionCreators(menuModule, dispatch),
    gameModule : bindActionCreators(gameModule, dispatch),
    playerModule : bindActionCreators(playerModule, dispatch)
  }
};

export default withRouter(connect(mapDispatchToProps)(GameOver));
