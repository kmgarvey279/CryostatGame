import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MPBar from '../MPBar/MPBar';
import * as playerConsts from '../../redux/modules/player/playerConstants';
import './GameUITop.css';
import taserIcon from '../../assets/images/items/taserIcon.png';
import cryoIcon from '../../assets/images/items/cryo2Icon.png';
import dash from '../../assets/images/items/collider.gif';
import clone from '../../assets/images/items/clone.gif';
import heart from '../../assets/images/items/heart.gif';
import halfHeart from '../../assets/images/items/heart-half.gif';
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
  let skillIcon = '';
  if (props.player.currentSkill === null || props.game.gameState === 'postExitBranch' || props.game.gameState === 'exitBranch') {
    skillIcon = '';
  } else if (props.player.currentSkill === 'dash') {
    skillIcon = <img id="current-skill" src={dash} width="40" height="40"/>
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
  if (props.player.items.includes('bracelet') && props.game.branch !== 'prologue'){
    uiClass = 'showUI';
  } else {
    uiClass = 'hideUI';
  };
  let hpBar;
  if(props.game.difficulty === 'hard'){
    hpBar=<div id="hp-bar">
      <label>
        {props.player.health >= 10 ? <img  src={heart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
        {props.player.health >= 20 ? <img  src={heart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
        {props.player.health >= 30 ? <img  src={heart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
        {props.player.health >= 40 ? <img  src={heart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
        {props.player.health >= 50 ? <img  src={heart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
      </label>
    </div>
  } else {
    hpBar=<div id="hp-bar">
      <label>
        {props.player.health >= 20 ? <img  src={heart} width="50" height="50"/> : props.player.health >= 10 ? <img  src={halfHeart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
        {props.player.health >= 40 ? <img  src={heart} width="50" height="50"/> : props.player.health >= 30 ? <img  src={halfHeart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
        {props.player.health >= 60 ? <img  src={heart} width="50" height="50"/> : props.player.health >= 50 ? <img  src={halfHeart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
        {props.player.health >= 80 ? <img  src={heart} width="50" height="50"/> : props.player.health >= 70 ? <img  src={halfHeart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
        {props.player.health >= 100 ? <img  src={heart} width="50" height="50"/> : props.player.health >= 90 ? <img  src={halfHeart} width="50" height="50"/> : <img src={heartless} width="50" height="50"/>} 
      </label>
    </div>
  };
  return (
    <div id="UI-wrap" className={uiClass}>
      <div id="UI-content">
        {hpBar}
        <img id="selected-items" src={selected} width="430" height="58"/>
        <div id="melee-weapon" className={props.player.attackType === 'melee' ? "active-attack" : "inactive-attack"}>
          {meleeWeaponIcon}
        </div>
        <div id="weapon" className={props.player.charge === true ? "charged-attack" : props.player.attackType === 'ranged' ? "active-attack" : "inactive-attack"}>
          {weaponIcon}  
        </div>
        <div id="skill">
          {skillIcon}
        </div>
        <div id="entangle-bar">
          <label>
            <span id="mp"><MPBar type={'entanglement'} magic={magic} /></span>
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
