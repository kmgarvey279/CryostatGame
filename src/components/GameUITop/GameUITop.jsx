import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MPBar from '../MPBar/MPBar';
import * as playerConsts from '../../redux/modules/player/playerConstants';
import './GameUITop.css';
import taserIcon from '../../assets/images/items/taserIcon.png';
import cryoIcon from '../../assets/images/items/cryoIcon.png';
import collider from '../../assets/images/items/collider.png';
import clone from '../../assets/images/items/clone.png';
import heart from '../../assets/images/items/heart.gif';
import heartless from '../../assets/images/items/heartless.gif';
import particle from '../../assets/images/items/entangle.gif';
import selected from '../../assets/images/items/selected-items.png';
import pipeIcon from '../../assets/images/items/pipe.png';
import reset from '../../assets/images/items/reset.png';

function GameUITop(props) {
  let weaponIcon;
  let meleeWeaponIcon = <img id="current-weapon" src={pipeIcon} width="40" height="40"/>
  if (props.player.currentWeapon === null || props.game.gameState === 'postExitBranch' || props.game.gameState === 'exitBranch') {
    weaponIcon = '';
  } else if (props.player.currentWeapon === 'Taser') {
    weaponIcon = <img id="current-weapon" src={taserIcon} width="40" height="40"/>
  } else if (props.player.currentWeapon === 'Cryostat') {
    weaponIcon = <img id="current-weapon" src={cryoIcon} width="40" height="40"/>
  };
  let entanglement = props.player.entanglement + '%';
  if(props.player.entanglement < 10) {
    entanglement = <span className="single-digit">{entanglement}</span>
  };
  let skillIcon = '';
  if (props.player.currentSkill === null || props.game.gameState === 'postExitBranch' || props.game.gameState === 'exitBranch') {
    skillIcon = '';
  } else if (props.player.currentSkill === 'dash') {
    skillIcon = <img id="current-skill" src={collider} width="40" height="40"/>
  } else if (props.player.currentSkill === 'clone') {
    skillIcon = <img id="current-skill" src={clone} width="40" height="40"/>
  };
  let magic;
  if(props.game.gameState === 'postExitBranch' || props.game.gameState === 'exitBranch'){
    magic = 0;
  } else {
    magic = props.player.magic;
  }
  let uiClass;
  if (props.player.items.includes('bracelet')){
    uiClass = 'showUI';
  } else {
    uiClass = 'hideUI';
  };
  return (
    <div id="UI-wrap" className={uiClass}>
      <div id="UI-content">
        <div id="hp-bar">
          <label>
            {props.player.health >= 10 ? <img  src={heart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
            {props.player.health >= 20 ? <img  src={heart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
            {props.player.health >= 30 ? <img  src={heart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
            {props.player.health >= 40 ? <img  src={heart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
            {props.player.health >= 50 ? <img  src={heart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
          </label>
        </div>
        <img className="reset" src={reset} width="65" height="65"/>
        <span id="particle-percentage">1</span>
        <img id="selected-items" src={selected} width="175" height="58"/>
        <div id="melee-weapon" className={props.player.attackType === 'melee' ? "active-attack" : "inactive-attack"}>
          {meleeWeaponIcon}
        </div>
        <div id="weapon" className={props.player.attackType === 'ranged' ? "active-attack" : "inactive-attack"}>
          {weaponIcon}  
        </div>
        <div id="skill">
          {skillIcon}
        </div>
        <div id="entangle-bar">
          <label>
            <span id="mp"><MPBar type={'entanglement'} magic={magic} /></span>
            <img id="particle-icon" src={particle} width="176" height="60"/>
          </label>
        </div>
      </div>
    </div>
  );
}

GameUITop.propTypes = {
  game: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired
};

export default connect()(GameUITop);
