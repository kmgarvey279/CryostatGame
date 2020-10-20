import React from 'react';
import PropTypes from 'prop-types';
import Square from '../Square/Square';
import Filter from '../Filter/Filter';
import './CurrentRoom.css';
import wound from '../../assets/images/room/wound.png';

function CurrentRoom(props){
  let backgroundImage;
  if(props.game.roomId === 10){
    backgroundImage = <img className="room-background-image" src={wound} width="500" height="420"/>
  }
  return (
    <div id="outer">
      <Filter branch={props.game.branch} filter={props.game.filter}/>
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
          explosion={square.explosion}
          warning={square.warning}
          shatter={square.shatter}
          tileOverlay={square.tileOverlay}
          player={props.player}
          boss={props.boss}
          doors={props.doors}
          eye={props.game.eye}
          npcs={props.npcs}
          game={props.game}
          projectiles={props.projectiles}/>
        </div>;
      })};
      {backgroundImage}
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
  projectiles: PropTypes.object
};

export default CurrentRoom;
