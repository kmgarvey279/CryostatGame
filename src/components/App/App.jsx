import React from "react";
import TitleContainer from "../TitleContainer/TitleContainer";
import End from "../End/End";
import Game from "../Game/Game";
import SFX from '../SFX/SFX';
import './App.css';
import Music from '../Music/Music';
import { Switch, Route, withRouter, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import {bindActionCreators} from 'redux';

//redux modules
import * as blocksModule from '../../redux/modules/blocks';
import * as doorsModule from '../../redux/modules/doors';
import * as enemiesModule from '../../redux/modules/enemies/enemies';
import * as gameModule from '../../redux/modules/game';
import * as roomModule from '../../redux/modules/rooms/room';
import * as playerModule from '../../redux/modules/player/player';
import * as switchesModule from '../../redux/modules/switches';
import * as platformsModule from '../../redux/modules/platforms';
import * as mapsModule from '../../redux/modules/map';
import * as flagsModule from '../../redux/modules/flags';
import * as textModule from '../../redux/modules/text/text';
import * as soundsModule from '../../redux/modules/sounds';
import * as savesModule from '../../redux/modules/save-data';
import * as bossModule from '../../redux/modules/boss/boss';
import * as menuModule from '../../redux/modules/menu';
import * as npcsModule from '../../redux/modules/npcs/npcs';
import * as projectilesModule from '../../redux/modules/projectiles';
//resources
import * as playerConsts from '../../redux/modules/player/playerConstants';
import * as enemyConsts from '../../redux/modules/enemies/enemyConstants';
import * as roomConsts  from '../../redux/modules/rooms/roomConstants';
import * as itemConsts from '../../redux/modules/rooms/itemConstants';
import * as textConsts from '../../redux/modules/text/textConstants';
import * as soundConsts from './SoundsLibrary';

import npcSprites from '../../redux/modules/npcs/npcSprites';
import bossShot from '../../assets/images/items/boss-shot.gif';
import reflectShot from '../../assets/images/items/reflected-shot.gif';
import bossBeam from '../../assets/images/items/boss-beam.gif';
import cryostat from '../../assets/images/items/cryostatNS.gif';
import boss from '../../assets/images/enemies/boss1.gif';
import bossSink from '../../assets/images/enemies/bossSink.gif';
import bossLaser from '../../assets/images/enemies/boss-laser.gif';
import darkBoss from '../../assets/images/enemies/boss1-dark.gif';
//stateless functions
import * as helpers from './helperFunctions';
import { forEach } from "lodash";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popUp: null,
      popUpTransition: null,
      load: false,
      emoteLocation: null,
      enemyTotal: 0,
      laserCount: 0,
      resetCounter: 0,
      chargeCounter: 0,
      projectilesArr: [],
      examinedObjects: 0,
      doubleDoorExit: null
    };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.generateRoomFromTemplate = this.generateRoomFromTemplate.bind(this);
    this.nullAll = this.nullAll.bind(this);
    this.exitSpecial = this.exitSpecial.bind(this);
  }

  //input + game loop functions
  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown, false);
    document.addEventListener('keyup', this.onKeyUp, false);
  }

  componentDidUpdate(prevProps) {
    if (this.props.player.magic < prevProps.player.magic) {
      this.regenMP();
    };
  }

  regenMP(){
    let regenTimer = setInterval(() => {
      let currentMP = this.props.player.magic;
      if(this.props.player.cloneLocation === null){
        if(currentMP < 100) {
          let nextTic = currentMP + 1;
          this.props.dispatch(playerModule.updatePlayerMagic(nextTic));
        } else {
          clearInterval(regenTimer);
        };
      } else {
        if(currentMP < 50) {
          let nextTic = currentMP + 1;
          this.props.dispatch(playerModule.updatePlayerMagic(nextTic));
        } else {
          clearInterval(regenTimer);
        };
      }
    }, 200);
  }

  regenStamina(){
    let currentStamina = this.props.player.stamina;
    let nextTic = currentStamina + 2;
    this.props.dispatch(playerModule.updatePlayerStamina(nextTic));
    // if(this.props.player.staminaRecover && nextTic === 50){
    //   this.props.dispatch(playerModule.updateStaminaRecover(false));
    // };
  }

  drainStamina(){
    let currentStamina = this.props.player.stamina;
    let nextTic = currentStamina - 2.5;
    this.props.dispatch(playerModule.updatePlayerStamina(nextTic));
    // if(nextTic === 0){
    //   this.props.dispatch(playerModule.updateStaminaRecover(true));
    // };
  }

  dropLoop(){
    let rng = Math.floor(Math.random() * 150);
    if(this.props.currentRoom[rng] && this.props.currentRoom[rng].value !== 'W' && this.props.currentRoom[rng].value !== 'D' && rng > 0){
      this.props.dispatch(roomModule.setWaterdrop(rng, true));
      setTimeout(() => {
        if(this.props.currentRoom[rng]){
          this.props.dispatch(roomModule.setWaterdrop(rng, false));
        };
      }, 900);
    };
  }

  gameLoop(){
    if(this.props.player.status !== 'strike' && this.props.player.pipe !== null){
      this.props.dispatch(playerModule.updatePipe(null));
    };
    if(this.props.player.status === 'guard'){ 
      if(this.props.player.stamina > 0) {
        setTimeout(() => {
          if(this.props.player.status === 'guard'){
            this.drainStamina();
          };
        }, 100);
      } else if(this.props.player.stamina <= 0){
        this.props.dispatch(playerModule.updatePlayerStatus(''));
        setTimeout(() => {
          this.props.dispatch(playerModule.updatePlayerStatus('stand'));
        }, 100);
      };
    } else if(this.props.player.stamina < 50) {
      this.regenStamina();
    };
    if(this.props.game.gameState === "active" && (this.props.player.status ==='stand' || this.props.player.status === 'walk') && this.props.player.location !== '' && this.props.currentRoom[this.props.player.location].value !== 'P' && this.props.currentRoom[this.props.player.location].value !== 'V'){
      if (this.props.game.north == true){
        this.move("north", this.props.player.location);
      } else if (this.props.game.east == true){
        this.move("east", this.props.player.location);
      } else if (this.props.game.south == true){
        this.move("south", this.props.player.location);
      } else if (this.props.game.west == true){
        this.move("west", this.props.player.location);
      } else if (this.props.game.skill == true){
        this.useSkill();
      };
    };
  }

  onKeyDown(event) {
    //reset
    if(event.keyCode === 17){
      event.preventDefault();
      this.reset();
    //move up
    } else if(event.keyCode === 87){
      event.preventDefault();
      if((this.props.player.status ==='stand') && this.props.game.gameState === 'active'){
        this.props.dispatch(gameModule.toggleNorth(true));
        this.props.dispatch(playerModule.updatePlayerStatus('walk'));
      };
      //move down
    } else if(event.keyCode === 83){
      event.preventDefault();
      if((this.props.player.status ==='stand') && this.props.game.gameState === 'active'){
        this.props.dispatch(gameModule.toggleSouth(true));
        this.props.dispatch(playerModule.updatePlayerStatus('walk'));
      };
      //move right
    } else if (event.keyCode === 68){
      event.preventDefault();
      if((this.props.player.status ==='stand') && this.props.game.gameState === 'active'){
        this.props.dispatch(gameModule.toggleEast(true));
        this.props.dispatch(playerModule.updatePlayerStatus('walk'));
      };
      //move left
    } else if (event.keyCode === 65){
      event.preventDefault();
      if((this.props.player.status ==='stand') && this.props.game.gameState === 'active'){
        this.props.dispatch(gameModule.toggleWest(true));
        this.props.dispatch(playerModule.updatePlayerStatus('walk'));
      };
    //change direction/fire north
    } else if (event.keyCode === 38){
      event.preventDefault();
      if(this.props.game.gameState == 'active' && (this.props.player.status ==='stand' || this.props.player.status === 'walk') && this.props.player.coolDown === false){
        this.props.dispatch(playerModule.updatePlayerDirection('north'));
          if(this.props.player.attackType === 'melee' && this.props.player.status !== 'strike' && this.props.player.items.includes('pipe') && this.props.player.staminaRecover === false){
            this.guard();
          } else if(this.props.player.attackType === 'ranged' && this.props.playerstatus !== 'shoot' && this.props.player.items.includes('charge') && this.props.player.charge === false){
            this.chargeGun();
          };
      };
    //change direction/fire east
    } else if (event.keyCode === 39){
      event.preventDefault();
      if(this.props.game.gameState == 'active' && (this.props.player.status ==='stand' || this.props.player.status === 'walk') && this.props.player.coolDown === false){
        this.props.dispatch(playerModule.updatePlayerDirection('east'));
          if(this.props.player.attackType === 'melee' && this.props.player.status !== 'strike' && this.props.player.items.includes('pipe') && this.props.player.staminaRecover === false){
            this.guard();
          } else if(this.props.player.attackType === 'ranged' && this.props.playerstatus !== 'shoot' && this.props.player.items.includes('charge') && this.props.player.charge === false){
            this.chargeGun();
          };
      };
    //change direction/fire south
    } else if (event.keyCode === 40){ 
      event.preventDefault();
      if(this.props.game.gameState == 'active' && (this.props.player.status ==='stand' || this.props.player.status === 'walk') && this.props.player.coolDown === false){
        this.props.dispatch(playerModule.updatePlayerDirection('south'));
          if(this.props.player.attackType === 'melee' && this.props.player.status !== 'strike' && this.props.player.items.includes('pipe') && this.props.player.staminaRecover === false){
            this.guard();
          } else if(this.props.player.attackType === 'ranged' && this.props.playerstatus !== 'shoot' && this.props.player.items.includes('charge') && this.props.player.charge === false){
            this.chargeGun();
          };
      };
    //change direction/fire west
    } else if (event.keyCode === 37){
      event.preventDefault();
      if(this.props.game.gameState == 'active' && (this.props.player.status ==='stand' || this.props.player.status === 'walk') && this.props.player.coolDown === false){
        this.props.dispatch(playerModule.updatePlayerDirection('west'));
          if(this.props.player.attackType === 'melee' && this.props.player.status !== 'strike' && this.props.player.items.includes('pipe') && this.props.player.staminaRecover === false){
            this.guard();
          } else if(this.props.player.attackType === 'ranged' && this.props.playerstatus !== 'shoot' && this.props.player.items.includes('charge') && this.props.player.charge === false){
            this.chargeGun();
          };
      };
    } else if (event.keyCode === 16 && (this.props.player.status ==='stand' || this.props.player.status === 'walk') && this.props.game.gameState == 'active'){
      event.preventDefault();
      this.useSkill();
    //change selected weapon
    } else if (event.keyCode === 81 && this.props.game.gameState == 'active' && this.props.player.weapons.length > 1) {
        event.preventDefault();
        soundConsts.select.play();
        let newWeaponId;
        if (this.props.player.weapons.length > 1) {
          if(this.props.player.currentWeapon === 'Taser') {
            this.props.dispatch(playerModule.changeCurrentWeapon('Cryostat'));
          } else {
            this.props.dispatch(playerModule.changeCurrentWeapon('Taser'));
          };
        };
    } else if (event.keyCode === 69 && this.props.game.gameState == 'active' && (this.props.player.status ==='stand' || this.props.player.status === 'walk') && this.props.player.skills.length > 1) {
      event.preventDefault();
      soundConsts.select.play();
      let newSkillId;
      if (this.props.player.skills.length > 1) {
        if(this.props.player.currentSkill === 'dash') {
          this.props.dispatch(playerModule.changeCurrentSkill('clone'));
        } else {
          this.props.dispatch(playerModule.changeCurrentSkill('dash'));
        };
      };
    } else if (event.keyCode === 13) {
      if (this.props.game.gameState == 'active' || this.props.game.gameState == 'paused') {
         this.pauseGame();
      } else if(this.props.game.gameState == 'dialogue' && this.props.text.options === null) {
        //advance text
        this.advanceLine();
      } else if (this.props.game.gameState == 'itemGet') {
         this.closeItemGet();
      }
    }
    if (event.keyCode === 32){
      event.preventDefault();
    }
  }

  handleAttack(){
    if(this.props.player.attackType === 'melee' && this.props.player.items.includes('pipe')){
      this.pipeAttack();
    } else if (this.props.player.attackType === 'ranged' && this.props.player.currentWeapon !== null){
      this.props.dispatch(gameModule.toggleFire(true));
      this.props.dispatch(playerModule.updatePlayerStatus('shoot'));
      this.attack();
    };
  }

  onKeyUp(event){
    if (event.keyCode === 32){
      event.preventDefault();
      if(this.props.game.gameState == 'dialogue' && this.props.text.options === null) {
        //advance text
        this.advanceLine();
      } else if (this.props.game.gameState === 'itemGet') {
        this.closeItemGet();
      } else if (this.props.game.gameState == 'active') {
        //talk/check environment
        let contentArr =  this.props.currentRoom[this.props.player.location].content;
        let interactArr = contentArr.find(function(content) {
          return content[0] == 'interact';
        });
        let next = this.props.player.location + helpers.getDifference(this.props.player.direction);
        if (interactArr !== undefined) {
          this.props.dispatch(playerModule.updatePlayerDirection('north'));
          this.triggerDialogue('interact', interactArr[1]);
        } else if (this.props.currentRoom[next].value === 'NPC') {
          let npcArr = this.props.currentRoom[next].content.find(function(content) {
            return content[0] === 'npc';
          });
          let npcName = npcArr[1];
          this.props.dispatch(npcsModule.updateNPCDirection(npcName, helpers.reverseDirection(this.props.player.direction)));
          let npcText = this.props.npcs[npcName].text;
          this.triggerDialogue('dialogue', npcText);
        } else if(this.props.player.items.includes('pipe') && this.props.player.currentWeapon !== null){
            let newAttackType;
            if(this.props.player.attackType === "melee"){
              newAttackType = "ranged";
            } else {
              newAttackType = "melee";
            };
            soundConsts.select.play();
            this.props.dispatch(playerModule.changeAttackType(newAttackType));
        };
      };
    };
    if(event.keyCode === 17){
    };
    if (event.keyCode == 65) {
      this.props.dispatch(gameModule.toggleWest(false));
      if(this.props.player.status === 'walk'){
        this.props.dispatch(playerModule.updatePlayerStatus('stand'));
      };
    };
    if (event.keyCode == 68) {
      this.props.dispatch(gameModule.toggleEast(false));
      if(this.props.player.status === 'walk'){
        this.props.dispatch(playerModule.updatePlayerStatus('stand'));
      };
    };
    if (event.keyCode == 87) {
      this.props.dispatch(gameModule.toggleNorth(false));
      if(this.props.player.status === 'walk'){
        this.props.dispatch(playerModule.updatePlayerStatus('stand'));
      };
    };
    if (event.keyCode == 83) {
      this.props.dispatch(gameModule.toggleSouth(false));
      if(this.props.player.status === 'walk'){
        this.props.dispatch(playerModule.updatePlayerStatus('stand'));
      };
    };
    //change direction/fire north
    if (event.keyCode === 38){
      event.preventDefault();
      if(this.props.game.gameState == 'active' && (this.props.player.status ==='stand' || this.props.player.status === 'walk' || this.props.player.status === 'guard' || this.props.player.status === 'charge') ){
        this.props.dispatch(playerModule.updatePlayerDirection('north'));
        this.handleAttack();
      };
    //change direction/fire east
    } else if (event.keyCode === 39){
      event.preventDefault();
      if(this.props.game.gameState == 'active' && (this.props.player.status ==='stand' || this.props.player.status === 'walk' || this.props.player.status === 'guard' || this.props.player.status === 'charge') ){
        this.props.dispatch(playerModule.updatePlayerDirection('east'));
        this.handleAttack();
      };
    //change direction/fire south
    } else if (event.keyCode === 40){ 
      event.preventDefault();
      if(this.props.game.gameState == 'active' && (this.props.player.status ==='stand' || this.props.player.status === 'walk' || this.props.player.status === 'guard' || this.props.player.status === 'charge') ){
        this.props.dispatch(playerModule.updatePlayerDirection('south'));
        this.handleAttack();
      };
    //change direction/fire west
    } else if (event.keyCode === 37){
      event.preventDefault();
      if(this.props.game.gameState == 'active' && (this.props.player.status ==='stand' || this.props.player.status === 'walk' || this.props.player.status === 'guard' || this.props.player.status === 'charge') ){
        this.props.dispatch(playerModule.updatePlayerDirection('west'));
        this.handleAttack();
      };
    };
  }

  pauseGame(){
    if (this.props.game.gameState == 'active') {
      this.handleChangeGameState('paused');
    } else if (this.props.game.gameState == 'paused') {
      this.handleChangeGameState('active');
    };
  }

  handleChangeGameState(newGameState){
    this.props.dispatch(gameModule.changeGameState(newGameState));
  }

  //start + load functions
  loadGame(){
    //load saved state
    let saveData = this.props.saves[this.props.game.file];
    this.props.dispatch(gameModule.loadGame(saveData.game));
    this.props.dispatch(playerModule.loadPlayer(saveData.player));
    this.props.dispatch(flagsModule.loadFlags(saveData.flags));
    this.props.dispatch(mapsModule.loadMaps(saveData.maps));
    this.setState({
      load: true
    });
    this.startGame();
  }

  loadState(){
    let savedState = this.props.saves.savedState;
    this.props.dispatch(gameModule.loadGame(savedState.game));
    this.props.dispatch(playerModule.loadPlayer(savedState.player));
    this.props.dispatch(flagsModule.loadFlags(savedState.flags));
    this.props.dispatch(mapsModule.loadMaps(savedState.maps));
    this.setState({
      load: true
    });
    this.startGame();
  }

  startGame(){
    //start game
    this.generateRoomFromTemplate();
    if(this.props.game.branch === 'prologue' && this.props.game.roomId === 1 && this.props.flags.startGame.triggered === false){
      this.handleChangeGameState('cutscene')
      setTimeout(() =>
        soundConsts.blanket.play()
      , 4000);
      setTimeout(() => {
        this.triggerDialogue('dialogue', 'Lucy1');
      }, 7000);
    } else {
      this.handleChangeGameState('active');
    };
  }

  //pop up functions
  triggerPopUp(name){
    this.setState({
      popUp: name,
      popUpTransition: 'popup-fade-in'
    });
    setTimeout(() =>
      this.clearPopUp(),
    5000)
  }

  clearPopUp() {
    let name = this.state.popUp;
    this.setState({
      popUpTransition: 'popup-fade-out'
    });
    setTimeout(() => {
      this.setState({
        popUp: null,
        popUpTransition: null
      });
      if(name === 'move'){
        this.triggerPopUp('interact');
      };
    },2000);
  }

//create map
  generateMapFromTemplate(){
    let mapsTemplate = roomConsts.maps[1];
    for(let i = 0; i < mapsTemplate.length; i++){
      this.props.dispatch(mapsModule.addMapSquare(i, mapsTemplate[i]));
    };
  }

//Create Rooms
  generateRoomFromTemplate = () => {
    let branch = this.props.game.branch;
    let room = this.props.game.roomId;
    let roomTemplate = roomConsts.rooms[branch][room];
    for(let i = 0; i < roomTemplate.length; i++){
      this.handleAddingSquareToRoom(i+1, roomTemplate[i]);
    };
    if(this.state.load === true) {
      let content = this.props.currentRoom[this.props.player.location].content;
      content.push(['player']);
      this.props.dispatch(roomModule.updateContent(this.props.player.location, content));
      this.setState({
        load: false
      });
    }
    this.setAlerts();
    if(this.props.game.previousRoomId === 'warp'){
      this.handleChangeGameState("cutscene");
      this.props.dispatch(gameModule.changeFilter('fade-in'));
      this.props.dispatch(playerModule.updatePlayerStatus('warp'));
      setTimeout(() => {
        this.props.dispatch(gameModule.changeFilter(''));
        this.props.dispatch(playerModule.updatePlayerStatus('stand'));
        this.handleChangeGameState("active");
      }, 800);
    } else if(this.props.game.previousRoomId !== null ) {
      setTimeout(() =>
      {this.handleChangeGameState("active");
        if(this.props.player.status === 'vision'){
          setTimeout(() => {
            this.props.dispatch(playerModule.updatePlayerDirection('south'));
            this.props.dispatch(playerModule.updatePlayerStatus('stand'));
          }, 1500);
        } else {
          this.props.dispatch(playerModule.updatePlayerStatus('stand'));
        };
      },
      600
      );
    };
    //set music
    if(this.props.game.branch === 'prologue'){
      if(this.props.game.roomId === 1 && this.props.flags.startGame.triggered === false){
        this.props.dispatch(soundsModule.changeMusic(''));
      };
    } else if(this.props.game.roomId == 1 && this.props.game.branch === 1) {
      this.props.dispatch(soundsModule.changeMusic('intro'));
    } else if(this.props.game.branch == 1) {
        this.props.dispatch(soundsModule.changeMusic('bgm1'));
        this.props.dispatch(soundsModule.changeEffect('drip'));
    };
    if(this.props.game.branch === 'prologue' && this.props.game.roomId === 13){
      this.props.dispatch(doorsModule.updateDoorLock('P13-B', true));
      setTimeout(() => {
        this.triggerDialogue('dialogue', 'postFuneral');
      }, 1500);
    };
    if(this.props.game.branch === 'prologue' && this.props.game.roomId === 9 && !this.props.flags.enterFuneral.triggered){
      this.props.dispatch(flagsModule.triggerFlag('enterFuneral'));
      this.enterFuneral();
    };
    if(this.props.game.roomId === 5 && this.props.game.branch === 2){
      this.props.dispatch(flagsModule.triggerFlag('warpOn'));
    };
    if(this.props.game.roomId === 8 && this.props.game.branch === 3){
      this.createBoss();
    };
    let gameLoop = setInterval(() =>
      this.gameLoop(),
    100
    );
    let oldTimerArr = this.props.game.timers;
    let newTimerArr = oldTimerArr.concat(gameLoop);
    this.props.dispatch(gameModule.updateTimers(newTimerArr));
    if(this.props.game.branch === 1 || this.props.game.branch === 'collapse'){
      let time = 2000;
      if(this.props.game.branch === 'collapse'){
        time = 500;
      }
      let dropLoop = setInterval(() =>
        this.dropLoop(),
      time);
      oldTimerArr = this.props.game.timers;
      newTimerArr = oldTimerArr.concat(dropLoop);
      this.props.dispatch(gameModule.updateTimers(newTimerArr));
      this.saveState();
    };
  }

  setAlerts(){
    let squareArr = Object.values(this.props.currentRoom);
    //set objects
    let filteredSquareArrT = squareArr.filter(function(square) {
      return square.value == 'T';
    });
    filteredSquareArrT.forEach(square => {
      let text = square.content.find(function(content) {
        return content[0] == 'interact';
      });
      if (text !== undefined) {
        let contentArr = this.props.currentRoom[square.squareId + 1].content;
        contentArr.push(text);
        this.props.dispatch(roomModule.updateContent(square.squareId + 1, contentArr));
        this.props.dispatch(roomModule.toggleAlert(square.squareId + 1, true));
      };
      if(this.props.game.roomId === 1 && this.props.player.items.includes('bracelet')){
        this.props.dispatch(roomModule.updateContent(72, [['interact', 'terminal1']]));
        this.props.dispatch(roomModule.updateContent(71, [['interact', 'terminal1']]));
      };
    });
    //set lasers
    let filteredSquareArrL = squareArr.filter(function(square) {
      return square.value == 'Lzr';
    });
    filteredSquareArrL.forEach(square=> {
      let laserArr = square.content.find(function(content) {
        return content[0] == 'laser';
      });
      if(laserArr !== undefined){
        laserArr[1].forEach(laser => {
          this.fireLaser(square.squareId, laser);
        });
      };
    });
    if(this.props.game.branch !== 'prologue'){
      //set doors
      let filteredSquareArrD = squareArr.filter(function(square) {
        return square.value == 'D';
      });
      filteredSquareArrD.forEach(square => {
        let doorArr = square.content.find(function(content) {
          return content[0] == 'door';
        });
        let door = this.props.doors[doorArr[1]];
        if (door.direction == 'north') {
          //front
          let contentArr = this.props.currentRoom[square.squareId + 1].content;
          contentArr.push(['doorTrigger', door.doorId]);
          this.props.dispatch(roomModule.updateContent(square.squareId + 1, contentArr));
          //back
          if(square.squareId - 1 > 0){
            contentArr = this.props.currentRoom[square.squareId - 1].content;
            contentArr.push(['doorTrigger', door.doorId]);
            this.props.dispatch(roomModule.updateContent(square.squareId - 1, contentArr));
          }
        } else if (door.direction == 'east') {
          //front
          let contentArr = this.props.currentRoom[square.squareId - 13].content;
          contentArr.push(['doorTrigger', door.doorId]);
          this.props.dispatch(roomModule.updateContent(square.squareId - 13, contentArr));
          //back
          if(square.squareId + 13 < 157) {
            contentArr = this.props.currentRoom[square.squareId + 13].content;
            contentArr.push(['doorTrigger', door.doorId]);
            this.props.dispatch(roomModule.updateContent(square.squareId + 13, contentArr));
          }
        } else if (door.direction == 'south') {
          //front
          let contentArr = this.props.currentRoom[square.squareId - 1].content;
          contentArr.push(['doorTrigger', door.doorId]);
          this.props.dispatch(roomModule.updateContent(square.squareId - 1, contentArr));
          //back
          if(square.squareId + 1 < 157) {
            contentArr = this.props.currentRoom[square.squareId + 1].content;
            contentArr.push(['doorTrigger', door.doorId]);
            this.props.dispatch(roomModule.updateContent(square.squareId + 1, contentArr));
          }
        } else if (door.direction == 'west') {
          //front
          let contentArr = this.props.currentRoom[square.squareId + 13].content;
          contentArr.push(['doorTrigger', door.doorId]);
          this.props.dispatch(roomModule.updateContent(square.squareId + 13, contentArr));
          //back
          if(square.squareId - 13 > 0){
            contentArr = this.props.currentRoom[square.squareId - 13].content;
            contentArr.push(['doorTrigger', door.doorId]);
            this.props.dispatch(roomModule.updateContent(square.squareId - 13, contentArr));
          }
        };
      });
    };
  }

  nullAll() {
    let timers = this.props.game.timers;
    timers.forEach(timer => {
      clearInterval(timer);
    });
    if(this.props.player.cloneLocation !== null){
      this.merge();
    };
    this.props.dispatch(gameModule.clearTimers());
    this.props.dispatch(gameModule.toggleNorth(false));
    this.props.dispatch(gameModule.toggleEast(false));
    this.props.dispatch(gameModule.toggleWest(false));
    this.props.dispatch(gameModule.toggleSouth(false));
    this.props.dispatch(enemiesModule.nullAllEnemies());
    this.props.dispatch(blocksModule.nullAllBlock());
    this.props.dispatch(switchesModule.nullAllSwitches());
    this.props.dispatch(platformsModule.nullAllPlatforms());
    this.props.dispatch(npcsModule.nullNPCs());
    this.props.dispatch(projectilesModule.nullAllLasers());
    this.props.dispatch(roomModule.nullRoom());
    this.props.dispatch(doorsModule.nullAllDoors());
    this.props.dispatch(bossModule.nullBoss());
  }

  handleAddingSquareToRoom(thisSquareId, squareArr) {
    let squareValue = squareArr[0];
    let squareImage;
    let content = [];
    let sprite = '';
    let transition = '';
    let alert = false;
    //set initial player location
    if (squareValue == '1' && this.props.flags['getBracelet'].triggered === false) {
      this.props.dispatch(gameModule.setRespawnPoint(thisSquareId));
      content.push(['player']);
      this.props.dispatch(playerModule.updatePlayerLocation(thisSquareId));
      squareImage = roomConsts.sprites['tile'];
    //create door
    } else if (squareValue == 'D') {
      content.push(['door', squareArr[1]]);
      let status;
      let isLocked = squareArr[3];
      if(squareArr[1] === '1-A' && this.props.flags.getBracelet.triggered
      || this.props.game.roomId === 'hallway1' && this.props.flags.hallwayClear.triggered
      || squareArr[1] === '3-A' && this.props.flags.midbossOpen.triggered){
        isLocked = false;
      };
      if((this.props.game.branch === 'prologue' && isLocked === false) || thisSquareId === this.props.player.location){
        status = 'open';
      } else {
        status = 'closed';
      };
      //check if it's the door the player entered from, if so add player and set respawn point
      if (squareArr[2] == this.props.game.previousRoomId && this.state.load === false) {
        let start = thisSquareId + helpers.getDifference(helpers.reverseDirection(squareArr[4]));
        this.props.dispatch(gameModule.setRespawnPoint(start));
        status = 'open';
        this.props.dispatch(playerModule.updatePlayerLocation(start));
      };
      if(isLocked === 'frozen'){
        status = 'closed';
      }
      this.props.dispatch(doorsModule.createDoor(squareArr[1], thisSquareId, squareArr[2], status, isLocked, squareArr[4]));
      if(squareArr[2] === 0){
        if (this.props.game.branch == 3) {
          squareImage = roomConsts.sprites['spookyTile'];
        } else {
          squareImage = roomConsts.sprites['tile'];
        };
      } else if(this.props.game.branch === 'prologue' && squareArr[4] === 'north'){
        if(this.props.game.roomId === 1){
          squareImage = roomConsts.sprites['topPrologue'];
        } else if(this.props.game.roomId === 9 || this.props.game.roomId === 10){
          squareImage = roomConsts.sprites['topFuneralPrologue'];
        } else if(this.props.game.roomId === 11){
          squareImage = roomConsts.sprites['brickPrologue'];
        } else if(this.props.game.roomId === 12){
          squareImage = '';
        } else {
          squareImage = roomConsts.sprites['topAltPrologue'];
        };
      } else if(this.props.game.branch === 'prologue' && squareArr[4] === 'south' && this.props.game.roomId !== 7 && this.props.game.roomId !== 8){
        squareImage = roomConsts.sprites['bottomPrologue'];
      } else {
        squareImage = roomConsts.sprites['doorTile'];
      }
    //create lava
    } else if (squareValue === 'LP'){
      squareImage = roomConsts.sprites['lavaPipe'];
      squareValue = 'L';
    } else if (squareValue == 'L' || squareValue == 'LC' ) {
      if (this.props.currentRoom[thisSquareId - 1].value !== 'L' && this.props.currentRoom[thisSquareId - 1].value !== 'F' && this.props.currentRoom[thisSquareId - 1].value !== 'LC'){
        squareImage = roomConsts.sprites['lava'];
      } else {
        squareImage = roomConsts.sprites['lava2']
      };
    } else if (squareValue == 'LC') {
      squareImage = '';
    //create eyeball
    } else if (squareValue == 'i') {
      squareImage = roomConsts.sprites['spookyTile']
      this.props.dispatch(gameModule.setEye('alive'));
    //create void pit
    } else if (squareValue == 'V' || squareValue === 'boss') {
      if(this.props.currentRoom[thisSquareId - 1].value === 'L'){
        squareImage = roomConsts.sprites['pitLava'];
      } else if (this.props.currentRoom[thisSquareId - 1].value !== 'V' && this.props.currentRoom[thisSquareId - 1].value !== 'M' && this.props.currentRoom[thisSquareId - 1].value !== 'MB' && this.props.currentRoom[thisSquareId - 1].value !== 'F' && this.props.currentRoom[thisSquareId - 1].value !== 'Lzr'){
        if(this.props.game.branch === 3){
          squareImage = roomConsts.sprites['pitSpooky'];
        } else {
          squareImage = roomConsts.sprites['pitEmpty'];
        }
      } else {
        squareImage = roomConsts.sprites['doorTile'];
      };
    //create water pit
    } else if (squareValue == 'P') {
      if(this.props.game.branch === 4){
        squareImage = roomConsts.sprites['pit2'];
      } else {
        if (this.props.currentRoom[thisSquareId - 1].value !== 'P' && this.props.currentRoom[thisSquareId - 1].value !== 'PF' && this.props.currentRoom[thisSquareId - 1].value !== 'Lzr' && this.props.currentRoom[thisSquareId - 1].value !== 'F' && this.props.currentRoom[thisSquareId - 1].value !== 'E' && this.props.currentRoom[thisSquareId - 1].value !== 'M' && this.props.currentRoom[thisSquareId - 1].value !== 'MB'){
          if(this.props.game.branch === 'collapse'){
            squareImage = roomConsts.sprites['pitRise'];
          } else {
            squareImage = roomConsts.sprites['pit'];
          };
        } else {
          squareImage = roomConsts.sprites['pit2']
        };
      }
    } else if (squareValue == 'PF') {
      squareImage = roomConsts.sprites['pit2'];
      sprite  = roomConsts.sprites['waterfall'];
    //create wall
    } else if (squareValue == 'W') {
      if(this.props.game.branch === 'prologue'){
        squareImage = roomConsts.sprites[squareArr[1] + 'Prologue'];
      } else if (this.props.game.branch == 3) {
        squareImage = roomConsts.sprites[squareArr[1] + 'Spooky'];
      } else if (squareArr[1] === 'ice'){
        sprite = roomConsts.sprites['iceChunk'];
        squareImage = roomConsts.sprites['tile'];
      } else if(squareArr[1].includes('powerRight') && this.props.game.powerRight === false && this.props.game.branch !== 3){
          squareImage = roomConsts.sprites[squareArr[1] + 'Off'];
      } else if(squareArr[1].includes('powerLeft') && this.props.game.powerLeft === false && this.props.game.branch !== 3){
          squareImage = roomConsts.sprites[squareArr[1] + 'Off'];
      } else {
        squareImage = roomConsts.sprites[squareArr[1]];
      };
    //rising tile
    } else if (squareValue == 'WR'){
      squareImage = roomConsts.sprites['riseTileUp'];
    } else if (squareValue === '0R'){
      squareImage = roomConsts.sprites['riseTileDown'];
    //ice pipe
    } else if (squareValue === 'IP'){
      if(squareArr[1] === 'east'){
        sprite = roomConsts.sprites['icePipeEast'];
        content.push(['pipe', 'east']);
      } else {
        sprite = roomConsts.sprites['icePipeWest'];
        content.push(['pipe', 'west']);
      };
      squareImage = roomConsts.sprites['tile'];
    //create item tile
    } else if (squareValue == '$') {
      if (this.props.player.items.includes(squareArr[2]) || this.props.player.weapons.includes(squareArr[2])) {
        squareValue = '0';
      } else {
        content.push([squareArr[1], squareArr[2]]);
      };
      if (this.props.game.branch == 3) {
        squareImage = roomConsts.sprites['spookyTile'];
      } else {
        squareImage = roomConsts.sprites['tile'];
      };
    //create breakable tile
    } else if (squareValue === 'F'){
      squareImage = roomConsts.sprites['fragile'];
    //create conveyer belt
    } else if (squareValue == 'C') {
      squareImage = roomConsts.sprites[squareArr[1] + 'Belt'];
      content.push(['belt', squareArr[1]]);
    //create moving tile
    } else if (squareValue == 'M' || squareValue == 'MB') {
      let contentId = squareArr[1];
      content.push(['platform', contentId]);
      let direction = squareArr[2];
      if (direction == 'north' || direction == 'south'){
        squareImage = roomConsts.sprites['platformOffNS'];
      } else {
        squareImage = roomConsts.sprites['platformOffEW'];
      };
      this.props.dispatch(platformsModule.createPlatform(contentId, thisSquareId, thisSquareId, direction, false));
    //create switch
  } else if (squareValue === 'S-on'){
    if(this.props.game.branch === 3){
      squareImage = roomConsts.sprites['spookySwitchOn'];
    } else {
      squareImage = roomConsts.sprites['switchOn'];
    };
  } else if (squareValue == 'S') {
      let contentId = v4();
      let effectId = squareArr[1];
      let effectType;
      if (squareArr[2] == 'd') {
        effectType = 'door';
      } else if (squareArr[2] == 'r') {
        effectType = 'rise';
      } else if (squareArr[2] == 'p') {
        effectType = 'platform';
      };
      let timer = squareArr[3];
      let switchType;
      if (squareArr[4] == 'p') {
        switchType = 'pressure';
      } else {
        switchType = 'elecSwitch';
      };
      if (switchType == 'pressure') {
        if(this.props.game.branch === 3){
          squareImage = roomConsts.sprites['spookySwitchOff'];
        } else {
          squareImage = roomConsts.sprites['switchOff'];
        };
        content.push(['switch', contentId]);
      } else {
        sprite = roomConsts.sprites['elecSwitchOff'];
        if(this.props.game.branch === 3){
          squareImage = roomConsts.sprites['spookyTile'];
        } else if(this.props.game.branch === 'collapse'){
          squareImage = roomConsts.sprites['tileSunk'];
        } else {
          squareImage = roomConsts.sprites['tile'];
        };
        content.push(['elecSwitch', contentId]);
      };
      this.props.dispatch(switchesModule.createSwitch(contentId, thisSquareId, false, effectId, effectType, timer, switchType));
    } else if (squareValue == 'T'){
      //square contains text
      let type = squareArr[1];
      if (type === 'save' && this.props.game.roomId === 1 && this.props.flags['getBracelet'].triggered == false) {
        squareValue = '0';
        if(this.props.game.branch !== 3) {
          squareImage = roomConsts.sprites['tile'];
        } else {
          squareImage = roomConsts.sprites['spookyTile'];
        }
      } else if (type === 'save' && this.props.game.roomId === 3 && this.props.flags['midbossOpen'].triggered === false){
        squareValue = '0';
        if(this.props.game.branch !== 3) {
          squareImage = roomConsts.sprites['tile'];
        } else {
          squareImage = roomConsts.sprites['spookyTile'];
        };
      } else if (type === 'terminal'){
        sprite = roomConsts.sprites['terminal'];
        if(this.props.game.branch !== 3) {
          squareImage = roomConsts.sprites['tile'];
        } else {
          squareImage = roomConsts.sprites['spookyTile'];
        }
        let textKey = squareArr[2];
        content.push(['interact', textKey]);
      } else if(type === 'tankE1' && this.props.flags['smashMachine'].triggered === true){
        sprite = roomConsts.sprites['tankBroken1'];
        content.push(['interact', 'tankBroken1']);
        if(this.props.game.branch !== 3) {
          squareImage = roomConsts.sprites['tile'];
        } else {
          squareImage = roomConsts.sprites['spookyTile'];
        }
      } else if(type === 'tankE2' && this.props.flags['smashMachine'].triggered === true){
        sprite = roomConsts.sprites['tankBroken2'];
        content.push(['interact', 'tankBroken2']);
        if(this.props.game.branch !== 3) {
          squareImage = roomConsts.sprites['tile'];
        } else {
          squareImage = roomConsts.sprites['spookyTile'];
        }
      } else if (type === 'sign') {
        if(this.props.game.branch === 3){
          squareImage = roomConsts.sprites['signSpooky'];
        } else {
          squareImage = roomConsts.sprites['sign'];
        }
        let textKey = squareArr[2];
        content.push(['interact', textKey]);
      } else if (type !== 'extend') {
        //create examinable object
        if(this.props.game.branch === 'prologue'){
          if(type.includes('poster')){
            squareImage = roomConsts.sprites['topPrologue'];
          } else if (type === 'bathroomDoor'){
            squareImage = roomConsts.sprites['closedPrologueDoorNorth'];
          } else if(type.includes('table') || type.includes('sink') || type === 'fridge' || type === 'coffee'){
            if(thisSquareId % 2 === 0){
              squareImage = roomConsts.sprites['checkeredTile1'];
            } else {
              squareImage = roomConsts.sprites['checkeredTile2'];
            };
          } else if(this.props.game.branch === 'prologue' && this.props.game.roomId === 7 && (type === 'vest' || type === 'coffeeTAlt' || type.includes('bed'))){
            squareImage = roomConsts.sprites['pit2Prologue']
          } else if(type.includes('funeralSign')){
            squareImage = roomConsts.sprites['grass']
          } else if(type === 'wreath' || type.includes('funeral')){
            squareImage = roomConsts.sprites['rugRed']
          } else if(type === 'coffeeT' || type === 'sofa1'){
            squareImage = roomConsts.sprites['rugTileNorth'];
          } else if(type === 'sofa2'){
            squareImage = roomConsts.sprites['rugTileCorner2'];
          } else if(type === 'tv2'){
            squareImage = roomConsts.sprites['rugTileCorner4'];
          } else if(type === 'tv1'){
            squareImage = roomConsts.sprites['rugTileSouth'];
          } else if(thisSquareId % 2 === 0){
            squareImage = roomConsts.sprites['woodTile1'];
          } else {
            squareImage = roomConsts.sprites['woodTile2'];
          }
        } else if(type === 'machineLeft' || type === 'machineRight'){
          squareImage = roomConsts.sprites['doorTile'];
        } else if(this.props.game.branch !== 3) {
          squareImage = roomConsts.sprites['tile'];
        } else {
          squareImage = roomConsts.sprites['spookyTile'];
        };
        if((type === 'machineLeft' || type === 'machineRight') && this.props.game.powerRight === false){
          sprite = roomConsts.sprites[type + 'Off'];
        } else if(type.includes('computer') && this.props.game.powerLeft === false){
          sprite = roomConsts.sprites[type + 'Off'];
        } else if(type === 'powerTerminal'){
          if(squareArr[2] === 'left' && this.props.game.powerLeft === true || squareArr[2] === 'right' && this.props.game.powerRight === true){
            sprite = roomConsts.sprites['powerTerminalOn'];
          } else {
            sprite = roomConsts.sprites['powerTerminalOff'];
          };
        } else if(type === 'fridgeDoor'){
          squareImage = roomConsts.sprites.rugGreen1;
          sprite = roomConsts.sprites[type];
        } else {
          sprite = roomConsts.sprites[type];
        };
        content.push(['interact', type]);
      };
    //stairs 
    } else if (squareValue === 'stairs'){
      squareImage = roomConsts.sprites['stairs' + squareArr[1]];
      content.push(['stairs', squareArr[2]]);
      if (squareArr[2] == this.props.game.previousRoomId && this.state.load === false) {
        let start = thisSquareId + helpers.getDifference(this.props.player.direction);
        this.props.dispatch(gameModule.setRespawnPoint(start));
        this.props.dispatch(playerModule.updatePlayerLocation(start));
      };
    } else if (squareValue === 'fridgeOpen'){
      squareImage = roomConsts.sprites.rugGreen2;
      sprite = roomConsts.sprites.fridgeOpen;
      squareValue = 'stairs'
      content.push(['stairs', 8]);
      if (squareArr[2] == this.props.game.previousRoomId && this.state.load === false) {
        let start = thisSquareId;
        this.props.dispatch(gameModule.setRespawnPoint(start));
        this.props.dispatch(playerModule.updatePlayerLocation(start));
      };
    } else if(squareValue.includes('wound')){
        if(this.props.game.powerRight || this.props.game.branch === 2 && this.props.flags.exitWound.triggered === false){
          sprite = roomConsts.sprites[squareValue];
        } else {
          if(squareValue === 'wound2'){
            sprite = roomConsts.sprites['woundClosed'];
          } else {
            sprite = ''
          };
        };
        squareImage = roomConsts.sprites.doorTile;
    //create warp square
    } else if (squareValue == '@') {
      squareImage = roomConsts.sprites[squareArr[2]];
      content.push(['warp', squareArr[1]]);
    } else if (squareValue === '%'){
      squareImage = roomConsts.sprites['warp'];
      if(this.props.game.previousRoomId === 'warp'){
        this.props.dispatch(playerModule.updatePlayerLocation(thisSquareId));
      };
    } else if (squareValue === 'ink'){
      if(thisSquareId % 2 === 0){
        squareImage = roomConsts.sprites['rugGreen1'];
      } else {
        squareImage = roomConsts.sprites['rugGreen2'];
      };
      sprite = roomConsts.sprites['ink' + squareArr[1]];
    } else if (squareValue === '<>'){
      sprite = roomConsts.sprites['crystal'];
      if (this.props.game.branch == 3) {
        squareImage = roomConsts.sprites['spookyTile'];
      } else {
        squareImage = roomConsts.sprites['tile'];
      };
    } else if (squareValue === '0W'){
      squareImage = roomConsts.sprites['tileSunk'];
    } else if (squareValue === 'STN'){
      squareImage = roomConsts.sprites['stoneTile'];
    } else if (squareValue === 'STN2'){
      squareImage = roomConsts.sprites['stoneTile2'];
    } else if (squareValue === 'CH'){
      if(thisSquareId % 2 === 0){
        squareImage = roomConsts.sprites['checkeredTile1'];
      } else {
        squareImage = roomConsts.sprites['checkeredTile2'];
      };
    } else if (squareValue === 'RU'){
      squareImage = roomConsts.sprites['rugTile' + squareArr[1]];
    } else if(squareValue === '0M'){
      squareImage = roomConsts.sprites['metalTile'];
    } else {
      if(squareValue === '0' && squareArr[1]){
        squareImage = roomConsts.sprites[squareArr[1]];
      } else {
        let rng = Math.floor(Math.random() * 2);
        if(this.props.game.branch === 'prologue'){
          if(this.props.game.roomId === 8 || this.props.game.roomId === 12){
            squareImage = roomConsts.sprites['doorTile']
          } else if(this.props.game.roomId === 2 || this.props.game.roomId === 7 || this.props.game.roomId === 5 || this.props.game.roomId === 6 || this.props.game.roomId === 13){
            if(thisSquareId % 2 === 0){
              squareImage = roomConsts.sprites['rugGreen1'];
            } else {
              squareImage = roomConsts.sprites['rugGreen2'];
            };
          } else if(this.props.game.roomId === 9 || this.props.game.roomId === 10){
            squareImage = roomConsts.sprites['rugRed'];
          } else if(thisSquareId % 2 === 0){
            squareImage = roomConsts.sprites['woodTile1'];
          } else {
            squareImage = roomConsts.sprites['woodTile2'];
          }
        } else if (this.props.game.branch == 3) {
          if (rng > 0) {
            squareImage = roomConsts.sprites['spookyTile'];
          } else {
            squareImage = roomConsts.sprites['spookyTile2'];
          };
        } else if (this.props.game.branch === 4){
          if (rng > 0) {
            squareImage = roomConsts.sprites['rigTile1'];
          } else {
            squareImage = roomConsts.sprites['rigTile2'];
          };
        } else {
          if (rng > 0) {
            squareImage = roomConsts.sprites['tile'];
          } else {
            squareImage = roomConsts.sprites['tile2'];
          };
        }
      }
    }
    if(this.props.game.branch === 'collapse' && this.props.game.roomId === 'hallway3' && (thisSquareId === 50 || thisSquareId === 84)){
      sprite = roomConsts.sprites['waterfall'];
    };
    if(this.props.game.branch === 'collapse'){
      if(this.props.game.roomId === 7){
        if(thisSquareId === 135){
          sprite = roomConsts.sprites['waterfallRight']
        } else if(thisSquareId === 24){
          sprite = roomConsts.sprites['waterfallLeft']
        }
      } else if(this.props.game.roomId === 'hallway3'){
        if(thisSquareId === 112){
          sprite = roomConsts.sprites['waterfallRight']
        } else if(thisSquareId === 44){
          sprite = roomConsts.sprites['waterfallLeft']
        }
      } else if(this.props.game.roomId === 'hallway4'){
      };
    };
    //railing
    if (this.props.game.branch === 'prologue' && this.props.game.roomId === 3 && (thisSquareId === 57 || thisSquareId === 44)){
      sprite = roomConsts.sprites['railing'];
    } else if(this.props.game.branch === 'prologue' && this.props.game.roomId === 3 && thisSquareId === 70){
      sprite = roomConsts.sprites['railing2'];
    }
    //spawn enemy
    if (squareValue == 'E') {
      let newEnemyId = this.handleCreateNewEnemy(thisSquareId, squareArr[1]);
      sprite = this.props.enemies[newEnemyId].sprites.move['south'];
      content.push(['enemy', newEnemyId]);
      if(squareArr[1] === 'waterEye'){
        if (this.props.currentRoom[thisSquareId - 1].value !== 'P' && this.props.currentRoom[thisSquareId - 1].value !== 'Lzr' && this.props.currentRoom[thisSquareId - 1].value !== 'F'){
          squareImage = roomConsts.sprites['pit'];
        } else {
          squareImage = roomConsts.sprites['pit2']
        };
      }
    };
    //create laser drone
    if (squareValue == 'Lzr') {
      sprite = roomConsts.sprites['laserDrone'];
      if(this.props.game.roomId === 6){
        if(this.props.currentRoom[thisSquareId - 1].value !== 'V'){
          squareImage = roomConsts.sprites['pitEmpty'];
        } else {
          squareImage = roomConsts.sprites['doorTile'];
        };
      } else {
        squareImage = roomConsts.sprites['tile'];
      }
      content.push(['laser', squareArr[1]])
    }
    //spawn NPC
    if (squareValue === 'NPC') {
      //exceptions
      if(!(this.props.game.branch === 1 && this.props.game.roomId === 7 && this.props.flags.mutinyExit.triggered) 
      && !(this.props.game.branch === 'prologue' && this.props.game.roomId === 1 && this.props.flags.exitStartingRoom.triggered)
      && !(this.props.game.branch === 'prologue' && this.props.game.roomId === 4 && this.props.flags.exitStairway.triggered)
      && !(this.props.game.branch === 'collapse' && this.props.game.roomId === 7 && this.props.flags.mutinyExit2.triggered)
      && !(this.props.game.branch === 'collapse' && this.props.game.roomId === 'hallway3' && this.props.flags.mutinyExit3.triggered)
      && !(this.props.game.branch === 'collapse' && this.props.game.roomId === 'hallway4' && this.props.flags.mutinyExit4.triggered)){
        this.props.dispatch(npcsModule.createNPC(squareArr[1], thisSquareId, squareArr[2], squareArr[3], squareArr[4]));
        content.push(['npc', squareArr[1]]);
      } else {
        squareValue = '0';
      }
      if(squareArr[1] === 'lucyYoung'){
        if(this.props.game.roomId === 1){
          squareImage = roomConsts.sprites['rugTileWest'];
        } else if(this.props.game.roomId === 4){
          squareImage = roomConsts.sprites['stoneTile2'];
        } else if(this.props.game.roomId === 9){
          squareImage = roomConsts.sprites['rugRed'];
        } else {
          squareImage = roomConsts.sprites['doorTile'];
        };
      };
    }
    //spawn block
    if (squareValue == 'B' || squareValue == 'MB') {
      let kind;
      if(squareValue === 'B'){
        kind = squareArr[1];
      } else if (squareValue === 'MB'){
        kind = squareArr[3];
      };
      if(kind === 'wood'){
        sprite = roomConsts.sprites['blockWood'];
      } else if(kind === 'metal'){
        sprite = roomConsts.sprites['blockMetal'];
      };
      if(this.props.game.branch === 'collapse'){
        squareImage = roomConsts.sprites['tileSunk'];
      };
      let contentId = v4();
      content.push(['block', contentId]);
      this.props.dispatch(blocksModule.createBlock(contentId, thisSquareId, kind));
    };
    if(this.props.game.branch === 'prologue'){ 
      //spawn in empty room
      if(this.props.game.roomId === 8 || this.props.game.roomId === 12){
        this.props.dispatch(playerModule.updatePlayerLocation(77));
      //funeral room 1 (main)
      } else if(this.props.game.roomId === 9){
        if(this.state.doubleDoorExit === 1){
          this.props.dispatch(playerModule.updatePlayerLocation(73));
        } else {
          this.props.dispatch(playerModule.updatePlayerLocation(86));
        };
      //funeral room 2 (hallway)
      } else if(this.props.game.roomId === 10){
        if(this.props.game.previousRoomId === 9){
          if(this.state.doubleDoorExit === 1){
            this.props.dispatch(playerModule.updatePlayerLocation(68));
          } else {
            this.props.dispatch(playerModule.updatePlayerLocation(81));
          };
        } else {
          if(this.state.doubleDoorExit === 1){
            this.props.dispatch(playerModule.updatePlayerLocation(74));
          } else {
            this.props.dispatch(playerModule.updatePlayerLocation(87));
          };
        }
      } else if(this.props.game.roomId === 11){
        if(this.state.doubleDoorExit === 1){
          this.props.dispatch(playerModule.updatePlayerLocation(68));
        } else {
          this.props.dispatch(playerModule.updatePlayerLocation(81));
        };
      };
    }
    this.props.dispatch(roomModule.addSquare(thisSquareId, squareValue, content, squareImage, sprite, transition, alert));
  }

//Handle Movement
  move(direction, originalLocation){
    //check if move is legal, if not return original location
    let canMove = this.attemptMove(direction, originalLocation);
    this.props.dispatch(playerModule.updatePlayerDirection(direction));
    if(this.props.currentRoom[originalLocation].value === 'C'){
      let belt = this.props.currentRoom[originalLocation].content.find(function(content) {
        return content[0] == 'belt';
      });
      if(direction === helpers.reverseDirection(belt[1])){
        canMove = originalLocation;
      };
    };
    //if move is legal and didn't cause any secondary effects...
    if (canMove !== originalLocation){
      if(this.exitCheck(direction, canMove) !== 'exit'){
        let squareCheck = this.playerSquareCheck(canMove, direction);
        if(squareCheck == 'moved' || squareCheck == 'slide' || squareCheck == 'belt'){
          this.handleUpdatePlayerLocation(originalLocation, canMove);
          if (squareCheck == 'slide' || squareCheck == 'belt'){
            this.props.dispatch(playerModule.updatePlayerStatus('slide'));
          };
          if(this.props.game.branch === 'prologue' && this.props.game.roomId === 1){
            this.npcRotate();
          };
          setTimeout(() => {
            //trigger effects
            if(this.props.game.branch === 1 && this.props.game.roomId === 7 && this.props.flags['mutinyExit'].triggered == false) {
              this.props.dispatch(flagsModule.triggerFlag('mutinyExit'));
              setTimeout(() => {
                this.triggerDialogue('dialogue', 'explore');
                setTimeout(() => {
                  this.props.dispatch(npcsModule.updateNPCDirection('mutiny', 'south'));
                }, 1000);
                setTimeout(() => {
                  this.props.dispatch(npcsModule.updateNPCStatus('mutiny', 'confused'));
                }, 2000);
                setTimeout(() => {
                  this.triggerEmote(this.props.npcs['mutiny'].location, 'question');
                }, 2500);
              }, 100);
            };
            if(this.props.game.roomId === 'hallway1' && this.props.flags['hallwayFight'].triggered === false && originalLocation === 90){
              setTimeout(() => {
                soundConsts.changeDoor.play();
                this.props.dispatch(doorsModule.updateDoorLock('HW1-A', true));
                this.props.dispatch(flagsModule.triggerFlag('hallwayFight'));
              }, 800);
            };
            if(squareCheck == 'slide' || squareCheck == 'belt') {
              this.move(this.props.player.direction, this.props.player.location);
            } else if(squareCheck !== 'fall') {
              this.props.dispatch(playerModule.updatePlayerStatus('stand'));
            };
            if(this.props.game.branch === 'prologue' && this.props.game.roomId === 11 && !this.props.flags.exitFuneral.triggered){
              this.props.dispatch(flagsModule.triggerFlag('exitFuneral'));
              this.triggerDialogue('dialogue', 'funeralOutside1')
            };
            let bushTiles = [17, 30, 43, 108, 121, 134];
            if(this.props.game.branch === 'prologue' && this.props.game.roomId === 11 && bushTiles.includes(this.props.player.location)){
              this.props.dispatch(gameModule.changeFilter('opaque-filter'));
              this.triggerDialogue('dialogue', 'funeralOutside2');
            };
          }, 100);
        };
      };
    }
  }

  exitCheck(direction, location){
    if (this.props.currentRoom[location].value == 'D'){
      let content = this.props.currentRoom[location].content.find(function(content) {
        return content[0] == 'door';
      });
      let door = this.props.doors[content[1]];
      if(this.props.game.branch === 'prologue'){ 
        if(this.props.doors[door.doorId].direction === 'north'){
          this.props.dispatch(doorsModule.updateDoorStatus(door.doorId, 'openPrologue'));
        };
        if(door.doorId.includes('double')){
          let doorNum;
          if(door.doorId.includes('double1')){
            doorNum = 1;
          } else if (door.doorId.includes('double2')){
            doorNum = 2;
          };
          this.setState({
            doubleDoorExit: doorNum
          });
        }
      };
      if(direction == door.direction && door.leadsTo !== 0) {
        this.props.dispatch(gameModule.changeGameState('cutscene'));
        setTimeout(() => {
          this.changeRoom(door);
        }, 100)
        return 'exit';
      }
    } else if(this.props.currentRoom[location].value === 'stairs'){
      let content = this.props.currentRoom[location].content.find(function(content) {
        return content[0] == 'stairs';
      });
      if (content[1] !== 0) {
        this.props.dispatch(gameModule.changeGameState('cutscene'));
        setTimeout(() => {
          this.changeRoomStairs(content[1]);
        }, 100)
        return 'exit';
      }
    }
  };

  pipeAttack(){
    this.props.dispatch(playerModule.updatePlayerStatus('strike'));
    let rng = Math.floor(Math.random() * 2);
    if(rng === 0 ){
      soundConsts.swing1.play();
    } else {
      soundConsts.swing2.play();
    };
    let pipeLocation = this.props.player.location + helpers.getDifference(this.props.player.direction);
    this.props.dispatch(playerModule.updatePipe(pipeLocation));
    let content = this.props.currentRoom[pipeLocation].content;
    let hasBlock = content.find(function(content) {
      return content[0] == 'block';
    });
    let hasEnemy = content.find(function(content) {
      return content[0] == 'enemy';
    });
    if(hasEnemy !== undefined && this.props.enemies[hasEnemy[1]].status !== 'dead'){
      this.handleEnemyDamage('pipe', this.props.player.direction, hasEnemy[1]);
    };
    if(this.props.boss.tileArr.includes(pipeLocation)){
      this.handleBossDamage('pipe')
    };
    if(this.props.currentRoom[pipeLocation].value === 'IP'){
      this.breakPipe(pipeLocation);
    };
    if(hasBlock !== undefined){
      if(this.props.blocks[hasBlock[1]].kind === 'wood'){
        this.breakBlock(hasBlock[1]);
      } else {
        setTimeout(() =>
        soundConsts.metalHit.play(),
        50);
      }; 
    };
    if(this.props.currentRoom[pipeLocation].value === 'W'){
      setTimeout(() =>
      soundConsts.metalHit.play(),
      50);
    };
    setTimeout(() => {
      if(this.props.player.status === 'strike' && this.props.player.pipeLocation !== null){
        this.props.dispatch(playerModule.updatePipe(null));
        this.props.dispatch(playerModule.updatePlayerStatus('stand'));
      };
    },
    300);
  }

  guard(){
    if(this.props.player.staminaRecover === false && this.props.player.stamina > 0){
      setTimeout(() =>{
        if(this.props.player.status === 'guard'){
          soundConsts.guard.play();
        };
      }, 200);
      this.props.dispatch(playerModule.updatePlayerStatus('guard'));
    }
  }

  chargeGun(){
    setTimeout(() =>{
      if(this.props.player.status === 'charge'){
        soundConsts.chargeGun.play();
      };
    }, 200);
    this.props.dispatch(playerModule.updatePlayerStatus('charge'));
    let timer = setInterval(() => {
      if(this.props.player.status === 'charge'){
        let num = this.state.chargeCounter + 1;
        this.setState({
          chargeCounter: num
        });
      } else {
        clearInterval(timer);
        this.setState({
          chargeCounter: 0
        });
      };
      if (this.state.chargeCounter >= 5){
        clearInterval(timer);
        this.setState({
          chargeCounter: 0
        });
        soundConsts.chargeComplete.play();
        this.props.dispatch(playerModule.toggleCharge(true));
      };
    },
    280);
  }

  startCoolDown(coolDownLength){
    this.props.dispatch(playerModule.toggleCoolDown(true));
    setTimeout(() => {
      this.props.dispatch(playerModule.toggleCoolDown(false));
    }, coolDownLength);
  }

  dash() {
    this.props.dispatch(playerModule.updatePlayerStatus('dash'));
    soundConsts.teleport.play();
    let direction = this.props.player.direction;
    let squareCheck;
    for (let i = 0; i < 4; i++) {
      let originalLocation = this.props.player.location;
      let canMove = this.attemptMove(direction, originalLocation);
      squareCheck = this.playerSquareCheck(canMove, direction);
      if (canMove !== originalLocation && squareCheck == 'moved') {
        //check for effects of landing on new square
        if (this.props.currentRoom[canMove].content == 'enemy') {
          let enemyId = this.props.currentRoom[canMove].contentId;
          this.handleEnemyDamage(enemyId, 'dash', direction, this.props.currentRoom[canMove].contentId);
        } else {
          //update player and new square
            this.handleUpdatePlayerLocation(originalLocation, canMove);
          setTimeout(() => {
            this.handleUpdateSprite(originalLocation, playerConsts.sprites.dash[this.props.player.direction])},
          100);
          setTimeout(() =>
           this.handleUpdateSprite(originalLocation, ''),
          400);
        }
      } else {
        //if player can't move, just trigger animation in current square
        break;
      }
    }
    setTimeout(() => {
    if (squareCheck !== 'fall') {
      this.props.dispatch(playerModule.updatePlayerStatus('stand'));
    } else if(squareCheck === 'knockback'){
      this.knockBack(helpers.reverseDirection(this.props.player.direction))
    };
    if(this.props.currentRoom[this.props.player.location].value === 'P' || this.props.currentRoom[this.props.player.location].value === 'L' || this.props.currentRoom[this.props.player.location].value === 'V'){
      this.fall(this.props.player.location, this.props.currentRoom[this.props.player.location].value)
    };},
      400
    );
  }

  clone(){
    if(this.props.player.cloneLocation === null) {
      let spawnLocation = this.props.player.location + helpers.getDifference(this.props.player.direction)
      if(this.props.player.magic < 50 || this.props.currentRoom[spawnLocation].value !== '0'){
        //sound
      } else {
        let newMagic = this.props.player.magic - 50;
        this.props.dispatch(playerModule.updatePlayerMagic(newMagic))
        soundConsts.teleport.play();
        this.props.dispatch(playerModule.updateClone(spawnLocation, helpers.reverseDirection(this.props.player.direction)));
      };
    } else {
      this.swap();
    };
  }

  swap(){
    soundConsts.warpPad.play();
    let playerLocation = this.props.player.location;
    let playerDirection = this.props.player.direction
    let cloneLocation = this.props.player.cloneLocation;
    let cloneDirection = this.props.player.cloneDirection;
    //change inactive clone to player
    this.props.dispatch(playerModule.updatePlayerLocation(cloneLocation));
    this.props.dispatch(playerModule.updatePlayerDirection(cloneDirection));
    let previousContentArr =  this.props.currentRoom[playerLocation].content;
    let filteredContentArr = previousContentArr.filter(function(content) {
      return content[0] !== 'player';
    });
    this.props.dispatch(roomModule.updateContent(playerLocation, filteredContentArr));
    let newContentArr = this.props.currentRoom[cloneLocation].content;
    newContentArr.push(["player"]);
    this.props.dispatch(roomModule.updateContent(cloneLocation, newContentArr));
    //change player into inactive clone
    this.props.dispatch(playerModule.updateClone(playerLocation, playerDirection));
    let selected;
    if(this.props.player.activeClone === 1){
      this.props.dispatch(playerModule.switchActiveClone(2));
    } else {
      this.props.dispatch(playerModule.switchActiveClone(1));
    };
  }

  merge(){
    soundConsts.teleport.play();
    this.props.dispatch(playerModule.updateClone(null, null));
    this.props.dispatch(playerModule.switchActiveClone(1));
    let newMagic = this.props.player.magic + 50;
    this.props.dispatch(playerModule.updatePlayerMagic(newMagic));
  }
  
  useSkill(){
    if(this.props.player.currentSkill === 'dash'){
      if(this.props.player.magic < 40){
        //sound
      } else {
        let newMagic = this.props.player.magic - 40;
        this.props.dispatch(playerModule.updatePlayerMagic(newMagic))
        this.dash();
      };
    } else if(this.props.currentSkill === 'clone') {
      this.clone();
    }
  }

  knockBack(knockBackDirection) {
    if(this.props.player.pipe !== null){
      this.props.dispatch(playerModule.updatePipe(null))
    };
    let newHealth;
    if(this.props.player.status !== 'guard' && this.props.player.status !== 'knockback'){
      newHealth = this.props.player.health -= 10;
    } else {
      newHealth = this.props.player.health;
    };
    if(this.props.player.cloneLocation !== null) {
      this.swap();
      this.merge();
      this.props.dispatch(playerModule.updatePlayerHealth(newHealth));
      this.playerHealthCheck();
      if (this.props.player.health > 0) {
        this.props.dispatch(playerModule.updatePlayerStatus('stand'));
      };
    } else {
      soundConsts.hit.play();
      this.props.dispatch(playerModule.updatePlayerHealth(newHealth));
      this.playerHealthCheck();
      if (this.props.player.health > 0 && this.props.player.status !== 'dash') {
        this.props.dispatch(playerModule.updatePlayerStatus('knockback'));
        let originalLocation = this.props.player.location;
        //check if player can be knocked back in this direction
        let canMove = this.attemptMove(knockBackDirection, originalLocation);
        if (canMove == originalLocation) {
          let reverse = helpers.reverseDirection(knockBackDirection)
          let canMoveReverse = this.attemptMove(reverse, originalLocation + helpers.getDifference(reverse));
          //search for valid alternative knockback direction
          if (knockBackDirection == 'north' || knockBackDirection == 'south') {
            let canMoveEast = this.attemptMove('east', originalLocation);
            let canMoveWest = this.attemptMove('west', originalLocation);
            if (canMoveEast !== originalLocation) {
              canMove = canMoveEast;
            } else if (canMoveWest !== originalLocation) {
              canMove = canMoveWest;
            } else if (canMoveReverse !== originalLocation) {
              canMove = canMoveReverse;
            };
          } else if (knockBackDirection == 'east' || knockBackDirection == 'west') {
            let canMoveNorth = this.attemptMove('north', originalLocation);
            let canMoveSouth = this.attemptMove('south', originalLocation);
            if (canMoveNorth !== originalLocation) {
              canMove = canMoveNorth;
            } else if (canMoveSouth !== originalLocation) {
              canMove = canMoveSouth;
            } else if (canMoveReverse !== originalLocation) {
              canMove = canMoveReverse;
            };
          };
        }
        //recheck if player can move
        if (canMove !== originalLocation && this.props.currentRoom[canMove].value !== 'L' && this.props.currentRoom[canMove].value !== 'boss') {
          let squareCheck = this.playerSquareCheck(canMove, knockBackDirection);
          if (squareCheck === 'moved' || squareCheck === 'slide'){
            this.handleUpdatePlayerLocation(originalLocation, canMove);
              setTimeout(() =>
                {if(squareCheck == 'slide') {
                  this.move(knockBackDirection, canMove);
                  this.props.dispatch(playerModule.updatePlayerStatus('slide'));
                } else {
                  this.props.dispatch(playerModule.updatePlayerStatus('stand'));
                }},
                500
              );
            } else if (squareCheck !== 'fall') {
              setTimeout(() =>
                this.props.dispatch(playerModule.updatePlayerStatus('stand')),
              500);
            };
          } else {
            setTimeout(() => {
              if(this.props.player.status === 'knockback'){
                this.props.dispatch(playerModule.updatePlayerStatus('stand'));
              };
            }, 500);
          };
        };
      };
    }

  handleUpdatePlayerLocation(originalLocation, newLocation) {
    let previousContentArr =  this.props.currentRoom[originalLocation].content;
    let filteredContentArr = previousContentArr.filter(function(content) {
      return content[0] !== 'player';
    });
    this.props.dispatch(roomModule.updateContent(originalLocation, filteredContentArr));
    let newContentArr = this.props.currentRoom[newLocation].content;
    newContentArr.push(["player"]);
    this.props.dispatch(roomModule.updateContent(newLocation, newContentArr));
    this.props.dispatch(playerModule.updatePlayerLocation(newLocation));
    //check to trigger close door animation
    let trigger = previousContentArr.find(function(content) {
      return content[0] == 'doorTrigger';
    });
    let door = newContentArr.find(function(content) {
      return content[0] == 'door';
    });
    //if new spot isn't a door, but previous was a trigger, close door
    if (trigger !== undefined && door == undefined){
      if (this.props.doors[trigger[1]].status === 'open' && this.checkForClone(this.props.doors[trigger[1]]) === false) {
        this.closeDoor(trigger[1]);
      };
    }
    //check if player was standing on a switch
    let hasSwitch = previousContentArr.find(function(content) {
      return content[0] == 'switch';
    });
    if (hasSwitch !== undefined && originalLocation !== this.props.player.cloneLocation) {
      this.startSwitchCountdown(hasSwitch[1]);
    };
    //check if player was standing on fragile tile
    if (this.props.currentRoom[originalLocation].value === 'F') {
      soundConsts.shatter.play();
      this.props.dispatch(roomModule.setTileOverlay(originalLocation, 'fragileBreak'));
      let squareImage;
      if(this.props.game.roomId === 4){
        if (this.props.currentRoom[originalLocation - 1].value !== 'V'){
          squareImage = roomConsts.sprites['pitEmpty'];
        } else {
          squareImage = roomConsts.sprites['doorTile'];
        };
      } else {
        if (this.props.currentRoom[originalLocation - 1].value !== 'P'){
          squareImage = roomConsts.sprites['pit'];
        } else {
          squareImage = roomConsts.sprites['pit2'];
        };
      }
      this.props.dispatch(roomModule.updateValue(originalLocation, 'P', squareImage))
      setTimeout(() => 
        this.props.dispatch(roomModule.setTileOverlay(originalLocation, 'none')),
      500);
    };
    //check if player was standing on broken crystal
    if(this.props.currentRoom[originalLocation].value === '<') {
      this.respawnCrystal(originalLocation);
    };
    if(this.props.game.branch === 'prologue' && this.props.game.roomId === 2 && this.props.flags.exitStartingRoom.triggered === false){
      this.props.dispatch(flagsModule.triggerFlag('exitStartingRoom'));
      setTimeout(() => {
        this.leaveLucy();
      }, 100);
    };
    if(this.props.flags.mutinyIntro.triggered === false && this.props.game.branch === 1 && this.props.game.roomId === 9 && (newLocation === 109 || newLocation === 110)){
      this.props.dispatch(flagsModule.triggerFlag('mutinyIntro'));
      this.mutinyIntro();
    };
    if(this.props.flags.mutinyComputerTalk.triggered === false && this.props.game.branch === 2 && this.props.game.roomId === 9 && (newLocation === 109 || newLocation === 110)){
      this.props.dispatch(flagsModule.triggerFlag('mutinyComputerTalk'));
      this.mutinyComputerTalk();
    };
    if(this.props.game.branch === 'collapse' && this.props.game.roomId === 7 && this.props.flags.mutinyExit2.triggered === false){
      this.props.dispatch(flagsModule.triggerFlag('mutinyExit2'));
      this.npcOpenDoor('mutiny', '7-B');
    };
    if(this.props.game.branch === 'collapse' && this.props.game.roomId === 'hallway3' && this.props.flags.mutinyExit3.triggered === false){
      this.props.dispatch(flagsModule.triggerFlag('mutinyExit3'));
      this.npcOpenDoor('mutiny', 'HW3-C');
    };
    if(this.props.game.branch === 'collapse' && this.props.game.roomId === 'hallway4' && this.props.flags.mutinyExit4.triggered === false){
      this.props.dispatch(flagsModule.triggerFlag('mutinyExit4'));
      this.npcOpenDoor('mutiny', 'HW4-B');
    };
    if(this.props.game.branch === 'collapse' && this.props.game.roomId === 10 && this.props.flags.mutinyEnterWound.triggered === false){
      this.props.dispatch(flagsModule.triggerFlag('mutinyEnterWound'));
      this.triggerDialogue('dialogue', 'mutiny3');
    };
  }

  checkForClone(door){
    let doorLocation = door.location;
    let doorFront;
    let doorBack;
    if(door.direction === 'north' || door.direction === 'south'){
      doorFront = doorLocation + 1;
      doorBack = doorLocation - 1;
    } else if (door.direction === 'east' || door.direction === 'west'){
      doorFront = doorLocation + 13;
      doorBack = doorLocation - 13;
    };
    if(this.props.player.cloneLocation === doorLocation || this.props.player.cloneLocation === doorFront || this.props.player.cloneLocation === doorBack){
      return true;
    } else {
      return false;
    }
  }

  handleUpdateSprite(location, sprite) {
    this.props.dispatch(roomModule.updateSprite(location, sprite));
  }
  
  warpRooms(squareId){
    this.props.dispatch(playerModule.updatePlayerLocation(squareId));
    let newRoom;
    if(this.props.game.roomId === 5){
      newRoom = 9;
    } else {
      newRoom = 5;
    };
    soundConsts.warpPad.play();
    this.props.dispatch(gameModule.changeGameState('cutscene'));
    this.props.dispatch(playerModule.updatePlayerStatus('warp'));
    this.props.dispatch(gameModule.changeFilter('fade-out'));
    setTimeout(() => {
      //set room as visited on map
      // let mapArr = Object.values(this.props.maps);
      // let mapsRoom = mapArr.find(function(room) {
      //   return room.roomId == this.props.game.roomId;
      // });
      // this.props.dispatch(mapsModule.changeVisited(mapsRoom.mapsId));
      this.props.dispatch(gameModule.setPreviousRoomId('warp'));
      this.props.dispatch(gameModule.setRoomId(newRoom));
      this.nullAll();
      this.handleChangeGameState("building");
      this.generateRoomFromTemplate();
    }, 1000);
  }

  warp(warpedItem1, currentLocation, newLocation) {
    soundConsts.warpPad.play();
    let warpSprite1;
    let postWarpSprite1;
    let blockType;
    //prevent player movement during animation
    this.props.dispatch(gameModule.changeGameState('cutscene'));
    this.props.dispatch(playerModule.updatePlayerLocation(''));
    //set new object entering warp
    if (warpedItem1 == 'player') {
      let direction = this.props.player.direction;
      warpSprite1 = playerConsts.sprites.warp;
      postWarpSprite1 = playerConsts.sprites.stand[direction];
    } else {
      warpSprite1 = roomConsts.sprites['blockWarp'];
      if(this.props.blocks[warpedItem1].kind === 'metal'){
        postWarpSprite1 = roomConsts.sprites['blockMetal'];
        blockType = 'metal'
      } else {
        postWarpSprite1 = roomConsts.sprites['blockWood'];
        blockType = 'wood'
      }
    };
    //set object on other side of warp
    let warpSprite2;
    let postWarpSprite2;
    let warpedItem2 = this.props.currentRoom[newLocation].content.find(function(content) {
      return content[0] === 'block';
    });
    if (warpedItem2 !== undefined) {
      warpSprite2 = roomConsts.sprites['blockWarp'];
      if(this.props.blocks[warpedItem2[1]].kind === 'metal'){
        postWarpSprite2 = roomConsts.sprites['blockMetal'];
        blockType = 'metal'
      } else if(this.props.blocks[warpedItem2[1]].kind === 'wood'){ 
        postWarpSprite2 = roomConsts.sprites['blockWood'];
        blockType = 'wood'
      }
    };
    //switch to warp sprite(s)
    this.handleUpdateSprite(currentLocation, warpSprite1, '');
    if (warpSprite2 !== undefined) {
      this.handleUpdateSprite(newLocation, warpSprite2, '');
    } else {
      //add another warp sprite to new location (if empty)
      setTimeout(() =>
        this.handleUpdateSprite(newLocation, warpSprite1, ''),
      300
      );
    };
    //clear sprite from old location, change sprite in current location to normal
    setTimeout(() =>
      {this.handleUpdateSprite(currentLocation, '', '');
      this.handleUpdateSprite(newLocation, postWarpSprite1, '');
      if (warpedItem1 == 'player') {
        //switch player location
        this.handleUpdatePlayerLocation(currentLocation, newLocation);
      } else {
        //clear block from previous location 
        let oldContent = this.props.currentRoom[currentLocation].content;
        let filteredOldContent = oldContent.filter(function(content) {
          return content[0] !== 'block';
        });
        this.props.dispatch(roomModule.updateContent(currentLocation, filteredOldContent));
        //add block to new location
        let newContent = this.props.currentRoom[newLocation].content;
        newContent.push(['block', warpedItem1]);
        this.props.dispatch(roomModule.updateContent(newLocation, newContent));
        this.props.dispatch(blocksModule.updateBlockLocation(warpedItem1, newLocation));
      };
      //if there is a clone on connected warp
      if(warpedItem1 === 'player' && this.props.player.cloneLocation === newLocation){
        this.merge();
      } else if (this.props.player.cloneLocation === newLocation){
        this.props.dispatch(playerModule.updateClone(currentLocation, this.props.player.cloneDirection));
      };
      //if there is another item on connected warp
      if (postWarpSprite2 !== undefined) {
        this.handleUpdateSprite(currentLocation, postWarpSprite2, '');
        if (warpedItem2[0] == 'player') {
          this.handleUpdatePlayerLocation(newLocation, currentLocation);
        } else {
          //clear block from previous location 
          let oldContent = this.props.currentRoom[newLocation].content;
          let filteredOldContent = oldContent.filter(function(content) {
            return content[0] !== 'block';
          });
          this.props.dispatch(roomModule.updateContent(newLocation, filteredOldContent));
          //add block to new location
          let newContent = this.props.currentRoom[currentLocation].content;
          this.props.dispatch(roomModule.updateContent(currentLocation, filteredOldContent));
          newContent.push(["block", warpedItem2[1]]);
          this.props.dispatch(roomModule.updateContent(currentLocation, newContent));
          this.props.dispatch(blocksModule.updateBlockLocation(warpedItem2, currentLocation));
          };
      }
      this.props.dispatch(roomModule.updateSprite(this.props.player.location, ''));
      this.props.dispatch(playerModule.updatePlayerStatus('stand'));
      this.props.dispatch(gameModule.changeGameState('active'));},
      400
    );
  }

  fall(pitLocation, pitType) {
    this.props.dispatch(gameModule.changeGameState('cutscene'));
    this.props.dispatch(playerModule.updatePlayerLocation(''));
    if(pitType === 'P'){
      soundConsts.splash.play();
      this.props.dispatch(playerModule.updatePlayerStatus('sink'));
      this.props.dispatch(roomModule.updateSprite(pitLocation, playerConsts.sprites.sink));
    } else {
      soundConsts.fall.play();
      this.props.dispatch(playerModule.updatePlayerStatus('fall'));
      this.props.dispatch(roomModule.updateSprite(pitLocation, playerConsts.sprites.fall));
    }
    if(this.props.player.cloneLocation !== null) {
      setTimeout(() =>
        {this.handleUpdateSprite(pitLocation, '', '');
        this.swap();
        this.merge();
        let newHealth = this.props.player.health -= 10;
        this.props.dispatch(playerModule.updatePlayerHealth(newHealth));
        this.playerHealthCheck();
        if (this.props.player.health > 0) {
          this.props.dispatch(playerModule.updatePlayerStatus('stand'));
        }},
        700
      );
    } else {
      //take damage
      let newHealth = this.props.player.health -= 10;
      this.props.dispatch(playerModule.updatePlayerHealth(newHealth));
      this.playerHealthCheck();
      if(this.props.player.health > 0) {
        //clear pit and restart player on respawn point
        setTimeout(() => {
          this.props.dispatch(roomModule.updateSprite(pitLocation, ''));
          this.respawn();},
          1200
        );
      };
    };
  }

  respawn(){
    let respawnPoint = this.props.game.respawnPoint;
    this.props.dispatch(playerModule.updatePlayerLocation(respawnPoint));
    this.playerSquareCheck(respawnPoint);
    this.props.dispatch(playerModule.updatePlayerStatus('stand'));
    this.props.dispatch(gameModule.changeGameState('active'));
  }

  playerHealthCheck(){
    if(this.props.player.health <= 0) {
      soundConsts.dead.play();
      this.props.dispatch(gameModule.changeGameState('cutscene'));
      this.props.dispatch(playerModule.updatePlayerStatus('dead'));
      setTimeout(() => {
        this.props.dispatch(soundsModule.changeEffect(''));
        this.props.dispatch(soundsModule.changeMusic('gameOver'));
        this.handleChangeGameState('gameOver');
        this.nullAll();
      }, 1200);
    } else if (this.props.player.health === 10){
      this.props.dispatch(soundsModule.changeEffect('heartBeat'));
      let heartBeat = setInterval(() => {
        if(this.props.player.health > 10){
          clearInterval(heartBeat);
          this.props.dispatch(soundsModule.changeEffect(''));
        };
      }, 2000)
    };
  }

  //Handle Projectiles
  handleProjectile(name, direction, location, range, sprite, isCharged, player) {
    this.projectileLoop(0, name, direction, location, range, sprite, isCharged, player);
  }
  
  attack() {
    let direction = this.props.player.direction;
    let playerLocation = this.props.player.location;
    let name = this.props.player.currentWeapon;
    let range;
    if(this.props.player.charge === true && name === 'Cryostat'){
      range = itemConsts.weapons[this.props.player.currentWeapon].range + 1;
    } else {
      range = itemConsts.weapons[this.props.player.currentWeapon].range;
    };
    let startPoint = playerLocation + helpers.getDifference(direction);
    if (name == 'Taser') {
      if(this.props.player.charge === true){
        soundConsts.shock.play();
      } else {
        soundConsts.taser.play();
      };
    } else {
      soundConsts.cryo.play();
    };
    let hasEnemy = this.props.currentRoom[startPoint].content.find(function(content) {
      return content[0] == 'enemy';
    });
    let hasElecSwitch = this.props.currentRoom[startPoint].content.find(function(content) {
      return content[0] == 'elecSwitch';
    });
    let hasBlock = this.props.currentRoom[startPoint].content.find(function(content) {
      return content[0] == 'block';
    });
    if (name == 'Cryostat' && this.props.currentRoom[startPoint].value === 'P') {
      this.coolWater(startPoint);
    };
    if(name == 'Cryostat' && this.props.currentRoom[startPoint].value === 'L'){
      this.coolLava(startPoint, this.props.player.charge);
    };
    if(this.props.player.charge === true){
      this.setState({
        projectilesArr: [startPoint]
      });
    };
    if (this.props.currentRoom[startPoint].value !== 'W' 
      && this.props.currentRoom[startPoint].value !== 'WR'
      && this.props.currentRoom[startPoint].value !== 'D' 
      && this.props.currentRoom[startPoint].value !== '<>'
      && hasBlock === undefined) {
      if (hasEnemy !== undefined && this.props.enemies[hasEnemy[1]].status !== 'dead') {
        this.handleEnemyDamage(name, direction, hasEnemy[1]);
      } else if ((name == 'Taser' || name == 'Cryostat') && this.props.boss.tileArr.includes(startPoint)){
        this.handleBossDamage(name);
      } else if (name == 'Taser' && hasElecSwitch !== undefined) {
        this.handleSwitch(hasElecSwitch[1]);
      } else if (this.props.currentRoom[startPoint].value == 'i') {
          this.props.dispatch(gameModule.setEye('hurt'));
          let setExplosionTimer = setTimeout(() =>
            this.props.dispatch(gameModule.setEye('none')),
            500
          );
      } else {
        let newSprite;
        if (this.props.player.charge === true){
          newSprite = itemConsts.weapons[this.props.player.currentWeapon].sprites['projectileCharged'][direction];
        } else {
          newSprite = itemConsts.weapons[this.props.player.currentWeapon].sprites['projectile'][direction];
        };
        this.props.dispatch(roomModule.updatePlayerBullet(startPoint, [newSprite, this.props.player.currentWeapon]));
        setTimeout(() =>
          this.handleProjectile(name, direction, startPoint, range, newSprite, this.props.player.charge, true),
          100
        );
      };
    };
    setTimeout(() => {
      if(this.props.player.charge === true){
        this.props.dispatch(playerModule.toggleCharge(false));
      };
      this.props.dispatch(gameModule.toggleFire(false));
      this.props.dispatch(playerModule.updatePlayerStatus('stand'));},
      400
    );
  }

  fireLaser = (startPoint, direction) => {
    let current = startPoint + helpers.getDifference(direction);
    let laserRange = []; 
    let hasBlock = this.props.currentRoom[current].content.find(function(content) {
      return content[0] == 'block';
    });
    if(this.props.currentRoom[current].value !== 'W' && this.props.currentRoom[current].value !== 'WR' && hasBlock === undefined){
      laserRange = [current];
      for(let i = 0; i < 9; i++){
        let next = this.projectileMove(direction, current, false);
        if(next !== current){
          laserRange.push(next);
          current = next;
        } else {
          break;
        };
      };
    };
    let oldLaserArr = this.props.projectiles.lasers;
    let newLaserArr = []
    //add new laser
    if(laserRange.length > 0){
      newLaserArr.push(laserRange);
    };
    //add existing lasers
    oldLaserArr.forEach(arr => {
      newLaserArr.push(arr)
    });
    this.props.dispatch(projectilesModule.updateLasers(newLaserArr));
  }

  nullLaser(){
    this.props.dispatch(projectilesModule.updateLasers([]));
  }

  projectileMove(direction, originalLocation, canPass) {
    if(this.props.currentRoom[originalLocation]){
      //get difference between two spaces
      let difference = helpers.getDifference(direction);
      //and new square id #
      let newLocation = originalLocation + difference;
      //check for pushable block
      let content = this.props.currentRoom[newLocation].content;
      let hasBlock = content.find(function(content) {
        return content[0] == 'block';
      });
      if(this.props.currentRoom[newLocation].value === '~' && this.props.game.eye === 'alive'){
        if(canPass === true){
          return newLocation;
        } else {
          return originalLocation;
        };
      } else if (hasBlock == undefined
        && this.props.currentRoom[newLocation].value !== '<>'
        && this.props.currentRoom[newLocation].value !== 'D'
        && this.props.currentRoom[newLocation].value !== 'W'
        && this.props.currentRoom[newLocation].value !== 'WR'
        && this.props.currentRoom[newLocation].value !== 'T') {
        return newLocation;
      } else {
        return originalLocation;
      };
    };
  }

  projectileLoop = (i, name, direction, location, range, sprite, isCharged, player) => {
    if(this.props.game.gameState === 'active'){
      let canPass;
      if(name === 'Taser' && isCharged === true){
        canPass = true;
      };
      let canMove = this.projectileMove(direction, location, canPass);                                                                                                                                                                                                                                                                                                                                              
      let enemyId;
      let loopSpeed = 160;
      let stopped = false;
      if(isCharged === true){
        loopSpeed = 10;
      }; 
      this.props.currentRoom[canMove].content.forEach(function(content) {
        if (content.includes('enemy')){
          enemyId = content[1];
        };
      });
      let hasElecSwitch = this.props.currentRoom[canMove].content.find(function(content) {
        return content[0] == 'elecSwitch';
      });
      //cool water
      if (name == 'Cryostat' && this.props.currentRoom[canMove].value === 'P') {
        this.coolWater(canMove);
      };
      if(name === 'Cryostat' && this.props.currentRoom[canMove].value === 'L'){
        this.coolLava(canMove, isCharged);
      }
      //void projectile if it can't progress
      if (location === canMove) {
        if(name === 'Taser' && isCharged === true){
          let projectilesArr = this.state.projectilesArr;
          setTimeout(() => {
            projectilesArr.forEach((projectile) => {
              this.props.dispatch(roomModule.updatePlayerBullet(projectile, []));
            });
            this.setState({
              projectilesArr: []
            });
            this.props.dispatch(roomModule.updatePlayerBullet(location, []));
          }, 300);
        } else {
          if(player){
            this.props.dispatch(roomModule.updatePlayerBullet(location, []));
          } else {
            this.props.dispatch(roomModule.updateBullet(location, []));
          };
        };
        stopped = true;
      //damage player
      } else if(canMove === this.props.player.location){
        if(this.props.player.status === 'guard'){
          soundConsts.metalHit.play();
          let startPoint = this.props.player.location;
          setTimeout(() =>
            this.handleProjectile('reflect', this.props.player.direction, startPoint, range, <img className={"bullet-"+this.props.player.direction} src={reflectShot} width="40" height="40"/>, false, true),
          100);
          return null;
        } else {
          this.knockBack(direction);
        };
        stopped = true;
      //damage boss/enemy and void projectile if it hits
      } else if(name !== 'enemy' && this.props.boss.tileArr.includes(canMove)){
        this.handleBossDamage(name);
        if(player){
          this.props.dispatch(roomModule.updatePlayerBullet(location, []));
        } else {
          this.props.dispatch(roomModule.updateBullet(location, []));
        };
        if(!(name === 'Taser' && isCharged === true)){
          stopped = true;
        };
      } else if (enemyId !== undefined && this.props.enemies[enemyId].status !== 'dead') {
        this.handleEnemyDamage(name, direction, enemyId);
        if(player){
          this.props.dispatch(roomModule.updatePlayerBullet(location, []));
        } else {
          this.props.dispatch(roomModule.updateBullet(location, []));
        };
        if(!(name === 'Taser' && isCharged === true)){
          stopped = true;
        };
      //check for elec switch
      } else if (name == 'Taser' && hasElecSwitch !== undefined) {
        this.handleSwitch(hasElecSwitch[1]);
        if(player){
          this.props.dispatch(roomModule.updatePlayerBullet(location, []));
        } else {
          this.props.dispatch(roomModule.updateBullet(location, []));
        };
        if(!(name === 'Taser' && isCharged === true)){
          stopped = true;
        };
      //destroy eyeball
      } else if (this.props.currentRoom[canMove].value == 'i') {
        this.props.dispatch(gameModule.setEye('hurt'));
        setTimeout(() =>
          this.props.dispatch(gameModule.setEye('none')),
          500
        );
        this.handleUpdateBullet(location, []);
        if(!(name === 'Taser' && isCharged === true)){
          stopped = true;
        };
      };
      if(stopped === false) {
        //update sprites
        if(isCharged === false){
          if(player){
            this.props.dispatch(roomModule.updatePlayerBullet(location, []));
          } else {
            this.props.dispatch(roomModule.updateBullet(location, []));
          };
        };
        if(player){
          this.props.dispatch(roomModule.updatePlayerBullet(canMove, [sprite, name]));
        } else {
          this.props.dispatch(roomModule.updateBullet(canMove, [sprite, name]));
        };
        location = canMove;
        setTimeout(() => {
          i++;
          if (i < range && this.props.game.gameState === 'active') {
            this.projectileLoop(i, name, direction, location, range, sprite, isCharged, player);
          }
        }, loopSpeed);
      };
      setTimeout(() => {
        if(isCharged === true){
          let projectilesArr = this.state.projectilesArr;
          if(projectilesArr.length >= range){
            setTimeout(() => {
              projectilesArr.forEach((projectile) => {
                if(player){
                  this.props.dispatch(roomModule.updatePlayerBullet(projectile, []));
                } else {
                  this.props.dispatch(roomModule.updateBullet(projectile, []));
                };
              });
              this.setState({
                projectilesArr: []
              });
              if(player){
                this.props.dispatch(roomModule.updatePlayerBullet(location, []));
              } else {
                this.props.dispatch(roomModule.updateBullet(location, []));
              };
            }, 300);
          } else {
            let newArr = projectilesArr.concat(location);
            this.setState({
              projectilesArr: newArr
            });
          }
        } else {
          if(player){
            this.props.dispatch(roomModule.updatePlayerBullet(location, []));
          } else {
            this.props.dispatch(roomModule.updateBullet(location, []));
          };
        };
      }, loopSpeed);
    };
  }

  coolLava(tileNum, isCharged){
    this.props.dispatch(roomModule.setExplosion(tileNum, true));
    setTimeout(() => 
      this.props.dispatch(roomModule.setExplosion(tileNum, false)),
    800);
    if(isCharged === true){
      this.props.dispatch(roomModule.updateValue(tileNum, 'LC', this.props.currentRoom[tileNum].tileImage));
      setTimeout(() => {
        if(this.props.currentRoom[tileNum].value === 'LC'){
          this.props.dispatch(roomModule.updateValue(tileNum, 'L', this.props.currentRoom[tileNum].tileImage));
          if(this.props.player.location === tileNum){
            this.fall(tileNum, 'L');
          };
        };
      }, 2500);
    };
  }

  coolWater(tileNum){
    this.props.dispatch(roomModule.setExplosion(tileNum, true));
    this.props.dispatch(roomModule.updateValue(tileNum, 'I', this.props.currentRoom[tileNum].tileImage));
    setTimeout(() => 
      this.props.dispatch(roomModule.setExplosion(tileNum, false)),
    800);
    setTimeout(() => {
      if(this.props.currentRoom[tileNum].value === 'I'){
        this.props.dispatch(roomModule.updateValue(tileNum, 'P', this.props.currentRoom[tileNum].tileImage));
        if(this.props.player.location === tileNum){
          this.fall(tileNum, 'P');
        };
      };
    }, 2500);
  }
  //switch functions
  handleSwitch(switchId) {
    let thisSwitch = this.props.switches[switchId];
    if (thisSwitch.isPushed === false) {
      if (thisSwitch.kind == 'pressure') {
        if(this.props.game.branch === 3){
          this.props.dispatch(roomModule.updateValue(thisSwitch.location, 'S', roomConsts.sprites['spookySwitchOn']));
        } else {
          this.props.dispatch(roomModule.updateValue(thisSwitch.location, 'S', roomConsts.sprites['switchOn']));
        };
      } else {
        this.props.dispatch(roomModule.updateSprite(thisSwitch.location, roomConsts.sprites['elecSwitchOn']));
        setTimeout(() => {
          soundConsts.switchOn.play();
        }, 400);
      };
      this.props.dispatch(switchesModule.pushSwitch(thisSwitch.switchId, true));
      let effectIdArr = this.props.switches[switchId].effectId;
      let effectType = this.props.switches[switchId].effectType;
      effectIdArr.forEach((effectId) => {
        if (effectType == 'platform') {
          this.props.dispatch(platformsModule.activatePlatform(effectId, true));
          this.platformStart(effectId);
        } else if (effectType === 'door') {
          this.props.dispatch(doorsModule.updateDoorLock(effectId, false));
          if(effectId === '3-A'){
            this.props.dispatch(flagsModule.triggerFlag('midbossOpen'));
            setTimeout(() =>
             this.createSavePoint(49),
            300);
          };
        } else if(effectType === 'rise'){
          if(this.props.currentRoom[effectId].value === '0R'){
            this.raiseRiseTile(effectId)
          } else if(this.props.currentRoom[effectId].value === 'WR'){
            this.sinkRiseTile(effectId)
          };
        };
      });
    } else if (thisSwitch.kind == 'elecSwitch'){
      this.props.dispatch(roomModule.updateSprite(thisSwitch.location, roomConsts.sprites['elecSwitchOff']));
      setTimeout(() => {
        soundConsts.switchOff.play();
        this.props.dispatch(switchesModule.pushSwitch(thisSwitch.switchId, false));
        this.voidSwitchEffect(thisSwitch);
      }, 400);
    }
  }

  startSwitchCountdown(switchId){
    let thisSwitch = this.props.switches[switchId];
    let switchTimer = setTimeout(() =>
      {this.props.dispatch(switchesModule.pushSwitch(thisSwitch.switchId, false));
        if(this.props.game.branch === 3){
          this.props.dispatch(roomModule.updateValue(thisSwitch.location, 'S', roomConsts.sprites['spookySwitchOff']));
        } else {
          this.props.dispatch(roomModule.updateValue(thisSwitch.location, 'S', roomConsts.sprites['switchOff']));
        };
      this.voidSwitchEffect(thisSwitch);
      soundConsts.switchOff.play();
    },thisSwitch.timer);
    if(this.props.switches[switchId].effectId === '3-A' && this.props.flags['mutiny6'].triggered === false){
      this.triggerEvent('mutiny6')
    };
  }

  voidSwitchEffect(thisSwitch) {
    if(thisSwitch.location !== this.props.player.location){
      thisSwitch.effectId.forEach((effectId) => {
        if (thisSwitch.effectType == 'door') {
          this.props.dispatch(doorsModule.updateDoorStatus(effectId, 'closed'));
          this.props.dispatch(doorsModule.updateDoorLock(effectId, true));
        } else if (thisSwitch.effectType == 'platform') {
          this.props.dispatch(platformsModule.activatePlatform(effectId, false));
          this.platformReturn(effectId);
        } else if(thisSwitch.effectType === 'rise'){
          if(this.props.currentRoom[effectId].value === '0R'){
            this.raiseRiseTile(effectId)
          } else if(this.props.currentRoom[effectId].value === 'WR'){
            this.sinkRiseTile(effectId)
          };
        };
      });
    };
  }

  attemptMove(direction, originalLocation) {
    //get difference between two spaces
    let difference = helpers.getDifference(direction);
    //and new square id #
    let newLocation = originalLocation + difference;
    if(newLocation > 0 && newLocation <= 156){
      //check for pushable block
      let content = this.props.currentRoom[newLocation].content;
      let hasBlock = content.find(function(content) {
      return content[0] == 'block';
      });
      let hasElec = this.props.currentRoom[newLocation].content.find(function(content) {
        return content[0] == 'elecSwitch';
      });
      let hasDoor = this.props.currentRoom[newLocation].content.find(function(content) {
        return content[0] == 'door';
      });
      let doorStatus = 'none';
      if(hasDoor !== undefined) {
        doorStatus = this.props.doors[hasDoor[1]].status;
      };
      if(this.props.game.branch === 'prologue' && doorStatus === 'closed'){
        if(this.props.game.roomId === 1){
          this.triggerDialogue('examine', 'bathroomDoor');
        } else if(this.props.doors[hasDoor[1]].doorId === 'P13-A'){
          this.triggerDialogue('examine', 'aptDoor');
        } else {
          soundConsts.woodenDoorLocked.play();
        };
      };
      let hasRailing = false;
      if(this.props.game.branch === 'prologue' && this.props.game.roomId === 11 && this.props.currentRoom[originalLocation].value === 'stairs' && this.props.currentRoom[newLocation].value === '0'){
        hasRailing = true;
      }
      //move block
      if (hasBlock !== undefined && originalLocation === this.props.player.location && this.props.game.fire === false && this.props.player.status !== 'dash'){
        let blockMove = this.attemptMove(direction, newLocation);
        let hasEnemy = this.props.currentRoom[blockMove].content.find(function(content) {
          return content[0] == 'enemy';
        });
        if (blockMove !== newLocation && hasEnemy === undefined && this.props.currentRoom[newLocation + difference].value !== '$' && this.props.currentRoom[newLocation].value !== 'C' && this.props.currentRoom[newLocation].value !== 'WR') {
          this.moveBlock(hasBlock[1], direction, newLocation, newLocation + difference);
          return newLocation;
        } else {
          return originalLocation
        };
      //destroy wooden box
      } else if (hasBlock !== undefined && this.props.player.status === 'dash' && this.props.blocks[hasBlock[1]].kind === 'wood'){
        this.breakBlock(hasBlock[1]);
        return newLocation;
      //check if move is possible
      } else if (hasBlock == undefined
      && hasRailing === false
      && hasElec == undefined 
      && doorStatus !== 'closed'
      && doorStatus !== 'closing'
      && doorStatus !== 'opening'
      && this.props.currentRoom[newLocation].value !== 'Lzr'
      && this.props.currentRoom[newLocation].value !== 'Lzr-I'
      && this.props.currentRoom[newLocation].value !== 'W'
      && this.props.currentRoom[newLocation].value !== 'WR'
      && this.props.currentRoom[newLocation].value !== 'IP'
      && this.props.currentRoom[newLocation].value !== 'IP-Broken'
      && this.props.currentRoom[newLocation].value !== 'NPC'
      && this.props.currentRoom[newLocation].value !== 'T') {
        return newLocation;
      } else {
        return originalLocation;
      };
    } else {
      return originalLocation;
    }
  }

  //check for effects caused by landing on square
  playerSquareCheck = (squareId, direction) => {
    let currentLocation = this.props.player.location;
    let squareToCheck = this.props.currentRoom[squareId];
    //merge with clone
    if(this.props.player.cloneLocation === squareId) {
      this.merge();
    };
    //check for enemy
    let hasEnemy = squareToCheck.content.find(function(content) {
      return content[0] == 'enemy';
    });
    //check for door
    let hasDoor = squareToCheck.content.find(function(content) {
      return content[0] == 'door';
    });
    //check for door trigger
    let hasDoorTrigger = squareToCheck.content.find(function(content) {
      return content[0] == 'doorTrigger';
    });
    //attempt to open door
    if(hasDoorTrigger !== undefined) {
      this.attemptOpen(hasDoorTrigger[1], squareId);
    }
    //check for lasers
    let laserMaster = [];
    this.props.projectiles.lasers.forEach((laser) => {
      laserMaster = laserMaster.concat(laser);
    })
    //take damage
    if(hasEnemy !== undefined){
      if(this.props.enemies[hasEnemy[1]].status === 'frozen' || this.props.player.status === 'dash') {
        this.enemyKnockBack(direction, hasEnemy[1]);
        let enemyLocation = this.props.enemies[hasEnemy[1]].location;
        let canMove = this.attemptMove(direction, enemyLocation);
        if(canMove !== this.props.enemies[hasEnemy[1]].location && this.props.currentRoom[enemyLocation].value !== 'C'){
          return 'moved';
        } else {
          return 'stopped';
        };
      } else if(this.props.enemies[hasEnemy[1]].status !== 'dead') {
        let knockBackDirection = helpers.reverseDirection(direction);
        this.knockBack(knockBackDirection);
        return 'knockback';
      }; 
    } else if (this.props.boss.tileArr.includes(squareId)){
      if(this.props.player.status !== 'dash'){
        let knockBackDirection = helpers.reverseDirection(direction);
        this.knockBack(knockBackDirection);
        return 'knockback';
      } else {
        this.handleBossDamage('dash');
        return 'stopped';
      }
    } else if (laserMaster.includes(squareId)){
      let knockBackDirection = helpers.reverseDirection(direction);
      this.knockBack(knockBackDirection);
      return 'knockback';
    } else if (squareToCheck.value == 'woundClosed'){
      this.triggerDialogue('dialogue', 'woundClosed')
      return 'stopped';
    } else if (squareToCheck.value == '<>'){
      if(this.props.player.status === 'dash'){
        this.breakCrystal(squareId);
      } 
      return 'stopped';
    } else if (squareToCheck.value == 'H' || squareToCheck.value == 'L' || (squareToCheck.value == '~' && this.props.game.eye == "alive")) {
      let knockBackDirection = helpers.reverseDirection(direction);
      this.knockBack(knockBackDirection);
      return 'knockback';
    //prevent player from entering closed door
    } else if (hasDoor !== undefined) {
      if (this.props.doors[hasDoor[1]].status == 'open') {
        return 'moved';
      } else {
        this.props.dispatch(playerModule.updatePlayerStatus('stand'));
      };
    //fall to your doom and respawn 
    } else if (squareToCheck.value == 'P' || squareToCheck.value == 'V'){
      if (this.props.player.status === 'dash'){
        return 'moved';
      } else {
        this.fall(squareId, squareToCheck.value);
        return 'fall';
      }
    //slide on ice
    } else if (squareToCheck.value == 'I' && this.attemptMove(direction, squareId) !== squareId){
      soundConsts.slide.play();
      return 'slide';
    //move in direction of c belt
    } else if (squareToCheck.value == 'C'){
      this.props.dispatch(gameModule.changeGameState('cutscene'));
      setTimeout(() => {
        this.props.dispatch(gameModule.changeGameState('active'));
      },300);
      let belt = squareToCheck.content.find(function(content) {
        return content[0] == 'belt';
      });
      let beltDirection = belt[1];
      let adjacentBlock = this.props.currentRoom[squareId + helpers.getDifference(beltDirection)].content.find(function(content) {
        return content[0] == 'block';
      });
      this.props.dispatch(playerModule.updatePlayerDirection(beltDirection));
      if(adjacentBlock !== undefined){
        return 'moved';
      } else {
        return 'belt';
      }
    //activate switch
    } else if (squareToCheck.value == 'S') {
      let hasPressureSwitch = squareToCheck.content.find(function(content) {
        return content[0] == 'switch';
      });
      if (hasPressureSwitch !== undefined) {
        soundConsts.switchOn.play();
        this.handleSwitch(hasPressureSwitch[1]);
        return 'moved';
      } else {
        return 'stopped';
      };
    //pick up item
    } else if (squareToCheck.value == '$') {
      this.getItem(squareToCheck)
      return 'moved';
    //warp
    } else if (squareToCheck.value == '@') {
      let thisWarp = squareToCheck.content.find(function(content) {
        return content[0] == 'warp';
      });
      this.handleUpdatePlayerLocation(currentLocation, squareId);
      this.warp("player", squareId, thisWarp[1]);
      return 'warped';
    } else if (squareToCheck.value == '%' && this.props.flags.warpOn.triggered) {
      this.props.dispatch(playerModule.updatePlayerLocation(''));
      this.warpRooms(squareId);
      return 'warped';
    } else if (squareToCheck.value == 'wound2' && this.props.game.powerRight) {
      this.enterWound();
      return 'warped';
    } else if (squareToCheck.value === '2') {
      let text = squareToCheck.content.find(function(content) {
        return content[0] == 'syncText';
      });
      this.triggerDialogue('interact', text[1]);
      if(this.props.game.special === true){
        this.props.dispatch(roomModule.updateValue(currentLocation, '0', roomConsts.sprites['white']));
      } else {
        this.props.dispatch(roomModule.updateValue(currentLocation, '0', roomConsts.sprites['spookyTile']));
      };
      return 'moved';
    //move normally
    } else {
      if(squareToCheck.value === 'F'){
        soundConsts.crack.play();
      }
      return 'moved';
    };
  }

  mutinyEnterWound(){
    this.moveNPC('mutiny', [['north', 3]])
  }

  enterWound(){
    this.props.dispatch(gameModule.changeGameState('cutscene'));
    this.props.dispatch(playerModule.updatePlayerLocation(''));
    this.props.dispatch(gameModule.changeFilter('fade-out'));
    setTimeout(() => {
      this.props.dispatch(gameModule.setBranch('prologue'));
      this.props.dispatch(gameModule.setRoomId(12));
      this.props.dispatch(playerModule.updatePlayerLocation(77));
      this.nullAll();
      this.handleChangeGameState("building");
      this.generateRoomFromTemplate();
      this.props.dispatch(gameModule.changeFilter('fade-in'));
    }, 1000)
    setTimeout(() => {
      this.props.dispatch(gameModule.changeFilter(''));
    }, 2000);
  }

  exitWound(newBranch){
    this.props.dispatch(gameModule.togglePowerRight(false))
    this.props.dispatch(gameModule.changeFilter('fade-out'));
    setTimeout(() => {
      this.props.dispatch(gameModule.setBranch(newBranch));
      this.props.dispatch(gameModule.setRoomId(10));
      this.nullAll();
      this.generateRoomFromTemplate();
      this.props.dispatch(gameModule.setRespawnPoint(85));
      this.props.dispatch(playerModule.updatePlayerLocation(85));
      this.props.dispatch(playerModule.updatePlayerDirection('south'));
      this.props.dispatch(gameModule.changeFilter('fade-in'));
    }, 1500)
    setTimeout(() => {
      this.move('south', this.props.player.location);
    }, 5000);
    setTimeout(() => {
      this.props.dispatch(gameModule.changeFilter(''));
      this.closeWound();
      this.triggerDialogue('dialogue', 'postWound');
      this.props.dispatch(flagsModule.triggerFlag('exitWound'));
    }, 7000);
  }

  closeWound(){
    this.props.dispatch(roomModule.updateSprite(71, ''));
    this.props.dispatch(roomModule.updateSprite(84, ''));
    this.props.dispatch(roomModule.updateSprite(97, ''));
    this.props.dispatch(roomModule.updateValue(71, 'V', roomConsts.sprites.doorTile));
    this.props.dispatch(roomModule.updateValue(84, 'woundClosed', roomConsts.sprites.doorTile));
    this.props.dispatch(roomModule.updateValue(97, 'V', roomConsts.sprites.doorTile));
    this.props.dispatch(roomModule.updateSprite(122, roomConsts.sprites.woundClose));
    //sound effect
    setTimeout(() => {
      this.props.dispatch(roomModule.updateSprite(122, ''));
      this.props.dispatch(roomModule.updateSprite(84, roomConsts.sprites.woundClosed));
    }, 1000);
  }

  //door functions
  attemptOpen(doorId, playerLocation) {
    let door = this.props.doors[doorId];
    if (door.isLocked === true || (door.isLocked === 'keyCard1' && !this.props.player.items.includes(door.isLocked)) || (door.isLocked === 'keyCard2' && !this.props.player.items.includes(door.isLocked)) ) {
      if(this.props.game.branch === 'prologue'){
        soundConsts.woodenDoorLocked.play();
      } else {
        soundConsts.doorLocked.play();
      };
      if(door.isLocked === 'keyCard1') {
        this.triggerPopUp('keyCard1');
      } else if (door.isLocked === 'keyCard2') {
        this.triggerPopUp('keyCard2');
      };
    } else if ( door.status === 'closed' && (door.isLocked === false || (door.isLocked === 'keyCard1' && this.props.player.items.includes('keyCard1')) || (door.isLocked === 'keyCard2' && this.props.player.items.includes('keyCard2')) || (this.props.game.branch === 'collapse' && door.doorId === 'HW4-B') )) {
      soundConsts.doorOpen.play();
      this.props.dispatch(doorsModule.updateDoorStatus(doorId, 'opening'));
      setTimeout(() => {
        if(this.props.player.location === playerLocation){
          this.props.dispatch(doorsModule.updateDoorStatus(doorId, 'open'));
        } else {
          this.closeDoor(doorId);
        };
      }, 1300
      );
    };
  }

  closeDoor(doorId){
    soundConsts.doorClose.play();
    this.props.dispatch(doorsModule.updateDoorStatus(doorId, 'closing'));
    if(this.props.player.cloneLocation === this.props.doors[doorId].location){
      this.merge();
    };
    setTimeout(() => {
      let door = this.props.doors[doorId];
      if(door !== undefined){
        this.props.dispatch(doorsModule.updateDoorStatus(doorId, 'closed'));
        let front = door.location + helpers.getDifference(door.direction); 
        let back = door.location + helpers.getDifference(helpers.reverseDirection(door.direction));
        if(this.props.player.location === front || this.props.player.location === back){
          this.attemptOpen(doorId, this.props.player.location);
        };
      };
    }, 1300);
  }

  //destroy objects
  breakCrystal(location){
    this.props.dispatch(roomModule.updateSprite(location, roomConsts.sprites['crystalCrack']));
    soundConsts.shatter.play();
    this.props.dispatch(roomModule.setShatter(location, 'break'));
    setTimeout(() =>
      {this.handleUpdateSprite(location, '', '');
      if(this.props.game.branch === 3){
        this.props.dispatch(roomModule.updateValue(location, '<', roomConsts.sprites['spookyTile']));
      } else {
        this.props.dispatch(roomModule.updateValue(location, '<', roomConsts.sprites['tile']));
      }
      this.props.dispatch(roomModule.updateSprite(location, ''));},
      600
    );
    setTimeout(() => {
      this.props.dispatch(roomModule.setShatter(location, 'none'));
    }, 1000);
    setTimeout(() => {
      if(this.props.player.location !== location) {
        this.respawnCrystal(location);
      }
    }, 2000);
  }

  respawnCrystal(location){
    this.props.dispatch(roomModule.setShatter(location, 'form'));
    setTimeout(() => {
      this.props.dispatch(roomModule.updateSprite(location, roomConsts.sprites['crystal']));
      if(this.props.game.branch === 3){
        this.props.dispatch(roomModule.updateValue(location, '<>', roomConsts.sprites['spookyTile']));
      } else {
        this.props.dispatch(roomModule.updateValue(location, '<>', roomConsts.sprites['tile']));
      };
      this.props.dispatch(roomModule.setShatter(location, 'none'));
    }, 1000);
  }

  breakPipe(location){
    //pipe break sound effect
    let pipe = this.props.currentRoom[location].content.find(function(content) {
      return content[0] == 'pipe';
    });
    let direction = pipe[1];
    this.props.dispatch(roomModule.updateValue(location, 'IP-Broken', roomConsts.sprites['tile']));
    let freezeArea;
    if(direction === 'east'){ 
      this.props.dispatch(roomModule.updateSprite(location, roomConsts.sprites['icePipeEastBroken']));
      freezeArea = [(location - 1), (location + 1), (location - 13), (location - 12), (location - 14)];
    } else {
      this.props.dispatch(roomModule.updateSprite(location, roomConsts.sprites['icePipeWestBroken']));
      freezeArea = [(location - 1), (location + 1), (location + 13), (location + 12), (location + 14)];
    };
    freezeArea.forEach((tile) => {
      if(this.props.currentRoom[tile].value === 'Lzr'){
        this.props.dispatch(roomModule.updateSprite(tile, roomConsts.sprites['laserDroneFrozen']));
        let laserTiles = [(tile + 1), (tile - 1), (tile + 13), (tile - 13)];
        laserTiles.forEach((laserTile) => {
          let laserArr = this.props.projectiles.lasers;
          let lasersUpdated = false;
          for(let i = 0; i < laserArr.length; i++){
            if(laserArr[i].includes(laserTile)){
              lasersUpdated = true;
              laserArr.splice(i, 1);
            };
          };
          if(lasersUpdated){
            this.props.dispatch(projectilesModule.updateLasers(laserArr));
          }
        });
        this.props.dispatch(roomModule.updateValue(tile, 'Lzr-I', roomConsts.sprites['tile']));
      } else if(this.props.currentRoom[tile].value === '0R'){
        this.props.dispatch(roomModule.updateValue(tile, 'I', roomConsts.sprites['riseTileDown']));
      } else {
        this.props.dispatch(roomModule.updateValue(tile, 'I', roomConsts.sprites['tile']));
      };
    });
  }

  //reset room
  startReset(){
    let timer = setInterval(() => {
      let num = this.state.resetCounter + 1;
      this.setState({
        resetCounter: num
      })
    },
    4000);
    if (this.state.resetCounter >= 5){
      clearInterval(timer);
      this.setState({
        resetCounter: 0
      });
      this.reset();
    }
  }

  cancelReset(){
    this.setState({
      resetCounter: 0
    })
  }

  reset(){
    this.nullAll();
    this.loadState();
  }

  changeRoom(door) {
    if(this.props.game.branch === 'prologue'){ 
      soundConsts.woodenDoorOpen.play();
      setTimeout(() => 
        soundConsts.woodenDoorClose.play(),
      1000);
    }
    let newRoom = door.leadsTo;
    let thisRoom = this.props.game.roomId;
    this.props.dispatch(gameModule.setPreviousRoomId(thisRoom));
    if(this.props.game.branch !== 'prologue'){
      let mapArr = Object.values(this.props.maps);
      let mapsRoom = mapArr.find(function(room) {
        return room.roomId == thisRoom;
      });
      this.props.dispatch(mapsModule.changeVisited(mapsRoom.mapsId));
    };
    this.props.dispatch(gameModule.setRoomId(newRoom));
    this.nullAll();
    this.handleChangeGameState("building");
    this.generateRoomFromTemplate();
  }

  changeRoomStairs(newRoom) {
    soundConsts.stairs.play();
    let thisRoom = this.props.game.roomId;
    this.props.dispatch(gameModule.setPreviousRoomId(thisRoom));
    this.props.dispatch(gameModule.setRoomId(newRoom));
    this.nullAll();
    this.handleChangeGameState("building");
    this.generateRoomFromTemplate();
  }

  endPrologue(){
    this.props.dispatch(soundsModule.changeMusic(''));
    this.props.dispatch(gameModule.changeGameState('cutscene'));
    this.props.dispatch(npcsModule.updateNPCDirection('lucyYoung', 'south'));
    setTimeout(() => {
      this.props.dispatch(npcsModule.updateNPCLocation('lucyYoung', 'vanish'));
      this.props.dispatch(roomModule.updateValue(67, '0', roomConsts.sprites.doorTile));
      soundConsts.vanish.play();
    }, 1000);
    setTimeout(() => {
      soundConsts.suspense.play();
      this.props.dispatch(playerModule.updatePlayerLocation(69));
    }, 2000);
    setTimeout(() => {
      this.props.dispatch(gameModule.changeFilter('opaque-filter'));
    }, 5000)
    setTimeout(() => {
      this.nullAll();
      this.props.dispatch(gameModule.setBranch(1));
      this.props.dispatch(gameModule.setRoomId(1));
      this.generateRoomFromTemplate();
      this.generateMapFromTemplate();
    }, 8000);
    setTimeout(() => {
      this.props.dispatch(soundsModule.changeEffect('beeps'));
      this.props.dispatch(soundsModule.changeMusic('machine'));
    }, 10000);
    setTimeout(() => {
      this.triggerDialogue('dialogue', 'wakeUp1');
      this.props.dispatch(playerModule.updatePlayerLocation(122));
      this.props.dispatch(playerModule.updatePlayerStatus('cryo'));
    }, 14000);
  }



  switchBranch(location) {
    if(this.props.displayBranch === false){
      this.props.dispatch(gameModule.toggleDisplayBranch(true));
    };
    soundConsts.warp.play();
    this.props.dispatch(playerModule.updatePlayerStatus('dash'));
    setTimeout(() => {
      this.props.dispatch(playerModule.updatePlayerStatus(''));
      this.handleUpdateSprite(location, playerConsts.sprites.particle['south'], '');
      this.props.dispatch(playerModule.updatePlayerHealth(0))},
      500
    );
    let afterAfterImageTimer = setTimeout(() =>
      {this.handleUpdateSprite(location, '', '');
      this.fadeOut();},
      1000
    );
  }

  fadeOut() {
    let fadeOutTimer = setTimeout(() =>
    {this.props.dispatch(gameModule.changeGameState("exitBranch"));
    soundConsts.wind.play();},
      4000
    );
    let exitTimer = setTimeout(() =>
    {this.props.dispatch(gameModule.changeGameState("postExitBranch"));
    this.props.dispatch(soundsModule.changeMusic(''));
    this.props.dispatch(menuModule.changeMenu('title'));
    this.props.history.push('/');},
      10000
    );
  }

  saveState(){
    let player = this.props.player;
    let flags = this.props.flags;
    let game = this.props.game;
    let maps = this.props.maps;
    let doors = this.props.doors;
    this.props.dispatch(savesModule.saveState(player, flags, game, maps, doors));
  }

  handleSaveGame() {
    let file = this.props.game.file;
    if (this.props.saves[file].fileStatus == 'empty') {
      this.props.dispatch(savesModule.changeStatus(file, 'active'));
    };
    let player = this.props.player;
    let flags = this.props.flags;
    let game = this.props.game;
    let maps = this.props.maps;
    let doors = this.props.doors;
    this.props.dispatch(savesModule.saveGame(file, player, flags, game, maps, doors));
  }

  //text
  getItem(square){
    let emptyTile;
    if(this.props.game.branch === 3){
      emptyTile = 'spookyTile';
    } else {
      emptyTile = 'tile';
    }
    this.props.dispatch(roomModule.updateValue(square.squareId, '0', roomConsts.sprites[emptyTile]));
    let itemArr = square.content.find(function(content) {
      return content[0] == "weapon" || content[0] == "item" || content[0] == "skill";
    });
    if (itemArr[0] == "weapon"){
      let oldWeaponArr = this.props.player.weapons;
      let newWeaponArr = oldWeaponArr.concat(itemArr[1]);
      this.props.dispatch(playerModule.changeCurrentWeapon(itemArr[1]));
      this.props.dispatch(playerModule.addWeaponToInventory(newWeaponArr));
    } else if (itemArr[0] === 'skill'){
      let oldSkillArr = this.props.player.skills;
      let newSkillArr = oldSkillArr.concat(itemArr[1]);
      this.props.dispatch(playerModule.changeCurrentSkill(itemArr[1]));
      this.props.dispatch(playerModule.updateSkills(newSkillArr));
    } else if (itemArr[0] === 'item'){
      if (itemArr[1] == 'health') {
        soundConsts.regen.play();
        let maxHealth = 100;
        if(this.props.game.difficulty === 'hard'){
          maxHealth = 50;
        };
        let newHealth = this.props.player.health + 10;
        if(newHealth <= maxHealth){
          this.props.dispatch(playerModule.updatePlayerHealth(newHealth));
        };
      } else {
        let oldItemArr = this.props.player.items;
        let newItemArr = oldItemArr.concat(itemArr[1]);
        this.props.dispatch(playerModule.addItemToInventory(newItemArr));
      };
    };
    let newContent = square.content.filter(function(content) {
      return content[0] !== "weapon" || content[0] !== "item" || content[0] == "skill";
    });
    if(itemArr[1] !== 'health'){
      soundConsts.jingle1.play();
      this.props.dispatch(playerModule.updateNewItem(itemArr[1]));
      this.props.dispatch(gameModule.changeGameState("itemGet"));
      this.props.dispatch(roomModule.updateContent(square.squareId, newContent));
    }
  }

  closeItemGet(){
    let item = this.props.player.newItem;
    this.props.dispatch(gameModule.changeGameState('active'));
    this.props.dispatch(playerModule.updateNewItem(''));
    if(item === 'pipe'){
      this.props.dispatch(soundsModule.changeEffect('heartBeat'));
      this.props.dispatch(playerModule.updatePlayerDirection('north'));
      this.triggerDialogue('dialogue', 'smashMachine1');
    } else if (item === 'Taser'){
      this.triggerPopUp('switchAttackType')
    } else if (item === 'Cryostat') {
      this.triggerPopUp('switchGuns') 
    } else if (item === 'keyCard2Old'){
      this.props.dispatch(gameModule.setRespawnPoint(74));
      this.createMidBoss();
    } else if (item === 'keyCard1B') {
      this.triggerDialogue('dialogue', 'mutinyKeycard');
    } else if (item === 'bracelet') {
      let health = 100;
      if(this.props.game.difficulty === 'hard'){
        health = 50;
      };
      this.props.dispatch(playerModule.updatePlayerHealth(health));
      this.props.dispatch(roomModule.updateContent(72, [['interact', 'terminal1']]));
      this.props.dispatch(roomModule.updateContent(71, [['interact', 'terminal1']]));
      this.props.dispatch(flagsModule.triggerFlag('getBracelet'));      
    }
  }

  exitSpecial() {
    this.props.dispatch(gameModule.toggleSpecial(false));
    this.props.dispatch(gameModule.changeGameState('postSpecialRoom'));
    this.props.dispatch(gameModule.setRoomId(4));
    let newBranch; 
    if(this.props.game.branch !== 3) {
      newBranch = this.props.game.branch + 1;
    } else {
      newBranch = 1;
    };
    this.props.dispatch(gameModule.setBranch(newBranch));
    let health = 100;
    if(this.props.game.difficulty === 'hard'){
      health = 50;
    }
    this.props.dispatch(playerModule.updatePlayerHealth(health));
    this.props.dispatch(playerModule.updatePlayerLocation(''));
    this.nullAll();
    this.startGame();
  }

  triggerDialogue(type, textKey){
    if(type === 'interact' && this.props.game.branch === 'prologue' && this.props.game.roomId === 1 && this.props.flags.exitStartingRoom.triggered === false){
      let newTotal = this.state.examinedObjects + 1;
      this.setState({
        examinedObjects: newTotal
      });
    };  
    this.props.dispatch(textModule.setActiveText(textKey, type)); 
    this.props.dispatch(gameModule.changeGameState('dialogue'));
    //sound effects
    if(textKey.includes('terminal') && this.props.text.activeText !== 'terminalOff'){
      soundConsts.bootUp.play();
    } else if(textKey.includes('phone')){
      soundConsts.pickUp.play();
      this.props.dispatch(roomModule.updateSprite(70, roomConsts.sprites['phone']))
    } else if(textKey.includes('sync')) {
      soundConsts.merge.play();
    } else if(textKey === 'save') {
      soundConsts.ping.play();
    } else if(textKey.includes('intercom')) {
      soundConsts.bell.play();
    } else {
      soundConsts.menu.play();
    };
    //other effects (ex: music change)
    if(textKey === 'intercom1'){
      this.triggerEmote(this.props.player.location, 'surprise');
    };
    if(this.props.text.activeText === 'save'){
      let health = 100;
      if(this.props.game.difficulty === 'hard'){
        health = 50;
      };
      this.props.dispatch(playerModule.updatePlayerHealth(health));
    };
    if(textKey === 'fridge'){
      this.props.dispatch(soundsModule.changeEffect('heartBeat'));
    };
  }

  messageAlert(event){
    this.props.dispatch(gameModule.changeGameState('cutscene'));
    this.triggerEmote(this.props.player.location, 'message');
    soundConsts.codec.play();
    setTimeout(() =>
      this.triggerEvent(event),
    3000);
  }

  triggerEmote(location, emote){
    if(this.state.emote !== null){
      this.clearEmote();
    }
    soundConsts.emote.play();
    this.props.dispatch(roomModule.updateEmote(location, emote));
    this.setState({
      emoteLocation: location
    });
    let clearTime;
    if(emote === 'surprise'){
      clearTime = 1000;
    } else {
      clearTime = 3000;
    }
    setTimeout(() => {
      this.clearEmote();
    }, clearTime);
  }

  clearEmote(){
    if(this.state.emoteLocation !== null){
      this.props.dispatch(roomModule.updateEmote(this.state.emoteLocation, null));
    }
  }

  endDialogue() {
    let textKey = this.props.text.activeText;
    if (textKey.includes('terminal') && textKey !== 'terminalOff'){
      soundConsts.bootDown.play();
    };
    if(this.props.game.mindDepth > 0){
      this.props.dispatch(gameModule.changeMindDepth(0));
    };
    this.props.dispatch(gameModule.changeGameState('active'));
    this.props.dispatch(textModule.setActiveText(null, null));
    this.props.dispatch(textModule.setLine(0));
    this.props.dispatch(textModule.setParagraph(1));
    if(textKey === 'LucyTalk1A'){
      this.exitStartingRoom();
    } else if(textKey === 'coffee'){
      soundConsts.regen.play();
      setTimeout(() => {
        this.triggerDialogue('dialogue', 'postCoffee');
      },200);
    } else if(this.state.examinedObjects >= 6 && this.props.flags.annoyLucy.triggered === false){
      this.triggerEmote(this.props.npcs['lucyYoung'].location, 'angry')
      setTimeout(() => {
        this.props.dispatch(flagsModule.triggerFlag('annoyLucy'));
        this.triggerDialogue('dialogue', 'annoyLucy');
      }, 200);
    } else if(textKey === 'leaveLucy'){
      this.triggerDialogue('dialogue', 'exitStartingRoom');
    } else if(textKey === 'exitStartingRoom'){
      this.lucyRun();
    } else if(textKey === 'Lucy2'){
      this.props.dispatch(npcsModule.updateNPCDirection('lucyYoung', 'north'));
      this.props.dispatch(flagsModule.triggerFlag('exitStairway'));
      this.npcOpenDoor('lucyYoung','P4-A');
    } else if(textKey === 'Lucy3'){
      this.endPrologue();
    } else if(textKey === 'terminal1A'){
      soundConsts.changeDoor.play();
      this.props.dispatch(doorsModule.updateDoorLock('1-A', true));
    } else if(textKey === 'terminal1B'){
      soundConsts.changeDoor.play();
      this.props.dispatch(doorsModule.updateDoorLock('1-A', false));
      if(this.props.currentRoom[111].value !== 'T'){
        this.createSavePoint(111);
      };
    } else if(textKey === 'saveA'){
      this.handleSaveGame();
    } else if(textKey === 'mapTerminal'){
      this.props.dispatch(playerModule.getMap());
    } else if(textKey === 'Lucy1AA' || textKey === 'Lucy1AB' || textKey === 'Lucy1BAA' || textKey === 'Lucy1BAB' || textKey === 'Lucy1BBAA' || textKey === 'LucyBBAB'){
      this.takeShower();
    } else if(textKey === 'Lucy1BBB'){
      this.lucyAttack();
    } else if(textKey === 'wakeUp1A'){
      this.exitMachine();
    } else if(textKey === 'smashMachine1'){
      this.props.dispatch(flagsModule.triggerFlag('smashMachine'));
      this.smashMachine();
    } else if(textKey === 'smashMachine2'){
      this.triggerPopUp('objectiveSmashComplete');
      setTimeout(() =>
        this.triggerPopUp('objectiveWhere')
      ,10000);
    } else if(textKey === 'explore'){
      this.mutinyExit();
    } else if(textKey === 'mutinyExit'){
      this.triggerPopUp('objectivePerson');
    } else if(textKey.includes('mutiny1')){
      this.startCollapse();
    } else if(textKey.includes('mutiny2')){
      this.mutinyRun1();
    } else if(textKey.includes('mutiny3')){
      this.mutinyEnterWound();
    } else if(textKey === 'funeralOutside1'){
      this.props.dispatch(playerModule.updatePlayerStatus('stand'));
      this.triggerPopUp('funeral4')
    } else if(textKey === 'funeralOutside2'){
      this.props.dispatch(gameModule.changeGameState('cutscene'));
      this.props.dispatch(npcsModule.createNPC('president', 69, 'south', 'funeralStand', ''));
      this.triggerDialogue('dialogue', 'funeralOutside3');
    } else if(textKey === 'funeralOutside3'){
      this.props.dispatch(gameModule.changeGameState('cutscene'));
      this.moveNPC('president', [['south', 3]]);
    } else if(textKey === 'funeralOutside4'){
      soundConsts.suspense.play();
      this.props.dispatch(gameModule.setPreviousRoomId(11));
      this.props.dispatch(gameModule.setRoomId(13));
      this.props.dispatch(playerModule.updatePlayerDirection('north'));
      this.nullAll();
      this.handleChangeGameState("building");
      this.generateRoomFromTemplate();
    } else if(textKey === 'aptDoor'){
      this.exitWound(2);
    };
  }
    //npc + cutscene functions
    triggerEvent(event){
      this.props.dispatch(flagsModule.triggerFlag(event));
      this.triggerDialogue('dialogue', event);
    }
  
    mutinyExit(){
      setTimeout(() => {
        this.props.dispatch(npcsModule.updateNPCStatus('mutiny', 'stand'));
        this.props.dispatch(npcsModule.updateNPCDirection('north'));
      }, 2000);
      setTimeout(() => {
        this.props.dispatch(npcsModule.updateNPCDirection('mutiny', 'north'));
      }, 3000);
      setTimeout(() => {
        this.props.dispatch(npcsModule.updateNPCStatus('mutiny', 'walk'));
      }, 4000);
      setTimeout(() => {
        let oldContent = this.props.currentRoom[17].content;
        let filteredOldContent = oldContent.filter(function(content) {
          return content[0] !== 'npc';
        });
        this.props.dispatch(roomModule.updateContent(17, filteredOldContent));
        this.props.dispatch(npcsModule.updateNPCLocation('mutiny', 16));
        this.props.dispatch(roomModule.updateContent(16, ['npc', 'mutiny']));
      }, 5000);
      setTimeout(() => {
        this.npcOpenDoor('mutiny', '7-C');
      }, 6000);
    }
  
    mutinyIntro(){
      //trigger mutiny1 flag
      this.props.dispatch(gameModule.changeGameState('cutscene'));
      setTimeout(() => {
      this.triggerEmote(this.props.player.location, 'surprise');
        this.props.dispatch(playerModule.updatePlayerDirection('north'));
      }, 500);
      setTimeout(() => {
        this.clearEmote();
        this.triggerEmote(this.props.npcs['mutiny'].location, 'surprise');
      }, 1500);
      setTimeout(() => {
        this.props.dispatch(npcsModule.updateNPCDirection('mutiny', 'south'));
      }, 2000);
      setTimeout(() => {
        this.clearEmote();
      }, 2500);
      setTimeout(() => {
        this.triggerDialogue('dialogue', 'mutiny1')
      }, 3000);
    }

    mutinyComputerTalk(){
      //trigger mutiny1 flag
      this.props.dispatch(gameModule.changeGameState('cutscene'));
      setTimeout(() => {
        this.props.dispatch(playerModule.updatePlayerDirection('north'));
        this.props.dispatch(npcsModule.updateNPCDirection('mutiny', 'south'));
      }, 500);
      setTimeout(() => {
        this.triggerDialogue('dialogue', 'mutiny6')
      }, 1000);
    }
  
    startCollapse(){
      this.props.dispatch(gameModule.changeGameState('cutscene'));
      soundConsts.explosion.play();
      this.triggerEmote(this.props.player.location, 'surprise');
      setTimeout(() => {
        this.props.dispatch(gameModule.setBranch('collapse'))
        this.clearEmote();
      }, 2000);
      setTimeout(() => {
        this.triggerDialogue('dialogue', 'mutiny2')
      }, 3000);
    }
  
    mutinyRun1(){
      this.props.dispatch(gameModule.changeGameState('cutscene'));
      setTimeout(() => {
        this.props.dispatch(gameModule.changeGameState('active'));
      }, 5000);
      this.moveNPC('mutiny', [['south', 1], ['west', 7], ['south', 7]]);
    }

    npcOpenDoor(npc, door){
      let room = this.props.game.roomId;
      this.props.dispatch(npcsModule.updateNPCStatus(npc, 'stand'));
      let location = this.props.npcs[npc].location;
      let direction = this.props.npcs[npc].direction;
      let oldContent = this.props.currentRoom[location].content;
      let filteredOldContent = oldContent.filter(function(content) {
        return content[0] !== 'npc';
      });
      this.props.dispatch(roomModule.updateContent(location, filteredOldContent));
      this.props.dispatch(roomModule.updateValue(location, '0', this.props.currentRoom[location].tileImage));
      if(this.props.game.branch === 'prologue'){
        soundConsts.woodenDoorOpen.play();
        if(door === 'P4-A'){
          this.props.dispatch(doorsModule.updateDoorStatus(door, 'openPrologue'));
        }
        setTimeout(() => {
          this.props.dispatch(npcsModule.nullNPC(npc));
        }, 1000);
        setTimeout(() => {
          soundConsts.woodenDoorClose.play();
          this.props.dispatch(doorsModule.updateDoorStatus(door, 'open'));
        }, 1500);
      } else {
        setTimeout(() => {
          soundConsts.doorOpen.play();
          this.props.dispatch(doorsModule.updateDoorStatus(door, 'opening'));
        }, 1000);
        setTimeout(() => {
          this.props.dispatch(doorsModule.updateDoorStatus(door, 'open'));
        }, 2300);
        setTimeout(() => {
          let next = location + helpers.getDifference(direction);
          this.props.dispatch(npcsModule.updateNPCLocation(npc, next));
        }, 3000);
        setTimeout(() => {
          if(this.props.game.roomId === room){
            this.props.dispatch(npcsModule.nullNPC(npc));
          }
        }, 4200);
        setTimeout(() => {
          if(this.props.game.branch !== 'collapse'){
            this.closeDoor(door);
          };
          if(door === '7-C'){
            this.triggerDialogue('dialogue', 'mutinyExit');
          };
        }, 5000);
      };
    }
  
    npcRotate(){
      let east = [100, 113, 126, 139];
      let west = [74, 61, 48, 35, 22];
      if(this.props.player.location < 87 && this.props.player.location > 80){
        this.props.dispatch(npcsModule.updateNPCDirection('lucyYoung', 'north'));
      } else if(this.props.player.location > 87 && this.props.player.location < 91){
        this.props.dispatch(npcsModule.updateNPCDirection('lucyYoung', 'south'));
      } else if(east.includes(this.props.player.location)){
        this.props.dispatch(npcsModule.updateNPCDirection('lucyYoung', 'east'));
      } else if(west.includes(this.props.player.location)){
        this.props.dispatch(npcsModule.updateNPCDirection('lucyYoung', 'west'));
      };
    }

  lucyAttack(){
    soundConsts.blanket.play()
    setTimeout(() =>
      soundConsts.yank.play()
    , 2000);
    setTimeout(() =>
      soundConsts.thud.play()
    , 3000);
    setTimeout(() =>
      soundConsts.dead.play()
    , 4000);
    setTimeout(() => {
      this.props.dispatch(soundsModule.changeMusic('gameOver'));
      this.handleChangeGameState('gameOver');
      this.props.dispatch(playerModule.updatePlayerLocation(113));
      this.props.dispatch(playerModule.updatePlayerStatus('dead2'));
      this.props.dispatch(roomModule.updateSprite(125, roomConsts.sprites.sofaAlt1));
      this.props.dispatch(roomModule.updateSprite(138, roomConsts.sprites.sofaAlt2));
      this.props.dispatch(textModule.setActiveText('LucyGameOver', 'dialogue'));
    }, 5000);
  }

  takeShower(){
    this.props.dispatch(soundsModule.changeEffect(''));
    this.props.dispatch(gameModule.changeGameState('cutscene'));
    this.props.dispatch(gameModule.changeFilter('fade-out'));
    setTimeout(() => 
      soundConsts.woodenDoorOpen.play(),
    2000);
    setTimeout(() => 
      soundConsts.woodenDoorClose.play(),
    3000);
    setTimeout(() => {
      this.triggerPopUp('move');
      soundConsts.shower.play();
    }, 4000);
    setTimeout(() => 
      soundConsts.woodenDoorOpen.play(),
    14000);
    setTimeout(() => {
      soundConsts.woodenDoorClose.play();
      this.props.dispatch(npcsModule.updateNPCDirection('lucyYoung', 'west'))
      this.props.dispatch(playerModule.updatePlayerLocation(32));
      this.props.dispatch(playerModule.updatePlayerStatus('stand'));
    }, 15000);
    setTimeout(() => {
      this.props.dispatch(gameModule.changeFilter('fade-in'));
      this.props.dispatch(gameModule.changeGameState('active'));
      this.props.dispatch(soundsModule.changeMusic('lucy'));
    }, 16000);
    setTimeout(() => {
      this.props.dispatch(gameModule.changeFilter(''));
    }, 18000);
  }

  leaveLucy(){
    this.props.dispatch(gameModule.changeGameState('cutscene'));
    this.props.dispatch(doorsModule.updateDoorStatus('P2-A', 'openPrologue'));
    soundConsts.woodenDoorOpen.play();
    setTimeout(() => {
      this.props.dispatch(npcsModule.createNPC('lucyYoung', 57, 'south', 'walk', 'lucyHallway1'));
      this.props.dispatch(doorsModule.updateDoorStatus('P2-A', 'open'));
      this.props.dispatch(playerModule.updatePlayerDirection(helpers.reverseDirection(this.props.player.direction)))
      soundConsts.woodenDoorClose.play();
    }, 1000);
    setTimeout(() => {
      this.triggerEmote(57, 'angry')
      this.props.dispatch(npcsModule.updateNPCStatus('lucyYoung', 'angry'));
    }, 1500);
    setTimeout(() => {
      this.triggerDialogue('dialogue', 'leaveLucy');
    }, 2000);
  }

  exitStartingRoom(){
    this.props.dispatch(gameModule.changeGameState('cutscene'))
    this.props.dispatch(flagsModule.triggerFlag('exitStartingRoom'));
    this.props.dispatch(gameModule.changeFilter('fade-out'));
    setTimeout(() => 
      this.changeRoom(this.props.doors['P1-A']),
    2000);
    setTimeout(() => {
      this.props.dispatch(playerModule.updatePlayerDirection('south'));
      this.props.dispatch(doorsModule.updateDoorStatus('P2-A', 'openPrologue'));
      this.props.dispatch(gameModule.changeFilter('fade-in'));
    }, 3000);
    setTimeout(() => {
      this.props.dispatch(gameModule.changeFilter(''));
      this.move('south', this.props.player.location);
    }, 4000);
    setTimeout(() => 
      this.props.dispatch(playerModule.updatePlayerDirection('north')),
    5000);
    setTimeout(() => 
    this.props.dispatch(npcsModule.createNPC('lucyYoung', 57, 'south', 'walk', 'lucyHallway1')),
    6000);
    setTimeout(() => {
      this.props.dispatch(npcsModule.updateNPCStatus('lucyYoung', 'stand'));
      this.props.dispatch(gameModule.changeFilter(''));
      soundConsts.woodenDoorClose.play();
      this.props.dispatch(doorsModule.updateDoorStatus('P2-A', 'open'));
    }, 7000);
    setTimeout(() => {
      this.triggerDialogue('dialogue', 'exitStartingRoom');
    }, 8000);
  };

  lucyRun(){
    this.moveNPC('lucyYoung', [['west', 2], ['south', 7]]);
  }

  moveNPC(npc, moveArr){
    let npcLocation = this.props.npcs[npc].location
    let oldContent = this.props.currentRoom[npcLocation].content;
    let filteredOldContent = oldContent.filter(function(content) {
      return content[0] !== 'npc';
    });
    this.props.dispatch(roomModule.updateContent(npcLocation, filteredOldContent));
    this.props.dispatch(roomModule.updateValue(npcLocation, '0', this.props.currentRoom[npcLocation].tileImage));
    this.props.dispatch(npcsModule.updateNPCStatus(npc, 'walk'));
    this.props.dispatch(npcsModule.updateNPCDirection(npc, moveArr[0][0]));
    let currentSubArr = 0;
    let current = 0;
    let end = moveArr[0][1];
    let moveInt = setInterval(() => {
      if(current >= end){
        if(currentSubArr >= moveArr.length - 1){
          clearInterval(moveInt);
          let next = this.props.npcs[npc].location + helpers.getDifference(this.props.npcs[npc].direction);
          if(this.props.currentRoom[next].value === 'D'){
            let door = this.props.currentRoom[next].content.find(function(content){
              return content[0] == 'door';
            });
            this.npcOpenDoor(npc, door[1]);
          } else if(this.props.game.branch === 'prologue' && this.props.game.roomId === 11){
            this.props.dispatch(npcsModule.nullNPC(npc));
            setTimeout(() => {
              this.triggerDialogue('dialogue', 'funeralOutside4')
            }, 500);
          } else if(this.props.game.branch === 'collapse' && this.props.game.roomId === 10){
            this.props.dispatch(npcsModule.nullNPC(npc));
          }
        } else {
          this.props.dispatch(npcsModule.updateNPCDirection(npc, moveArr[currentSubArr + 1][0]));
          currentSubArr = currentSubArr + 1;
          current = 0;
          end = moveArr[currentSubArr][1];
        };
      } else {
        //clear previous square
        let oldContent = this.props.currentRoom[npcLocation].content;
        let filteredOldContent = oldContent.filter(function(content) {
          return content[0] !== 'npc';
        });
        this.props.dispatch(roomModule.updateContent(npcLocation, filteredOldContent));
        //update next square
        let next = this.props.npcs[npc].location + helpers.getDifference(this.props.npcs[npc].direction)
        let newContentArr = this.props.currentRoom[next].content;
        newContentArr.push(['npc', npc]);
        this.props.dispatch(roomModule.updateContent(next, newContentArr));
        this.props.dispatch(npcsModule.updateNPCLocation(npc, next));
        current = current + 1;
      };
    }, 150);
  }

  exitMachine(){
    this.props.dispatch(gameModule.changeFilter('fade-out'));
    this.props.dispatch(gameModule.changeGameState('cutscene'));
    this.props.dispatch(soundsModule.changeEffect(''));
    setTimeout(() => {
      soundConsts.leather.play();
    }, 2000);
    setTimeout(() => {
      this.props.dispatch(soundsModule.changeMusic('intro'));
      this.props.dispatch(playerModule.updatePlayerStatus('stand'));
      this.props.dispatch(playerModule.updatePlayerDirection('south'));
      this.props.dispatch(playerModule.updatePlayerLocation(110));
      this.props.dispatch(gameModule.changeFilter('fade-in'));
    }, 4000);
    setTimeout(() => {
      this.props.dispatch(gameModule.changeFilter(''));
      this.props.dispatch(gameModule.changeGameState('active'));
      this.triggerPopUp('objectiveSmash');
    }, 6000);

  }

  smashMachine(){
    this.props.dispatch(gameModule.changeGameState('cutscene'));
    this.props.dispatch(gameModule.changeFilter('rage-filter1'));
    setTimeout(() => {
      this.move('north', this.props.player.location);
    }, 300);
    setTimeout(() => {
      this.move('north', this.props.player.location);
    }, 600);
    setTimeout(() => {
      this.move('north', this.props.player.location);
    }, 900);
    setTimeout(() => {
      this.move('north', this.props.player.location);
    }, 1200);
    setTimeout(() => {
      this.pipeAttack();
    }, 1500);
    setTimeout(() => {
      soundConsts.metalSmash1.play();
    }, 2000);
    setTimeout(() => {
      this.props.dispatch(gameModule.changeFilter('rage-filter2'));
      this.pipeAttack();
    }, 2500);
    setTimeout(() => {
      soundConsts.metalSmash2.play();
    }, 3000);
    setTimeout(() => {
      this.props.dispatch(gameModule.changeFilter('rage-filter3'));
      this.pipeAttack();
    }, 3500);
    setTimeout(() => {
      soundConsts.glassSmash.play();
      this.props.dispatch(roomModule.updateSprite(109, roomConsts.sprites.tankBroken1));
      this.props.dispatch(roomModule.updateContent(109, [['interact', 'tankBroken1']]));
      this.props.dispatch(roomModule.updateContent(110, [['interact', 'tankBroken1']]));
      this.props.dispatch(roomModule.updateSprite(122, roomConsts.sprites.tankBroken2));
      this.props.dispatch(roomModule.updateContent(122, [['interact', 'tankBroken2']]));
      this.props.dispatch(roomModule.updateContent(123, [['interact', 'tankBroken2']]));
    }, 4000);
    setTimeout(() => {
      this.triggerDialogue('dialogue', 'smashMachine2');
    }, 4500);
  }

  createSavePoint(location){
    if(this.props.currentRoom[location].value !== 'T') {
      setTimeout(() => {
        this.props.dispatch(roomModule.updateContent(location, [['interact', 'save']]));
        this.props.dispatch(roomModule.updateContent(location+1, [['interact', 'save']]));
        this.props.dispatch(roomModule.updateValue(location, 'T', roomConsts.sprites['tile']));
        this.props.dispatch(roomModule.toggleAlert(location+1, true));
        this.props.dispatch(roomModule.updateSprite(location, roomConsts.sprites['save']));
        soundConsts.merge.play();
      }, 1000)
    };
  }

  enterFuneral(){
    setTimeout(() => {
      this.triggerEmote(83, 'surprise');
    }, 500);
    setTimeout(() => {
      this.triggerDialogue('dialogue', 'funeral1')
    }, 1000);
  }

  // handlePlayerChoice(){
  //   if (this.props.text.activeText == 'terminal1') {
  //     soundConsts.changeDoor.play();
  //     if (this.props.text.selectedOption == 2) {
  //       this.props.dispatch(doorsModule.updateDoorLock('1-A', false));
  //       if(this.props.currentRoom[111].value !== 'T') {
  //         let eventTimer = setTimeout(() => {
  //           this.props.dispatch(roomModule.updateValue(111, 'T', roomConsts.sprites['tile']));
  //           this.props.dispatch(roomModule.updateContent(111, [['interact', 'save']]));
  //           this.props.dispatch(roomModule.updateContent(112, [['interact', 'save']]));
  //           this.props.dispatch(roomModule.toggleAlert(112, true));
  //           this.props.dispatch(roomModule.updateSprite(111, roomConsts.sprites['save']));
  //           soundConsts.merge.play();},
  //           1000
  //         );
  //       }
  //     } else {
  //       this.props.dispatch(doorsModule.updateDoorLock('1-A', true));
  //     };
  //   } else if (this.props.text.activeText === 'save'){
  //     this.props.dispatch(playerModule.updatePlayerHealth(50));
  //     if(this.props.text.selectedOption === 2){
  //       this.handleSaveGame();
  //     };
  //   }
  //   this.props.dispatch(textModule.selectOption[1])
  // }

  advanceLine() {
    //get current paragraph
    let activeParagraph;
    let activeText = this.props.text.activeText;
    if (this.props.text.activeTextType == 'dialogue') {
      activeParagraph = textConsts.dialogue[this.props.text.activeText][this.props.text.paragraph][1];
    } else {
      activeParagraph = textConsts.examine[this.props.text.activeText][this.props.text.paragraph];
    };
    let newLine = this.props.text.line + 1;
    //if you've reached the end of the current paragraph...
    if (newLine >= activeParagraph.length || activeParagraph[0] == 'results') {
      this.props.dispatch(textModule.setLine(0));
      this.advanceParagraph();
    } else {
      soundConsts.menu.play();
      this.props.dispatch(textModule.setLine(newLine));
    };
    //dialogue animations
    if(activeText === 'wakeUp1A' && this.props.text.paragraph === 1 && this.props.text.line === 1){
      this.triggerPopUp('chapterStart');
    };
    if (activeText === 'smashMachine2'){ 
      if(this.props.text.line === 1){
        this.props.dispatch(gameModule.changeFilter('rage-filter2'));
      } else if(this.props.text.line === 2){
        this.props.dispatch(gameModule.changeFilter('rage-filter1'));
        this.props.dispatch(soundsModule.changeEffect(''));
      } else if (this.props.text.line === 3){
        this.props.dispatch(gameModule.changeFilter(''));
      };
    };
    //trigger angry emote
    if((activeText === 'Lucy1A' || activeText === 'Lucy1BA' || activeText === 'Lucy1BBA') && this.props.text.paragraph === 2 && this.props.text.line === 1){
      this.triggerEmote(this.props.player.location, 'angry');
    }; 
    //change sprite on sofa
    if((activeText === 'Lucy1A' || activeText === 'Lucy1BA' || activeText === 'Lucy1BBA') && this.props.text.paragraph === 3 && this.props.text.line === 1){
      this.props.dispatch(playerModule.updatePlayerStatus('sit2'));
    }; 
    if((this.props.text.activeText === 'funeral1A' || this.props.text.activeText === 'funeral1A') && this.props.text.line === 5){
      this.props.dispatch(gameModule.changeFilter('drunk'));
    };
    if(this.props.text.activeText === 'funeralOutside1' && this.props.text.line === 2){
      this.props.dispatch(playerModule.updatePlayerStatus('sick'));
    };
    if(activeText === 'funeralOutside3' && this.props.text.paragraph === 2 && this.props.text.line === 0){
      this.props.dispatch(gameModule.changeFilter(''));
      setTimeout(() => {
        this.triggerEmote(this.props.player.location, 'surprise');
        let direction;
        if(this.props.player.location < 44){
          direction = 'east';
        } else {
          direction = 'west';
        };
        this.props.dispatch(playerModule.updatePlayerDirection(direction));
      }, 200);
    };
  }

  advanceParagraph(){
    //get current text chunk
    let activeTextChunk;
    let num;
    let newParagraph = this.props.text.paragraph + 1;
    if (this.props.text.activeTextType == 'dialogue') {
      activeTextChunk = textConsts.dialogue[this.props.text.activeText];
    } else {
      activeTextChunk = textConsts.examine[this.props.text.activeText];
    };
    if(newParagraph > Object.keys(activeTextChunk).length) {
      this.endDialogue();
    } else {
      if(((this.props.text.activeText == 'LucyTalk3' || this.props.text.activeText == 'LucyTalk4') && activeTextChunk[newParagraph][0] === '') || this.props.text.activeText === 'fridge' || this.props.text.activeText === 'uniform'){
        this.props.dispatch(gameModule.changeMindDepth(this.props.game.mindDepth + 1));
      } else if (this.props.game.mindDepth > 0){
        this.props.dispatch(gameModule.changeMindDepth(0));
      };
      let firstLine;
      if (this.props.text.activeTextType == 'dialogue') {
        firstLine = activeTextChunk[newParagraph][1][0];
      } else {
        firstLine = activeTextChunk[newParagraph][0];
      };
      if (firstLine === 'options') {
        if (this.props.text.activeTextType == 'dialogue') {
          this.props.dispatch(textModule.setOptions(activeTextChunk[newParagraph][1][1]));
        } else {
          this.props.dispatch(textModule.setOptions(activeTextChunk[newParagraph][1]));
        };
      } else {
        soundConsts.menu.play();
        this.props.dispatch(textModule.setParagraph(newParagraph));
      };
    };
    let activeText = this.props.text.activeText;
    //trigger surprised emote
    if((activeText === 'Lucy1AA' || activeText === 'Lucy1BAA' || activeText === 'Lucy1BBAA') && newParagraph === 2){
      this.triggerEmote(this.props.npcs['lucyYoung'].location, 'surprise');
    }; 
    //toggle lucy sigh
    if((activeText === 'Lucy1AB' || activeText === 'Lucy1BAB' || activeText === 'Lucy1BBAB') && newParagraph === 2){
      this.props.dispatch(npcsModule.updateNPCStatus('lucyYoung', 'sigh'));
    } else if((activeText === 'Lucy1AB' || activeText === 'Lucy1BAB' || activeText === 'Lucy1BBAB') && newParagraph === 3){
      this.props.dispatch(npcsModule.updateNPCStatus('lucyYoung', 'stand'));
    };
    //leave lucy behind
    if((activeText === 'leaveLucy') && newParagraph === 3){
      this.props.dispatch(npcsModule.updateNPCStatus('lucyYoung', 'stand'));
    };
  }

  raiseRiseTile(squareId){
    let hasBlock = this.props.currentRoom[squareId].content.find(function(content) {
      return content[0] == 'block';
    });
    this.props.dispatch(roomModule.updateValue(squareId, 'WR', roomConsts.sprites['riseTileRise']));
    if(this.props.player.location === squareId){
      this.props.dispatch(playerModule.updatePlayerStatus('rise'));
    } else if(hasBlock !== undefined){
      let blockType = this.props.blocks[hasBlock[1]].kind.charAt(0).toUpperCase() + this.props.blocks[hasBlock[1]].kind.slice(1);
      this.props.dispatch(roomModule.updateSprite(squareId, roomConsts.sprites['block' + blockType + 'Rise']))
    };
    setTimeout(() => {
      this.props.dispatch(roomModule.updateValue(squareId, 'WR', roomConsts.sprites['riseTileUp']));
      if(this.props.player.location === squareId){
        this.props.dispatch(playerModule.updatePlayerStatus('stand'));
      };
      this.blockLaser(null, squareId);
    }, 1000);
  }

  sinkRiseTile(squareId){
    let hasBlock = this.props.currentRoom[squareId].content.find(function(content) {
      return content[0] == 'block';
    });
    this.props.dispatch(roomModule.updateValue(squareId, 'WR', roomConsts.sprites['riseTileSink']));
    if(this.props.player.location === squareId){
      this.props.dispatch(playerModule.updatePlayerStatus('sink'));
    } else if(hasBlock !== undefined){
      let blockType = this.props.blocks[hasBlock[1]].kind.charAt(0).toUpperCase() + this.props.blocks[hasBlock[1]].kind.slice(1);
      this.props.dispatch(roomModule.updateSprite(squareId, roomConsts.sprites['block' + blockType + 'Fall']));
    };
    setTimeout(() => {
      this.props.dispatch(roomModule.updateValue(squareId, '0R', roomConsts.sprites['riseTileDown']));
      if(this.props.player.location === squareId){
        this.props.dispatch(playerModule.updatePlayerStatus('stand'));
      } else if(hasBlock !== undefined){
        let blockType = this.props.blocks[hasBlock[1]].kind.charAt(0).toUpperCase() + this.props.blocks[hasBlock[1]].kind.slice(1);
        this.props.dispatch(roomModule.updateSprite(squareId, roomConsts.sprites['block' + blockType]));
      };
      this.blockLaser(squareId, null);
    }, 1000);
  }
  

  //Platforms
  platformStart(platformId) {
    let speed = 200;
    if(this.props.game.branch === 1 && this.props.game.roomId === 6){
      speed = 600;
    };
    let platformTimer = setInterval(() => {
        if(this.props.platforms[platformId] !== undefined) {
          if(this.props.platforms[platformId].isActive === true) {
            this.platformMove(platformId);
          } else {
            clearInterval(platformTimer);
          };
        }},
      speed
    );
    let oldTimerArr = this.props.game.timers;
    let newTimerArr = oldTimerArr.concat([platformTimer]);
    this.props.dispatch(gameModule.updateTimers(newTimerArr));
  }

  platformMove(platformId){
    let reverse = false;
    if(platformId === '6-B'){
      reverse = true;
    };
    let platform = this.props.platforms[platformId];
    let originalLocation = platform.location;
    let canMove = this.attemptMove(platform.direction, originalLocation);
    if (canMove == originalLocation || !(this.props.currentRoom[canMove].value === "P" || this.props.currentRoom[canMove].value === "V" || this.props.currentRoom[canMove].value === "E")){
      if(reverse){
        let newDirection = helpers.reverseDirection(platform.direction);
        this.props.dispatch(platformsModule.updatePlatformDirection(platform.platformId, newDirection));
      }
    } else {
      this.handleUpdatePlatformLocation(platform.platformId, originalLocation, canMove);
    };
    if(canMove == platform.start){
      if(reverse){
        let newDirection = helpers.reverseDirection(platform.direction);
        this.props.dispatch(platformsModule.updatePlatformDirection(platform.platformId, newDirection));
      }
    };
    let hasEnemy = this.props.currentRoom[canMove].content.find(function(content) {
      return content[0] == 'enemy';
    });
    if(hasEnemy !== undefined){
      this.killEnemy(hasEnemy[1]);
    }
  }

  platformReturn(platformId){
    let platform = this.props.platforms[platformId];
    let next;
    if (platform.location !== platform.start){
      if (platform.direction == 'north' || platform.direction == 'south') {
        if (platform.start > platform.location) {
          next = 1;
        } else {
          next = -1;
        };
      } else {
        if (platform.start > platform.location) {
          next = 13;
        } else {
          next = -13;
        };
      };
      let location = platform.location;
      let rapidMoveTimer = setInterval(() =>
        {if (location !== platform.start) {
          let newLocation = location + next;
          let hasEnemy = this.props.currentRoom[newLocation].content.find(function(content) {
            return content[0] == 'enemy';
          });
          if(hasEnemy !== undefined){
            this.killEnemy(hasEnemy[1]);
          }
          this.handleUpdatePlatformLocation(platform.platformId, location, newLocation);
          location = newLocation
        } else {
          clearInterval(rapidMoveTimer);
        }},
        100
      );
    };
  }

  handleUpdatePlatformLocation(platformId, originalLocation, newLocation){
    let platform = this.props.platforms[platformId];
    //set new tile images
    let image;
    if (newLocation == platform.start && platform.isActive == false) {
      if (platform.direction == 'north' || platform.direction == 'south') {
        image = roomConsts.sprites['platformOffNS'];
      } else {
        image = roomConsts.sprites['platformOffEW'];
      };
    } else if (platform.direction == 'north' || platform.direction == 'south') {
      image = roomConsts.sprites['platformOnNS'];
    } else if (platform.direction == 'east' || platform.direction == 'west') {
      image = roomConsts.sprites['platformOnEW']
    };
    let squareImage;
    if(this.props.game.branch === 2 && this.props.game.roomId === 6){
      if (this.props.currentRoom[originalLocation - 1].value !== 'V' && this.props.currentRoom[originalLocation - 1].value !== 'Lzr' && this.props.currentRoom[originalLocation - 1].value !== 'M' && this.props.currentRoom[originalLocation - 1].value !== 'MB'){
        squareImage = roomConsts.sprites['pitEmpty'];
      } else {
        squareImage = roomConsts.sprites['doorTile'];
      };
      this.props.dispatch(roomModule.updateValue(originalLocation, 'V', squareImage));
    } else {
      if (this.props.currentRoom[originalLocation - 1].value !== 'P' && this.props.currentRoom[originalLocation - 1].value !== 'E' && this.props.currentRoom[originalLocation - 1].value !== 'Lzr' && this.props.currentRoom[originalLocation - 1].value !== 'M' && this.props.currentRoom[originalLocation - 1].value !== 'MB'){
        squareImage = roomConsts.sprites['pit'];
      } else {
        squareImage = roomConsts.sprites['pit2'];
      };
      this.props.dispatch(roomModule.updateValue(originalLocation, 'P', squareImage));
    };
    this.handleUpdateSprite(originalLocation, '', '');
    this.props.dispatch(roomModule.updateValue(newLocation, 'M', image));
    //remove ALL content from previous content array
    let contentArr = this.props.currentRoom[originalLocation].content;
    this.props.dispatch(roomModule.updateContent(originalLocation, []));
    //move ALL content to new content array
    this.props.dispatch(roomModule.updateContent(newLocation, contentArr));
    this.props.dispatch(platformsModule.updatePlatformLocation(platformId, newLocation));
    if (contentArr.length > 1) {
      this.resolvePlatformContent(newLocation, originalLocation);
    };
    if(originalLocation === this.props.player.location) {
      this.props.dispatch(playerModule.updatePlayerLocation(newLocation));
    }; 
  }

  resolvePlatformContent(newLocation, originalLocation) {
    let content = this.props.currentRoom[newLocation].content;
    let contentToUpdate = content.find(function(content){
        return content[0] == 'block';
    });
    let sprite;
    if (contentToUpdate !== undefined) {
      this.props.dispatch(blocksModule.updateBlockLocation(contentToUpdate[1], newLocation));
      let kind = this.props.blocks[contentToUpdate[1]].kind.charAt(0).toUpperCase() + this.props.blocks[contentToUpdate[1]].kind.slice(1);
      sprite = roomConsts.sprites['block' + kind];
    };
    this.handleUpdateSprite(newLocation, sprite);
    this.blockLaser(originalLocation, newLocation);
  }

  //Block Functions
  moveBlock(blockId, direction, originalLocation, newLocation) {
    //move animation
    soundConsts.scrape.play();
    //check properties of new square
    let blockCheck = this.props.currentRoom[newLocation];
    //player?
    let hasPlayer = blockCheck.content.find(function(content) {
      return content[0] == 'player';
    });
    //update location
    let previousContentArr = this.props.currentRoom[originalLocation].content;
    let filteredContentArr = previousContentArr.filter(function(content) {
      return content[0] !== 'block';
    });
    this.props.dispatch(roomModule.updateContent(originalLocation, filteredContentArr));
    this.handleUpdateSprite(originalLocation, '', '');
    if (hasPlayer !== undefined && this.attemptMove(direction, newLocation) !== newLocation) {
      this.props.dispatch(playerModule.updatePlayerLocation(newLocation + helpers.getDifference(direction)));
    };
    //if new square is a water pit
    if (blockCheck.value == 'P') {
      this.blockSink(blockId, newLocation, direction, 'water');
    //if new square is void pit
    } else if (blockCheck.value == 'V') {
      this.blockSink(blockId, newLocation, direction, 'void');
    //if new square is lava
    } else if (blockCheck.value == 'L') {
      this.blockSink(blockId, newLocation, direction, 'lava');
    //if new square is a warp
    } else if (blockCheck.value == '@') {
      //add block to warp entry content array
      let newContentArr = this.props.currentRoom[newLocation].content;
      newContentArr.push(["block", blockId]);
      this.props.dispatch(roomModule.updateContent(newLocation, newContentArr));
      //trigger warp
      let thisWarp = this.props.currentRoom[newLocation].content.find(function(content) {
        return content[0] == 'warp';
      });
      this.warp(blockId, newLocation, thisWarp[1]);
    } else {
      //otherwise, move normally
      let newContentArr = this.props.currentRoom[newLocation].content;
      newContentArr.push(["block", blockId]);
      this.props.dispatch(roomModule.updateContent(newLocation, newContentArr));
      this.props.dispatch(blocksModule.updateBlockLocation(blockId, newLocation));
      let sprite;
      if(this.props.blocks[blockId].kind === 'metal'){
        sprite = 'blockMetal'
      } else if(this.props.blocks[blockId].kind === 'wood'){ 
        sprite = 'blockWood'
      }
      this.props.dispatch(roomModule.updateSprite(newLocation, roomConsts.sprites[sprite]));
      let nextLocation = this.attemptMove(direction, newLocation);
      //ice 
      if(this.props.currentRoom[newLocation].value == "I" && nextLocation !== newLocation) {
        let blockMoveTimer = setTimeout(() =>
          this.moveBlock(blockId, direction, newLocation, nextLocation),
          100
        );
      };
      //move in direction of c belt
      if (this.props.currentRoom[newLocation].value == "C") {
        let beltArr = this.props.currentRoom[newLocation].content.find(function(content) {
          return content[0] == 'belt';
        });
        direction = beltArr[1];
        nextLocation = this.attemptMove(direction, newLocation);
        if (nextLocation !== newLocation) {
          let blockMoveTimer = setTimeout(() =>
            this.moveBlock(blockId, direction, newLocation, nextLocation),
            100
          );
        };
      };
      //trigger switch
      if (blockCheck.value == 'S') {
        let thisSwitchId = blockCheck.content.find(function(content) {
          return content[0] == 'switch';
        });
        soundConsts.switchOn.play();
        this.handleSwitch(thisSwitchId[1]);
      };
    };
    this.blockLaser(originalLocation, newLocation);
  }

  blockLaser(originalLocation, newLocation){
    //check lasers for collision
    if(newLocation !== null){
      let hitLaser = [];
      let newLaserArr = [];
      this.props.projectiles.lasers.forEach((laserArr) => {
        let hit = false;
        for(let i = 0; i < laserArr.length; i++){
          if(laserArr[i] === newLocation){
            hit = true
            hitLaser = laserArr;
            break;
          };
        };
        if(hit === false){
          newLaserArr.push(laserArr);
        };
      });
      this.props.dispatch(projectilesModule.updateLasers(newLaserArr));
      //refire laser (if collision occured)
      if(hitLaser.length > 1){
        let laserDirection;
        if(hitLaser[0] - 1 === hitLaser[1]){
          laserDirection = 'north';
        } else if (hitLaser[0] + 13 === hitLaser[1]){
          laserDirection = 'east';
        } else if (hitLaser[0] + 1 === hitLaser[1]){
          laserDirection = 'south';
        } else if (hitLaser[0] - 13 === hitLaser[1]){
          laserDirection = 'west';
        };
        this.fireLaser((hitLaser[0] + helpers.getDifference(helpers.reverseDirection(laserDirection))), laserDirection);
      };
    };
    //check for blocked laser drone & fire
    if(originalLocation !== null){
      let newLaserArr = [];
      if(this.props.currentRoom[originalLocation + 1].value === 'Lzr'){
        this.fireLaser(originalLocation + 1, 'north');
      } else if(this.props.currentRoom[originalLocation - 13].value === 'Lzr'){
        this.fireLaser(originalLocation - 13, 'east');
      } else if(this.props.currentRoom[originalLocation - 1].value === 'Lzr'){
        this.fireLaser(originalLocation - 1, 'south');
      } else if(this.props.currentRoom[originalLocation + 13].value === 'Lzr'){
        this.fireLaser(originalLocation + 13, 'west');
      } else if(this.props.currentRoom[originalLocation + 26].value === 'Lzr'){
        this.props.projectiles.lasers.forEach((laserArr) => {
          if(!laserArr.includes(originalLocation + 13)){
            newLaserArr.push(laserArr);
          };
        });
        this.props.dispatch(projectilesModule.updateLasers(newLaserArr));
        this.fireLaser(originalLocation + 26, 'west');
      };
    }; 
  }

  blockSink(blockId, location, direction, tileType) {
    this.props.dispatch(gameModule.changeGameState('cutscene'));
    let kind = this.props.blocks[blockId].kind
    let sprite;
    //get fall/sink sprite
    if(kind === 'metal'){
      sprite = 'blockMetalSink'
    } else {
      sprite = 'blockWoodSink'
    };
    this.props.dispatch(roomModule.updateSprite(location, roomConsts.sprites[sprite]));
    this.props.dispatch(blocksModule.nullBlock(blockId));
    //check type of square/block
    if(tileType === 'lava'){
      setTimeout(() => {
        this.props.dispatch(gameModule.changeGameState('active'));
        this.props.dispatch(roomModule.updateSprite(location, ''));
        if(kind === 'metal'){
          this.props.dispatch(roomModule.updateValue(location, 'L-sunk', roomConsts.sprites['lavaCovered']))
        }},
        800
      );
    } else if (tileType === 'water'){
      soundConsts.splash.play();
      setTimeout(() => {
        this.props.dispatch(gameModule.changeGameState('active'));
        this.props.dispatch(roomModule.updateSprite(location, ''));
        if(kind === 'wood'){
          this.props.dispatch(roomModule.updateValue(location, 'L-sunk', roomConsts.sprites['pitCovered']));
        }},
        800
      );
    } else {
      soundConsts.fall.play();
      setTimeout(() => {
        this.props.dispatch(gameModule.changeGameState('active'));
        this.props.dispatch(roomModule.updateSprite(location, ''));},
        800
      );
    }
  };

  breakBlock(blockId){
    soundConsts.boxBreak.play();
    let location = this.props.blocks[blockId].location;
    this.props.dispatch(roomModule.updateSprite(location, ''));
    this.props.dispatch(roomModule.updateValue(location, 'BB', roomConsts.sprites['blockBroken']));
    this.props.dispatch(roomModule.setExplosion(location, true));
    this.props.dispatch(blocksModule.nullBlock(blockId));
    let previousContentArr = this.props.currentRoom[location].content;
    let filteredContentArr = previousContentArr.filter(function(content) {
      return content[0] !== 'block';
    });
    this.props.dispatch(roomModule.updateContent(location, filteredContentArr));
    setTimeout(() => 
      this.props.dispatch(roomModule.setExplosion(location, false)),      
    1000);
  }

//Boss Functions

  createMidBoss(){
    this.props.dispatch(soundsModule.changeMusic(''));
    this.closeDoor('4-A');
    this.props.dispatch(doorsModule.updateDoorLock('4-A', true));
    this.props.dispatch(gameModule.changeGameState('cutscene'));
    this.props.dispatch(roomModule.updateValue(71, '0', this.props.currentRoom[71].tileImage));
    this.props.dispatch(roomModule.updateContent(71, []));
    this.props.dispatch(roomModule.updateValue(84, '0', this.props.currentRoom[84].tileImage));
    this.props.dispatch(roomModule.updateContent(84, []));
    this.props.dispatch(roomModule.toggleAlert(72, false));
    this.props.dispatch(roomModule.updateContent(72, []));
    this.props.dispatch(roomModule.toggleAlert(85, false));
    this.props.dispatch(roomModule.updateContent(85, []));
    setTimeout(() => {
      this.props.dispatch(roomModule.updateSprite(84, enemyConsts.sprites.Troop.turnOn1));
      this.props.dispatch(roomModule.updateSprite(71, '')); 
    }, 500);
    setTimeout(() => {
      this.props.dispatch(roomModule.updateSprite(84, enemyConsts.sprites.Troop.turnOn2));
    }, 2600);
    setTimeout(() => {
      this.props.dispatch(bossModule.updateBossKind('Troop'));
      this.props.dispatch(bossModule.updateBossHealth(600));
      this.props.dispatch(bossModule.updateBossStatus('normal'));
      this.props.dispatch(bossModule.updateTileArray(enemyConsts.enemies.Troop.tileArr));
    }, 5000);
    setTimeout(() => {
      soundConsts.whoosh.play();
      this.props.dispatch(bossModule.updateBossName('Troop 3.0'));},
      6500
    );
    setTimeout(() => {
      let titles = this.props.boss.titles;
      titles.push('- Private Security Solution -');
      this.props.dispatch(bossModule.updateBossTitles(titles));
    },7000);
    setTimeout(() => {
      this.props.dispatch(roomModule.updateSprite(84, enemyConsts.sprites.Troop.angry.south));
      soundConsts.alarm.play();
      this.props.dispatch(gameModule.changeGameState('active'));
      this.startBossFight();},
      10000);
  }

  createBoss(){
    this.closeDoor('8-A');
    this.props.dispatch(doorsModule.updateDoorLock('8-A', true));
    this.props.dispatch(gameModule.changeGameState('cutscene'));
    this.props.dispatch(soundsModule.changeMusic('bossIntro'));
    soundConsts.scream.play();
    setTimeout(() => {
      this.props.dispatch(roomModule.updateSprite(112, enemyConsts.sprites['Chalazon'].normal)); 
      this.props.dispatch(bossModule.updateBossKind('Chalazon'));
      this.props.dispatch(bossModule.updateBossStatus('normal'));
      this.props.dispatch(bossModule.updateTileArray(enemyConsts.enemies.chalazon.tileArr));
      this.props.dispatch(gameModule.setEye('alive'));},
      7000
    );
    setTimeout(() => {
      soundConsts.whoosh.play();
      this.props.dispatch(bossModule.updateBossName('Chalazon'));},
      8500
    );
    setTimeout(() => {
      let titles = this.props.boss.titles;
      titles.push('- Abyssal Cyst -');
      this.props.dispatch(bossModule.updateBossTitles(titles));},
      11000
    );
    setTimeout(() => {
      this.props.dispatch(gameModule.changeGameState('active'));
      this.startBossFight();},
      15000
    );
  }

  startBossFight() {
    this.props.dispatch(bossModule.updateBossName(''));
    this.props.dispatch(bossModule.updateBossTitles([]));
    if(this.props.boss.kind === 'Troop'){
      //troop
      this.props.dispatch(soundsModule.changeMusic('midBoss'));
      setInterval(() =>
        {
          if(this.props.game.gameState === 'active' && this.props.boss.status === 'normal'){
            let canRam = this.seekPlayer();
            if(canRam !== ''){
              let rng = Math.floor(Math.random() * 5);
              if(rng === 0){
                this.props.dispatch(bossModule.updateBossStatus('ram'));
                this.troopRamAttack(canRam);
              } else if(rng === 1) {
                this.props.dispatch(bossModule.updateBossStatus('shoot'));
                this.troopShootAttack1(canRam);
              } else if(rng === 2) {
                this.bossMove();
              };
            } else {
              let rng = Math.floor(Math.random() * 5);
              if (rng === 0){
                this.midBossAttack();
              } else if (rng === 1){
                this.changeBossDirection();
              } else if(rng === 2) {
                this.bossMove();
              };
            }
          };
        }, 700);
    } else if (this.props.boss.kind === 'Chalazon'){
      //chalazon
      this.props.dispatch(soundsModule.changeMusic('boss'));
      setInterval(() =>
      {let rng = Math.floor(Math.random() * 2);
        if(this.props.game.gameState === 'active' && this.props.boss.status === 'normal'){
          if (rng === 0){
            this.bossAttack();
          } else if (rng === 1){
            this.bossFire();
          }
        };
      }, 5000);
    }
  }

  handleBossDamage(type){
    let bossHealth = this.props.boss.health - 25;
    this.props.dispatch(bossModule.updateBossHealth(bossHealth));
    if(this.props.boss.kind === 'Troop'){
      if(type === 'pipe'){
        soundConsts.metalSmash1.play();
      } else {
        soundConsts.shock.play();
      };
      this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.hurt[this.props.boss.direction]));
    }
    setTimeout(() => {
      if(this.props.boss.kind === 'Troop'){
        this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.normal[this.props.boss.direction]));
      }
    }, 300);
    if(bossHealth <= 0){
      this.killBoss();
    };
  }

  killBoss(){
    if(this.props.boss.kind === 'Troop'){
      this.props.dispatch(soundsModule.changeMusic(''));
      this.props.dispatch(gameModule.changeGameState('cutscene'));
      this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.dead1));
      setTimeout(() => {
        this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.dead2));
      }, 2000);
      setTimeout(() => {
        this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.explosion));
        this.props.dispatch(bossModule.updateBossStatus('dead'));
      }, 3000);
      setTimeout(() => {
        this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], ''));
        this.props.dispatch(gameModule.changeGameState('active'));
        this.props.dispatch(roomModule.updateContent(this.props.boss.tileArr[0], [['skill', 'dash']]));
        this.props.dispatch(roomModule.updateValue(this.props.boss.tileArr[0], '$', this.props.currentRoom[this.props.boss.tileArr[0]].tileImage));
        this.props.dispatch(bossModule.nullBoss());
        soundConsts.changeDoor.play();
        this.props.dispatch(doorsModule.updateDoorLock('4-A', false));
      }, 4000);
    } else if(this.props.boss.kind === 'Chalazon'){
      this.props.dispatch(soundsModule.changeMusic(''));
      soundConsts.scream.play();
      this.props.dispatch(gameModule.changeGameState('cutscene'));
      let sprite = <img className="boss-sprite" src={bossSink} width="250" height="220"/>;
      this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[9], sprite));
      setTimeout(() => {
        this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[9], ''));
        this.props.dispatch(bossModule.updateBossStatus('dead'));
        this.props.dispatch(gameModule.changeGameState('active'));
      }, 4000);
    }
  }

  bossFire(){
    this.props.dispatch(bossModule.updateBossAttack(true));
    setTimeout(() => {
    //fire projectile
    this.handleProjectile('enemy', 'north', this.props.boss.tileArr[5], 8, <img src={bossShot} width="40" height="40"/>)
    this.handleProjectile('enemy', 'south', this.props.boss.tileArr[4], 8, <img src={bossShot} width="40" height="40"/>)
    this.handleProjectile('enemy', 'east', this.props.boss.tileArr[6], 8, <img src={bossShot} width="40" height="40"/>)
    this.handleProjectile('enemy', 'west', this.props.boss.tileArr[2], 8, <img src={bossShot} width="40" height="40"/>)
    if(this.props.boss.health <= 400){
        this.handleProjectile('enemy', 'northWest', this.props.boss.tileArr[6], 8, <img src={bossShot} width="40" height="40"/>)
        this.handleProjectile('enemy', 'northEast', this.props.boss.tileArr[2], 8, <img src={bossShot} width="40" height="40"/>)
        this.handleProjectile('enemy', 'southWest', this.props.boss.tileArr[3], 8, <img src={bossShot} width="40" height="40"/>)
        this.handleProjectile('enemy', 'southEast', this.props.boss.tileArr[7], 8, <img src={bossShot} width="40" height="40"/>)
    } 
    this.props.dispatch(bossModule.updateBossAttack(false));
    }, 2000);
  }

  summonTentacles(){
    let path;
    //first tentacle
    this.spawnTentacle(48);
    setTimeout(() => {
      this.despawnTentacle(48);
      path = this.getTentaclePath();
    }, 2000);
    setTimeout(() => {
      this.spawnTentacle(path[0]);
    }, 3000);
    setTimeout(() => {
      this.tentacleRush(path, 0);
    }, 4500);
    //second tentacle
    this.spawnTentacle(113);
    setTimeout(() => {
      this.despawnTentacle(113);
      path = this.getTentaclePath();
    }, 4500);
    setTimeout(() => {
      this.spawnTentacle(path[0]);
    }, 5500);
    setTimeout(() => {
      this.tentacleRush(path, 0);
    }, 7000);
    // if(this.props.boss.health <= 400){
      //third tentacle
      this.spawnTentacle(34);
      setTimeout(() => {
        this.despawnTentacle(34);
        path = this.getTentaclePath();
      }, 7000);
      setTimeout(() => {
        this.spawnTentacle(path[0]);
      }, 8000);
      setTimeout(() => {
        this.tentacleRush(path, 0);
      }, 9500);
      //fourth tentacle
      this.spawnTentacle(125);
      setTimeout(() => {
        this.despawnTentacle(125);
        path = this.getTentaclePath();
      }, 9500);
      setTimeout(() => {
        this.spawnTentacle(path[0]);
      }, 10500);
      setTimeout(() => {
        this.tentacleRush(path, 0);
      }, 12000);
    // }
  }

  spawnTentacle(location){
    if(this.props.currentRoom[location].value === '0'){
      this.props.dispatch(roomModule.updateValue(location, '~r', roomConsts.sprites['spookyTile']));
      if(this.props.player.location === location){
        this.knockBack(this.getRandomDirection());
      };
      setTimeout(() => {
        this.props.dispatch(roomModule.updateValue(location, '~', roomConsts.sprites['spookyTile']));
      }, 1200);
    }
  }

  despawnTentacle(location){
    if(this.props.currentRoom[location].value === '~'){
      this.props.dispatch(roomModule.updateValue(location, '~s', roomConsts.sprites['spookyTile']));
      setTimeout(() => {
        this.props.dispatch(roomModule.updateValue(location, '0', roomConsts.sprites['spookyTile']));
      }, 1200);
    }
  }

  getTentaclePath(){
    //swap to player location
    let end = 89;
    let path = [89];
    //attack from west
    if(this.props.currentRoom[end - 13].value === '0'){
      path.unshift(end - 13);
      if(this.props.currentRoom[end + 13].value === '0'){
        path.push(end + 13)
      };
      if(this.props.currentRoom[end - 26].value === '0'){
        path.unshift(end - 26);  
        if(this.props.currentRoom[end - 39].value === '0'){
          path.unshift(end - 39);  
        };
      };
    //attack from east
    } else if(this.props.currentRoom[end + 13].value === '0'){
      path.unshift(end + 13);
      if(this.props.currentRoom[end - 13].value === '0'){
        path.push(end - 13)
      };
      if(this.props.currentRoom[end + 26].value === '0'){
        path.unshift(end + 26); 
        if(this.props.currentRoom[end + 39].value === '0'){
          path.unshift(end + 39);  
        }; 
      };
    //attack from north
    } else if(this.props.currentRoom[end - 1].value === '0'){
      path.unshift(end - 1);
      if(this.props.currentRoom[end + 1].value === '0'){
        path.push(end + 1)
      };
      if(this.props.currentRoom[end - 2].value === '0'){
        path.unshift(end - 2);  
        if(this.props.currentRoom[end - 3].value === '0'){
          path.unshift(end - 3);  
        };
      };
    //attack from south
    } else if(this.props.currentRoom[end + 1].value === '0'){
      path.unshift(end + 1);
      if(this.props.currentRoom[end - 1].value === '0'){
        path.push(end - 1)
      };
      if(this.props.currentRoom[end + 2].value === '0'){
        path.unshift(end + 2);  
        if(this.props.currentRoom[end + 3].value === '0'){
          path.unshift(end + 3);  
        };
      };
    };
    return path;
  }

  tentacleRush = (path, arrLocation) => {
    if(arrLocation < path.length){
      setTimeout(() => {
        this.props.dispatch(roomModule.updateValue(path[arrLocation], '0', roomConsts.sprites['spookyTile']));
        let nextArrLocation = arrLocation + 1;
        if(nextArrLocation < path.length){
          this.props.dispatch(roomModule.updateValue(path[nextArrLocation], '~', roomConsts.sprites['spookyTile']));
          this.tentacleRush(path, nextArrLocation);
        } else {
          setTimeout(() => 
            this.despawnTentacle(path[arrLocation]),
          400);
        }
      }, 100);
    }
  }

  bodySlam(){
    //attack to the left
    setTimeout(() => {
      let sprite = <img className="boss-sprite" src={boss} width="305" height="225"/>;
      this.props.dispatch(roomModule.updateSprite(112, ''));
      this.props.dispatch(roomModule.updateSprite(99, sprite));
    }, 400);
    setTimeout(() => {
      let sprite = <img className="boss-sprite" src={boss} width="305" height="225"/>;
      this.props.dispatch(roomModule.updateSprite(99, ''));
      this.props.dispatch(roomModule.updateSprite(86, sprite));
    }, 800);
    setTimeout(() => {
      let sprite = <img className="boss-sprite" src={boss} width="305" height="225"/>;
      this.props.dispatch(roomModule.updateSprite(86, ''));
      this.props.dispatch(roomModule.updateSprite(99, sprite));
    }, 1200);
    setTimeout(() => {
      let sprite = <img className="boss-sprite" src={boss} width="305" height="225"/>;
      this.props.dispatch(roomModule.updateSprite(99, ''));
      this.props.dispatch(roomModule.updateSprite(112, sprite));
    }, 1200);
    //attack to the right
  }

  beamAttack = (arrLocation) => {
    let sprite = <img className="boss-sprite" src={bossLaser} width="305" height="225"/>;
    this.props.dispatch(roomModule.updateSprite(112, sprite));
    let areas = [
      [61, 62, 63, 64, 74, 75, 76, 77],
      [35, 48, 49, 50, 51, 36, 37, 38, 24, 25],
      [21, 34, 22, 23, 35, 48, 36, 24],
      [19, 32, 45, 20, 33, 46],
      [18, 31, 44, 45, 17, 30, 16, 43, 57],
      [29, 42, 30, 43, 44, 57],
      [55, 68, 56, 69, 57, 70],
      [81, 94, 107, 120, 82, 95, 108, 83, 96],
      [120, 133, 108, 121, 134, 96, 109, 122, 135],
      [110, 123, 136, 124, 137],
      [125, 138, 113, 126, 139, 127, 140],
      [87, 100, 113, 101, 114, 127, 115, 128, 141, 129, 142],
      [87, 88, 101, 89, 102, 90, 103, 116],
      [61, 62, 63, 64, 74, 75, 76, 77]
    ];
    if(arrLocation < areas.length){
      setTimeout(() => {
        for (let i = 0; i < areas[arrLocation].length; i++){
          this.props.dispatch(bossModule.updateBeam(arrLocation));
          this.aoeExplode(areas[arrLocation][i]);
        };
        this.beamAttack(arrLocation + 1);
      }, 600);
    } else {
      this.props.dispatch(bossModule.updateBeam(null));
    }
  }

  midBossAttack(){
    let rng = Math.floor(Math.random() * 3);
    if(rng === 0){
      this.props.dispatch(bossModule.updateBossStatus('preLaser'));
      this.troopLaserAttack();
    } else if (rng === 1){
      this.props.dispatch(bossModule.updateBossStatus('shock'));
      this.troopShockAttack();
    } else if (rng === 2){
      this.props.dispatch(bossModule.updateBossStatus('shoot'));
      this.troopShootAttack2();
    }
  }

  troopLaserAttack(){
    this.props.dispatch(bossModule.updateBossDirection('north'));
    //move to top of room
    let moveInt1 = setInterval(() => {
      if(this.bossMove() === false){
        //stop moving and switch to attacking sprite
        clearInterval(moveInt1);
        this.props.dispatch(bossModule.updateBossStatus('laser'));
        this.props.dispatch(bossModule.updateBossDirection('south'));
        this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.laserActivate));
        let rng = Math.floor(Math.random() * 2);
        //laser variation 1: rapid fire
        if(rng === 0){
        //check if player is in range of attack
          let moveInt2 = setInterval(() => {
            let maxLasers = 3;
            if (this.props.boss.health <= 300){
              maxLasers = 4
            }
            if(this.props.boss.status === 'laser' && this.props.game.gameState === 'active'){
              if(this.state.laserCount >= maxLasers){
                clearInterval(moveInt2);
                this.setState({
                  laserCount: 0
                });
                this.props.dispatch(bossModule.updateBossDirection('south'));
                this.troopDeactivateLaser();
              } else if(this.seekPlayerSouth(this.props.boss.tileArr[0], this.props.boss.tileArr[1]) === true){
                let newLaserCount = this.state.laserCount + 1;
                this.setState({
                  laserCount: newLaserCount
                });
                this.props.dispatch(bossModule.updateBossStatus('laserFire'))
                this.troopFireLaser();
              } else {
                this.getRelativePlayerLocation();
              };
            };
          }, 200);
        //laser variation 2: continuous beam
        } else {
          let tiles = [45, 61, 100, 110];
          soundConsts.changeDoor.play();
          tiles.forEach((tile) => {
            this.raiseRiseTile(tile);
          });
          this.props.dispatch(bossModule.updateBossDirection('west'));
          let moveInt2 = setInterval(() => {
            if(this.bossMove() === false){
              clearInterval(moveInt2);                
              this.props.dispatch(bossModule.updateBossDirection('east'));
              this.props.dispatch(bossModule.updateBossStatus('laserFire'));
              this.props.dispatch(soundsModule.changeEffect('laser'));
              this.fireLaser(this.props.boss.tileArr[2], 'south');
              this.fireLaser(this.props.boss.tileArr[3], 'south');
              this.props.dispatch(bossModule.updateBossStatus('laser'))
              let moveInt3 = setInterval(() => {
                let previousLaser1 = this.props.boss.tileArr[2];
                let previousLaser2 = this.props.boss.tileArr[3];
                if(this.bossMove() === false){
                  clearInterval(moveInt3);
                  this.nullLaser(previousLaser1, 'south');
                  this.nullLaser(previousLaser2, 'south');
                  this.props.dispatch(bossModule.updateBossDirection('south'));
                  this.props.dispatch(soundsModule.changeEffect(''));
                  this.troopDeactivateLaser();
                  soundConsts.changeDoor.play();
                  tiles.forEach((tile) => {
                    this.sinkRiseTile(tile);
                  });
                } else {
                  this.nullLaser(previousLaser1, 'south');
                  this.nullLaser(previousLaser2, 'south');
                  this.props.dispatch(bossModule.updateBossStatus('laserFire'))
                  soundConsts.laser.play();
                  this.fireLaser(this.props.boss.tileArr[2], 'south');
                  this.fireLaser(this.props.boss.tileArr[3], 'south');
                  if(this.props.projectiles.lasers[1].includes(this.props.player.location) && this.props.player.status !== 'knockback'){
                    this.knockBack('west')
                  };
                  if(this.props.projectiles.lasers[0].includes(this.props.player.location) && this.props.player.status !== 'knockback'){
                    this.knockBack('east')
                  };
                  previousLaser1 = this.props.boss.tileArr[2];
                  previousLaser2 = this.props.boss.tileArr[3];
                  this.props.dispatch(bossModule.updateBossStatus('laser'))
                };
              }, 200);
            };
          }, 200);
        };
      }
    }, 200);
  }

  getRelativePlayerLocation(){
    if(this.props.player.location > this.props.boss.tileArr[0]){
      this.props.dispatch(bossModule.updateBossDirection('east'));
      this.bossMove();
    } else {
      this.props.dispatch(bossModule.updateBossDirection('west'));
      this.bossMove();
    }
  }

  seekPlayer(){
    if (this.seekPlayerNorth(this.props.boss.tileArr[2], this.props.boss.tileArr[3]) === true){
      return 'north';
    } else if (this.seekPlayerEast(this.props.boss.tileArr[1], this.props.boss.tileArr[3]) === true){
      return 'east';
    } else if (this.seekPlayerSouth(this.props.boss.tileArr[0], this.props.boss.tileArr[1]) === true){
      return 'south';
    } else if (this.seekPlayerWest(this.props.boss.tileArr[0], this.props.boss.tileArr[2]) === true){
      return 'west';
    } else {
      return '';
    }
  }

  seekPlayerNorth(tile1, tile2){
    for(let i=0; i < 11; i++){
      if(tile1 === this.props.player.location || tile2 === this.props.player.location){
        return true;
      } else if(this.props.currentRoom[tile1].value === 'W' 
      || this.props.currentRoom[tile2].value === 'W'
      || this.props.currentRoom[tile2].value === 'WR'
      || this.props.currentRoom[tile1].value === 'D'
      || this.props.currentRoom[tile2].value === 'D'){
        return false;
      };
      tile1--
      tile2--
    };
  }

  seekPlayerEast(tile1, tile2){
    for(let i=0; i < 11; i++){
      if(tile1 === this.props.player.location || tile2 === this.props.player.location){
        return true;
      } else if(this.props.currentRoom[tile1].value === 'W' 
      || this.props.currentRoom[tile2].value === 'W'
      || this.props.currentRoom[tile2].value === 'WR'
      || this.props.currentRoom[tile1].value === 'D'
      || this.props.currentRoom[tile2].value === 'D'){
        return false;
      };
      tile1 = tile1 + 13
      tile2 = tile2 + 13
    };
  }

  seekPlayerSouth(tile1, tile2){
    for(let i=0; i < 11; i++){
      if(tile1 === this.props.player.location || tile2 === this.props.player.location){
        return true;
      } else if(this.props.currentRoom[tile1].value === 'W' 
      || this.props.currentRoom[tile2].value === 'W'
      || this.props.currentRoom[tile2].value === 'WR'
      || this.props.currentRoom[tile1].value === 'D'
      || this.props.currentRoom[tile2].value === 'D'){
        return false;
      };
      tile1++
      tile2++
    };
  }

  seekPlayerWest(tile1, tile2){
    for(let i=0; i < 11; i++){
      if(tile1 === this.props.player.location || tile2 === this.props.player.location){
        return true;
      } else if(this.props.currentRoom[tile1].value === 'W' 
      || this.props.currentRoom[tile2].value === 'W'
      || this.props.currentRoom[tile2].value === 'WR'
      || this.props.currentRoom[tile1].value === 'D'
      || this.props.currentRoom[tile2].value === 'D'){
        return false;
      };
      tile1 = tile1 - 13
      tile2 = tile2 - 13
    };
  }

  troopFireLaser(){
    setTimeout(() => {
      soundConsts.laser.play();
      this.fireLaser(this.props.boss.tileArr[2], 'south');
      this.fireLaser(this.props.boss.tileArr[3], 'south');
      if(this.props.projectiles.lasers[1].includes(this.props.player.location) && this.props.player.status !== 'knockback'){
        this.knockBack('west')
      };
      if(this.props.projectiles.lasers[0].includes(this.props.player.location) && this.props.player.status !== 'knockback'){
        this.knockBack('east')
      };
    }, 400);
    setTimeout(() => {
      this.nullLaser(this.props.boss.tileArr[2], 'south');
      this.nullLaser(this.props.boss.tileArr[3], 'south');
      this.props.dispatch(bossModule.updateBossStatus('laser'))
    }, 1000);
  }

  troopDeactivateLaser(){
    this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.laserDeactivate));
    setTimeout(() => {
      this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.normal[this.props.boss.direction]));
      this.props.dispatch(bossModule.updateBossStatus('normal'));
    }, 600);
  }

  troopShockAttack(){
    this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.shockActivate[this.props.boss.direction]))
    let range = 1;
    let shockTiles = this.getSurroundingTiles(this.props.boss.tileArr, range);
    setTimeout(() => {
      soundConsts.shock.play();
      this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.shockActivated[this.props.boss.direction]))
      shockTiles.forEach(tile => {
        this.aoeExplode(tile);
      })
    }, 1000 );
    setTimeout(() => {
      this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.shockDeactivate[this.props.boss.direction]));
    }, 2000);
    setTimeout(() => {
      this.props.dispatch(bossModule.updateBossStatus('normal'))
      this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.normal[this.props.boss.direction]));
    }, 3000);
  }

  troopShootAttack1(direction){
    this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.gunActivate[this.props.boss.direction]));
    setTimeout(() => {
      soundConsts.shot.play();
      if(direction === 'north'){
        this.handleProjectile('enemy', 'north', this.props.boss.tileArr[2], 8, <img className="bullet-north" src={bossShot} width="40" height="40"/>, false)
        this.handleProjectile('enemy', 'north', this.props.boss.tileArr[3], 8, <img className="bullet-north" src={bossShot} width="40" height="40"/>, false)
        setTimeout(() => {
            this.handleProjectile('enemy', 'north', this.props.boss.tileArr[2], 8, <img className="bullet-north" src={bossShot} width="40" height="40"/>, false)
            this.handleProjectile('enemy', 'north', this.props.boss.tileArr[3], 8, <img className="bullet-north" src={bossShot} width="40" height="40"/>, false)
        }, 600);
      } else if (direction === 'south'){
        this.handleProjectile('enemy', 'south', this.props.boss.tileArr[2], 8, <img className="bullet-south" src={bossShot} width="40" height="40"/>, false)
        this.handleProjectile('enemy', 'south', this.props.boss.tileArr[3], 8, <img className="bullet-south" src={bossShot} width="40" height="40"/>, false)
        setTimeout(() => {
          this.handleProjectile('enemy', 'south', this.props.boss.tileArr[2], 8, <img className="bullet-south" src={bossShot} width="40" height="40"/>, false)
          this.handleProjectile('enemy', 'south', this.props.boss.tileArr[3], 8, <img className="bullet-south" src={bossShot} width="40" height="40"/>, false)
        }, 600);
      } else if (direction === 'west'){
        this.handleProjectile('enemy', 'west', this.props.boss.tileArr[2], 8, <img className="bullet-west" src={bossShot} width="40" height="40"/>, false)
        this.handleProjectile('enemy', 'west', this.props.boss.tileArr[0], 8, <img className="bullet-west" src={bossShot} width="40" height="40"/>, false)
        setTimeout(() => {
          this.handleProjectile('enemy', 'west', this.props.boss.tileArr[2], 8, <img className="bullet-west" src={bossShot} width="40" height="40"/>, false)
          this.handleProjectile('enemy', 'west', this.props.boss.tileArr[0], 8, <img className="bullet-west" src={bossShot} width="40" height="40"/>, false)
        }, 600);
      } else if (direction === 'east'){
        this.handleProjectile('enemy', 'east', this.props.boss.tileArr[3], 8, <img className="bullet-east" src={bossShot} width="40" height="40"/>, false)
        this.handleProjectile('enemy', 'east', this.props.boss.tileArr[1], 8, <img className="bullet-east" src={bossShot} width="40" height="40"/>, false)
        setTimeout(() => {
          this.handleProjectile('enemy', 'east', this.props.boss.tileArr[3], 8, <img className="bullet-east" src={bossShot} width="40" height="40"/>, false)
          this.handleProjectile('enemy', 'east', this.props.boss.tileArr[1], 8, <img className="bullet-east" src={bossShot} width="40" height="40"/>, false)
        }, 600);
      };
    }, 600);
    setTimeout(() => {
      this.props.dispatch(bossModule.updateBossStatus('normal'));
      this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.normal[this.props.boss.direction]));
    }, 2200)
  }
  
  troopShootAttack2(){
    this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.gunActivate[this.props.boss.direction]))
    setTimeout(() => {
      soundConsts.shot.play();
      this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.gunActivated[this.props.boss.direction]));
      this.handleProjectile('enemy', 'north', this.props.boss.tileArr[2], 8, <img className="bullet-north" src={bossShot} width="40" height="40"/>, false)
      this.handleProjectile('enemy', 'south', this.props.boss.tileArr[2], 8, <img className="bullet-south" src={bossShot} width="40" height="40"/>, false)
      this.handleProjectile('enemy', 'north', this.props.boss.tileArr[3], 8, <img className="bullet-north" src={bossShot} width="40" height="40"/>, false)
      this.handleProjectile('enemy', 'south', this.props.boss.tileArr[3], 8, <img className="bullet-south" src={bossShot} width="40" height="40"/>, false)
      this.handleProjectile('enemy', 'west', this.props.boss.tileArr[2], 8, <img className="bullet-west" src={bossShot} width="40" height="40"/>, false)
      this.handleProjectile('enemy', 'east', this.props.boss.tileArr[3], 8, <img className="bullet-east" src={bossShot} width="40" height="40"/>, false)
    }, 600);
    setTimeout(() => {
      soundConsts.shot.play();
      this.handleProjectile('enemy', 'northWest', this.props.boss.tileArr[2], 8, <img className="bullet-northWest" src={bossShot} width="40" height="40"/>, false)
      this.handleProjectile('enemy', 'southWest', this.props.boss.tileArr[2], 8, <img className="bullet-southWest" src={bossShot} width="40" height="40"/>, false)
      this.handleProjectile('enemy', 'northEast', this.props.boss.tileArr[3], 8, <img className="bullet-northEast" src={bossShot} width="40" height="40"/>, false)
      this.handleProjectile('enemy', 'southEast', this.props.boss.tileArr[3], 8, <img className="bullet-southEast" src={bossShot} width="40" height="40"/>, false)
      this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.gunDeactivate[this.props.boss.direction]));
    }, 1200);
    setTimeout(() => {
      this.props.dispatch(bossModule.updateBossStatus('normal'));
      this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.normal[this.props.boss.direction]));
    }, 1800)
  }

  troopRamAttack(direction){
    this.props.dispatch(bossModule.updateBossDirection(direction));
    this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.charge[[this.props.boss.direction]]));
    setTimeout(() => {
      if(this.props.boss.status === 'ram'){
        soundConsts.enemyCharge.play();
        let ramInt = setInterval(() => {
          if(this.props.boss.status === 'dead' || this.props.boss.status === null){
            clearInterval(ramInt);
          } else if(this.bossMove() === false){
            clearInterval(ramInt);
            this.props.dispatch(roomModule.updateSprite(this.props.boss.tileArr[1], enemyConsts.sprites.Troop.normal[this.props.boss.direction]));
            this.props.dispatch(bossModule.updateBossStatus('normal'));
          };
        }, 100);
      }
    }, 800);
  }

  bossAttack(){
    let rng = 1
    if (this.props.boss.attack === false && 1 === 2){
      //if player is directly to left/right
      this.props.dispatch(bossModule.updateBossAttack(true));
      this.bodySlam();
    } else {
      // let rng = Math.floor(Math.random() * 3);
      let rng = 2
      if (rng === 0 && this.props.boss.attack === false){
      //summon tentacle
        this.props.dispatch(bossModule.updateBossAttack(true));
        this.summonTentacles()
      } else if (rng === 1 && this.props.boss.attack === false){
        //aoe explosion
        this.props.dispatch(bossModule.updateBossAttack(true));
        this.aoeAttack();
      } else if (rng === 2 && this.props.boss.attack === false) {
        //beam attack
        this.props.dispatch(bossModule.updateBossAttack(true));
        this.beamAttack(0);
      } else if (rng === 3 && this.props.boss.attack === false) {
        //extend tenticles across stage
        this.props.dispatch(bossModule.updateBossAttack(true));
        let walls = [];
        let keys = Object.keys(this.props.currentRoom);
        let tiles = this.props.currentRoom;
        keys.forEach(key => {
          let num = parseInt(key);
          if(tiles[key].value === 'W' && num !== 2 && num !== 13 && num !== 145 && num !== 156) {
            walls.push(num);
          };
        });
        rng = Math.floor(Math.random() * walls.length);
        let direction = helpers.getDirection(walls[rng]);
        let next = helpers.getDifference(direction);
        let start = walls[rng] + next;
        this.props.dispatch(roomModule.setWarning(start, true));
        let tentacleArr = [];
        for(let i=0; i < 10; i++) {
          tentacleArr.push(start);
          start = start + next;
        };
        tentacleArr.forEach(tile => {
          this.props.dispatch(roomModule.setWarning(tile, true));
        });
        setTimeout(() => {
          tentacleArr.forEach(tile => {
            this.props.dispatch(roomModule.updateValue(tile, '~', roomConsts.sprites['spookyTile']));
            if(this.props.player.location === tile){
              this.knockBack(this.getRandomDirection());
            };
          }); 
        }, 600);
        setTimeout(() => {
          tentacleArr.forEach(tile => {
            this.props.dispatch(roomModule.setWarning(tile, false));
            this.props.dispatch(roomModule.updateValue(tile, '0', roomConsts.sprites['spookyTile']));
            this.props.dispatch(bossModule.updateBossAttack(false));
          });
        }, 2000);
      };
    }
  }

  aoeAttack(){
    // let sprite = <img className="boss-sprite" src={bossSink} width="305" height="225"/>;
    // this.props.dispatch(roomModule.updateSprite(112, sprite));
    let explosionTiles = [32, 33, 34, 35, 48, 49, 62, 75, 88, 101, 114, 113, 126, 125, 124, 123, 110, 109, 96, 83, 70, 57, 44, 45];
    let explosionTiles2 = [19, 20, 21, 22, 36, 50, 63, 76, 88, 102, 115, 127, 139, 138, 137, 136, 122, 108, 95, 82, 69, 56, 43, 31];
    setTimeout(() => {
      soundConsts.explosion.play();
      explosionTiles.forEach(tile => {
        this.aoeExplode(tile);
      })
      }, 2000 );

    setTimeout(() => {
      soundConsts.explosion.play();
      explosionTiles2.forEach(tile => {
        this.aoeExplode(tile);
      })
      this.props.dispatch(bossModule.updateBossAttack(false));
      }, 2500 );
  }

  aoeExplode(tile) {
      setTimeout(() => {
        this.props.dispatch(roomModule.setExplosion(tile, true));
        if(this.props.player.location === tile) {
          this.knockBack(this.getRandomDirection());
        };},
        200
      );
      setTimeout(() => {
        this.props.dispatch(roomModule.setExplosion(tile, false));},
        600
      );
  }

shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

  getRandomDirection(){
    let rng = Math.floor(Math.random() * 4);
    if (rng == 0) {
      return 'north';
    } else if (rng == 1) {
      return 'south';
    } else if (rng == 2) {
      return 'east';
    } else if (rng == 3) {
      return 'west';
    };
  }

  getSurroundingTiles(tiles, range) {
    let surroundingTiles = [];
    tiles.forEach((tile) => {
      if(!surroundingTiles.includes(tile - 1)){
        surroundingTiles.push(tile - 1);
        if(!surroundingTiles.includes(tile - 2) && range === 2){
          surroundingTiles.push(tile - 2);
        };
      };
      if(!surroundingTiles.includes(tile + 13)){
        surroundingTiles.push(tile + 13);
        if(!surroundingTiles.includes(tile + 26) && range === 2){
          surroundingTiles.push(tile + 26);
        };
      };
      if(!surroundingTiles.includes(tile + 1)){
        surroundingTiles.push(tile + 1);
        if(!surroundingTiles.includes(tile + 2) && range === 2){
          surroundingTiles.push(tile + 2);
        };
      };
      if(!surroundingTiles.includes(tile - 13)){
        surroundingTiles.push(tile - 13);
        if(!surroundingTiles.includes(tile - 26) && range === 2){
          surroundingTiles.push(tile - 26);
        };
      };
      if(!surroundingTiles.includes(tile - 14)){
        surroundingTiles.push(tile - 14);
      };
      if(!surroundingTiles.includes(tile + 14)){
        surroundingTiles.push(tile + 14);
      };
      if(!surroundingTiles.includes(tile + 12)){
        surroundingTiles.push(tile + 12);
      };
      if(!surroundingTiles.includes(tile - 12)){
        surroundingTiles.push(tile - 12);
      };
    });
    return surroundingTiles;
  }

  changeBossDirection(){
    let direction;
    let rng = Math.floor(Math.random() * 8);
    if (rng == 0) {
      direction = 'north';
    } else if (rng == 1) {
      direction = 'south';
    } else if (rng == 2) {
      direction = 'east';
    } else if (rng == 3) {
      direction = 'west';
    } else if (rng == 4) {
      direction = 'northEast';
    } else if (rng == 5) {
      direction = 'southEast'; 
    } else if (rng == 6) {
      direction = 'northWest';
    } else if (rng == 7) {
      direction = 'southWest';
    };
    this.props.dispatch(bossModule.updateBossDirection(direction));
  }

  bossMove() {
    if(this.props.game.gameState === 'active'){
      let bossArr = this.props.boss.tileArr;
      for(let i=0; i < bossArr.length; i++){
        let attemptMove = this.attemptMove(this.props.boss.direction, bossArr[i]);
        if(attemptMove === bossArr[i]){
          //turn around if hit wall
          if(this.props.boss.status === 'normal'){
            this.props.dispatch(bossModule.updateBossDirection(helpers.reverseDirection(this.props.boss.direction)));
            this.bossMove();
          };
          return false;
        };
      };
      let newArr = [];
      bossArr.forEach(bossSpace => {
        let newSpace = this.attemptMove(this.props.boss.direction, bossSpace);
        newArr.push(newSpace);
      });
      this.props.dispatch(roomModule.updateSprite(bossArr[1], ''));
      this.props.dispatch(bossModule.updateTileArray(newArr));
      let sprite;
      if(this.props.boss.status === 'ram'){
        sprite = enemyConsts.sprites[this.props.boss.kind].angry[[this.props.boss.direction]];
      } else if (this.props.boss.status === 'laser'){
        sprite = enemyConsts.sprites[this.props.boss.kind].laserActivated;
      } else{
        sprite = enemyConsts.sprites[this.props.boss.kind].normal[[this.props.boss.direction]];
      };
      this.props.dispatch(roomModule.updateSprite(newArr[1], sprite));
      if(this.props.boss.tileArr.includes(this.props.player.location)){
        this.knockBack(this.props.boss.direction);
        return false;
      };
    };
  }

  //enemy functions

  handleCreateNewEnemy(locationId, enemyType) {
    let thisEnemy = enemyConsts.enemies[enemyType];
    let enemyId = v4();
    this.props.dispatch(enemiesModule.createEnemy(enemyId, thisEnemy.kind, thisEnemy.sprites, thisEnemy.health, 'normal', locationId, 'south'));
    //stagger enemy movement
    let rng = Math.floor(Math.random() * 5) + 1 * 2000;
    let enemyTimer = setInterval(() =>
      this.enemyMove(enemyId),
      rng
    );
    let oldTimerArr = this.props.game.timers;
    let newTimerArr = oldTimerArr.concat([enemyTimer]);
    this.props.dispatch(gameModule.updateTimers(newTimerArr));
    let newEnemyTotal = this.state.enemyTotal + 1;
    this.setState({
      enemyTotal: newEnemyTotal
    });
    return enemyId;
  }

  enemyMove(enemyId) {
    if (this.props.game.gameState === 'active' && this.props.enemies[enemyId].status == 'normal') {
      let enemy = this.props.enemies[enemyId];
      let enemyLocation = this.props.enemies[enemyId].location;
      if (enemy.kind === 'Slime') {
        this.moveRandom(enemyId, enemyLocation);
      } else if (enemy.kind === 'WaterEye') {
        this.moveWater(enemyId, enemyLocation);
      } else if (enemy.kind === 'Boss') {
        this.movePursue(enemyId, enemyLocation);
      }
    }
  }

  moveWater(enemyId, enemyLocation){
    if(this.props.enemies[enemyId].status === 'normal' && this.props.game.gameState === 'active'){
      //sink
      this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'moving'));
      this.props.dispatch(roomModule.updateSprite(enemyLocation, this.props.enemies[enemyId].sprites.sink));
      setTimeout(() => {
        this.props.dispatch(enemiesModule.updateEnemyLocation(enemyId, ''));
        this.props.dispatch(roomModule.updateSprite(enemyLocation, ''));
      }, 1000);
      //seek player
      setTimeout(() => {
        if(this.props.game.gameState === 'active' && this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'moving'){
          let nextLocation = this.targetPlayer(enemyId, enemyLocation);
          let previousContentArr =  this.props.currentRoom[enemyLocation].content;
          let filteredContentArr = previousContentArr.filter(function(content) {
            return content[0] !== 'enemy';
          });
          this.props.dispatch(roomModule.updateContent(enemyLocation, filteredContentArr));
          let newContentArr = this.props.currentRoom[nextLocation].content;
          newContentArr.push(["enemy", enemyId]);
          this.props.dispatch(roomModule.updateContent(nextLocation, newContentArr));
          this.props.dispatch(enemiesModule.updateEnemyLocation(enemyId, nextLocation));
          this.props.dispatch(roomModule.updateSprite(nextLocation, this.props.enemies[enemyId].sprites.rise));
          setTimeout(() => {
            if(this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'moving'){
              this.props.dispatch(roomModule.updateSprite(nextLocation, this.props.enemies[enemyId].sprites.move[this.props.enemies[enemyId].direction]));
              if(nextLocation + helpers.getDifference(this.props.enemies[enemyId].direction) === this.props.player.location){
                this.props.dispatch(roomModule.updateBullet(nextLocation, [<img src={bossShot} className={"bullet-"+this.props.enemies[enemyId].direction} width="40" height="40"/>, 'normal']));
                this.knockBack(this.props.enemies[enemyId].direction);
                setTimeout(() => {
                  this.props.dispatch(roomModule.updateBullet(nextLocation, []));
                }, 200);
              } else {
                this.handleProjectile('enemy', this.props.enemies[enemyId].direction, nextLocation, 8, <img src={bossShot} className={"bullet-"+this.props.enemies[enemyId].direction} width="40" height="40"/>, false)
              };
            };
            setTimeout(() =>{
              if(this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'moving'){
                this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'normal'));
              };
            }, 1000);
          }, 1000);
        };
      }, 3000);
    };
  }

  targetPlayer(enemyId, enemyLocation){
    if(this.props.game.gameState === 'active' && this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'moving'){
      let directions = ['north', 'northEast', 'east', 'southEast', 'south', 'southWest', 'west', 'northWest'];
      let currentSquare = this.props.player.location;
      for(let i=0; i < directions.length; i++){
        for(let j = 0; j < 10; j++){
          currentSquare = currentSquare + helpers.getDifference(directions[i]);
          if(this.props.currentRoom[currentSquare] && this.props.currentRoom[currentSquare].value === 'W' || this.props.currentRoom[currentSquare].value === 'D'){
            break;
          };
          let hasPlatform = this.props.currentRoom[currentSquare].content.find(function(content) {
            return content[0] == 'platform';
          });
          if(this.props.currentRoom[currentSquare].value === 'P' && hasPlatform === undefined){
            this.props.dispatch(enemiesModule.updateEnemyDirection(enemyId, helpers.reverseDirection(directions[i])));
            return currentSquare;
          };
        };
        currentSquare = this.props.player.location;
      };
      return enemyLocation;
    };
  }

  moveRandom(enemyId, currentLocation) {
    let direction;
    //check if player is on neighboring square
    let playerNear = helpers.checkForPlayer(currentLocation, this.props.player.location);
    //otherwise, move at random
    if(this.props.enemies[enemyId].status === 'normal' && this.props.game.gameState === 'active'){
      if (playerNear !== false) {
        this.chargeAttack(enemyId, playerNear);
      } else {
        let rng = Math.floor(Math.random() * 4);
        if (rng == 0) {
          direction = 'north';
        } else if (rng == 1) {
          direction = 'south';
        } else if (rng == 2) {
          direction = 'east';
        } else if (rng == 3) {
          direction = 'west'
        };
        this.executeEnemyMove(enemyId, currentLocation, direction);
      };
    };
  }

  chargeAttack(enemyId, direction){
    this.props.dispatch(enemiesModule.updateEnemyDirection(enemyId, direction));
    let enemyStart = this.props.enemies[enemyId].location;
    this.props.dispatch(roomModule.updateSprite(enemyStart, this.props.enemies[enemyId].sprites.charge[direction]));
    let square1 = enemyStart + helpers.getDifference(direction);
    let square2 = square1 + helpers.getDifference(direction);
    let canMove1 = this.attemptMove(direction, enemyStart);
    let canMove2 = this.attemptMove(direction, square1);
    let keepGoing = true;
    if(canMove1 !== enemyStart && this.props.currentRoom[canMove1].value !== 'C'){
      //square 1
      setTimeout(() => {
        if(this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'normal'){
          soundConsts.enemyCharge.play();
          if (this.props.player.location === square1) {
            keepGoing = false;
            if(this.props.player.status === 'strike' && helpers.reverseDirection(this.props.player.direction) === direction){
              this.handleEnemyDamage('pipe', this.props.player.direction, enemyId);
            } else if(this.props.player.status === 'shoot' && helpers.reverseDirection(this.props.player.direction) === direction){
              this.handleEnemyDamage(this.props.player.currentWeapon, this.props.player.direction, enemyId);
            } else if(this.props.player.status === 'guard'){
              soundConsts.metalHit.play();
              this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'dizzy'));
              this.props.dispatch(roomModule.updateSprite(enemyStart, this.props.enemies[enemyId].sprites.dizzy));
              setTimeout(() => {
                if(this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'dizzy'){
                  this.props.dispatch(roomModule.updateSprite(square1, this.props.enemies[enemyId].sprites.move[direction]));
                  this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'normal'));
                };
              },1500);
            } else if (this.props.player.status !== 'fall') {
              this.knockBack(direction);
              this.props.dispatch(roomModule.updateSprite(enemyStart, ''));
              this.props.dispatch(roomModule.updateSprite(square1, this.props.enemies[enemyId].sprites.charging[direction]));
              this.handleUpdateEnemyLocation(enemyId, enemyStart, square1);
              if (this.props.enemies[enemyId].kind == 'Slime') {
                soundConsts.slime.play();
                this.createSlime(enemyStart);
              };  
            } else {
              keepGoing = false;
            }
          } else if(this.props.currentRoom[square1].playerBullet.length > 0){
            this.handleEnemyDamage(this.props.currentRoom[square1].playerBullet[1], this.props.player.direction, enemyId);
          } else if(this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'normal') {
            this.props.dispatch(roomModule.updateSprite(enemyStart, ''));
            this.props.dispatch(roomModule.updateSprite(square1, this.props.enemies[enemyId].sprites.charging[direction]));
            this.handleUpdateEnemyLocation(enemyId, enemyStart, square1);
            if (this.props.enemies[enemyId].kind == 'Slime') {
              soundConsts.slime.play();
              this.createSlime(enemyStart);
            };  
          };
        };
      }, 1000);
      //square2
      if(keepGoing === true && canMove2 !== square1 && this.props.currentRoom[canMove2].value !== 'C'){
        setTimeout(() => {
          if(this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'normal'){
            if(this.props.player.location === square2) {
              if(this.props.player.status === 'strike' && helpers.reverseDirection(this.props.player.direction) === direction){
                this.handleEnemyDamage('pipe', this.props.player.direction, enemyId);
              } else if(this.props.player.status === 'shoot' && helpers.reverseDirection(this.props.player.direction) === direction){
                this.handleEnemyDamage(this.props.player.currentWeapon, this.props.player.direction, enemyId);
              } else if(this.props.player.status === 'guard'){
                soundConsts.metalHit.play();
                this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'dizzy'));
                this.props.dispatch(roomModule.updateSprite(square1, this.props.enemies[enemyId].sprites.dizzy));
                setTimeout(() => {
                  if(this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'dizzy'){
                    this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'normal'));
                    this.props.dispatch(roomModule.updateSprite(this.props.enemies[enemyId].location, this.props.enemies[enemyId].sprites.move[direction]));
                  };
                  }, 1500);
              } else if(this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'normal') {
                this.knockBack(direction);
                this.props.dispatch(roomModule.updateSprite(square1, ''));
                this.props.dispatch(roomModule.updateSprite(square2, this.props.enemies[enemyId].sprites.charging[direction]));
                this.handleUpdateEnemyLocation(enemyId, square1, square2);
                if (this.props.enemies[enemyId].kind == 'Slime') {
                  this.createSlime(square1);
                };
              };
            } else if(this.props.currentRoom[square2].playerBullet.length > 0){
              this.handleEnemyDamage(this.props.currentRoom[square2].playerBullet[1], this.props.player.direction, enemyId);
            } else if(this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'normal'){
              this.props.dispatch(roomModule.updateSprite(square1, ''));
              this.props.dispatch(roomModule.updateSprite(square2, this.props.enemies[enemyId].sprites.charging[direction]));
              this.handleUpdateEnemyLocation(enemyId, square1, square2);
              if (this.props.enemies[enemyId].kind == 'Slime') {
                this.createSlime(square1);
              };  
            };
          };
        }, 1200);
      };
    }
  }

  executeEnemyMove(enemyId, currentLocation, direction) {
    let roomId = this.props.game.currentRoom;
    if (this.props.game.gameState == 'active' && this.props.enemies[enemyId].status === 'normal') {
      this.props.dispatch(enemiesModule.updateEnemyDirection(enemyId, direction));
      this.props.dispatch(roomModule.updateSprite(currentLocation, this.props.enemies[enemyId].sprites.move[direction]));
      //check if move is legal, if not return original location
      let canMove = this.attemptMove(direction, currentLocation);
      let content = this.props.currentRoom[canMove].content;
      let hasEnemy = content.find(function(content) {
        return content[0] == 'enemy';
      });
      let hasPlayer = content.find(function(content) {
        return content[0] == 'player';
      });
      let hasElecSwitch = content.find(function(content) {
        return content[0] == 'elecSwitch';
      });
      if (canMove !== currentLocation
      && hasEnemy == undefined
      && this.props.currentRoom[canMove].value !== 'S'
      && this.props.currentRoom[canMove].value !== 'M'
      && this.props.currentRoom[canMove].value !== 'D'
      && this.props.currentRoom[canMove].value !== 'L'
      && this.props.currentRoom[canMove].value !== 'F'
      && this.props.currentRoom[canMove].value !== 'C'
      && this.props.currentRoom[canMove].value !== 'V'
      && !(this.props.currentRoom[canMove].value == '~' && this.props.game.eye == "alive") 
      && this.props.currentRoom[canMove].value !== 'P'){
        //hurt player, but don't move if they can't be knocked back to another square
        if (hasPlayer !== undefined) {
          if(this.props.player.status === 'guard'){
            soundConsts.metalHit.play();
            this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'dizzy'));
            this.props.dispatch(roomModule.updateSprite(currentLocation, this.props.enemies[enemyId].sprites.dizzy));
            setTimeout(() => {
              this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'normal'));
              this.props.dispatch(roomModule.updateSprite(currentLocation, this.props.enemies[enemyId].sprites.move[direction]));
              }, 1500);
          } else {
            this.knockBack(direction);
          };
        } else {
          //update enemy location and new square
          this.handleUpdateEnemyLocation(enemyId, currentLocation, canMove);
          if (this.props.enemies[enemyId].kind == 'Slime') {
            soundConsts.slime.play();
            this.createSlime(currentLocation);
          };
          if(this.props.currentRoom[currentLocation].value === 'S' && currentLocation !== this.props.player.cloneLocation) {
            let thisSwitch = this.props.currentRoom[currentLocation].content.find(function(content) {
              return content[0] == 'switch';
            });
            this.startSwitchCountdown(thisSwitch[1]);
          };
          //start walk animation
          if(this.props.enemies[enemyId] !== undefined) {
              this.handleUpdateSprite(currentLocation, '', '');
              this.handleUpdateSprite(canMove, this.props.enemies[enemyId].sprites.move[direction], direction + 'Enter');
            }
        }
      }
    }
  }

  createSlime(currentLocation){
    let tile;
    if (this.props.game.branch === 3) {
      tile = 'spookyTile';
    } else {
      tile = 'tile'
    };
    this.props.dispatch(roomModule.updateValue(currentLocation, 'H', roomConsts.sprites[tile]));
    let roomId = this.props.game.roomId;
    let gooTimer = setTimeout(() =>
    //prevent updates after changing room
    {if (this.props.game.roomId == roomId) {
      this.props.dispatch(roomModule.updateValue(currentLocation, '0', roomConsts.sprites[tile]));
    }},
      2500
    );
  }

  handleUpdateEnemyLocation(enemyId, originalLocation, newLocation) {
    let previousContentArr =  this.props.currentRoom[originalLocation].content;
    let filteredContentArr = previousContentArr.filter(function(content) {
      return content[0] !== 'enemy';
    });
    this.props.dispatch(roomModule.updateContent(originalLocation, filteredContentArr));
    let newContentArr = this.props.currentRoom[newLocation].content;
    newContentArr.push(["enemy", enemyId]);
    this.props.dispatch(roomModule.updateContent(newLocation, newContentArr));
    this.props.dispatch(enemiesModule.updateEnemyLocation(enemyId, newLocation));
    if(this.props.currentRoom[newLocation].value === 'P' || this.props.currentRoom[newLocation].value === 'V') {
      this.enemyFall(newLocation, enemyId);
    };
  }

  handleEnemyDamage(source, knockBackDirection, enemyId) {
    let newHealth = this.props.enemies[enemyId].health - 10;
    //if attack == dash or pipe
    if (source == 'dash' || source === 'pipe') {
      soundConsts.hit.play();
      if (this.props.enemies[enemyId].status == 'frozen') {
        this.killEnemy(enemyId);
      } else {
        this.props.dispatch(enemiesModule.updateEnemyHealth(enemyId, newHealth));
        this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'dizzy'));
        this.props.dispatch(roomModule.updateSprite(this.props.enemies[enemyId].location, this.props.enemies[enemyId].sprites.hurt));
        setTimeout(() => {
          if(this.enemyHealthCheck(enemyId) !== 'dead'){
            this.enemyKnockBack(knockBackDirection, enemyId);
          } 
        },300);
      }
    //if attack == taser
    } else if (source == 'Taser'){
      soundConsts.shock.play();
      this.props.dispatch(enemiesModule.updateEnemyHealth(enemyId, newHealth));
      this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'shocked'));
      this.props.dispatch(roomModule.updateSprite(this.props.enemies[enemyId].location, this.props.enemies[enemyId].sprites.hurt));
      setTimeout(() => {
        if(this.enemyHealthCheck(enemyId) !== 'dead'){
          this.props.dispatch(roomModule.updateSprite(this.props.enemies[enemyId].location, this.props.enemies[enemyId].sprites['shock']));
        };
      }, 300);
      setTimeout(() => {
        if(this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'shocked'){
          this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'normal'));
        }
      }, 600);
    //if attack == cryostat
    } else if (source == 'Cryostat'){
      soundConsts.freeze.play();
      this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'frozen'));
      this.props.dispatch(roomModule.updateSprite(this.props.enemies[enemyId].location, this.props.enemies[enemyId].sprites['frozen']));
      if(this.props.player.cryostatUpgrade === false){
        setTimeout(() => {
          if(this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'frozen'){
            this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'normal'));
          };
        }, 20000);
      }
    } else {
      soundConsts.hit.play();
      this.props.dispatch(enemiesModule.updateEnemyHealth(enemyId, newHealth));
      this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'hurt'));
      this.props.dispatch(roomModule.updateSprite(this.props.enemies[enemyId].location, this.props.enemies[enemyId].sprites.hurt));
      setTimeout(() => {
        if(this.props.enemies[enemyId] && this.props.enemies[enemyId].health <= 0){
          this.killEnemy(enemyId);
        } else if (this.props.enemies[enemyId] && this.props.enemies[enemyId].status === 'hurt') {
          this.props.dispatch(roomModule.updateSprite(this.props.enemies[enemyId].location, this.props.enemies[enemyId].sprites.move[this.props.enemies[enemyId].direction]));
          this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'normal'));
        ;}
      },300);
    }
  }

  enemyHealthCheck(enemyId) {
    if (this.props.enemies[enemyId].health <= 0) {
      this.killEnemy(enemyId);
      return 'dead';
    }
  }

  killEnemy(enemyId){
    let location = this.props.enemies[enemyId].location;
    this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'dead'));
    soundConsts.dead.play();
    this.handleUpdateSprite(location, this.props.enemies[enemyId].sprites.dead);
    let content = this.props.currentRoom[location].content;
    setTimeout(() => {
      let hasBlock = content.find(function(content) {
        return content[0] == 'block';
      });
      if(hasBlock === undefined){
        this.handleUpdateSprite(location, '', '');
      };
      let filteredContentArr = content.filter(function(content) {
        return content[0] !== 'enemy';
      });
      this.props.dispatch(roomModule.updateContent(location, filteredContentArr));
      this.props.dispatch(enemiesModule.nullEnemy(enemyId));
      let newEnemyTotal = this.state.enemyTotal - 1;
      this.setState({
        enemyTotal: newEnemyTotal
      });
      if(this.props.game.roomId === 'hallway1' && this.props.flags['hallwayFight'].triggered && this.props.flags['hallwayClear'].triggered === false && this.state.enemyTotal <= 0){
        this.props.dispatch(flagsModule.triggerFlag('hallwayClear'));
        this.props.dispatch(doorsModule.updateDoorLock('HW1-A', false));
        this.props.dispatch(doorsModule.updateDoorLock('HW1-B', false));
        soundConsts.changeDoor.play();
      }
    }, 1100);
  }

  enemyKnockBack(knockBackDirection, enemyId) {
    let direction = this.props.enemies[enemyId].direction;
    let originalLocation = this.props.enemies[enemyId].location;
    let canMove = this.attemptMove(knockBackDirection, originalLocation);
    if (canMove !== originalLocation && this.props.currentRoom[canMove].value !== 'D') {
      //update enemy and new square
      this.handleUpdateEnemyLocation(enemyId, originalLocation, canMove);
      this.handleUpdateSprite(originalLocation, '', '');
      if(this.props.enemies[enemyId].status === 'frozen') {
        this.handleUpdateSprite(canMove, this.props.enemies[enemyId].sprites['frozen']);
        //trigger switch
        if(this.props.currentRoom[canMove].value === 'S'){
          let thisSwitch = this.props.currentRoom[canMove].content.find(function(content) {
            return content[0] == 'switch';
          });
          soundConsts.switchOn.play();
          this.handleSwitch(thisSwitch[1]);
        };
        //get pushed by c belt
        if(this.props.currentRoom[canMove].value === 'C'){
          let thisBelt = this.props.currentRoom[canMove].content.find(function(content) {
            return content[0] == 'belt';
          });
          let beltDirection = thisBelt[1];
          setTimeout(() => {
            if(originalLocation === this.props.player.location){
              this.props.dispatch(playerModule.updatePlayerLocation(originalLocation + helpers.getDifference(beltDirection)));
            }
            this.enemyKnockBack(beltDirection, enemyId);
          }, 100);
        };
      } else if(this.props.enemies[enemyId].status !== 'falling' && this.props.enemies[enemyId].status !== 'dead') {
        this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'dizzy'));
        this.props.dispatch(roomModule.updateSprite(canMove, this.props.enemies[enemyId].sprites.hurt));
        setTimeout(() => {
          this.props.dispatch(roomModule.updateSprite(canMove, this.props.enemies[enemyId].sprites.dizzy));
        }, 300);
        setTimeout(() => {
          if(this.props.enemies[enemyId].status === 'dizzy'){
            this.props.dispatch(roomModule.updateSprite(canMove, this.props.enemies[enemyId].sprites.move[direction]));
            this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'normal'));
          };
        },1500);
      };
    } else {
      //if enemy can't move back, just trigger animation in current square
      if(this.props.enemies[enemyId].status === 'frozen') {
        this.props.dispatch(roomModule.updateSprite(canMove, this.props.enemies[enemyId].sprites['frozen']));
      } else {
        this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'dizzy'));
        this.props.dispatch(roomModule.updateSprite(canMove, this.props.enemies[enemyId].sprites.hurt));
        setTimeout(() => {
          this.props.dispatch(roomModule.updateSprite(canMove, this.props.enemies[enemyId].sprites.dizzy));
        }, 300);
        setTimeout(() => {
          this.props.dispatch(roomModule.updateSprite(canMove, this.props.enemies[enemyId].sprites.move[direction]));
          this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'normal'));
        },1500);
      }
    }
  }

  enemyFall(pitLocation, enemyId) {
    if(this.props.currentRoom[pitLocation].value === 'P'){
      soundConsts.splash.play();
    } else if (this.props.currentRoom[pitLocation].value === 'V'){ 
      soundConsts.fall.play();
    };
    let oldStatus = this.props.enemies[enemyId].status;
    this.props.dispatch(enemiesModule.updateEnemyStatus(enemyId, 'falling'));
    if(oldStatus === 'frozen'){
      this.handleUpdateSprite(pitLocation, this.props.enemies[enemyId].sprites.fallFrozen);
    } else {
      this.handleUpdateSprite(pitLocation, this.props.enemies[enemyId].sprites.fall);
    }
    setTimeout(() => {
      soundConsts.dead.play();
      this.handleUpdateSprite(pitLocation, '');
      this.props.dispatch(enemiesModule.nullEnemy(enemyId));
      let newEnemyTotal = this.state.enemyTotal - 1;
      this.setState({
        enemyTotal: newEnemyTotal
      });
      if(this.props.game.roomId === 'hallway1' && this.props.flags['hallwayFight'].triggered &&this.props.flags['hallwayClear'].triggered === false && this.state.enemyTotal <= 0){
        this.props.dispatch(flagsModule.triggerFlag('hallwayClear'));
        this.props.dispatch(doorsModule.updateDoorLock('HW1-A', false));
        this.props.dispatch(doorsModule.updateDoorLock('HW1-B', false));
      }
    }, 1000);
  }

  //misc function


  render(){
    return (
      <div id="overWrap">
          <Music sounds={this.props.sounds} game={this.props.game}/>
          <SFX sounds={this.props.sounds} mindDepth={this.props.game.mindDepth}/>
          <Route exact path='/' render={()=>
          <Game
            handleStart={() => this.startGame()}
            handleLoad={() => this.loadGame()}
            nullAll={() => this.nullAll()}
            exitSpecial={() => this.exitSpecial()}
            currentRoom={this.props.currentRoom}
            player={this.props.player}
            game={this.props.game}
            saves={this.props.saves}
            blocks={this.props.blocks}
            doors={this.props.doors}
            menu={this.props.menu}
            maps={this.props.maps}
            text={this.props.text}
            handleChangeGameState={() => this.handleChangeGameState()}
            flags={this.props.flags}
            sounds={this.props.sounds}
            popUp={this.state.popUp}
            switches={this.props.switches}
            popUpTransition={this.state.popUpTransition}
            boss={this.props.boss}
            projectiles={this.props.projectiles}
            npcs={this.props.npcs}/>} 
          />
      </div>
    );
  }
}

App.propTypes = {
  currentRoom: PropTypes.object,
  game: PropTypes.object,
  player: PropTypes.object,
  enemies: PropTypes.object,
  blocks: PropTypes.object,
  doors: PropTypes.object,
  menu: PropTypes.object,
  switches: PropTypes.object,
  platforms: PropTypes.object,
  maps: PropTypes.object,
  flags: PropTypes.object,
  text: PropTypes.object,
  sounds: PropTypes.object,
  saves: PropTypes.object,
  boss: PropTypes.object,
  npcs: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    currentRoom: state.currentRoom,
    game: state.game,
    player: state.player,
    enemies: state.enemies,
    blocks: state.blocks,
    doors: state.doors,
    menu: state.menu,
    switches: state.switches,
    platforms: state.platforms,
    maps: state.maps,
    flags: state.flags,
    text: state.text,
    sounds: state.sounds,
    saves: state.saves,
    boss: state.boss,
    npcs: state.npcs,
    projectiles: state.projectiles
  }
};

function mapDispatchToProps(dispatch) {
  return {
    blocksModule : bindActionCreators(blocksModule, dispatch),
    doorsModule : bindActionCreators(doorsModule, dispatch),
    enemiesModule : bindActionCreators(enemiesModule, dispatch),
    gameModule : bindActionCreators(gameModule, dispatch),
    roomModule : bindActionCreators(roomModule, dispatch),
    playerModule : bindActionCreators(playerModule, dispatch),
    menuModule : bindActionCreators(menuModule, dispatch),
    platformsModule : bindActionCreators(platformsModule, dispatch),
    switchesModule : bindActionCreators(switchesModule, dispatch),
    mapsModule: bindActionCreators(mapsModule, dispatch),
    textModule: bindActionCreators(textModule, dispatch),
    flagsModule: bindActionCreators(flagsModule, dispatch),
    soundsModule: bindActionCreators(soundsModule, dispatch),
    savesModule: bindActionCreators(savesModule, dispatch),
    bossModule: bindActionCreators(bossModule, dispatch),
    npcs: bindActionCreators(npcsModule, dispatch),
    projectiles: bindActionCreators(projectilesModule, dispatch),
  }
};

export default withRouter(connect(mapStateToProps)(App));
