import React from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';
import * as soundsModule from '../../redux/modules/sounds';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import effects from '../../assets/sound/sfx';

class SFX extends React.Component {
  constructor(props) {
    super(props);
    this.handleClearSFX = this.handleClearSFX.bind(this);
  }

  handleClearSFX(){
    this.props.dispatch(soundsModule.changeEffect(''));
  }

  render() {
    let effect = effects[this.props.sounds.effect];
    let vol = 50;
    return (
      <div>
       <Sound
        url={effect}
        onFinishedPlaying={this.handleClearSFX}
        playStatus={Sound.status.PLAYING}
        playbackRate={this.props.playbackRate}
        loop={true}
        volume={vol}/>
      </div>
    );
  }
}

SFX.propTypes = {
  sounds: PropTypes.object,
  mindDepth: PropTypes.number
}

function mapDispatchToProps(dispatch) {
  return {
    soundsModule : bindActionCreators(soundsModule, dispatch)
  }
};

export default (connect(mapDispatchToProps)(SFX));
