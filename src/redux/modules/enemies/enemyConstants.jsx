import React from 'react';

import blobNorth from '../../../assets/images/enemies/blob-back.gif';
import blobEast from '../../../assets/images/enemies/blob.gif';
import blobSouth from '../../../assets/images/enemies/blob.gif';
import blobWest from '../../../assets/images/enemies/blob-back.gif';

import blobKnockbackNorth from '../../../assets/images/enemies/blob-front-knockback.gif';
import blobKnockbackEast from '../../../assets/images/enemies/blob-front-knockback.gif';
import blobKnockbackSouth from '../../../assets/images/enemies/blob-front-knockback.gif';
import blobKnockbackWest from '../../../assets/images/enemies/blob-front-knockback.gif';

import blobChargeEast from '../../../assets/images/enemies/blob-charge-east.png';
import blobChargeSouth from '../../../assets/images/enemies/blob-charge-south.png';
import blobChargeWest from '../../../assets/images/enemies/blob-charge-west.png';

import blobShock from '../../../assets/images/enemies/blob-shock.gif';
import blobFrozen from '../../../assets/images/enemies/blob-frozen.png';
import blobDead from '../../../assets/images/enemies/blob-die.gif';

import bossNormal from '../../../assets/images/enemies/boss1.gif';

import troopSouth from '../../../assets/images/enemies/troop-on-south.gif';
import troopNorth from '../../../assets/images/enemies/troop-on-south.gif';
import troopWest from '../../../assets/images/enemies/troop-on-south.gif';
import troopEast from '../../../assets/images/enemies/troop-on-south.gif';

import troopOff from '../../../assets/images/enemies/troop-off.png';
import troopTurnOn1 from '../../../assets/images/enemies/troop-turn-on.gif';
import troopTurnOn2 from '../../../assets/images/enemies/troop-turn-on2.gif';

import troopLaserActivateSouth from '../../../assets/images/enemies/troop-laser-activate-south.gif';
import troopLaserActivateNorth from '../../../assets/images/enemies/troop-laser-activate-north.gif';
import troopLaserActivatedSouth from '../../../assets/images/enemies/troop-laser-activated-south.gif';
import troopLaserActivatedNorth from '../../../assets/images/enemies/troop-laser-activated-north.gif';
import troopLaserDeactivateSouth from '../../../assets/images/enemies/troop-laser-deactivate-south.gif';
import troopLaserDeactivateNorth from '../../../assets/images/enemies/troop-laser-deactivate-north.gif';

import troopShockActivateSouth from '../../../assets/images/enemies/troop-shock-activate-south.gif';
import troopShockActivatedSouth from '../../../assets/images/enemies/troop-shock-activated-south.gif';
import troopShockDeactivateSouth from '../../../assets/images/enemies/troop-shock-deactivate-south.gif';


import troopGunActivateSouth from '../../../assets/images/enemies/troop-gun-activate-south.gif';
import troopGunActivateNorth from '../../../assets/images/enemies/troop-gun-activate-south.gif';
import troopGunActivatedSouth from '../../../assets/images/enemies/troop-gun-activated-south.gif';
import troopGunActivatedNorth from '../../../assets/images/enemies/troop-gun-activated-south.gif';
import troopGunDeactivateSouth from '../../../assets/images/enemies/troop-gun-deactivate-south.gif';
import troopGunDeactivateNorth from '../../../assets/images/enemies/troop-gun-deactivate-south.gif';

import troopAngrySouth from '../../../assets/images/enemies/troop-angry-south.gif';
import troopAngryNorth from '../../../assets/images/enemies/troop-angry-south.gif'

export const sprites = {
  //Blob Type
  slime: {
    move: {
      north: <img id="slime" src={blobNorth} width="65" height="80"/>,
      east: <img id="slime" src={blobEast} width="65" height="80"/>,
      south: <img id="slime" src={blobSouth} width="65" height="80"/>,
      west: <img id="slime" src={blobWest} width="65" height="80"/>
    },
    knockback: {
      north: <img id="slime" src={blobKnockbackNorth} width="65" height="80"/>,
      east: <img id="slime" src={blobKnockbackEast} width="65" height="80"/>,
      south: <img id="slime" src={blobKnockbackSouth} width="65" height="80"/>,
      west: <img id="slime" src={blobKnockbackWest} width="65" height="80"/>
    },
    charge: {
      north: <img id="slime" className="enemy-charge" src={blobNorth} width="65" height="80"/>,
      east: <img id="slime" className="enemy-charge" src={blobChargeEast} width="65" height="80"/>,
      south: <img id="slime" className="enemy-charge" src={blobChargeSouth} width="65" height="80"/>,
      west: <img id="slime" className="enemy-charge" src={blobChargeWest} width="65" height="80"/>
    },
    charging: {
      north: <img id="slime" src={blobNorth} width="65" height="80"/>,
      east: <img id="slime" src={blobChargeEast} width="65" height="80"/>,
      south: <img id="slime" src={blobChargeSouth} width="65" height="80"/>,
      west: <img id="slime" src={blobChargeWest} width="65" height="80"/>
    },
    frozen: <img id="slime" src={blobFrozen} width="65" height="80"/>,
    shock: <img id="slime" src={blobShock} width="65" height="80"/>,
    dead: <img id="slime" src={blobDead} width="65" height="80"/>,
  },
  Troop: {
    normal: {
      front: <img className="midboss-sprite-off" src={troopSouth} width="135" height="150"/>,
      back: <img className="midboss-sprite-off" src={troopNorth} width="135" height="150"/>
    },
    off: <img className="midboss-sprite-off" src={troopOff} width="135" height="150"/>,
    turnOn1: <img className="midboss-sprite-off" src={troopTurnOn1} width="135" height="150"/>,
    turnOn2: <img className="midboss-sprite" src={troopTurnOn2} width="135" height="150"/>,
    laserActivate: <img className="midboss-sprite" src={troopLaserActivateSouth} width="135" height="150"/>,
    laserActivated: <img className="midboss-sprite" src={troopLaserActivatedSouth} width="135" height="150"/>, 
    laserDeactivate: <img className="midboss-sprite" src={troopLaserDeactivateSouth} width="135" height="150"/>,
    gunActivate: {
      front: <img className="midboss-sprite" src={troopGunActivateSouth} width="135" height="150"/>,
      back: <img className="midboss-sprite" src={troopGunActivateNorth} width="135" height="150"/>
    },
    gunActivated: {
      front: <img className="midboss-sprite" src={troopGunActivatedSouth} width="135" height="150"/>,
      back: <img className="midboss-sprite" src={troopGunActivatedNorth} width="135" height="150"/>
    },
    gunDeactivate: {
      front: <img className="midboss-sprite" src={troopGunDeactivateSouth} width="135" height="150"/>,
      back: <img className="midboss-sprite" src={troopGunDeactivateNorth} width="135" height="150"/>
    },
    shockActivate: {
      front: <img className="midboss-sprite" src={troopShockActivateSouth} width="135" height="150"/>
    },
    shockActivated: {
      front: <img className="midboss-sprite" src={troopShockActivatedSouth} width="135" height="150"/>
    },
    shockDeactivate: {
      front: <img className="midboss-sprite" src={troopShockDeactivateSouth} width="135" height="150"/>
    },
    charge: {
      front: <img className="midboss-charge-sprite" src={troopAngrySouth} width="135" height="150"/>,
      back: <img className="midboss-charge-sprite" src={troopAngryNorth} width="135" height="150"/>
    },
    angry: {
      front: <img className="midboss-sprite" src={troopAngrySouth} width="135" height="150"/>,
      back: <img className="midboss-sprite" src={troopAngryNorth} width="135" height="150"/>
    }
  },
  Chalazon: {
    normal: <img className="boss-sprite" src={bossNormal} width="305" height="225"/>
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
  Troop: {
    kind: 'Troop',
    sprites: sprites['Troop'],
    health: 600,
    tileArr: [71, 84, 70, 83],
    title: '- Private Security Solution -'
  },
  Chalazon: {
    kind: 'Chalazon',
    sprites: sprites['Chalazon'],
    health: 1000,
    tileArr: [46, 47, 58, 59, 60, 71, 72, 73, 84, 85, 86, 97, 98, 99, 111, 112],
    title: '- Abyssal Cyst -'
  },
  Blaine: {
    kind: "Blaine",
    sprites: sprites[''],
    tileArr: [],
    title: '- Time/Edge Lord -'
  }
};
