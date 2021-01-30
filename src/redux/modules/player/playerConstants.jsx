import React from 'react';

import playerStandNorth from '../../../assets/images/player/playerStandNorth.gif';
import playerStandEast from '../../../assets/images/player/playerStandEast.gif';
import playerStandSouth from '../../../assets/images/player/playerStandSouth.gif';
import playerStandWest from '../../../assets/images/player/playerStandWest.gif';

import playerWalkNorth2 from '../../../assets/images/player/playerWalkNorth2.gif';
import playerWalkEast2 from '../../../assets/images/player/playerWalkEast2.gif';
import playerWalkSouth2 from '../../../assets/images/player/playerWalkSouth2.gif';
import playerWalkWest2 from '../../../assets/images/player/playerWalkWest2.gif';

import playerStrikeSouth from '../../../assets/images/player/player-strike-south.gif';
import playerStrikeWest from '../../../assets/images/player/player-strike-west.png';
import playerStrikeNorth from '../../../assets/images/player/player-strike-north.gif';
import playerStrikeEast from '../../../assets/images/player/player-strike-east.png';

import pipeSouth from '../../../assets/images/player/pipe-south.gif';
import pipeNorth from '../../../assets/images/player/pipe-north.gif';
import pipeEast from '../../../assets/images/player/pipe-east.gif';
import pipeWest from '../../../assets/images/player/pipe-west.gif';

import playerGuardSouth from '../../../assets/images/player/playerGuardSouth.gif';
import playerGuardWest from '../../../assets/images/player/playerGuardWest.gif';
import playerGuardNorth from '../../../assets/images/player/playerGuardNorth.gif';
import playerGuardEast from '../../../assets/images/player/playerGuardEast.gif';

import playerAttackNorth from '../../../assets/images/player/playerAttackNorth.gif';
import playerAttackEast from '../../../assets/images/player/playerAttackEast.gif';
import playerAttackSouth from '../../../assets/images/player/playerAttackSouth.gif';
import playerAttackWest from '../../../assets/images/player/playerAttackWest.gif';

import playerAttackEastCryo from '../../../assets/images/player/playerAttackEastCryo.gif';
import playerAttackSouthCryo from '../../../assets/images/player/playerAttackSouthCryo.gif';
import playerAttackWestCryo from '../../../assets/images/player/playerAttackWestCryo.gif';

import playerChargeEastTaser from '../../../assets/images/player/playerChargeEastTaser.gif';
import playerChargeSouthTaser from '../../../assets/images/player/playerChargeSouthTaser.gif';
import playerChargeWestTaser from '../../../assets/images/player/playerChargeWestTaser.gif';

import playerChargeEastCryo from '../../../assets/images/player/playerChargeEastCryo.gif';
import playerChargeSouthCryo from '../../../assets/images/player/playerChargeSouthCryo.gif';
import playerChargeWestCryo from '../../../assets/images/player/playerChargeWestCryo.gif';

import playerKnockbackSouth from '../../../assets/images/player/playerKnockbackSouth.gif';
import playerKnockbackNorth from '../../../assets/images/player/playerKnockbackNorth.gif';
import playerSink from '../../../assets/images/player/playerSink.gif';
import playerDead from '../../../assets/images/player/player-dead.gif';
import playerDead2 from '../../../assets/images/player/player-dead2.png';
import playerFalling from '../../../assets/images/player/player-falling.gif';
import playerSit from '../../../assets/images/player/player-sit.gif';
import playerSit2 from '../../../assets/images/player/player-sit-2.gif';
import playerCryo from '../../../assets/images/player/playerCryo.gif';
import playerVision from '../../../assets/images/player/playerVision.gif';
import playerSick from '../../../assets/images/player/playerSick.gif';

import playerWarp from '../../../assets/images/player/playerWarp.gif';
import playerDashSouth from '../../../assets/images/player/playerDashSouth.gif';
import playerDashNorth from '../../../assets/images/player/playerDashNorth.gif';
import playerDashEast from '../../../assets/images/player/playerDashEast.gif';
import playerDashWest from '../../../assets/images/player/playerDashWest.gif';
import playerParticleSouth from '../../../assets/images/player/playerParticleSouth.gif';
import playerParticleEast from '../../../assets/images/player/playerParticleEast.gif';
import strikeEffect from '../../../assets/images/player/strike.gif';
import playerBright from '../../../assets/images/player/playerBright.gif'

export const sprites = {
  stand: {
    north: <img id="player" src={playerStandNorth} width="80" height="80"/>,
    east: <img id="player" src={playerStandEast} width="80" height="80"/>,
    south: <img id="player" src={playerStandSouth} width="80" height="80"/>,
    west: <img id="player-west" src={playerStandWest} width="80" height="80"/>,
  },
  rise: {
    north: <img id="player" className= "player-rise" src={playerStandNorth} width="80" height="80"/>,
    east: <img id="player" className="player-rise" src={playerStandEast} width="80" height="80"/>,
    south: <img id="player" className= "player-rise" src={playerStandSouth} width="80" height="80"/>,
    west: <img id="player-west" className= "player-rise" src={playerStandWest} width="80" height="80"/>,
  },
  sink: {
    north: <img id="player" className= "player-sink" src={playerStandNorth} width="80" height="80"/>,
    east: <img id="player" className= "player-sink" src={playerStandEast} width="80" height="80"/>,
    south: <img id="player" className= "player-sink" src={playerStandSouth} width="80" height="80"/>,
    west: <img id="player-west" className= "player-sink" src={playerStandWest} width="80" height="80"/>,
  },
  walk: {
    north: <img id="player" src={playerWalkNorth2} width="80" height="80"/>,
    east: <img id="player" src={playerWalkEast2} width="80" height="80"/>,
    south: <img id="player" src={playerWalkSouth2} width="80" height="80"/>,
    west: <img id="player-west" src={playerWalkWest2} width="80" height="80"/>,
  },
  knockback: {
    north: <img id="player" src={playerKnockbackNorth} width="80" height="80"/>,
    east: <img id="player" src={playerKnockbackSouth} width="80" height="80"/>,
    south: <img id="player" src={playerKnockbackSouth} width="80" height="80"/>,
    west: <img id="player-west" src={playerKnockbackSouth} width="80" height="80"/>,
  },
  shoot: {
    Taser: {
      north: <img id="player" src={playerAttackNorth} width="80" height="80" />,
      east: <img id="player" src={playerAttackEast} width="80" height="80" />,
      south: <img id="player" src={playerAttackSouth} width="80" height="80" />,
      west: <img id="player-west" src={playerAttackWest} width="80" height="80" />,
    },
    Cryostat: {
      north: <img id="player" src={playerAttackNorth} width="80" height="80" />,
      east: <img id="player" src={playerAttackEastCryo} width="80" height="80" />,
      south: <img id="player" src={playerAttackSouthCryo} width="80" height="80" />,
      west: <img id="player-west" src={playerAttackWestCryo} width="80" height="80" />,
    },
  },
  charge: {
    Taser: {
      north: <img id="player" src={playerAttackNorth} width="80" height="80" />,
      east: <img id="player" src={playerChargeEastTaser} width="80" height="80" />,
      south: <img id="player" src={playerChargeSouthTaser} width="80" height="80" />,
      west: <img id="player-west" src={playerChargeWestTaser} width="80" height="80" />,
    },
    Cryostat: {
      north: <img id="player" src={playerAttackNorth} width="80" height="80" />,
      east: <img id="player" src={playerChargeEastCryo} width="80" height="80" />,
      south: <img id="player" src={playerChargeSouthCryo} width="80" height="80" />,
      west: <img id="player-west" src={playerChargeWestCryo} width="80" height="80" />,
    }
  },
  strike: {
    north: <img id="player" src={playerStrikeNorth} width="80" height="80" />,
    east: <img id="player" src={playerStrikeEast} width="80" height="80" />,
    west: <img id="player-strike-west" src={playerStrikeWest} width="80" height="80" />,
    south: <img id="player" src={playerStrikeSouth} width="80" height="80" />,
  },
  strikeEffect: <img id="strike-effect" src={strikeEffect} width="40" height="40" />, 
  guard: {
    north: <img id="player" src={playerGuardNorth} width="80" height="80" />,
    east: <img id="player" src={playerGuardEast} width="80" height="80" />,
    west: <img id="player-west" src={playerGuardWest} width="80" height="80" />,
    south: <img id="player" src={playerGuardSouth} width="80" height="80" />,
  },
  dash: {
    north: <img id="player" className="dash" src={playerDashNorth} width="80" height="80" />,
    east: <img id="player" className="dash" src={playerDashEast} width="80" height="80" />,
    west: <img id="player-west" className="dash" src={playerDashWest} width="80" height="80" />,
    south: <img id="player" className="dash" src={playerDashSouth} width="80" height="80" />,
  },
  //other
  warp: <img id="player" src={playerWarp} width="80" height="80"/>,
  vision: <img id="player" src={playerVision} width="80" height="80"/>,
  dead: <img id="player-west" src={playerDead} width="95" height="80"/>,
  dead2: <img id="player-west" src={playerDead2} width="95" height="80"/>,
  fall: <img id="player" className="sprite-fall" src={playerFalling} width="80" height="80"/>,
  sink: <img id="player" src={playerSink} width="80" height="80"/>,
  bright: <img id="player-west" src={playerBright} width="80" height="80"/>,
  sit: <img id="player" className="player-up" src={playerSit} width="80" height="80"/>,
  sit2: <img id="player-up" src={playerSit2} width="80" height="80"/>,
  sick: <img id="player" src={playerSick} width="80" height="80"/>,
  cryo: <img id="player-cryo" src={playerCryo} width="78" height="80"/>,
  //player related sprites
  pipe: {
    north: <img className="pipe-north" src={pipeNorth} width="90" height="120" />,
    east: <img className="pipe-east" src={pipeEast} width="90" height="120" />,
    south: <img className="pipe-south" src={pipeSouth} width="90" height="120" />,
    west: <img className="pipe-west" src={pipeWest} width="90" height="120" />,
  },
  particle: {
    north: <img id="player" src={playerParticleSouth} width="80" height="80"/>,
    east: <img id="player" src={playerParticleEast} width="80" height="80"/>,
    south: <img id="player" src={playerParticleSouth} width="80" height="80"/>,
    west: <img id="player" src={playerParticleEast} width="80" height="80"/>
  },
  
};
