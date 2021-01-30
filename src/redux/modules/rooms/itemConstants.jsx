import taser from '../../../assets/images/items/taser.gif';
import taserChargedNorth from '../../../assets/images/items/lightning-north.gif';
import taserChargedEast from '../../../assets/images/items/lightning-east.gif';
import taserChargedSouth from '../../../assets/images/items/lightning-south.gif';
import taserChargedWest from '../../../assets/images/items/lightning-west.gif';
import taserIcon from '../../../assets/images/items/taserIcon.png';
import cryo2Icon from '../../../assets/images/items/cryo2Icon.png';
import cryostat from '../../../assets/images/items/cryostat.gif';
import cryoChargedNorth from '../../../assets/images/items/cryostatNS.gif';
import cryoChargedEast from '../../../assets/images/items/cryostatEW.gif';
import health from '../../../assets/images/items/health.png';
import keyCard1 from '../../../assets/images/items/key.png';
import keyCard2 from '../../../assets/images/items/key2.png';
import keyCard2Old from '../../../assets/images/items/key2Old.png';
import dash from '../../../assets/images/items/collider.gif';
import clone from '../../../assets/images/items/clone.gif';
import freeze from '../../../assets/images/items/freeze.gif';
import shock from '../../../assets/images/items/shock.gif';
import bracelet from '../../../assets/images/items/bracelet.png';
import pipe from '../../../assets/images/items/pipe.png';
import charge from '../../../assets/images/items/charge.gif';
import React from 'react';

export const weapons = {
  Taser: {
    name: 'Taser',
    range: 7,
    sprites: {
      projectile: {
        north: <img className="bullet-north" src={taser} width="40" height="40"/>,
        east: <img className="bullet-east" src={taser} width="40" height="40"/>,
        south: <img className="bullet-south" src={taser} width="40" height="40"/>,
        west: <img className="bullet-west" src={taser} width="40" height="40"/>,
      },
      projectileCharged: {
        north: <img className="taser-charge-north" src={taserChargedNorth} width="50" height="50"/>,
        east: <img className="taser-charge-horizontal" src={taserChargedEast} width="50" height="50"/>,
        west: <img className="taser-charge-horizontal" src={taserChargedWest} width="50" height="50"/>,
        south: <img className="taser-charge-south" src={taserChargedSouth} width="50" height="50"/>
      }
    }
  },
  Cryostat: {
    name: 'Cryostat',
    range: 1,
    sprites: {
      projectile: {
        north: <img className="bullet-north" src={cryostat} width="40" height="40"/>,
        east: <img className="bullet-east" src={cryostat} width="40" height="40"/>,
        south: <img className="bullet-south" src={cryostat} width="40" height="40"/>,
        west: <img className="bullet-west" src={cryostat} width="40" height="40"/>,
      },
      projectileCharged: {
        north: <img className="taser-charge-vertical" src={cryoChargedNorth} width="40" height="40"/>,
        east: <img className="taser-charge-horizontal" src={cryoChargedEast} width="40" height="40"/>,
        west: <img className="taser-charge-horizontal" src={cryoChargedEast} width="40" height="40"/>,
        south: <img className="taser-charge-vertical" src={cryoChargedNorth} width="40" height="40"/>
      }
    }
  }
};

export const sprites = {
  Taser: <img className="taser-icon" src={taserIcon} width="50" height="50"/>,
  Cryostat: <img src={cryo2Icon} width="50" height="50"/>,
  Cryostat2: <img src={cryo2Icon} width="50" height="50"/>,
  health: <img src={health} width="50" height="50"/>,
  keyCard1: <img src={keyCard1} width="50" height="50"/>,
  keyCard1B: <img src={keyCard1} width="50" height="50"/>,
  keyCard2: <img src={keyCard2} width="50" height="50"/>,
  keyCard2Old: <img src={keyCard2Old} width="50" height="50"/>,
  dash: <img src={dash} width="50" height="50"/>,
  clone: <img src={clone} width="50" height="50"/>,
  freeze: <img src={freeze} width="50" height="50"/>,
  shock: <img src={shock} width="50" height="50"/>,
  bracelet: <img className="item-bracelet" src={bracelet} width="30" height="30"/>,
  pipe: <img className="item-pipe" src={pipe} width="50" height="50"/>,
  charge: <img src={charge} width="40" height="40"/>,
}
