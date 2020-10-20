import React from 'react';
import Sprite from '../Sprite/Sprite';
import Door from '../Door/Door';
import Item from '../Item/Item';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import alert from '../../assets/images/room/alert.png';
import question from '../../assets/images/room/question.png';
import angry from '../../assets/images/room/angry.gif';
import drop from '../../assets/images/room/drop.gif';
import dot from '../../assets/images/room/dotdotdot.gif';
import mutinyCodec from '../../assets/images/room/mutiny-codec.png';
import NPCs from '../NPCs/NPCs';
import Player from '../Player/Player';
import lightningRight from '../../assets/images/room/lightningRight.gif';
import lavaSteam from '../../assets/images/room/lava-steam.gif';
import lavaCool from '../../assets/images/room/lava-cool.png';
import * as playerConsts from '../../redux/modules/player/playerConstants';
import * as roomConsts from '../../redux/modules/rooms/roomConstants';
import * as itemConsts from '../../redux/modules/rooms/itemConstants';
import bossBeam from '../../assets/images/items/boss-beam.gif';
import horizontalLaser from '../../assets/images/items/horizontal-laser.gif';
import verticalLaser from '../../assets/images/items/vertical-laser.gif';
import laserEnd from '../../assets/images/items/laser-end.gif';
import laserEnd2 from '../../assets/images/items/laser-end2.gif';
import logo from '../../assets/images/room/logo2.png';
import './Square.css';

class Square extends React.PureComponent{
  constructor(props) {
    super(props);
  };

  getExplosion() {
    if (this.props.explosion === true && this.props.value === 'I') {
      return <div id="explosion">{itemConsts.sprites['freeze']}</div>
    } else if (this.props.game.roomId === 4 && this.props.explosion === true){
      return <div id="explosion">{itemConsts.sprites['shock']}</div>
    } else if (this.props.explosion === true && this.props.value === 'BB'){
      return <div id="breaking-block">{roomConsts.sprites['blockBreaking']}</div> 
    } else if (this.props.explosion === true || (this.props.value == "~" && this.props.eye === 'hurt') || (this.props.value == "i" && this.props.eye === 'hurt')) {
      return <div id="explosion">{roomConsts.sprites['explosion']}</div>
    } else if (this.props.shatter === 'break') {
      return <div id="explosion">{roomConsts.sprites['crystalShatter']}</div>
    } else if (this.props.shatter === 'form') {
      return <div id="implosion">{roomConsts.sprites['crystalShatter']}</div>
    };
  };

  getOtherContent() {
    if (this.props.game.gameState === 'active' && ((this.props.warning && this.props.player.location == this.props.squareId) || (this.props.alert == true && this.props.player.location == this.props.squareId))) {
      return <div>{<img id="alert" src={alert} weight="45" height="45" />}</div>
    } else if(this.props.emote === 'surprise'){
      return <div>{<img id="alert" src={alert} weight="45" height="45" />}</div>
    } else if (this.props.emote === 'question'){
      return <div>{<img id="alert" src={question} weight="45" height="45" />}</div>
    } else if (this.props.emote === 'angry'){
      return <div>{<img id="emote" src={angry} weight="45" height="45" />}</div>
    } else if (this.props.emote === 'drop'){
      return <div>{<img id="emote" src={drop} weight="45" height="45" />}</div>
    } else if (this.props.emote === 'dot'){
      return <div>{<img id="emote" src={dot} weight="45" height="45" />}</div>
    } else if (this.props.emote === 'message'){
      return <div>{<img id="emote" src={mutinyCodec} weight="50" height="50" />}</div>
    } else if (this.props.value == 'D') {
      return <Door content={this.props.content} doors={this.props.doors} branch={this.props.game.branch} />
    } else if (this.props.value == '$') {
      return <Item content={this.props.content}/>
    } else if(this.props.game.branch === 'prologue' && this.props.squareId === 107){
      return <div className="sunbeam1"></div>
    } else if(this.props.game.branch === 'prologue' && this.props.squareId === 120){
      return <div className="sunbeam2"></div>
    } else if (this.props.value == 'L') {
      return <div><img className="lava-steam" src={lavaSteam} weight="50" height="50" /><div id="lava"></div></div>
    } else if (this.props.value === 'I'){
      return <div id="goo">{roomConsts.sprites['ice']}</div>
    } else if (this.props.value == 'LC') {
      return <div id="lava-cool">{<img src={lavaCool} weight="50" height="50" />}</div>
    } else if (this.props.value == '%') {
      return <div id="lightning">{<img src={lightningRight} weight="50" height="50" />}</div>
    } else if (this.props.value == 'H') {
      return <div id="goo">{roomConsts.sprites['goo']}</div>
    } else if (this.props.value === 'logo'){
      return <div className="logo">{<img src={logo} weight="225" height="225" />}</div>
    } else if (this.props.tileOverlay === 'fragileBreak'){
      return <div id="tile-overlay">{roomConsts.sprites['fragileBreak']}</div>
    } else if(this.props.value == "~" && this.props.eye == 'alive') {
      return <div className="tenta">{roomConsts.sprites['tenta']};</div>
    } else if(this.props.value === '~r'){
      return <div className="tenta">{roomConsts.sprites['tentaRise']};</div>
    } else if(this.props.value === '~s'){
      return <div className="tenta">{roomConsts.sprites['tentaSink']};</div>
    }
  }
  
  getTile(){
    let warpType;
    if (this.props.value == "@") {
      if(this.props.content.length > 1 || this.props.player.cloneLocation === this.props.squareId) {
        warpType = 'warpOn';
      } else {
        warpType = 'warpOff';
      };
      return <div class="tile" id={warpType}>{this.props.tileImage}</div>
    } else if (this.props.warning) {
      return <div className="tile">{roomConsts.sprites['danger']}</div>
    } else if (this.props.value == "i") {
      if(this.props.eye == 'alive') {
        return <div className="tile">{roomConsts.sprites['eyeball']}</div>
      } else {
        return <div className="tile">{roomConsts.sprites['spookyTile']}</div>
      };
    } else if (this.props.game.special === true && this.props.value === 'W' && this.props.squareId !== 80){
      return <div className="tile"><div className="gradient"></div>{this.props.tileImage}</div>
    } else if (this.props.game.branch === 0 && this.props.value !== 'V' && this.props.value !== 'W' && this.props.value !== 'BG'){
      return <div className="special-tile">{this.props.tileImage}</div>
    } else if(this.props.tileImage === 'none'){
      return <div className="tile"><div className="empty-tile"></div></div>
    } else {
      return <div className="tile">{this.props.tileImage}</div>
    };
  };

  getPlayer(){
    if(this.props.player.location === this.props.squareId){
      return <Player player={this.props.player} game={this.props.game}/>
    }
  }

  getPipe(){
    if(this.props.player.pipe === this.props.squareId){
      return <div>{playerConsts.sprites.pipe[this.props.player.direction]}</div>
    } else {
      return null;
    }
  }

  getClone(){
    if (this.props.player.cloneLocation === this.props.squareId) {
      let cloneClass;
      if(this.props.player.activeClone === 1) {
        cloneClass = 'clone2';
      } else {
        cloneClass = 'clone1';
      }; 
      return <div><div className="clone-aura">{playerConsts.sprites.auraRed}</div><div id={cloneClass}>{playerConsts.sprites.stand[this.props.player.cloneDirection]}</div></div>
    } else {
      return null;
    };
  }

  getNPC(){
    let result;
    Object.keys(this.props.npcs).forEach(name => {
      let thisNPC = this.props.npcs[name];
        if(thisNPC.location === this.props.squareId){
          result = <NPCs npc={thisNPC}/>  
        };
    });
    return result;
  }
  getFilter(){
    if(this.props.game.branch === 1 && (this.props.value !== 'C' && this.props.value !== 'I' && this.props.value !== '0S')){
      let texture;
      if (this.props.squareId % 2 === 0) {
        texture = <div id="filter-old-texture">{roomConsts.sprites['overlayOld']}</div>
      } else if(this.props.squareId % 5 === 0){
        texture = <div id="filter-old-texture3">{roomConsts.sprites['overlayOld']}</div>
      } else {
        texture = <div id="filter-old-texture2">{roomConsts.sprites['overlayOld']}</div>
      };
      if(this.props.value === 'D'){
        return <div id="filter-old-door"><div id="filter-old-fill"></div>{texture}</div> 
      } else {
        return <div id="filter-old"><div id="filter-old-fill"></div>{texture}</div> 
      };
    } else {
      return null;
    }
  }

  render() {
    let objectArr = this.props.content.find(function(content) {
      return content[0] == 'interact';
    });
    let objectType = null; 
    if(objectArr !== undefined){
      objectType = objectArr[1]; 
    };

    let hasBlock = this.props.content.find(function(content) {
      return content[0] == 'block';
    });
    let block;
    if(hasBlock !== undefined){
      block = true;
    } else {
      block = false;
    };

    let hasSwitch = this.props.content.find(function(content) {
      return content[0] == 'elecSwitch';
    });
    let elecSwitch;
    if(hasSwitch !== undefined){
      elecSwitch = true;
    } else {
      elecSwitch = false;
    };

    let hasEnemy = this.props.content.find(function(content) {
      return content[0] == 'enemy';
    });
    let enemy;
    if(hasEnemy !== undefined){
      enemy = true;
    } else {
      enemy = false;
    };

    let beam;
    if(this.props.game.roomId === 8 && this.props.boss.beam !== null && this.props.squareId === 152){
      beam = <div><img className="boss-beam" id={"beam" + this.props.boss.beam} src={bossBeam} /></div>
    }

    let projectile;
    if(this.props.projectiles.lasers.length > 0){
      this.props.projectiles.lasers.forEach(laser => {
        if(laser.includes(this.props.squareId)) {
          if(laser[laser.length-1] === this.props.squareId){
            if(laser[0] + 1 === laser[1]){
              projectile = <img className="laser-v" src={laserEnd2} height="55px" width="50px"/>
            } else if(laser[0] - 1 === laser[1]){
              projectile = <img className="laser-v" style={{transform: "rotate(180deg)"}} src={laserEnd2} height="60px" width="50px"/>
            } else if(laser[0 - 13 === laser[1]]){
              projectile = <img className="laser-h" style={{transform: "rotate(180deg)"}} src={laserEnd} height="50px" width="50px"/>
            } else {
              projectile = <img className="laser-h" src={laserEnd} height="50px" width="50px"/>
            };
          } else if(laser[0] + 1 === laser[1] || laser[0] - 1 === laser[1]){
            if(this.props.boss.tileArr.includes(this.props.squareId)){
              projectile = <img className={"boss-laser-v"} src={verticalLaser} height="50px" width="50px"/>
            } else {
              projectile = <img className={"laser-v"} src={verticalLaser} height="55px" width="50px"/>
            };
          } else {
            if(this.props.boss.tileArr.includes(this.props.squareId)){
              projectile = <img className="boss-laser-h" src={horizontalLaser} height="50px" width="50px"/>
            } else {
              projectile = <img className="laser-h" src={horizontalLaser} height="50px" width="50px"/>
            };
          };
        };
      });
    } else if (this.props.bullet !== null){
      projectile = <div className="bullet">{this.props.bullet}</div>
    };

    //get shadow
    let shadow = null;
    if(this.props.player.location == this.props.squareId || this.props.value === 'NPC' || this.props.squareId === this.props.player.cloneLocation) {
      shadow = <div className="shadow-player"></div>
    } else if(objectType === 'save'){
      shadow = null;
    } else if (this.props.game.branch === 'prologue' && this.props.value === 'T'){
      shadow = <div className={"shadow-" + objectType}></div>
    } else if (enemy === true){
      shadow = <div className="shadow-enemy"></div>
    } else if (this.props.value === 'T' && (objectType === 'tank2' || objectType === 'tankE2' || objectType === 'uglyBed2' || objectType === 'desk3')){
      shadow = <div className="shadow-last"></div>
    } else if (this.props.value === 'T' && objectType === 'desk2'){
      shadow = <div className="shadow-mid"></div>
    } else if (this.props.value === 'T' && (objectType === 'tank1' || objectType === 'tankE1' || objectType === 'uglyBed1' || objectType === 'desk1')){
      shadow = <div className="shadow-first"></div>
    } else if (this.props.value === 'T' && (objectType === 'bigTube1' || objectType === 'brokenTube1')){
      shadow = <div className="big-shadow-first"></div>
    } else if (this.props.value === 'T' && (objectType === 'bigTube2' || objectType === 'brokenTube2' || objectType === 'bigTube2Awake')){
      shadow = <div className="big-shadow-mid"></div>
    } else if (this.props.value === 'T' && (objectType === 'bigTube3' || objectType === 'brokenTube3' || objectType === 'bigTube3Awake')){
      shadow = <div className="big-shadow-last"></div>
    } else if (this.props.value === 'T' && (objectType === 'theMachineOn' || objectType === 'theMachine')){
      shadow = <div className="machine-shadow"></div>
    } else if (this.props.value === 'T' && (objectType === 'theMachineOn' || objectType === 'theMachine')){
      shadow = <div className="machine-shadow"></div>
    } else if (this.props.value === 'T' && (objectType === 'phoneOff' || objectType === 'phoneOn' || objectType === "terminal")) {
      shadow = <div className="shadow-small"></div>
    } else if (this.props.value === 'T' && (objectType.includes('powerTerminal'))) {
      shadow = <div className="shadow-high"></div>
    } else if((this.props.value === 'T' && (this.props.game.roomId !== 3 && this.props.squareId !== 24) || block === true || elecSwitch === true || this.props.value === '<>') && this.props.sprite !== ""){
      shadow = <div className="shadow-other"></div>
    }

    if(this.props.game.lights === 'on'){
      return (
        <div className="square">
            {this.getExplosion()}
            {beam}
            {projectile}
            {this.getPipe()}
            {this.getOtherContent()}
            {this.getPlayer()}
            <Sprite sprite={this.props.sprite} player={this.props.player} boss={this.props.boss} squareId={this.props.squareId} transition={this.props.transition} squareValue={this.props.value} branch={this.props.game.branch} special={this.props.game.special} roomId={this.props.game.roomId}/>
            {this.getClone()}
            {this.getNPC()}
            {shadow}
            {this.getFilter()}
            {this.getTile()}
        </div>
      );
    } else {
      return (
        <div id="square">
            <Sprite lights={this.props.game.lights} sprite={this.props.sprite} player={this.props.player} squareId={this.props.squareId} boss={this.props.boss} transition={this.props.transition} squareValue={this.props.value}/>
        </div>
      );
    };
  }
}

Square.propTypes = {
  game: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  squareId: PropTypes.number.isRequired,
  tileImage: PropTypes.object.isRequired,
  sprite: PropTypes.object,
  emote: PropTypes.string,
  transition: PropTypes.string,
  alert: PropTypes.bool,
  player: PropTypes.object,
  boss: PropTypes.object,
  doors: PropTypes.object,
  eye: PropTypes.string,
  explosion: PropTypes.bool,
  shatter: PropTypes.string,
  tileOverlay: PropTypes.string,
  warning: PropTypes.bool,
  npcs: PropTypes.object,
  projectiles: PropTypes.object
};

export default connect()(Square);
