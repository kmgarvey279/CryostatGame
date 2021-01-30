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

import blobHurt from '../../../assets/images/enemies/blob-hurt.gif';
import blobDizzy from '../../../assets/images/enemies/blob-dizzy.gif';
import blobShock from '../../../assets/images/enemies/blob-shock.gif';
import blobFrozen from '../../../assets/images/enemies/blob-frozen.png';
import blobDead from '../../../assets/images/enemies/blob-die.gif';

import waterEyeNorth from '../../../assets/images/enemies/waterEye-north.gif';
import waterEyeEast from '../../../assets/images/enemies/waterEye-east.gif';
import waterEyeSouth from '../../../assets/images/enemies/waterEye-south.gif';
import waterEyeWest from '../../../assets/images/enemies/waterEye-west.gif';

import waterEyeHurt from '../../../assets/images/enemies/waterEye-hurt.gif';
import waterEyeDead from '../../../assets/images/enemies/waterEye-die.gif';
import waterEyeSink from '../../../assets/images/enemies/waterEye-sink.gif';
import waterEyeRise from '../../../assets/images/enemies/waterEye-rise.gif';
import waterEyeFrozen from '../../../assets/images/enemies/waterEye-frozen.png';

import bossNormal from '../../../assets/images/enemies/boss1.gif';

import troopSouth from '../../../assets/images/enemies/troop-on-south.gif';
import troopNorth from '../../../assets/images/enemies/troop-on-north.gif';

import troopHurtSouth from '../../../assets/images/enemies/troop-damage-south.gif';
import troopHurtNorth from '../../../assets/images/enemies/troop-damage-north.gif';
import troopDie from '../../../assets/images/enemies/troop-die.gif';
import explosion from '../../../assets/images/enemies/explosion.gif';

import troopOff from '../../../assets/images/enemies/troop-off.png';
import troopTurnOn1 from '../../../assets/images/enemies/troop-turn-on.gif';
import troopTurnOn2 from '../../../assets/images/enemies/troop-turn-on2.gif';

import troopLaserActivateSouth from '../../../assets/images/enemies/troop-laser-activate-south.gif';
import troopLaserActivatedSouth from '../../../assets/images/enemies/troop-laser-activated-south.gif';
import troopLaserDeactivateSouth from '../../../assets/images/enemies/troop-laser-deactivate-south.gif';

import troopShockActivateSouth from '../../../assets/images/enemies/troop-shock-activate-south.gif';
import troopShockActivatedSouth from '../../../assets/images/enemies/troop-shock-activated-south.gif';
import troopShockDeactivateSouth from '../../../assets/images/enemies/troop-shock-deactivate-south.gif';

import troopShockActivateNorth from '../../../assets/images/enemies/troop-shock-activate-north.gif';
import troopShockActivatedNorth from '../../../assets/images/enemies/troop-shock-activated-north.gif';
import troopShockDeactivateNorth from '../../../assets/images/enemies/troop-shock-deactivate-north.gif';

import troopGunActivateSouth from '../../../assets/images/enemies/troop-gun-activate-south.gif';
import troopGunActivateNorth from '../../../assets/images/enemies/troop-gun-activate-north.gif';
import troopGunActivatedSouth from '../../../assets/images/enemies/troop-gun-activated-south.gif';
import troopGunActivatedNorth from '../../../assets/images/enemies/troop-gun-activated-north.gif';
import troopGunDeactivateSouth from '../../../assets/images/enemies/troop-gun-deactivate-south.gif';
import troopGunDeactivateNorth from '../../../assets/images/enemies/troop-gun-deactivate-north.gif';

import troopAngrySouth from '../../../assets/images/enemies/troop-angry-south.gif';
import troopAngryNorth from '../../../assets/images/enemies/troop-angry-north.gif'

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
    hurt: <img id="slime" src={blobHurt} width="65" height="80"/>,
    fall: <img id="slime" className="sprite-fall" src={blobSouth} width="65" height="80"/>,
    fallFrozen: <img id="slime" className="sprite-fall" src={blobFrozen} width="65" height="80"/>,
    dizzy: <img id="slime"  src={blobDizzy} width="65" height="80"/>,
    frozen: <img id="slime" src={blobFrozen} width="65" height="80"/>,
    shock: <img id="slime" src={blobShock} width="65" height="80"/>,
    dead: <img id="slime" src={blobDead} width="65" height="80"/>,
  },
  waterEye: {
    move: {
      north: <img id="waterEye" src={waterEyeNorth} width="50" height="50"/>,
      northWest: <img id="waterEye" src={waterEyeNorth} width="50" height="50"/>,
      northEast: <img id="waterEye" src={waterEyeNorth} width="50" height="50"/>,
      east: <img id="waterEye" src={waterEyeEast} width="50" height="50"/>,
      south: <img id="waterEye" src={waterEyeSouth} width="50" height="50"/>,
      southEast: <img id="waterEye" src={waterEyeSouth} width="50" height="50"/>,
      southWest: <img id="waterEye" src={waterEyeSouth} width="50" height="50"/>,
      west: <img id="waterEye" src={waterEyeWest} width="50" height="50"/>
    },
    frozen: <img id="waterEye" src={waterEyeFrozen} width="50" height="50"/>,
    hurt: <img id="waterEye" src={waterEyeHurt} width="50" height="50"/>,
    sink: <img id="waterEye" src={waterEyeSink} width="50" height="50"/>,
    rise: <img id="waterEye" src={waterEyeRise} width="50" height="50"/>,
    dead: <img id="waterEye" src={waterEyeDead} width="50" height="50"/>,
  },
  Troop: {
    normal: {
      north: <img className="midboss-sprite" src={troopNorth} width="135" height="150"/>,
      east: <img className="midboss-sprite" src={troopSouth} width="135" height="150"/>,
      west: <img className="midboss-sprite" src={troopSouth} width="135" height="150"/>,
      south: <img className="midboss-sprite" src={troopSouth} width="135" height="150"/>,
      northEast: <img className="midboss-sprite" src={troopNorth} width="135" height="150"/>,
      northWest: <img className="midboss-sprite" src={troopNorth} width="135" height="150"/>,
      southEast: <img className="midboss-sprite" src={troopSouth} width="135" height="150"/>,
      southWest: <img className="midboss-sprite" src={troopSouth} width="135" height="150"/>
    },
    off: <img className="midboss-sprite-off" src={troopOff} width="135" height="150"/>,
    turnOn1: <img className="midboss-sprite-off" src={troopTurnOn1} width="135" height="150"/>,
    turnOn2: <img className="midboss-sprite" src={troopTurnOn2} width="135" height="150"/>,
    hurt: {
      north: <img className="midboss-sprite" src={troopHurtNorth} width="135" height="150"/>,
      east: <img className="midboss-sprite" src={troopHurtSouth} width="135" height="150"/>,
      west: <img className="midboss-sprite" src={troopHurtSouth} width="135" height="150"/>,
      south: <img className="midboss-sprite" src={troopHurtSouth} width="135" height="150"/>,
      northEast: <img className="midboss-sprite" src={troopHurtNorth} width="135" height="150"/>,
      northWest: <img className="midboss-sprite" src={troopHurtNorth} width="135" height="150"/>,
      southEast: <img className="midboss-sprite" src={troopHurtSouth} width="135" height="150"/>,
      southWest: <img className="midboss-sprite" src={troopHurtSouth} width="135" height="150"/>
    },
    dead1: <img className="midboss-charge-sprite" src={troopHurtSouth} width="135" height="150"/>,
    dead2: <img className="midboss-charge-sprite" src={troopDie} width="135" height="150"/>,
    explosion: <img className="midboss-sprite" src={explosion} width="135" height="140"/>,
    laserActivate: <img className="midboss-sprite" src={troopLaserActivateSouth} width="135" height="150"/>,
    laserActivated: <img className="midboss-sprite" src={troopLaserActivatedSouth} width="135" height="150"/>, 
    laserDeactivate: <img className="midboss-sprite" src={troopLaserDeactivateSouth} width="135" height="150"/>,
    
    gunActivate: {
      north: <img className="midboss-sprite" src={troopGunActivateNorth} width="135" height="150"/>,
      east: <img className="midboss-sprite" src={troopGunActivateSouth} width="135" height="150"/>,
      west: <img className="midboss-sprite" src={troopGunActivateSouth} width="135" height="150"/>,
      south: <img className="midboss-sprite" src={troopGunActivateSouth} width="135" height="150"/>,
      northEast: <img className="midboss-sprite" src={troopGunActivateNorth} width="135" height="150"/>,
      northWest: <img className="midboss-sprite" src={troopGunActivateNorth} width="135" height="150"/>,
      southEast: <img className="midboss-sprite" src={troopGunActivateSouth} width="135" height="150"/>,
      southWest: <img className="midboss-sprite" src={troopGunActivateSouth} width="135" height="150"/>
    },
    gunActivated: {
      north: <img className="midboss-sprite" src={troopGunActivatedNorth} width="135" height="150"/>,
      east: <img className="midboss-sprite" src={troopGunActivatedSouth} width="135" height="150"/>,
      west: <img className="midboss-sprite" src={troopGunActivatedSouth} width="135" height="150"/>,
      south: <img className="midboss-sprite" src={troopGunActivatedSouth} width="135" height="150"/>,
      northEast: <img className="midboss-sprite" src={troopGunActivatedNorth} width="135" height="150"/>,
      northWest: <img className="midboss-sprite" src={troopGunActivatedNorth} width="135" height="150"/>,
      southEast: <img className="midboss-sprite" src={troopGunActivatedSouth} width="135" height="150"/>,
      southWest: <img className="midboss-sprite" src={troopGunActivatedSouth} width="135" height="150"/>
    },
    gunDeactivate: {
      north: <img className="midboss-sprite" src={troopGunDeactivateNorth} width="135" height="150"/>,
      east: <img className="midboss-sprite" src={troopGunDeactivateSouth} width="135" height="150"/>,
      west: <img className="midboss-sprite" src={troopGunDeactivateSouth} width="135" height="150"/>,
      south: <img className="midboss-sprite" src={troopGunDeactivateSouth} width="135" height="150"/>,
      northEast: <img className="midboss-sprite" src={troopGunDeactivateNorth} width="135" height="150"/>,
      northWest: <img className="midboss-sprite" src={troopGunDeactivateNorth} width="135" height="150"/>,
      southEast: <img className="midboss-sprite" src={troopGunDeactivateSouth} width="135" height="150"/>,
      southWest: <img className="midboss-sprite" src={troopGunDeactivateSouth} width="135" height="150"/>
    },

    shockActivate: {
      north: <img className="midboss-sprite" src={troopShockActivateNorth} width="135" height="150"/>,
      east: <img className="midboss-sprite" src={troopShockActivateSouth} width="135" height="150"/>,
      west: <img className="midboss-sprite" src={troopShockActivateSouth} width="135" height="150"/>,
      south: <img className="midboss-sprite" src={troopShockActivateSouth} width="135" height="150"/>,
      northEast: <img className="midboss-sprite" src={troopShockActivateNorth} width="135" height="150"/>,
      northWest: <img className="midboss-sprite" src={troopShockActivateNorth} width="135" height="150"/>,
      southEast: <img className="midboss-sprite" src={troopShockActivateSouth} width="135" height="150"/>,
      southWest: <img className="midboss-sprite" src={troopShockActivateSouth} width="135" height="150"/>
    },
    shockActivated: {
      north: <img className="midboss-sprite" src={troopShockActivatedNorth} width="135" height="150"/>,
      east: <img className="midboss-sprite" src={troopShockActivatedSouth} width="135" height="150"/>,
      west: <img className="midboss-sprite" src={troopShockActivatedSouth} width="135" height="150"/>,
      south: <img className="midboss-sprite" src={troopShockActivatedSouth} width="135" height="150"/>,
      northEast: <img className="midboss-sprite" src={troopShockActivatedNorth} width="135" height="150"/>,
      northWest: <img className="midboss-sprite" src={troopShockActivatedNorth} width="135" height="150"/>,
      southEast: <img className="midboss-sprite" src={troopShockActivatedSouth} width="135" height="150"/>,
      southWest: <img className="midboss-sprite" src={troopShockActivatedSouth} width="135" height="150"/>
    },
    shockDeactivate: {
      north: <img className="midboss-sprite" src={troopShockDeactivateNorth} width="135" height="150"/>,
      east: <img className="midboss-sprite" src={troopShockDeactivateSouth} width="135" height="150"/>,
      west: <img className="midboss-sprite" src={troopShockDeactivateSouth} width="135" height="150"/>,
      south: <img className="midboss-sprite" src={troopShockDeactivateSouth} width="135" height="150"/>,
      northEast: <img className="midboss-sprite" src={troopShockDeactivateNorth} width="135" height="150"/>,
      northWest: <img className="midboss-sprite" src={troopShockDeactivateNorth} width="135" height="150"/>,
      southEast: <img className="midboss-sprite" src={troopShockDeactivateSouth} width="135" height="150"/>,
      southWest: <img className="midboss-sprite" src={troopShockDeactivateSouth} width="135" height="150"/>
    },

    charge: {
      south: <img className="midboss-charge-sprite" src={troopAngrySouth} width="135" height="150"/>,
      east:<img className="midboss-charge-sprite" src={troopAngrySouth} width="135" height="150"/>,
      west:<img className="midboss-charge-sprite" src={troopAngrySouth} width="135" height="150"/>,
      southEast:<img className="midboss-charge-sprite" src={troopAngrySouth} width="135" height="150"/>,
      southWest:<img className="midboss-charge-sprite" src={troopAngrySouth} width="135" height="150"/>,
      north: <img className="midboss-charge-sprite" src={troopAngryNorth} width="135" height="150"/>,
      northEast: <img className="midboss-charge-sprite" src={troopAngryNorth} width="135" height="150"/>,
      northWest: <img className="midboss-charge-sprite" src={troopAngryNorth} width="135" height="150"/>
    },
    angry: {
      south: <img className="midboss-sprite" src={troopAngrySouth} width="135" height="150"/>,
      east:<img className="midboss-sprite" src={troopAngrySouth} width="135" height="150"/>,
      west:<img className="midboss-sprite" src={troopAngrySouth} width="135" height="150"/>,
      southEast:<img className="midboss-sprite" src={troopAngrySouth} width="135" height="150"/>,
      southWest:<img className="midboss-sprite" src={troopAngrySouth} width="135" height="150"/>,
      north: <img className="midboss-sprite" src={troopAngryNorth} width="135" height="150"/>,
      northEast: <img className="midboss-sprite" src={troopAngryNorth} width="135" height="150"/>,
      northWest: <img className="midboss-sprite" src={troopAngryNorth} width="135" height="150"/>
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
  waterEye: {
    kind: 'WaterEye',
    sprites: sprites['waterEye'],
    health: 10
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
  }
};
