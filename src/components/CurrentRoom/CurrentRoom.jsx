import React from 'react';
import PropTypes from 'prop-types';
import Square from '../Square/Square';
import Filter from '../Filter/Filter';
import './CurrentRoom.css';

function CurrentRoom(props){
  let specialClass = '';
  if(props.game.branch === 'collapse'){
    specialClass = "room-shake"
  } else if(props.game.filter === 'drunk'){
    specialClass = "drunk";
  }
  return (
    <div id="outer" className={specialClass}>
      <Filter branch={props.game.branch} filter={props.game.filter} playerHealth={props.player.health}/>
      {Object.keys(props.currentRoom).map(function(squareId) {
        var square = props.currentRoom[squareId];
        return <div id="inner"><Square value={square.value}
          content={square.content}
          key={squareId}
          squareId={parseInt(squareId)}
          tileImage={square.tileImage}
          sprite={square.sprite}
          emote={square.emote}
          transition={square.transition}
          alert={square.alert}
          bullet={square.bullet}
          playerBullet={square.playerBullet}
          explosion={square.explosion}
          waterdrop={square.waterdrop}
          warning={square.warning}
          shatter={square.shatter}
          tileOverlay={square.tileOverlay}
          player={props.player}
          boss={props.boss}
          doors={props.doors}
          eye={props.game.eye}
          npcs={props.npcs}
          game={props.game}
          switches={props.switches}
          currentRoom={props.currentRoom}
          projectiles={props.projectiles}/>
        </div>;
      })};
    </div>
  );
};

CurrentRoom.propTypes = {
  game: PropTypes.object.isRequired,
  currentRoom: PropTypes.object.isRequired,
  player: PropTypes.object,
  boss: PropTypes.object,
  doors: PropTypes.object,
  npcs: PropTypes.object,
  projectiles: PropTypes.object,
  switches: PropTypes.object
};

export default CurrentRoom;
