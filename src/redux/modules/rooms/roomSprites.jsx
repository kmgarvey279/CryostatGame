import React from 'react';

import keyCard2Old from '../../../assets/images/items/key2Old.png';
import eyeball from '../../../assets/images/room/eyeball.gif';
import eyeballHurt from '../../../assets/images/room/eyeball-damage.gif';
import tenta from '../../../assets/images/room/tenta.gif';
import tentaHurt from '../../../assets/images/room/tenta-damage.gif';
import tentaRise from '../../../assets/images/room/tenta-rise.gif';
import tentaSink from '../../../assets/images/room/tenta-sink.gif';
import ice from '../../../assets/images/room/ice.png';
import subTile from '../../../assets/images/room/tile-sunk.gif';
import lava from '../../../assets/images/room/lava.gif';
import lava2 from '../../../assets/images/room/lava2.gif';
import lavaCovered from '../../../assets/images/room/lava-covered.png';
import tile from '../../../assets/images/room/tile.png';
import tile2 from '../../../assets/images/room/tile2.png';
import spookyTile from '../../../assets/images/room/spooky-tile.png';
import spookyTile2 from '../../../assets/images/room/spooky-tile2.png';
import goo from '../../../assets/images/room/goo.png';
import pit from '../../../assets/images/room/pit.gif';
import pit2 from '../../../assets/images/room/pit2.gif';
import pitEmpty from '../../../assets/images/room/pit.png';
import pitCovered from '../../../assets/images/room/pit-covered.gif';
import pitCovered2 from '../../../assets/images/room/pit-covered.png';
import wire from '../../../assets/images/room/wire.png';
import fragile from '../../../assets/images/room/fragile.png';
import fragileBreak from '../../../assets/images/room/fragile-breaking.gif';
import doorTile from '../../../assets/images/room/door-tile.png';

//prologue
import woodTile1 from '../../../assets/images/room/tile-wood1.png';
import woodTile2 from '../../../assets/images/room/tile-wood2.png';
import checkeredTile1 from '../../../assets/images/room/tile-checkered1.png';
import checkeredTile2 from '../../../assets/images/room/tile-checkered2.png';

import heater from '../../../assets/images/room/heater.png';
import poster1 from '../../../assets/images/room/z&g.png';
import poster2 from '../../../assets/images/room/bagel.png';
import table1 from '../../../assets/images/room/table1.png';
import table2 from '../../../assets/images/room/table2.png';
import laptop1 from '../../../assets/images/room/laptop1.png';
import laptop2 from '../../../assets/images/room/laptop2.png';
import bookshelf from '../../../assets/images/room/bookshelf.png';
import sink1 from '../../../assets/images/room/sink1.png';
import sink2 from '../../../assets/images/room/sink2.png';
import fridge from '../../../assets/images/room/fridge.png';
import tv1 from '../../../assets/images/room/tv1.png';
import tv2 from '../../../assets/images/room/tv2.png';
import sofa1 from '../../../assets/images/room/sofa1.png';
import sofa2 from '../../../assets/images/room/sofa2.png';
import uglyBed1 from '../../../assets/images/room/uglyBed1.png';
import uglyBed2 from '../../../assets/images/room/uglyBed2.png';
import dresser1 from '../../../assets/images/room/dresser1.png';
import dresser2 from '../../../assets/images/room/dresser2.png';
import coffee from '../../../assets/images/room/coffee.png';

//belts
import northBelt from '../../../assets/images/room/belt-north.gif';
import eastBelt from '../../../assets/images/room/belt-east.gif';
import southBelt from '../../../assets/images/room/belt-south.gif';
import westBelt from '../../../assets/images/room/belt-west.gif';
import beltNorthStop from '../../../assets/images/room/belt-north.png';
import beltEastStop from '../../../assets/images/room/belt-east.png';
import beltSouthStop from '../../../assets/images/room/belt-south.png';
import beltWestStop from '../../../assets/images/room/belt-west.png';

import warp from '../../../assets/images/room/warp.gif';
import warpRed from '../../../assets/images/room/warpRed.gif';
import warpBlue from '../../../assets/images/room/warpBlue.gif';
import warpPurple from '../../../assets/images/room/warpPurple.gif';
import warpGreen from '../../../assets/images/room/warpGreen.gif';
import warpYellow from '../../../assets/images/room/warpYellow.gif';

import core from '../../../assets/images/room/core.gif';

import terminal from '../../../assets/images/room/terminal.gif';
import terminalOff from '../../../assets/images/room/terminal-off.png';
import spookyTerminal from '../../../assets/images/room/spooky-terminal.png';
import mapTerminal from '../../../assets/images/room/map-terminal.gif';
import powerTerminal from '../../../assets/images/room/power-terminal.png';
import powerTerminalOn from '../../../assets/images/room/power-terminal-on.gif';
import powerTerminalOff from '../../../assets/images/room/power-terminal-off.png';

import tank1 from '../../../assets/images/room/cryoTank1.gif';
import tank2 from '../../../assets/images/room/cryoTank2.gif';
import tankE1 from '../../../assets/images/room/cryoTankE1.gif';
import tankE2 from '../../../assets/images/room/cryoTankE2.gif';
import tankD1 from '../../../assets/images/room/cryoTankD1.png';
import tankD2 from '../../../assets/images/room/cryoTankD2.png';
import shelf from '../../../assets/images/room/shelf.png';


import theMachine from '../../../assets/images/room/theMachine.gif';
import theMachineOn from '../../../assets/images/room/theMachineOn.gif';
import machineLeft from '../../../assets/images/room/machine-left.png';
import machineRight from '../../../assets/images/room/machine-right.png';
import robotRust from '../../../assets/images/room/robot-rust.png';

import lightningRight from '../../../assets/images/room/lightningRight.gif';
import lightningRed from '../../../assets/images/room/lightningRed.gif';
import explosion from '../../../assets/images/room/explode.png';

import tube from '../../../assets/images/room/tube-monster1.gif';
import tube2 from '../../../assets/images/room/tube-monster2.gif';
import bigTube1 from '../../../assets/images/room/big-tube1.gif';
import bigTube2 from '../../../assets/images/room/big-tube2.gif';
import bigTube3 from '../../../assets/images/room/big-tube3.gif';
import bigTube2Awake from '../../../assets/images/room/big-tube2-awake.gif';
import bigTube3Awake from '../../../assets/images/room/big-tube3-awake.gif';
import brokenTube1 from '../../../assets/images/room/broken-tube1.png';
import brokenTube2 from '../../../assets/images/room/broken-tube2.png';
import brokenTube3 from '../../../assets/images/room/broken-tube3.png';

import save from '../../../assets/images/items/save.gif';

import window from '../../../assets/images/room/walls/window.png';
import window1Prologue from '../../../assets/images/room/walls/window-prologue.png';
import window2Prologue from '../../../assets/images/room/walls/window2-prologue.png';
import fan from '../../../assets/images/room/walls/wall-fan.gif';

import corner1 from '../../../assets/images/room/walls/wall-corner1.png';
import corner1Alt from '../../../assets/images/room/walls/wall-corner1-alt.png';
import corner1Spooky from '../../../assets/images/room/walls/spooky-wall-corner1.png';
import corner1Prologue from '../../../assets/images/room/walls/wall-corner1-prologue.png';

import corner2 from '../../../assets/images/room/walls/wall-corner2.png';
import corner2Alt from '../../../assets/images/room/walls/wall-corner2-alt.png';
import corner2Spooky from '../../../assets/images/room/walls/spooky-wall-corner2.png';
import corner2Prologue from '../../../assets/images/room/walls/wall-corner2-prologue.png';

import corner3 from '../../../assets/images/room/walls/wall-corner3.png';
import corner3Spooky from '../../../assets/images/room/walls/spooky-wall-corner3.png';
import corner3Prologue from '../../../assets/images/room/walls/wall-corner3-prologue.png';

import corner4 from '../../../assets/images/room/walls/wall-corner4.png';
import corner4Spooky from '../../../assets/images/room/walls/spooky-wall-corner4.png';
import corner4Prologue from '../../../assets/images/room/walls/wall-corner4-prologue.png';

import innerCorner1 from '../../../assets/images/room/walls/wall-inner-corner1.png';
import innerCorner1Spooky from '../../../assets/images/room/walls/spooky-wall-inner-corner1.png';

import innerCorner2 from '../../../assets/images/room/walls/wall-inner-corner2.png';
import innerCorner2Spooky from '../../../assets/images/room/walls/spooky-wall-inner-corner2.png';

import innerCorner3 from '../../../assets/images/room/walls/wall-inner-corner3.png';
import innerCorner3Spooky from '../../../assets/images/room/walls/spooky-wall-inner-corner3.png';
import innerCorner3Alt from '../../../assets/images/room/walls/wall-inner-corner3-alt.png';
import innerCorner3AltSpooky from '../../../assets/images/room/walls/spooky-wall-inner-corner3-alt.png';

import innerCorner4 from '../../../assets/images/room/walls/wall-inner-corner4.png';
import innerCorner4Spooky from '../../../assets/images/room/walls/spooky-wall-inner-corner4.png';
import innerCorner4Alt from '../../../assets/images/room/walls/wall-inner-corner4-alt.png';
import innerCorner4AltSpooky from '../../../assets/images/room/walls/spooky-wall-inner-corner4-alt.png';
import innerCorner4Prologue from '../../../assets/images/room/walls/wall-inner-corner4-prologue.png';

import bottom from '../../../assets/images/room/walls/wall-bottom.png';
import bottomPrologue from '../../../assets/images/room/walls/wall-bottom-prologue.png';

import top from '../../../assets/images/room/walls/wall-top.png';
import topSpooky from '../../../assets/images/room/walls/spooky-wall-top.png';
import topPrologue from '../../../assets/images/room/walls/wall-top-prologue.png';

import brokenLeft from '../../../assets/images/room/walls/spooky-wall-top-broken-left.png';
import brokenRight from '../../../assets/images/room/walls/spooky-wall-top-broken-right.png';

import left from '../../../assets/images/room/walls/wall-left.png';
import leftAlt from '../../../assets/images/room/walls/wall-left-alt.png';
import leftSpooky from '../../../assets/images/room/walls/spooky-wall-left.png';
import leftPrologue from '../../../assets/images/room/walls/wall-left-prologue.png';
import innerLeft from '../../../assets/images/room/walls/wall-inner-left.png';
import innerLeftSpooky from '../../../assets/images/room/walls/spooky-wall-inner-left.png';

import innerRight from '../../../assets/images/room/walls/wall-inner-right.png';
import innerRightSpooky from '../../../assets/images/room/walls/spooky-wall-inner-right.png';
import right from '../../../assets/images/room/walls/wall-right.png';
import rightSpooky from '../../../assets/images/room/walls/spooky-wall-right.png';
import rightPrologue from '../../../assets/images/room/walls/wall-right-prologue.png';

import connectNE from '../../../assets/images/room/walls/wall-connect-top-left.png';
import connectNESpooky from '../../../assets/images/room/walls/spooky-wall-connect-top-left.png';
import connectNE2 from '../../../assets/images/room/walls/wall-connect-top-left2.png';
import connectNE2Spooky from '../../../assets/images/room/walls/spooky-wall-connect-top-left2.png';
import connectNW from '../../../assets/images/room/walls/wall-connect-top-right.png';
import connectNWSpooky from '../../../assets/images/room/walls/spooky-wall-connect-top-right.png';

import leftLong from '../../../assets/images/room/walls/wall-left-long.png';
import rightLong from '../../../assets/images/room/walls/wall-right-long.png';
import doorCorner4 from '../../../assets/images/room/walls/wall-door-corner4.png';

import danger from '../../../assets/images/room/danger.gif';
import curtain from '../../../assets/images/room/curtains.png';


import sign from '../../../assets/images/room/sign-top.png';
import desk1 from '../../../assets/images/room/desk1.png';
import desk2 from '../../../assets/images/room/desk2.png';
import desk3 from '../../../assets/images/room/desk3.png';
import rock from '../../../assets/images/room/rock.png';
import crystal from '../../../assets/images/room/crystal.png';
import crystalShatter from '../../../assets/images/room/crystal-break.gif';
import crystalCrack from '../../../assets/images/room/crystal-crack.gif';
import white from '../../../assets/images/room/white.png';
import phone from '../../../assets/images/room/phone.png';
import phoneRing from '../../../assets/images/room/phone-ring.gif';
import fireplace from '../../../assets/images/room/fireplace.gif';
import books from '../../../assets/images/room/books.png';
import mat from '../../../assets/images/room/mat.png';
import coffeeT from '../../../assets/images/room/table-small.png';

import overlayOld from '../../../assets/images/room/overlay-old.png';

import blockMetal from '../../../assets/images/room/blocks/block-metal.png';
import blockWood from '../../../assets/images/room/blocks/block-wood.png';
import blockWarp from '../../../assets/images/room/blocks/block-warp.gif';
import blockMetalSink from '../../../assets/images/room/blocks/block-metal-sink.gif';
import blockWoodSink from '../../../assets/images/room/blocks/block-wood-sink.gif';
import blockBroken from '../../../assets/images/room/blocks/block-broken.png';
import blockBreaking from '../../../assets/images/room/blocks/block-breaking.png';

import iceChunk from '../../../assets/images/room/iceChunk.png';
import laserDrone from '../../../assets/images/room/laser-drone.gif';

import switchOn from '../../../assets/images/room/switchOn.gif';
import switchOff from '../../../assets/images/room/switchOff.png';
import elecSwitchOn from '../../../assets/images/room/elecswitch-on.png';
import elecSwitchOff from '../../../assets/images/room/elecswitch-off.png';

import platformOffNS from '../../../assets/images/room/platformOffNS.png';
import platformOnNS from '../../../assets/images/room/platformOnNS.gif';
import platformOffEW from '../../../assets/images/room/platformOffEW.png';
import platformOnEW from '../../../assets/images/room/platformOnEW.gif';
//doors
import lockedDoorNorth from '../../../assets/images/room/doors/door-locked-north.png';
import closedDoorNorth from '../../../assets/images/room/doors/door-unlocked-north.png';
import openingDoorNorth from '../../../assets/images/room/doors/door-open-north.gif';
import closingDoorNorth from '../../../assets/images/room/doors/door-close-north.gif';
import openDoorNorth from '../../../assets/images/room/doors/door-opened-north.png';
import frozenDoorNorth from '../../../assets/images/room/doors/door-frozen-north.png';

import lockedDoorEast from '../../../assets/images/room/doors/door-locked-east.png';
import closedDoorEast from '../../../assets/images/room/doors/door-unlocked-east.png';
import openingDoorEast from '../../../assets/images/room/doors/door-open-east.gif';
import closingDoorEast from '../../../assets/images/room/doors/door-close-east.gif';
import openDoorEast from '../../../assets/images/room/doors/door-opened-east.png';

import lockedDoorSouth from '../../../assets/images/room/doors/door-locked-south.png';
import closedDoorSouth from '../../../assets/images/room/doors/door-unlocked-south.png';
import openingDoorSouth from '../../../assets/images/room/doors/door-open-south.gif';
import closingDoorSouth from '../../../assets/images/room/doors/door-close-south.gif';
import openDoorSouth from '../../../assets/images/room/doors/door-opened-south.png';
import frozenDoorSouth from '../../../assets/images/room/doors/door-frozen-south.png';

import lockedDoorWest from '../../../assets/images/room/doors/door-locked-west.png';
import closedDoorWest from '../../../assets/images/room/doors/door-unlocked-west.png';
import openingDoorWest from '../../../assets/images/room/doors/door-open-west.gif';
import closingDoorWest from '../../../assets/images/room/doors/door-close-west.gif';
import openDoorWest from '../../../assets/images/room/doors/door-opened-west.png';

//prologue doors
import closedPrologueDoorNorth from '../../../assets/images/room/doors/door-prologue-north.png';
import openingPrologueDoorNorth from '../../../assets/images/room/doors/door-prologue-north.png';
import closingPrologueDoorNorth from '../../../assets/images/room/doors/door-prologue-north.png';
import openPrologueDoorNorth from '../../../assets/images/room/doors/door-prologue-north.png';

import closedPrologueDoorSouth from '../../../assets/images/room/doors/door-prologue-south.png';
import openingPrologueDoorSouth from '../../../assets/images/room/doors/door-prologue-south.png';
import closingPrologueDoorSouth from '../../../assets/images/room/doors/door-prologue-south.png';
import openPrologueDoorSouth from '../../../assets/images/room/doors/door-prologue-south.png';

//keycard doors
import closedKey1North from '../../../assets/images/room/doors/door-unlocked-north-keycard1.png';
import openingKey1North from '../../../assets/images/room/doors/door-open-north-keycard1.gif';
import closingKey1North from '../../../assets/images/room/doors/door-close-north-keycard1.gif';
import closedKey2North from '../../../assets/images/room/doors/door-unlocked-north-keycard2.png';
import openingKey2North from '../../../assets/images/room/doors/door-open-north-keycard2.gif';
import closingKey2North from '../../../assets/images/room/doors/door-close-north-keycard2.gif';

import closedKey1South from '../../../assets/images/room/doors/door-unlocked-south-keycard1.png';
import openingKey1South from '../../../assets/images/room/doors/door-open-south-keycard1.gif';
import closingKey1South from '../../../assets/images/room/doors/door-close-south-keycard1.gif';
import closedKey2South from '../../../assets/images/room/doors/door-unlocked-south-keycard2.png';
import openingKey2South from '../../../assets/images/room/doors/door-open-south-keycard2.gif';
import closingKey2South from '../../../assets/images/room/doors/door-close-south-keycard2.gif';

import closedKey1East from '../../../assets/images/room/doors/door-unlocked-east-keycard1.png';
import openingKey1East from '../../../assets/images/room/doors/door-open-east-keycard1.gif';
import closingKey1East from '../../../assets/images/room/doors/door-close-east-keycard1.gif';
import closedKey2East from '../../../assets/images/room/doors/door-unlocked-east-keycard2.png';
import openingKey2East from '../../../assets/images/room/doors/door-open-east-keycard2.gif';
import closingKey2East from '../../../assets/images/room/doors/door-close-east-keycard2.gif';

import closedKey1West from '../../../assets/images/room/doors/door-unlocked-west-keycard1.png';
import openingKey1West from '../../../assets/images/room/doors/door-open-west-keycard1.gif';
import closingKey1West from '../../../assets/images/room/doors/door-close-west-keycard1.gif';
import closedKey2West from '../../../assets/images/room/doors/door-unlocked-west-keycard2.png';
import openingKey2West from '../../../assets/images/room/doors/door-open-west-keycard2.gif';
import closingKey2West from '../../../assets/images/room/doors/door-close-west-keycard2.gif';


const sprites = {
  keyCard2Old: <img className="sprite" src={keyCard2Old} width="50" height="50"/>,
  core: <img className="core-sprite" src={core} width="410" height="250"/>,
  eyeball: <img className="sprite" src={eyeball} width="50" height="50"/>,
  eyeballHurt: <img className="sprite" src={eyeballHurt} width="50" height="50"/>,
  tenta: <img className="sprite" src={tenta} width="55" height="60"/>,
  tentaHurt: <img className="sprite" src={tentaHurt} width="55" height="60"/>,
  tentaRise: <img className="sprite" src={tentaRise} width="55" height="60"/>,
  tentaSink: <img className="sprite" src={tentaSink} width="55" height="60"/>,
  pit: <img src={pit} width="50" height="50"/>,
  pit2: <img src={pit2} width="50" height="50"/>,
  pitEmpty: <img src={pitEmpty} width="50" height="50"/>,
  pitCovered: <img src={pitCovered} width="50" height="50"/>,
  pitCovered2: <img src={pitCovered2} width="50" height="50"/>,
  ice: <img src={ice} width="50" height="50"/>,
  subTile: <img src={subTile} width="50" height="50"/>,
  lava: <img src={lava} width="50" height="50"/>,
  lava2: <img src={lava2} width="50" height="50"/>,
  lavaCovered: <img src={lavaCovered} width="50" height="50"/>,
  tile: <img src={tile} width="50" height="50"/>,
  tile2: <img src={tile2} width="50" height="50"/>,
  spookyTile: <img src={spookyTile} width="50" height="50"/>,
  spookyTile2: <img src={spookyTile2} width="50" height="50"/>,
  goo: <img src={goo} width="50" height="50"/>,
  doorTile: <img src={doorTile} width="50" height="50"/>,

  northBelt: <img src={northBelt} width="50" height="50"/>,
  eastBelt: <img src={eastBelt} width="50" height="50"/>,
  southBelt: <img src={southBelt} width="50" height="50"/>,
  westBelt: <img src={westBelt} width="50" height="50"/>,
  northStop: <img src={beltNorthStop} width="50" height="50"/>,
  eastStop: <img src={beltEastStop} width="50" height="50"/>,
  southStop: <img src={beltSouthStop} width="50" height="50"/>,
  westStop: <img src={beltWestStop} width="50" height="50"/>,
  
  warp: <img src={warp} width="50" height="50"/>,
  warpRed: <img src={warpRed} width="50" height="50"/>,
  warpGreen: <img src={warpGreen} width="50" height="50"/>,
  warpPurple: <img src={warpPurple} width="50" height="50"/>,
  warpBlue: <img src={warpBlue} width="50" height="50"/>,
  warpYellow: <img src={warpYellow} width="50" height="50"/>,
  
  fragile: <img src={fragile} width="50" height="50"/>,
  fragileBreak: <img src={fragileBreak} width="50" height="50"/>,

  terminal: <img className="terminal-sprite" src={terminal} width="55" height="55"/>,
  terminalOff: <img className="terminal-sprite" src={terminalOff} width="55" height="55"/>,
  mapTerminal: <img className="terminal-sprite" src={mapTerminal} width="55" height="55"/>,
  spookyTerminal: <img src={spookyTerminal} width="50" height="50"/>,
  powerTerminal: <img className="power-terminal-sprite" src={powerTerminal} width="65" height="65"/>,
  powerTerminalOn: <img className="power-terminal-sprite" src={powerTerminalOn} width="65" height="60"/>,
  powerTerminalOff: <img className="power-terminal-sprite" src={powerTerminalOff} width="65" height="60"/>,

  tank1: <img className="tank-sprite1" src={tank1} width="55" height="100" />,
  tank2: <img className="tank-sprite2" src={tank2} width="55" height="100" />,
  tankE1: <img className="tank-open-sprite1" src={tankE1} width="55" height="120" />,
  tankE2: <img className="tank-open-sprite2" src={tankE2} width="55" height="120" />,
  tankD1: <img className="tank-sprite1" src={tankD1} width="60" height="100" />,
  tankD2: <img className="tank-sprite2" src={tankD2} width="60" height="100" />,
  shelf: <img className="sprite" src={shelf} width="63" height="90"/>,
  theMachine: <img src={theMachine} width="500" height="130"/>,
  theMachineOn: <img className="machine-sprite" src={theMachineOn} width="500" height="130"/>,
  machineLeft: <img className="small-machine-sprite" src={machineLeft} width="50" height="50"/>,
  machineRight: <img className="small-machine-sprite" src={machineRight} width="50" height="50"/>,
  save: <img className="sprite" src={save} width="50" height="50"/>,
  lightningRight: <img className="sprite" src={lightningRight} width="65" height="70"/>,
  lightningRed: <img className="sprite" src={lightningRed} width="65" height="70"/>,
  explosion: <img src={explosion} width="50" height="50"/>,
  tube: <img className="sprite" src={tube} width="65" height="70"/>,
  tube2: <img className="sprite" src={tube2} width="65" height="70"/>,
  save: <img className="sprite" src={save} width="70" height="70"/>,
  bigTube1: <img className="sprite" src={bigTube1} width="76" height="200"/>,
  bigTube2: <img className="sprite" src={bigTube2} width="64" height="200"/>,
  bigTube3: <img className="sprite" src={bigTube3} width="65" height="200"/>,
  bigTube2Awake: <img className="sprite" src={bigTube2Awake} width="70" height="200"/>,
  bigTube3Awake: <img className="sprite" src={bigTube3Awake} width="70" height="200"/>,
  brokenTube1: <img className="tube-1" src={brokenTube1} width="76" height="200"/>,
  brokenTube2: <img className="tube-2" src={brokenTube2} width="64" height="200"/>,
  brokenTube3: <img className="tube-3" src={brokenTube3} width="65" height="200"/>,

  laserDrone: <img className="drone-sprite" src={laserDrone} width="100" height="65"/>,

  corner1: <img src={corner1} width="50" height="50"/>,
  corner1Alt: <img src={corner1Alt} width="50" height="50"/>,
  innerCorner1: <img src={innerCorner1} width="50" height="50"/>,
  corner2: <img src={corner2} width="50" height="50"/>,
  corner2Alt: <img src={corner2Alt} width="50" height="50"/>,
  innerCorner2: <img src={innerCorner2} width="50" height="50"/>,
  corner3: <img src={corner3} width="50" height="50"/>,
  innerCorner3: <img src={innerCorner3} width="50" height="50"/>,
  innerCorner3Alt: <img src={innerCorner3Alt} width="50" height="50"/>,
  corner4: <img src={corner4} width="50" height="50"/>,
  innerCorner4: <img src={innerCorner4} width="50" height="50"/>,
  innerCorner4Alt: <img src={innerCorner4Alt} width="50" height="50"/>,
  top: <img src={top} width="50" height="50"/>,
  bottom: <img src={bottom} width="50" height="50"/>,
  left: <img src={left} width="50" height="50"/>,
  leftAlt: <img src={leftAlt} width="50" height="50"/>,
  innerRight: <img src={innerRight} width="50" height="50"/>,
  innerLeft: <img src={innerLeft} width="50" height="50"/>,
  right: <img src={right} width="50" height="50"/>,
  connectNE: <img src={connectNE} width="50" height="50"/>,
  connectNE2: <img src={connectNE2} width="50" height="50"/>,
  connectNW: <img src={connectNW} width="50" height="50"/>,
  curtain: <img src={curtain} width="50" height="50"/>,

  rock: <img src={rock} width="65" height="65"/>,
  crystal: <img className="sprite" src={crystal} width="65" height="55"/>,
  crystalShatter: <img className="sprite" src={crystalShatter} width="60" height="60"/>,
  crystalCrack: <img className="sprite" src={crystalCrack} width="65" height="55"/>,
  sign: <img src={sign} width="50" height="50"/>,
  desk1: <img className="sprite" src={desk1} width="66" height="65"/>,
  desk2: <img className="sprite" src={desk2} width="66" height="65"/>,
  desk3: <img className="sprite" src={desk3} width="65" height="65"/>,
  robotRust: <img className="sprite" src={robotRust} width="130" height="110"/>,

  window: <img src={window} width="50" height="50"/>,
  fan: <img src={fan} width="50" height="50"/>,
  
  corner1Spooky: <img src={corner1Spooky} width="50" height="50"/>,
  innerCorner1Spooky: <img src={innerCorner1Spooky} width="50" height="50"/>,
  corner2Spooky: <img src={corner2Spooky} width="50" height="50"/>,
  innerCorner2Spooky: <img src={innerCorner2Spooky} width="50" height="50"/>,
  corner3Spooky: <img src={corner3Spooky} width="50" height="50"/>,
  innerCorner3Spooky: <img src={innerCorner3Spooky} width="50" height="50"/>,
  innerCorner3AltSpooky: <img src={innerCorner3AltSpooky} width="50" height="50"/>,
  corner4Spooky: <img src={corner4Spooky} width="50" height="50"/>,
  innerCorner4Spooky: <img src={innerCorner4Spooky} width="50" height="50"/>,
  topSpooky: <img src={topSpooky} width="50" height="50"/>,
  brokenLeftSpooky: <img src={brokenLeft} width="50" height="50"/>,
  brokenRightSpooky: <img src={brokenRight} width="50" height="50"/>,
  bottomSpooky: <img src={topSpooky} width="50" height="50"/>,
  leftSpooky: <img src={leftSpooky} width="50" height="50"/>,
  innerRightSpooky: <img src={innerRightSpooky} width="50" height="50"/>,
  innerLeftSpooky: <img src={innerLeftSpooky} width="50" height="50"/>,
  rightSpooky: <img src={rightSpooky} width="50" height="50"/>,
  connectNESpooky: <img src={connectNESpooky} width="50" height="50"/>,
  connectNE2Spooky: <img src={connectNE2Spooky} width="50" height="50"/>,
  connectNWSpooky: <img src={connectNWSpooky} width="50" height="50"/>,
  innerCorner4AltSpooky: <img src={innerCorner4AltSpooky} width="50" height="50"/>,
  danger: <img src={danger} width="50" height="50"/>,
  
  leftLong: <img className="tall-wall" src={leftLong} width="50" height="70"/>,
  rightLong: <img className="tall-wall" src={rightLong} width="50" height="70"/>,
  doorCorner4: <img className="door-corner" src={doorCorner4} width="50" height="57"/>,

  //dream
  white: <img src={white} width="50" height="50"/>,
  phone: <img className="sprite" src={phone} width="70" height="70"/>,
  phoneRing: <img className="sprite" src={phoneRing} width="70" height="70"/>,
  fireplace: <img className="background-sprite" src={fireplace} width="80" height="60"/>,
  books: <img className="sprite" src={books} width="80" height="60"/>,

  //prologue
  woodTile1: <img src={woodTile1} width="50" height="50"/>,
  woodTile2: <img src={woodTile2} width="50" height="50"/>,
  checkeredTile1: <img src={checkeredTile1} width="50" height="50"/>,
  checkeredTile2: <img src={checkeredTile2} width="50" height="50"/>,

  topPrologue: <img src={topPrologue} width="50" height="50"/>,
  leftPrologue: <img src={leftPrologue} width="50" height="50"/>,
  rightPrologue: <img src={rightPrologue} width="50" height="50"/>,
  corner1Prologue: <img src={corner1Prologue} width="50" height="50"/>,
  corner2Prologue: <img src={corner2Prologue} width="50" height="50"/>,
  corner3Prologue: <img src={corner3Prologue} width="50" height="50"/>,
  corner4Prologue: <img src={corner4Prologue} width="50" height="50"/>,
  window1Prologue: <img src={window1Prologue} width="50" height="50"/>,
  window2Prologue: <img src={window2Prologue} width="50" height="50"/>,
  innerCorner4Prologue: <img src={innerCorner4Prologue} width="50" height="50"/>,
  bottomPrologue: <img src={bottomPrologue} width="50" height="50"/>,

  heater: <img className="heater" src={heater} width="60" height="50"/>, 
  poster1: <img className="poster" src={poster1} width="47" height="40"/>, 
  poster2: <img className="poster" src={poster2} width="47" height="40"/>, 
  table1: <img className="table1" src={table1} width="65" height="90"/>, 
  table2: <img className="table2" src={table2} width="53" height="90"/>, 
  laptop1: <img className="laptop1" src={laptop1} width="50" height="90"/>, 
  laptop2: <img className="laptop2" src={laptop2} width="50" height="90"/>, 
  bookshelf: <img className="bookshelf" src={bookshelf} width="52" height="90"/>, 
  sink1: <img className="sink1" src={sink1} width="55" height="80"/>, 
  sink2: <img className="sink2" src={sink2} width="55" height="80"/>, 
  fridge: <img className="fridge" src={fridge} width="63" height="85"/>, 
  tv1: <img className="tv1" src={tv1} width="50" height="90"/>, 
  tv2: <img className="tv2" src={tv2} width="50" height="90"/>, 
  sofa1: <img className="sofa1" src={sofa1} width="55" height="90"/>, 
  sofa2: <img className="sofa2" src={sofa2} width="55" height="90"/>, 
  bed1: <img className="bed1" src={uglyBed1} width="52" height="75"/>, 
  bed2: <img className="bed2" src={uglyBed2} width="52" height="75"/>, 
  dresser1: <img className="dresser" src={dresser1} width="65" height="70"/>, 
  dresser2: <img className="dresser" src={dresser2} width="65" height="70"/>,
  mat: <img className="mat" src={mat} width="45" height="20"/>, 
  coffeeT: <img className="table-small" src={coffeeT} width="60" height="80"/>, 
  coffee: <img className="coffee" src={coffee} width="50" height="85"/>,

  //filter
  overlayOld: <img src={overlayOld} width="50" height="50"/>,

  //blocks
  blockMetal:  <img className="sprite" src={blockMetal} width="62" height="60"/>,
  blockWood:  <img className="sprite" src={blockWood} width="60" height="60"/>,
  blockWarp:  <img className="sprite" src={blockWarp} width="60" height="60"/>,
  blockMetalSink: <img className="sprite" src={blockMetalSink} width="60" height="60"/>,
  blockWoodSink: <img className="sprite" src={blockWoodSink} width="60" height="60"/>,
  blockBroken: <img  src={blockBroken} width="50" height="50"/>,
  blockBreaking: <img  src={blockBreaking} width="70" height="70"/>,
 
  iceChunk: <img src={iceChunk} width="60" height="60"/>,
  //switches
  switchOff: <img className="switch-sprite" src={switchOff} width="50" height="50"/>,
  switchOn: <img className="switch-sprite" src={switchOn} width="50" height="50"/>,
  elecSwitchOn: <img className="sprite" src={elecSwitchOn} width="75" height="60"/>,
  elecSwitchOff: <img className="sprite" src={elecSwitchOff} width="75" height="60"/>,
  //platforms
  platformOffNS: <img src={platformOffNS} width="50" height="50"/>,
  platformOnNS: <img src={platformOnNS} width="50" height="50"/>,
  platformOffEW: <img src={platformOffEW} width="50" height="50"/>,
  platformOnEW: <img src={platformOnEW} width="50" height="50"/>,
  //doors
  lockedDoorNorth: <img src={lockedDoorNorth} width="50" height="49.7"/>,
  closedDoorNorth: <img src={closedDoorNorth} width="50" height="49.7"/>,
  openingDoorNorth: <img src={openingDoorNorth} width="50" height="49.7"/>,
  closingDoorNorth: <img src={closingDoorNorth} width="50" height="49.7"/>,
  openDoorNorth: <img src={openDoorNorth} width="50" height="49.7"/>,
  closedDoorSouthFrozen: <img src={frozenDoorNorth} width="50" height="49.7"/>,

  lockedDoorEast: <img src={lockedDoorEast} width="50" height="75"/>,
  closedDoorEast: <img src={closedDoorEast} width="50" height="75"/>,
  openingDoorEast: <img src={openingDoorEast} width="50" height="75"/>,
  closingDoorEast: <img src={closingDoorEast} width="50" height="75"/>,
  openDoorEast: <img src={openDoorEast} width="50" height="75"/>,

  lockedDoorSouth: <img src={lockedDoorSouth} width="50" height="47"/>,
  closedDoorSouth: <img src={closedDoorSouth} width="50" height="47"/>,
  openingDoorSouth: <img src={openingDoorSouth} width="50" height="47"/>,
  closingDoorSouth: <img src={closingDoorSouth} width="50" height="47"/>,
  openDoorSouth: <img src={openDoorSouth} width="50" height="47"/>,
  closedDoorSouthFrozen: <img src={frozenDoorSouth} width="50" height="47"/>,

  lockedDoorWest: <img src={lockedDoorWest} width="50" height="75"/>,
  closedDoorWest: <img src={closedDoorWest} width="50" height="75"/>,
  openingDoorWest: <img src={openingDoorWest} width="50" height="75"/>,
  closingDoorWest: <img src={closingDoorWest} width="50" height="75"/>,
  openDoorWest: <img src={openDoorWest} width="50" height="75"/>,
  //prologue doors 
  closedPrologueDoorNorth: <img src={closedPrologueDoorNorth} width="50" height="49.8"/>,
  openingPrologueDoorNorth: <img src={openingPrologueDoorNorth} width="50" height="49.8"/>,
  closingPrologueDoorNorth: <img src={closingPrologueDoorNorth} width="50" height="49.8"/>,
  openPrologueDoorNorth: <img src={openPrologueDoorNorth} width="50" height="49.8"/>,
  
  closedPrologueDoorSouth: <img src={closedPrologueDoorSouth} width="50" height="47"/>,
  openingPrologueDoorSouth: <img src={closedPrologueDoorSouth} width="50" height="47"/>,
  closingPrologueDoorSouth: <img src={closedPrologueDoorSouth} width="50" height="47"/>,
  openPrologueDoorSouth: <img src={closedPrologueDoorSouth} width="50" height="47"/>,
  //keycard doors
  closedDoorNorthKeyCard1: <img src={closedKey1North} width="50" height="49.8"/>,
  openingDoorNorthKeyCard1: <img src={openingKey1North} width="50" height="49.8"/>,
  closingDoorNorthKeyCard1: <img src={closingKey1North} width="50" height="49.8"/>,
  closedDoorNorthKeyCard2: <img src={closedKey2North} width="50" height="49.8"/>,
  openingDoorNorthKeyCard2: <img src={openingKey2North} width="50" height="49.8"/>,
  closingDoorNorthKeyCard2: <img src={closingKey2North} width="50" height="49.8"/>,

  closedDoorEastKeyCard1: <img src={closedKey1East} width="50" height="75"/>,
  openingDoorEastKeyCard1: <img src={openingKey1East} width="50" height="75"/>,
  closingDoorEastKeyCard1: <img src={closingKey1East} width="50" height="75"/>,
  closedDoorEastKeyCard2: <img src={closedKey2East} width="50" height="75"/>,
  openingDoorEastKeyCard2: <img src={openingKey2East} width="50" height="75"/>,
  closingDoorEastKeyCard2: <img src={closingKey2East} width="50" height="75"/>,

  closedDoorSouthKeyCard1: <img src={closedKey1South} width="50" height="47"/>,
  openingDoorSouthKeyCard1: <img src={openingKey1South} width="50" height="47"/>,
  closingDoorSouthKeyCard1: <img src={closingKey1South} width="50" height="47"/>,
  closedDoorSouthKeyCard2: <img src={closedKey2South} width="50" height="47"/>,
  openingDoorSouthKeyCard2: <img src={openingKey2South} width="50" height="47"/>,
  closingDoorSouthKeyCard2: <img src={closingKey2South} width="50" height="47"/>,
  
  closedDoorWestKeyCard1: <img src={closedKey1West} width="50" height="75"/>,
  openingDoorWestKeyCard1: <img src={openingKey1West} width="50" height="75"/>,
  closingDoorWestKeyCard1: <img src={closingKey1West} width="50" height="75"/>,
  closedDoorWestKeyCard2: <img src={closedKey2West} width="50" height="75"/>,
  openingDoorWestKeyCard2: <img src={openingKey2West} width="50" height="75"/>,
  closingDoorWestKeyCard2: <img src={closingKey2West} width="50" height="75"/>,
};

export default sprites;
