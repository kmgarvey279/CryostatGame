import React from 'react';
import PropTypes from 'prop-types';
import Square from '../Square/Square';
import Filter from '../Filter/Filter';
import './CurrentRoom.css';

function CurrentRoom(props){
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
