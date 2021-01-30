import React from 'react';
import Sound from 'react-sound';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as soundsModule from '../../redux/modules/sounds';
import {bindActionCreators} from 'redux';
import tracks from '../../assets/sound/music';

class Music extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let track = tracks[this.props.sounds.music];
    let speed = 1;
    let vol = 75;
    if(this.props.game.gameState !== 'active'){
      vol = vol / 2;
    };
    if(this.props.sounds.music === 'lucy'){
      if(this.props.game.roomId === 2){
        vol = 30;
      } else if (this.props.game.roomId === 3){
        vol = 20;
      } else if (this.props.game.roomId === 4){
        vol = 15;
      } else if (this.props.game.roomId === 5 || this.props.game.roomId === 6){
        vol = 10;
        speed = 0.95;
      } else if (this.props.game.roomId === 7){
        vol = 5;
        speed = 0.1;
      } else if (this.props.game.roomId === 8){
        vol = 0;
      } else {
        vol = 75;
      };
    };
    if(this.props.sounds.music === 'dream' && this.props.game.roomId === 6){
      vol = 10;
    };
    vol = vol - this.props.game.mindDepth * 10;
    return (
      <div>
       {/* <Sound
        url={track}
        loop={true}
        playbackRate={speed}
        volume={vol}
        playStatus={Sound.status.PLAYING}/> */}
      </div>
    );
  }
}

Music.propTypes = {
  sounds: PropTypes.object,
  game: PropTypes.object
}

function mapDispatchToProps(dispatch) {
  return {
    soundsModule : bindActionCreators(soundsModule, dispatch)
  }
};

export default (connect(mapDispatchToProps)(Music));
