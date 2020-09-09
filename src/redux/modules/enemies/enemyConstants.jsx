import React from 'react';

import blobNorth from '../../../assets/images/enemies/blob-back.gif';
import blobEast from '../../../assets/images/enemies/blob.gif';
import blobSouth from '../../../assets/images/enemies/blob.gif';
import blobWest from '../../../assets/images/enemies/blob-back.gif';
import blobKnockbackNorth from '../../../assets/images/enemies/blob-front-knockback.gif';
import blobKnockbackEast from '../../../assets/images/enemies/blob-front-knockback.gif';
import blobKnockbackSouth from '../../../assets/images/enemies/blob-front-knockback.gif';
import blobKnockbackWest from '../../../assets/images/enemies/blob-front-knockback.gif';
import blobShock from '../../../assets/images/enemies/blob-shock.gif';
import blobFrozen from '../../../assets/images/enemies/blob-frozen.png';

import bossNorth from '../../../assets/images/enemies/boss1.gif';
import bossEast from '../../../assets/images/enemies/boss1.gif';
import bossSouth from '../../../assets/images/enemies/boss1.gif';
import bossWest from '../../../assets/images/enemies/boss1.gif';

export const sprites = {
  //Blob Type
  slime: {
    move: {
      north: <img id="player" src={blobNorth} width="65" height="80"/>,
      east: <img id="player" src={blobEast} width="65" height="80"/>,
      south: <img id="player" src={blobSouth} width="65" height="80"/>,
      west: <img id="player" src={blobWest} width="65" height="80"/>
    },
    knockback: {
      north: <img id="player" src={blobNorth} width="65" height="80"/>,
      east: <img id="player" src={blobEast} width="65" height="80"/>,
      south: <img id="player" src={blobSouth} width="65" height="80"/>,
      west: <img id="player" src={blobWest} width="65" height="80"/>
    },
    frozen: <img id="player" src={blobFrozen} width="65" height="80"/>,
    shock: <img id="player" src={blobShock} width="65" height="80"/>
  },
  boss: {
    move: {
      north: <img id="player" src={bossNorth} width="400" height="300"/>,
      east: <img id="player" src={bossEast} width="400" height="300"/>,
      south: <img id="player" src={bossSouth} width="400" height="300"/>,
      west: <img id="player" src={bossWest} width="400" height="300"/>
    }
  }
};

export const enemies = {
  slime: {
    kind: 'Slime',
    sprites: sprites['slime'],
    health: 20
  },
  robot: {
    kind: 'Robot',
    health: 60
  },
  alien: {
    kind: 'Alien',
    health: 80
  },
  boss: {
    kind: 'Boss',
    sprites: sprites['boss'],
    health: 1000
  },
};
