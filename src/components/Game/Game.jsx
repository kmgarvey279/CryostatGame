import React from 'react';
import PropTypes from 'prop-types';
import CurrentRoom from '../CurrentRoom/CurrentRoom';
import TitleContainer from '../TitleContainer/TitleContainer';
import TextBoxes from '../TextBoxes/TextBoxes';
import GameUITop from '../GameUITop/GameUITop';
import BossUI from '../BossUI/BossUI';
import Map from '../Map/Map';
import GameOver from '../GameOver/GameOver';
import ItemGet from '../ItemGet/ItemGet';
import PopUp from '../PopUp/PopUp';
import Error from '../Error/Error';
import './Game.css';
import Music from '../Music/Music';
import SFX from '../SFX/SFX';

function Game(props){
  if(props.game.gameState === 'title'){
    return (
    <div>
      <TitleContainer
        handleStart={props.handleStart}
        handleLoad={props.handleLoad}
        menu={props.menu}
        player={props.player}
        saves={props.saves}
        game={props.game}
        sounds={props.sounds}
      />
    </div>
    );
  } else if (props.game.gameState === 'paused') {
    return (
      <div className="game">
        <Map maps={props.maps} game={props.game} player={props.player}/>
        <div id='ui-pause'><GameUITop player={props.player} game={props.game}/></div>
        <div id='pause'><div id='level'><CurrentRoom switches={props.switches} projectiles={props.projectiles} boss={props.boss} npcs={props.npcs} currentRoom={props.currentRoom} game={props.game} player={props.player} doors={props.doors}/></div></div>
      </div>
    );
  } else if (props.game.gameState === 'gameOver') {
    return (
      <div className="game">
      <GameOver
      game={props.game}
      menu={props.menu}
      player={props.player}
      handleStart={props.handleStart}
      handleLoad={props.handleLoad}
      nullAll={props.nullAll}/>
      </div>
    );
  } else if (props.game.gameState === 'dialogue') {
    let filter = (props.game.mindDepth * 20) + '%';
    let blur = (props.game.mindDepth / 2) +'px';
    return (
      <div className="game">
        <GameUITop player={props.player} game={props.game}/>
        <div id='level' style={{filter: "grayscale(" + filter + ") blur(" + blur +")"}}><CurrentRoom switches={props.switches} projectiles={props.projectiles} npcs={props.npcs} game={props.game} currentRoom={props.currentRoom} player={props.player} doors={props.doors}/></div>
        <TextBoxes text={props.text} game={props.game} menu={props.menu}/>
      </div>
    );
  } else if (props.game.gameState === 'building' || props.game.gameState === 'postDeath' ) {
    return (
      <div id="loading">
      </div>
    );
  } else if (props.game.gameState === 'glitch') {
    return (
      <div className="glitch">
        <GameUITop player={props.player} game={props.game}/>
        <div id='level'><CurrentRoom projectiles={props.projectiles} npcs={props.npcs} currentRoom={props.currentRoom} game={props.game} player={props.player} doors={props.doors}/></div>
      </div>
    );
  } else if (props.game.gameState === 'error') {
    return (
      <div>
        <Error exitSpecial={props.exitSpecial}/>
      </div>
    );
  } else if (props.game.gameState === 'itemGet') {
    return (
      <div className="game">
        <GameUITop player={props.player} game={props.game}/>
        <div id='level'><CurrentRoom switches={props.switches} projectiles={props.projectiles} npcs={props.npcs} currentRoom={props.currentRoom} game={props.game} player={props.player} doors={props.doors}/></div>
        <ItemGet newItem={props.player.newItem}/>
      </div>
    );
  } else {
    return (
      <div className="game">
        <PopUp popUp={props.popUp} transition={props.popUpTransition}/>
        <GameUITop player={props.player} game={props.game}/>
        <BossUI boss={props.boss}/> 
        <div id='level'><CurrentRoom switches={props.switches} projectiles={props.projectiles} boss={props.boss} npcs={props.npcs} currentRoom={props.currentRoom} game={props.game} player={props.player} doors={props.doors}/></div>
      </div>
    );
  }
}

Game.propTypes = {
  currentRoom: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
  menu: PropTypes.object.isRequired,
  maps: PropTypes.object.isRequired,
  doors: PropTypes.object.isRequired,
  text: PropTypes.object.isRequired,
  sounds: PropTypes.object.isRequired,
  popUp: PropTypes.string,
  popUpTransition: PropTypes.string,
  boss: PropTypes.object,
  npcs: PropTypes.object,
  projectiles: PropTypes.object,
  handleStart: PropTypes.func,
  nullAll: PropTypes.func,
  exitSpecial: PropTypes.func,
  switches: PropTypes.object
};

export default Game;
