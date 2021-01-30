import React from 'react';

import eyeball from '../../../assets/images/room/eyeball.gif';
import eyeballHurt from '../../../assets/images/room/eyeball-damage.gif';
import tenta from '../../../assets/images/room/tenta.gif';
import tentaHurt from '../../../assets/images/room/tenta-damage.gif';
import tentaRise from '../../../assets/images/room/tenta-rise.gif';
import tentaSink from '../../../assets/images/room/tenta-sink.gif';

import ice from '../../../assets/images/room/ice.png';
import lava from '../../../assets/images/room/lava.gif';
import lava2 from '../../../assets/images/room/lava2.gif';
import lavaPipe from '../../../assets/images/room/lava-pipe.gif';
import lavaCovered from '../../../assets/images/room/lava-covered.png';
import tile from '../../../assets/images/room/tile.png';
import tile2 from '../../../assets/images/room/tile2.png';
import tileSunk from '../../../assets/images/room/tile-sunk.gif';
import spookyTile from '../../../assets/images/room/spooky-tile.png';
import spookyTile2 from '../../../assets/images/room/spooky-tile2.png';
import goo from '../../../assets/images/room/goo.png';
import goo2 from '../../../assets/images/room/goo2.png';
import pit from '../../../assets/images/room/pit.gif';
import pitLava from '../../../assets/images/room/pit-lava.gif';
import pitRise from '../../../assets/images/room/pitRise.gif';
import pit2 from '../../../assets/images/room/pit2.gif';
import pitEmpty from '../../../assets/images/room/pit.png';
import pitSpooky from '../../../assets/images/room/pit-spooky.png';
import pitCovered from '../../../assets/images/room/pit-covered.gif';
import pitCovered2 from '../../../assets/images/room/pit-covered.png';
import fragile from '../../../assets/images/room/fragile.png';
import fragileBreak from '../../../assets/images/room/fragile-breaking.gif';
import doorTile from '../../../assets/images/room/door-tile.png';

import riseTileUp from '../../../assets/images/room/tile-move-up.png';
import riseTileDown from '../../../assets/images/room/tile-move-down.png';
import riseTileRise from '../../../assets/images/room/tile-move-rise.gif';
import riseTileSink from '../../../assets/images/room/tile-move-sink.gif';

import wound1 from '../../../assets/images/room/wound1.gif';
import wound2 from '../../../assets/images/room/wound2.gif';
import wound3 from '../../../assets/images/room/wound3.gif';
import woundClose from '../../../assets/images/room/wound-close.gif';
import woundClosed from '../../../assets/images/room/wound-closed.png';
import troopOff1 from '../../../assets/images/enemies/troop-off1.png';
import troopOff2 from '../../../assets/images/enemies/troop-off2.png';

import wreath from '../../../assets/images/room/wreath.png';
import funeralTable1 from '../../../assets/images/room/funeral-table1.gif';
import funeralTable2 from '../../../assets/images/room/funeral-table2.png';
import funeralSign from '../../../assets/images/room/funeral-sign.png';

import topConnectMetal from '../../../assets/images/room/walls/wall-top-metal-connect.png';
import topConnectRigLeft from  '../../../assets/images/room/walls/wall-top-rig-connect-left.png';
import topConnectRigRight from  '../../../assets/images/room/walls/wall-top-rig-connect-right.png';

import rigTile1 from '../../../assets/images/room/tile-rig1.png';
import rigTile2 from '../../../assets/images/room/tile-rig2.png';
import rigBottom from '../../../assets/images/room/walls/wall-bottom-rig.png';
import rigCorner1 from '../../../assets/images/room/walls/wall-corner1-rig.png';
import rigCorner2 from '../../../assets/images/room/walls/wall-corner2-rig.png';
import rigCorner3 from '../../../assets/images/room/walls/wall-corner3-rig.png';
import rigCorner4 from '../../../assets/images/room/walls/wall-corner4-rig.png';
import rigInnerCorner3 from '../../../assets/images/room/walls/wall-top-rig-inner-corner3.png';
import rigInnerCorner4 from '../../../assets/images/room/walls/wall-top-rig-inner-corner4.png';
import rigCorner1Alt from '../../../assets/images/room/walls/wall-corner1-alt-rig.png';
import rigCorner2Alt from '../../../assets/images/room/walls/wall-corner2-alt-rig.png';
import rigTop from '../../../assets/images/room/walls/wall-top-rig.png';
import rigLeft from '../../../assets/images/room/walls/wall-right-rig.png';
import rigRight from '../../../assets/images/room/walls/wall-left-rig.png';
import metalPit from '../../../assets/images/room/pit-metal.gif';
import metalLeg from '../../../assets/images/room/pit-metal-leg.gif';
import metalTile from '../../../assets/images/room/tile-metal.gif';
import metalBottom from '../../../assets/images/room/walls/wall-metal-bottom.png';
import metalTop from '../../../assets/images/room/walls/wall-metal-top.png';
import metalRight from '../../../assets/images/room/walls/wall-metal-right.png';
import metalLeft from '../../../assets/images/room/walls/wall-metal-left.png';
import metalBridgeRight from '../../../assets/images/room/walls/wall-metal-bridge-right.gif';
import metalBridgeLeft from '../../../assets/images/room/walls/wall-metal-bridge-left.gif';
import metalCorner1 from '../../../assets/images/room/walls/wall-metal-corner1.png';
import metalCorner2 from '../../../assets/images/room/walls/wall-metal-corner2.png';
import metalCorner3 from '../../../assets/images/room/walls/wall-metal-corner3.png';
import metalCorner4 from '../../../assets/images/room/walls/wall-metal-corner4.png';
import metalCorner1Alt from '../../../assets/images/room/walls/wall-metal-corner1-alt.png';
import metalCorner2Alt from '../../../assets/images/room/walls/wall-metal-corner2-alt.png';

//prologue
import stairs from '../../../assets/images/room/stairs.png';
import stairsWest from '../../../assets/images/room/stairs-west.png';
import railing from '../../../assets/images/room/railing.png';
import railing2 from '../../../assets/images/room/railing2.png';
import railing3 from '../../../assets/images/room/railing3.png';
import stairsWall from '../../../assets/images/room/walls/wall-stairs.png';
import stoneTile from '../../../assets/images/room/tile-stone.png';
import stoneTile2 from '../../../assets/images/room/tile-stone2.png';
import woodTile1 from '../../../assets/images/room/tile-wood1.png';
import woodTile2 from '../../../assets/images/room/tile-wood2.png';
import checkeredTile1 from '../../../assets/images/room/tile-checkered1.png';
import checkeredTile2 from '../../../assets/images/room/tile-checkered2.png';
import rugTile from '../../../assets/images/room/tile-rug.png';
import rugTileNorth from '../../../assets/images/room/tile-rug-north.png';
import rugTileEast from '../../../assets/images/room/tile-rug-east.png';
import rugTileSouth from '../../../assets/images/room/tile-rug-south.png';
import rugTileWest from '../../../assets/images/room/tile-rug-west.png';
import rugTileCorner1 from '../../../assets/images/room/tile-rug-corner1.png';
import rugTileCorner2 from '../../../assets/images/room/tile-rug-corner2.png';
import rugTileCorner3 from '../../../assets/images/room/tile-rug-corner3.png';
import rugTileCorner4 from '../../../assets/images/room/tile-rug-corner4.png';
import rugRed from '../../../assets/images/room/rug-red.png';
import rugGreen1 from '../../../assets/images/room/rug-green1.png';
import rugGreen2 from '../../../assets/images/room/rug-green2.png';
import inkCenter from '../../../assets/images/room/ink-center.gif'
import inkCenter2 from '../../../assets/images/room/ink-center2.gif'
import inkNorth from '../../../assets/images/room/ink-north1.gif'
import inkEast from '../../../assets/images/room/ink-east1.gif'
import inkWest from '../../../assets/images/room/ink-west1.gif'

import heater from '../../../assets/images/room/heater.png';
import poster1 from '../../../assets/images/room/z&g.png';
import poster2 from '../../../assets/images/room/bagel.png';
import table1 from '../../../assets/images/room/table1.png';
import table1Alt from '../../../assets/images/room/table1-alt.png';
import table2 from '../../../assets/images/room/table2.png';
import vest from '../../../assets/images/room/vest.png';
import laptop1 from '../../../assets/images/room/laptop1.png';
import laptop2 from '../../../assets/images/room/laptop2.png';
import bookshelf from '../../../assets/images/room/bookshelf.png';
import sink1 from '../../../assets/images/room/sink1.png';
import sink2 from '../../../assets/images/room/sink2.png';
import fridge from '../../../assets/images/room/fridge.png';
import fridgeOpen from '../../../assets/images/room/fridge-open.png';
import fridgeDoor from '../../../assets/images/room/fridge-door.png';
import tv1 from '../../../assets/images/room/tv1.png';
import tv2 from '../../../assets/images/room/tv2.png';
import sofa1 from '../../../assets/images/room/sofa1.png';
import sofa2 from '../../../assets/images/room/sofa2.png';
import sofaAlt1 from '../../../assets/images/room/sofa1-alt.png';
import sofaAlt2 from '../../../assets/images/room/sofa2-alt.png';
import uglyBed1 from '../../../assets/images/room/uglyBed1.png';
import uglyBed2 from '../../../assets/images/room/uglyBed2.png';
import dresser1 from '../../../assets/images/room/dresser1.png';
import dresser1Alt from '../../../assets/images/room/dresser1-alt.png';
import dresser2 from '../../../assets/images/room/dresser2.png';
import coffee from '../../../assets/images/room/coffee.png';
import mat from '../../../assets/images/room/mat.png';
import coffeeT from '../../../assets/images/room/table-small.png';
import coffeeTAlt from '../../../assets/images/room/table-small-alt.gif';

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


import computer1 from '../../../assets/images/room/computer1.gif';
import computer2 from '../../../assets/images/room/computer2.png';
import computer3 from '../../../assets/images/room/computer3.gif';

import computer1Off from '../../../assets/images/room/computer1-off.png';
import computer2Off from '../../../assets/images/room/computer2-off.png';
import computer3Off from '../../../assets/images/room/computer3-off.png';

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
import tankBroken1 from '../../../assets/images/room/cryoTankBroken1.gif';
import tankBroken2 from '../../../assets/images/room/cryoTankBroken2.gif';

import machineLeft from '../../../assets/images/room/machine-left.gif';
import machineRight from '../../../assets/images/room/machine-right.gif';
import machineLeftOff from '../../../assets/images/room/machine-left-off.png';
import machineRightOff from '../../../assets/images/room/machine-right-off.png';
import robotRust from '../../../assets/images/room/robot-rust.png';

import lightningRight from '../../../assets/images/room/lightningRight.gif';
import lightningRed from '../../../assets/images/room/lightningRed.gif';
import lightningRed2 from '../../../assets/images/room/lightningRed2.gif';
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
import windowSpooky from '../../../assets/images/room/walls/spooky-window.png';
import window1Prologue from '../../../assets/images/room/walls/window-prologue.png';
import window2Prologue from '../../../assets/images/room/walls/window2-prologue.png';
import window1EveningPrologue from '../../../assets/images/room/walls/window-evening-prologue.png';
import window2EveningPrologue from '../../../assets/images/room/walls/window2-evening-prologue.png';
import window1ClosedPrologue from '../../../assets/images/room/walls/window-prologue-closed.png';
import window2ClosedPrologue from '../../../assets/images/room/walls/window2-prologue-closed.png';

import windowAlt1Prologue from '../../../assets/images/room/walls/window-alt-prologue.png';
import windowAlt2Prologue from '../../../assets/images/room/walls/window2-alt-prologue.png';
import windowRedA1Prologue from '../../../assets/images/room/walls/window-alt-prologue2.gif';
import windowRedA2Prologue from '../../../assets/images/room/walls/window2-alt-prologue2.gif';
import windowRedB1Prologue from '../../../assets/images/room/walls/window-alt-prologue3.png';
import windowRedB2Prologue from '../../../assets/images/room/walls/window2-alt-prologue3.png';
import windowRedC1Prologue from '../../../assets/images/room/walls/window-alt-prologue4.png';
import windowRedC2Prologue from '../../../assets/images/room/walls/window2-alt-prologue4.png'; 





import fan from '../../../assets/images/room/walls/wall-fan.gif';
import fanSpooky from '../../../assets/images/room/walls/spooky-wall-fan.png';

import corner1 from '../../../assets/images/room/walls/wall-corner1.png';
import corner1Alt from '../../../assets/images/room/walls/wall-corner1-alt.png';
import corner1AltPrologue from '../../../assets/images/room/walls/wall-corner1-alt-prologue.png';
import corner1Spooky from '../../../assets/images/room/walls/spooky-wall-corner1.png';
import corner1AltSpooky from '../../../assets/images/room/walls/spooky-wall-corner1-alt.png';
import corner1Prologue from '../../../assets/images/room/walls/wall-corner1-prologue.png';

import corner2 from '../../../assets/images/room/walls/wall-corner2.png';
import corner2Alt from '../../../assets/images/room/walls/wall-corner2-alt.png';
import corner2AltPrologue from '../../../assets/images/room/walls/wall-corner2-alt-prologue.png';
import corner2Spooky from '../../../assets/images/room/walls/spooky-wall-corner2.png';
import corner2AltSpooky from '../../../assets/images/room/walls/spooky-wall-corner2-alt.png';
import corner2Prologue from '../../../assets/images/room/walls/wall-corner2-prologue.png';

import corner3 from '../../../assets/images/room/walls/wall-corner3.png';
import corner3Alt from '../../../assets/images/room/walls/wall-corner3-alt.png';
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
import innerCorner3AltPrologue from '../../../assets/images/room/walls/wall-inner-corner3-alt-prologue.png';
import innerCorner4AltPrologue from '../../../assets/images/room/walls/wall-inner-corner4-alt-prologue.png';
import innerCorner4AltWindowPrologue from '../../../assets/images/room/walls/window2-alt-corner4-prologue.png';

import bottom from '../../../assets/images/room/walls/wall-bottom.png';
import bottomPrologue from '../../../assets/images/room/walls/wall-bottom-prologue.png';
import bottomSpooky from '../../../assets/images/room/walls/spooky-wall-bottom.png';

import top from '../../../assets/images/room/walls/wall-top.png';
import topLeft from '../../../assets/images/room/walls/wall-top-left.png';
import topRight from '../../../assets/images/room/walls/wall-top-right.png';
import topDoor2AltPrologue from '../../../assets/images/room/walls/wall-top-door2-alt-prologue.png';
import firePrologue from '../../../assets/images/room/walls/wall-fire-prologue.png';
import exitPrologue from '../../../assets/images/room/walls/wall-exit.gif';
import bulletinPrologue from '../../../assets/images/room/walls/wall-bulletin-prologue.png';
import bulletin2Prologue from '../../../assets/images/room/walls/wall-bulletin2-prologue.gif';
import topSpooky from '../../../assets/images/room/walls/spooky-wall-top.png';
import topPrologue from '../../../assets/images/room/walls/wall-top-prologue.png';
import topAltPrologue from '../../../assets/images/room/walls/wall-top-alt-prologue.png';
import topAltPrologue2 from '../../../assets/images/room/walls/wall-top-alt-prologue2.gif';
import pitPrologue from '../../../assets/images/room/walls/pit-prologue.gif';
import pit2Prologue from '../../../assets/images/room/walls/pit2-prologue.gif';

import topFuneralPrologue from '../../../assets/images/room/walls/wall-top-funeral.png';
import topFuneralPicturePrologue from '../../../assets/images/room/walls/wall-top-funeral-picture.png';
import topFuneralDoorLeftPrologue from '../../../assets/images/room/walls/wall-top-funeral-door-left.png';
import topFuneralDoorRightPrologue from '../../../assets/images/room/walls/wall-top-funeral-door-right.png';

import elevator from '../../../assets/images/room/walls/wall-elevator.png';

import brokenLeft from '../../../assets/images/room/walls/wall-broken-left.png';
import brokenRight from '../../../assets/images/room/walls/wall-broken-right.png';

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
import doorCorner4 from '../../../assets/images/room/walls/wall-door-corner4.png';

import powerTile from '../../../assets/images/room/tile-power.gif';
import powerRight1 from '../../../assets/images/room/walls/wall-corner2-power.gif';
import powerRight2 from '../../../assets/images/room/walls/wall-corner2-power2.gif';
import powerRight3 from '../../../assets/images/room/walls/wall-corner2-power3.gif';
import powerLeft1 from '../../../assets/images/room/walls/wall-corner1-power.gif';
import powerLeft2 from '../../../assets/images/room/walls/wall-corner1-power2.gif';
import powerLeft3 from '../../../assets/images/room/walls/wall-corner1-power3.gif';
import powerLeftCorner from '../../../assets/images/room/walls/power-left-corner4.gif';

import powerTileOff from '../../../assets/images/room/tile-power-off.gif';
import powerLeft1Off from '../../../assets/images/room/walls/wall-corner1-power-off.png';
import powerLeft2Off from '../../../assets/images/room/walls/wall-corner1-power2-off.png';
import powerLeft3Off from '../../../assets/images/room/walls/power-left-off.png';
import powerLeftCornerOff from '../../../assets/images/room/walls/power-left-off-corner4.png';
import powerRight1Off from '../../../assets/images/room/walls/wall-corner2-power-off.png';
import powerRight2Off from '../../../assets/images/room/walls/wall-corner2-power2-off.png';
import powerRight3Off from '../../../assets/images/room/walls/power-right-off.png';

import powerTileSpooky from '../../../assets/images/room/spooky-tile-power.png';
import powerRightSpooky1 from '../../../assets/images/room/walls/spooky-power-right1.png';
import powerRightSpooky2 from '../../../assets/images/room/walls/spooky-power-right2.png';
import powerRightSpooky3 from '../../../assets/images/room/walls/spooky-power-right3.png';
import powerLeftSpooky1 from '../../../assets/images/room/walls/spooky-power-left1.png';
import powerLeftSpooky2 from '../../../assets/images/room/walls/spooky-power-left2.png';
import powerLeftSpooky3 from '../../../assets/images/room/walls/spooky-power-left3.png';

import danger from '../../../assets/images/room/danger.gif';
import curtain from '../../../assets/images/room/curtains.png';


import signSpooky from '../../../assets/images/room/spooky-sign.png';
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

import overlayOld from '../../../assets/images/room/overlay-old.png';

import blockMetal from '../../../assets/images/room/blocks/block-metal.png';
import blockWood from '../../../assets/images/room/blocks/block-wood.png';
import blockWarp from '../../../assets/images/room/blocks/block-warp.gif';
import blockMetalSink from '../../../assets/images/room/blocks/block-metal-sink.gif';
import blockWoodSink from '../../../assets/images/room/blocks/block-wood-sink.gif';
import blockBroken from '../../../assets/images/room/blocks/block-broken.png';
import blockBreaking from '../../../assets/images/room/blocks/block-breaking.png';

import iceChunk from '../../../assets/images/room/iceChunk.png';
import icePipeWest from '../../../assets/images/room/cold-pipe.gif';
import icePipeEast from '../../../assets/images/room/cold-pipe-east.gif';
import icePipeWestBroken from '../../../assets/images/room/cold-pipe-broken.gif';
import icePipeEastBroken from '../../../assets/images/room/cold-pipe-east-broken.gif';
import laserDrone from '../../../assets/images/room/laser-drone.gif';
import laserDroneFrozen from '../../../assets/images/room/laser-drone-frozen.png';

import switchOn from '../../../assets/images/room/switchOn.gif';
import switchOff from '../../../assets/images/room/switchOff.png';
import spookySwitchOn from '../../../assets/images/room/switchOnSpooky.gif';
import spookySwitchOff from '../../../assets/images/room/switchOffSpooky.png';
import elecSwitchOn from '../../../assets/images/room/elecswitch-on.png';
import elecSwitchBroken from '../../../assets/images/room/elecswitch-broken.png';
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
//spooky doors
import lockedDoorEastSpooky from '../../../assets/images/room/doors/door-locked-east-spooky.png';
import closedDoorEastSpooky from '../../../assets/images/room/doors/door-unlocked-east-spooky.png';
import openingDoorEastSpooky from '../../../assets/images/room/doors/door-open-east-spooky.gif';
import closingDoorEastSpooky from '../../../assets/images/room/doors/door-close-east-spooky.gif';
import openDoorEastSpooky from '../../../assets/images/room/doors/door-opened-east-spooky.png';

import lockedDoorWestSpooky from '../../../assets/images/room/doors/door-locked-west-spooky.png';
import closedDoorWestSpooky from '../../../assets/images/room/doors/door-unlocked-west-spooky.png';
import openingDoorWestSpooky from '../../../assets/images/room/doors/door-open-west-spooky.gif';
import closingDoorWestSpooky from '../../../assets/images/room/doors/door-close-west-spooky.gif';
import openDoorWestSpooky from '../../../assets/images/room/doors/door-opened-west-spooky.png';

//prologue doors
import closedPrologueDoorNorth from '../../../assets/images/room/doors/door-prologue-north.png';
import openPrologueDoorNorth from '../../../assets/images/room/doors/door-prologue-north-open.png';

import closedPrologueDoorNorth1 from '../../../assets/images/room/doors/door-prologue-north-1.png';
import openPrologueDoorNorth1 from '../../../assets/images/room/doors/door-prologue-north-open-1.png';

import closedPrologueDoorNorth2 from '../../../assets/images/room/doors/door-prologue-north-2.png';
import openPrologueDoorNorth2 from '../../../assets/images/room/doors/door-prologue-north-open-2.png';

import closedPrologueDoorSouth from '../../../assets/images/room/doors/door-prologue-south.png';

import closedPrologueDoorSouth1 from '../../../assets/images/room/doors/door-prologue-south-1.png';

import closedPrologueDoorSouth2 from '../../../assets/images/room/doors/door-prologue-south-2.png';

import closedPrologueDoorWest from '../../../assets/images/room/doors/door-prologue-west.png';

import closedPrologueDoorEast from '../../../assets/images/room/doors/door-prologue-east.png';

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

import waterfallLeft from '../../../assets/images/room/waterfall-left.gif';
import waterfallRight from '../../../assets/images/room/waterfall-right.gif';
import waterfall from '../../../assets/images/room/waterfall.gif';
import waterdrop from '../../../assets/images/room/waterdrop.png';
import rubble from '../../../assets/images/room/rubble.png';
import grass from '../../../assets/images/room/grass.png';
import grassLeft from '../../../assets/images/room/grass-steps-left.png';
import grassRight from '../../../assets/images/room/grass-steps-right.png';
import grassLeft2 from '../../../assets/images/room/grass-steps-left2.png';
import grassRight2 from '../../../assets/images/room/grass-steps-right2.png';
import grassTop from '../../../assets/images/room/grass-top.png';
import brick from '../../../assets/images/room/walls/brick.png';
import brickLeft from '../../../assets/images/room/walls/brick-rail-left.png';
import brickRight from '../../../assets/images/room/walls/brick-rail-right.png';
import bush from '../../../assets/images/room/walls/bush.png';
import bushLeft from '../../../assets/images/room/walls/bush-left.png';
import bushRight from '../../../assets/images/room/walls/bush-right.png';

const sprites = {
  wreath: <img className="wreath" src={wreath} width="65" height="90"/>,
  funeralTable1: <img className="funeral-table1" src={funeralTable1} width="60" height="80"/>,
  funeralTable2: <img className="funeral-table2" src={funeralTable2} width="60" height="80"/>,
  funeralSign: <img className="funeral-sign" src={funeralSign} width="160" height="85"/>,
  grass: <img src={grass} width="50" height="50"/>,  
  grassTop: <img src={grassTop} width="50" height="50"/>,
  grassLeft: <img src={grassLeft} width="50" height="50"/>,
  grassRight: <img src={grassRight} width="50" height="50"/>,
  grassLeft2: <img src={grassLeft2} width="50" height="50"/>,
  grassRight2: <img src={grassRight2} width="50" height="50"/>,
  brickPrologue: <img src={brick} className="wall-top" width="50" height="83"/>,
  brickLeftPrologue: <img src={brickLeft} className="wall-top" width="50" height="83"/>,
  brickRightPrologue: <img src={brickRight} className="wall-top" width="50" height="83"/>,
  bushPrologue: <img src={bush} className="wall-top" width="50" height="83"/>,
  bushLeftPrologue: <img src={bushLeft} className="wall-top" width="50" height="83"/>,
  bushRightPrologue: <img src={bushRight} className="wall-top" width="50" height="83"/>,

  waterfallLeft:  <img className="waterfall-left" src={waterfallLeft} width="30" height="60"/>,
  waterfallRight:  <img className="waterfall-right" src={waterfallRight} width="30" height="60"/>,
  waterfall:  <img className="waterfall" src={waterfall} width="65" height="200"/>,
  rubble: <img className="rubble" src={rubble} width="30" height="30"/>,
  waterdrop:  <img className="waterdrop" src={waterdrop} width="7" height="7"/>,
  
  wound1: <img className="wound1" src={wound1} width="65" height="150"/>,    
  wound2: <img className="wound2" src={wound2} width="65" height="150"/>,    
  wound3: <img className="wound3" src={wound3} width="65" height="150"/>,    
  woundClose: <img className="wound" src={woundClose} width="195" height="150"/>,
  woundClosed: <img className="wound-closed" src={woundClosed} width="50" height="50"/>,
  
  troopOff1: <img className="troop-off1" src={troopOff1} width="68.5" height="150"/>,
  troopOff2: <img className="troop-off2" src={troopOff2} width="68.5" height="150"/>,

  computer1: <img className="computer" src={computer1} width="50" height="120"/>,
  computer2: <img className="computer" src={computer2} width="50" height="120"/>,
  computer3: <img className="computer" src={computer3} width="50" height="120"/>,
  
  computer1Off: <img className="computer" src={computer1Off} width="50" height="120"/>,
  computer2Off: <img className="computer" src={computer2Off} width="50" height="120"/>,
  computer3Off: <img className="computer" src={computer3Off} width="50" height="120"/>,

  eyeball: <img className="eye-sprite" src={eyeball} width="50" height="50"/>,
  eyeballHurt: <img className="eye-sprite" src={eyeballHurt} width="50" height="50"/>,
  tenta: <img className="tenta" src={tenta} width="55" height="60"/>,
  tentaHurt: <img className="tenta" src={tentaHurt} width="55" height="60"/>,
  tentaRise: <img className="tenta" src={tentaRise} width="55" height="60"/>,
  tentaSink: <img className="tenta" src={tentaSink} width="55" height="60"/>,
  pit: <img src={pit} width="50" height="50"/>,
  pitLava: <img src={pitLava} width="50" height="50"/>,
  pitRise: <img src={pitRise} width="50" height="50"/>,
  pit2: <img src={pit2} width="50" height="50"/>,
  pitEmpty: <img src={pitEmpty} width="50" height="50"/>,
  pitSpooky: <img src={pitSpooky} width="50" height="50"/>,
  pitCovered: <img src={pitCovered} width="50" height="50"/>,
  pitCovered2: <img src={pitCovered2} width="50" height="50"/>,
  ice: <img src={ice} width="50" height="50"/>,
  lava: <img src={lava} width="50" height="50"/>,
  lavaPipe: <img src={lavaPipe} width="50" height="50"/>,
  lava2: <img src={lava2} width="50" height="50"/>,
  lavaCovered: <img src={lavaCovered} width="50" height="50"/>,
  tile: <img src={tile} width="50" height="50"/>,
  tile2: <img src={tile2} width="50" height="50"/>,
  tileSunk: <img src={tileSunk} width="50" height="50"/>,
  spookyTile: <img src={spookyTile} width="50" height="50"/>,
  spookyTile2: <img src={spookyTile2} width="50" height="50"/>,
  goo: <img src={goo} width="50" height="50"/>,
  goo2: <img src={goo2} width="50" height="50"/>,
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

  riseTileUp: <img className="rise-tile" src={riseTileUp} width="50" height="72"/>,
  riseTileDown: <img className="rise-tile-down" src={riseTileDown} width="50" height="50"/>,
  riseTileRise: <img className="rise-tile" src={riseTileRise} width="50" height="72"/>,
  riseTileSink: <img className="rise-tile" src={riseTileSink} width="50" height="72"/>,

  terminal: <img className="terminal-sprite" src={terminal} width="55" height="55"/>,
  terminalOff: <img className="terminal-sprite" src={terminalOff} width="55" height="55"/>,
  mapTerminal: <img className="terminal-sprite" src={mapTerminal} width="55" height="55"/>,
  spookyTerminal: <img src={spookyTerminal} width="50" height="50"/>,
  powerTerminal: <img className="power-terminal-sprite" src={powerTerminal} width="65" height="65"/>,
  powerTerminalOn: <img className="power-terminal-sprite" src={powerTerminalOn} width="65" height="60"/>,
  powerTerminalOff: <img className="power-terminal-sprite" src={powerTerminalOff} width="65" height="60"/>,

  tank1: <img className="tank-sprite1" src={tank1} width="50" height="100" />,
  tank2: <img className="tank-sprite2" src={tank2} width="50" height="100" />,
  tankE1: <img className="tank-open-sprite1" src={tankE1} width="50" height="120" />,
  tankE2: <img className="tank-open-sprite2" src={tankE2} width="50" height="120" />,
  tankD1: <img className="tank-sprite1" src={tankD1} width="50" height="100" />,
  tankD2: <img className="tank-sprite2" src={tankD2} width="50" height="100" />,
  tankBroken1: <img className="tank-open-sprite1" src={tankBroken1} width="50" height="100" />,
  tankBroken2: <img className="tank-open-sprite2" src={tankBroken2} width="50" height="100" />,

  
  machineLeft: <img className="machine-left" src={machineLeft} width="50" height="90"/>,
  machineRight: <img className="machine-right" src={machineRight} width="50" height="90"/>,
  machineLeftOff: <img className="machine-left" src={machineLeftOff} width="50" height="90"/>,
  machineRightOff: <img className="machine-right" src={machineRightOff} width="50" height="90"/>,

  lightningRight: <img className="sprite" src={lightningRight} width="65" height="70"/>,
  lightningRed: <img className="lightning" src={lightningRed} width="160" height="70"/>,
  lightningRed2: <img className="lightning2" src={lightningRed2} width="160" height="70"/>,
  explosion: <img src={explosion} width="50" height="50"/>,
  tube: <img className="sprite" src={tube} width="65" height="70"/>,
  tube2: <img className="sprite" src={tube2} width="65" height="70"/>,
  save: <img className="save-sprite" src={save} width="70" height="70"/>,
  bigTube1: <img className="sprite" src={bigTube1} width="76" height="200"/>,
  bigTube2: <img className="sprite" src={bigTube2} width="64" height="200"/>,
  bigTube3: <img className="sprite" src={bigTube3} width="65" height="200"/>,
  bigTube2Awake: <img className="sprite" src={bigTube2Awake} width="70" height="200"/>,
  bigTube3Awake: <img className="sprite" src={bigTube3Awake} width="70" height="200"/>,
  brokenTube1: <img className="tube-1" src={brokenTube1} width="76" height="200"/>,
  brokenTube2: <img className="tube-2" src={brokenTube2} width="64" height="200"/>,
  brokenTube3: <img className="tube-3" src={brokenTube3} width="65" height="200"/>,

  laserDrone: <img className="drone-sprite" src={laserDrone} width="90" height="55"/>,
  laserDroneFrozen: <img className="drone-sprite" src={laserDroneFrozen} width="90" height="55"/>,

  corner1: <img className="wall-top" src={corner1} width="50" height="83"/>,
  corner1Alt: <img className="wall-bottom" src={corner1Alt} width="50" height="83"/>,
  innerCorner1: <img className="wall-top" src={innerCorner1} width="50" height="83"/>,
  corner2: <img className="wall-top" src={corner2} width="50" height="83"/>,
  corner2Alt: <img className="wall-bottom" src={corner2Alt} width="50" height="83"/>,
  innerCorner2: <img className="wall-top" src={innerCorner2} width="50" height="83"/>,
  corner3: <img className="wall-bottom" src={corner3} width="50" height="50"/>,
  corner3Alt: <img src={corner3Alt} width="50" height="50"/>,
  innerCorner3: <img className="wall-top" src={innerCorner3} width="50" height="83"/>,
  innerCorner3Alt: <img src={innerCorner3Alt} width="50" height="50"/>,
  corner4: <img className="wall-bottom" src={corner4} width="50" height="50"/>,
  innerCorner4: <img className="wall-top" src={innerCorner4} width="50" height="83"/>,
  innerCorner4Alt: <img src={innerCorner4Alt} width="50" height="50"/>,
  top: <img className="wall-top" src={top} width="50" height="83"/>,
  topLeft: <img className="wall-top" src={topLeft} width="50" height="83"/>,
  topRight: <img className="wall-top" src={topRight} width="50" height="83"/>,
  bottom: <img className="wall-bottom" src={bottom} width="50" height="50"/>,
  left: <img className="wall-bottom" src={left} width="50" height="55"/>,
  leftAlt: <img src={leftAlt} width="50" height="50"/>,
  innerRight: <img src={innerRight} width="50" height="50"/>,
  innerLeft: <img src={innerLeft} width="50" height="50"/>,
  right: <img className="wall-bottom"  src={right} width="50" height="55"/>,
  connectNE: <img className="wall-top" src={connectNE} width="50" height="83"/>,
  connectNE2: <img className="wall-top" src={connectNE2} width="50" height="83"/>,
  connectNW: <img className="wall-top" src={connectNW} width="50" height="83"/>,
  curtain: <img className="wall-top" src={curtain} width="50" height="83"/>,

  rock: <img src={rock} width="65" height="65"/>,
  crystal: <img className="sprite" src={crystal} width="65" height="55"/>,
  crystalShatter: <img className="sprite" src={crystalShatter} width="60" height="60"/>,
  crystalCrack: <img className="sprite" src={crystalCrack} width="65" height="55"/>,
  sign: <img className="wall-top" src={sign} width="50" height="83"/>,
  signSpooky: <img className="wall-top" src={signSpooky} width="50" height="83"/>,
  desk1: <img className="sprite" src={desk1} width="66" height="75"/>,
  desk2: <img className="sprite" src={desk2} width="66" height="75"/>,
  desk3: <img className="sprite" src={desk3} width="65" height="75"/>,
  robotRust: <img className="sprite" src={robotRust} width="130" height="110"/>,

  window: <img className="wall-top" src={window} width="50" height="83"/>,
  windowSpooky: <img className="wall-top" src={windowSpooky} width="50" height="83"/>,
  fan: <img className="wall-top" src={fan} width="50" height="83"/>,
  fanSpooky: <img className="wall-top" src={fanSpooky} width="50" height="83"/>,
  
  corner1Spooky: <img className="wall-top" src={corner1Spooky} width="50" height="83"/>,
  corner1AltSpooky: <img className="wall-bottom" src={corner1AltSpooky} width="50" height="83"/>,
  innerCorner1Spooky: <img className="wall-top" src={innerCorner1Spooky} width="50" height="83"/>,
  corner2Spooky: <img className="wall-top" src={corner2Spooky} width="50" height="83"/>,
  corner2AltSpooky: <img className="wall-bottom" src={corner2AltSpooky} width="50" height="83"/>,
  innerCorner2Spooky: <img className="wall-top" src={innerCorner2Spooky} width="50" height="50"/>,
  corner3Spooky: <img className="wall-bottom" src={corner3Spooky} width="50" height="50"/>,
  innerCorner3Spooky: <img className="wall-top" src={innerCorner3Spooky} width="50" height="83"/>,
  innerCorner3AltSpooky: <img className="wall-bottom" src={innerCorner3AltSpooky} width="50" height="50"/>,
  corner4Spooky: <img className="wall-bottom" src={corner4Spooky} width="50" height="50"/>,
  innerCorner4Spooky: <img  className="wall-top" src={innerCorner4Spooky} width="50" height="83"/>,
  topSpooky: <img className="wall-top" src={topSpooky} width="50" height="83"/>,
  brokenLeft: <img className="wall-top" src={brokenLeft} width="50" height="83"/>,
  brokenRight: <img className="wall-top" src={brokenRight} width="50" height="83"/>,
  bottomSpooky: <img className="wall-bottom" src={bottomSpooky} width="50" height="50"/>,
  leftSpooky: <img className="wall-bottom"  src={leftSpooky} width="50" height="55"/>,
  innerRightSpooky: <img src={innerRightSpooky} width="50" height="50"/>,
  innerLeftSpooky: <img src={innerLeftSpooky} width="50" height="50"/>,
  rightSpooky: <img className="wall-bottom"  src={rightSpooky} width="50" height="55"/>,
  connectNESpooky: <img src={connectNESpooky} width="50" height="50"/>,
  connectNE2Spooky: <img src={connectNE2Spooky} width="50" height="50"/>,
  connectNWSpooky: <img src={connectNWSpooky} width="50" height="50"/>,
  innerCorner4AltSpooky: <img src={innerCorner4AltSpooky} width="50" height="50"/>,
  danger: <img src={danger} width="50" height="50"/>,

  powerTileSpooky: <img className="wall-top" src={powerTileSpooky} width="50" height="83"/>,
  powerRight1Spooky: <img className="wall-top" src={powerRightSpooky1} width="50" height="83"/>,
  powerRight2Spooky: <img className="wall-top" src={powerRightSpooky2} width="50" height="83"/>,
  powerRight3Spooky: <img className="wall-top" src={powerRightSpooky3} width="50" height="83"/>,
  powerLeft1Spooky: <img className="wall-top" src={powerLeftSpooky1} width="50" height="83"/>,
  powerLeft2Spooky: <img className="wall-top" src={powerLeftSpooky2} width="50" height="83"/>,
  powerLeft3Spooky: <img className="wall-top" src={powerLeftSpooky3} width="50" height="83"/>,

  elevator: <img className="wall-top" src={elevator} width="50" height="82"/>,
  doorCorner4: <img className="door-corner" src={doorCorner4} width="50" height="57"/>,

  //power
  powerTile: <img className="wall-top" src={powerTile} width="50" height="83"/>,
  powerRight1: <img className="wall-top" src={powerRight1} width="50" height="83"/>,
  powerRight2: <img className="wall-top" src={powerRight2} width="50" height="83"/>,
  powerRight3: <img className="wall-top" src={powerRight3} width="50" height="83"/>,
  powerLeft1: <img className="wall-top" src={powerLeft1} width="50" height="83"/>,
  powerLeft2: <img className="wall-top" src={powerLeft2} width="50" height="83"/>,
  powerLeft3: <img className="wall-top" src={powerLeft3} width="50" height="83"/>,
  powerLeftCorner: <img className="wall-top" src={powerLeftCorner} width="50" height="83"/>,

  powerTileOff: <img className="wall-top" src={powerTileOff} width="50" height="83"/>,
  powerRight1Off: <img className="wall-top" src={powerRight1Off} width="50" height="83"/>,
  powerRight2Off: <img className="wall-top" src={powerRight2Off} width="50" height="83"/>,
  powerRight3Off: <img className="wall-top" src={powerRight3Off} width="50" height="83"/>,
  powerLeft1Off: <img className="wall-top" src={powerLeft1Off} width="50" height="83"/>,
  powerLeft2Off: <img className="wall-top" src={powerLeft2Off} width="50" height="83"/>,
  powerLeft3Off: <img className="wall-top" src={powerLeft3Off} width="50" height="83"/>,
  powerLeftCornerOff: <img className="wall-top" src={powerLeftCornerOff} width="50" height="83"/>,
  //dream
  white: <img src={white} width="50" height="50"/>,
  phone: <img className="sprite" src={phone} width="70" height="70"/>,
  phoneRing: <img className="sprite" src={phoneRing} width="70" height="70"/>,
  fireplace: <img className="background-sprite" src={fireplace} width="80" height="60"/>,

  topConnectMetal: <img className="wall-top" src={topConnectMetal} width="50" height="83"/>,
  topConnectRigLeft: <img className="wall-top" src={topConnectRigLeft} width="50" height="83"/>,
  topConnectRigRight: <img className="wall-top" src={topConnectRigRight} width="50" height="83"/>,
  metalTile: <img src={metalTile} width="50" height="50"/>,
  metalBottom: <img src={metalBottom} width="50" height="50"/>,
  metalTop: <img src={metalTop} width="50" height="50"/>,
  rigTile1: <img src={rigTile1} width="50" height="50"/>,
  rigTile2: <img src={rigTile2} width="50" height="50"/>,
  rigTop: <img className="wall-top" src={rigTop} width="50" height="83"/>,
  rigLeft: <img className="wall-top" src={rigLeft} width="50" height="50"/>,
  rigRight: <img className="wall-top" src={rigRight} width="50" height="50"/>,
  rigBottom: <img className="wall-bottom" src={rigBottom} width="50" height="50"/>,
  rigCorner1: <img className="wall-top" src={rigCorner1} width="50" height="83"/>,
  rigCorner2: <img className="wall-top" src={rigCorner2} width="50" height="83"/>,
  rigCorner3: <img className="wall-bottom" src={rigCorner3} width="50" height="50"/>,
  rigCorner4: <img className="wall-bottom" src={rigCorner4} width="50" height="50"/>,
  rigInnerCorner3: <img className="wall-top" src={rigInnerCorner3} width="50" height="83"/>,
  rigInnerCorner4: <img className="wall-top" src={rigInnerCorner4} width="50" height="83"/>,
  rigCorner1Alt: <img className="wall-bottom" src={rigCorner1Alt} width="50" height="83"/>,
  rigCorner2Alt: <img className="wall-bottom" src={rigCorner2Alt} width="50" height="83"/>,
  metalPit: <img src={metalPit} width="50" height="50"/>,
  metalLeg: <img src={metalLeg} width="50" height="50"/>,
  metalRight: <img src={metalRight} width="50" height="50"/>,
  metalLeft: <img src={metalLeft} width="50" height="50"/>,
  metalBridgeRight: <img src={metalBridgeRight} width="50" height="50"/>,
  metalBridgeLeft: <img src={metalBridgeLeft} width="50" height="50"/>,
  metalCorner1: <img src={metalCorner1} width="50" height="50"/>,
  metalCorner2: <img src={metalCorner2} width="50" height="50"/>,
  metalCorner3: <img src={metalCorner3} width="50" height="50"/>,
  metalCorner4: <img src={metalCorner4} width="50" height="50"/>,
  metalCorner1Alt: <img  src={metalCorner1Alt} width="50" height="50"/>,
  metalCorner2Alt: <img  src={metalCorner2Alt} width="50" height="50"/>,

  //prologue
  stoneTile: <img src={stoneTile} width="50" height="50"/>,
  stoneTile2: <img src={stoneTile2} width="50" height="50"/>,
  stairsSouth: <img src={stairs} width="50" height="50"/>,
  stairsWest: <img className="wall-top" src={stairsWest} width="50" height="83"/>,
  railing: <img className="railing" src={railing} width="51" height="35"/>,
  railing2: <img className="railing" src={railing2} width="51" height="35"/>,
  railing3: <img className="railing3" src={railing3} width="70" height="25"/>,
  stairsWallPrologue: <img src={stairsWall} width="50" height="50"/>,
  woodTile1: <img src={woodTile1} width="50" height="50"/>,
  woodTile2: <img src={woodTile2} width="50" height="50"/>,
  checkeredTile1: <img src={checkeredTile1} width="50" height="50"/>,
  checkeredTile2: <img src={checkeredTile2} width="50" height="50"/>,
  rugTile: <img src={rugTile} width="50" height="50"/>,
  rugTileNorth: <img src={rugTileNorth} width="50" height="50"/>,
  rugTileEast: <img src={rugTileEast} width="50" height="50"/>,
  rugTileSouth: <img src={rugTileSouth} width="50" height="50"/>,
  rugTileWest: <img src={rugTileWest} width="50" height="50"/>,
  rugTileCorner1: <img src={rugTileCorner1} width="50" height="50"/>,
  rugTileCorner2: <img src={rugTileCorner2} width="50" height="50"/>,
  rugTileCorner3: <img src={rugTileCorner3} width="50" height="50"/>,
  rugTileCorner4: <img src={rugTileCorner4} width="50" height="50"/>,
  rugRed: <img src={rugRed} width="50" height="50"/>,
  rugGreen1: <img src={rugGreen1} width="50" height="50"/>,
  rugGreen2: <img src={rugGreen2} width="50" height="50"/>,

  inkCenter: <img className="ink" src={inkCenter} width="50" height="57"/>,
  inkCenter2: <img className="ink" src={inkCenter2} width="50" height="57"/>,
  inkNorth: <img className="ink" src={inkNorth} width="50" height="50"/>,
  inkWest: <img className="ink" src={inkWest} width="50" height="50"/>,
  inkEast: <img className="ink" src={inkEast} width="50" height="50"/>,

  topPrologue: <img className="wall-top" src={topPrologue} width="50" height="83"/>,
  topAltPrologue: <img className="wall-top" src={topAltPrologue} width="50" height="83"/>,
  topAlt2Prologue: <img className="wall-top" src={topAltPrologue2} width="50" height="83"/>,
  firePrologue: <img className="wall-top" src={firePrologue} width="50" height="83"/>,
  exitPrologue: <img className="wall-top" src={exitPrologue} width="50" height="83"/>,
  topDoor2AltPrologue: <img src={topDoor2AltPrologue} width="50" height="50"/>,
  bulletinPrologue: <img className="wall-top" src={bulletinPrologue} width="50" height="83"/>,
  bulletin2Prologue: <img className="wall-top" src={bulletin2Prologue} width="50" height="83"/>,
  leftPrologue: <img className="wall-bottom" src={leftPrologue} width="50" height="55"/>,
  rightPrologue: <img className="wall-bottom" src={rightPrologue} width="50" height="55"/>,
  corner1Prologue: <img className="wall-top" src={corner1Prologue} width="50" height="83"/>,
  corner1AltPrologue: <img className="wall-bottom" src={corner1AltPrologue} width="50" height="83"/>,
  corner2Prologue: <img className="wall-top" src={corner2Prologue} width="50" height="83"/>,
  corner2AltPrologue: <img className="wall-bottom" src={corner2AltPrologue} width="50" height="83"/>,
  corner3Prologue: <img className="wall-bottom" src={corner3Prologue} width="50" height="57"/>,
  corner4Prologue: <img className="wall-bottom" src={corner4Prologue} width="50" height="57"/>,
  window1Prologue: <img className="wall-top" src={window1Prologue} width="50" height="83"/>,
  window2Prologue: <img className="wall-top" src={window2Prologue} width="50" height="83"/>,
  window1ClosedPrologue: <img className="wall-top" src={window1ClosedPrologue} width="50" height="83"/>,
  window2ClosedPrologue: <img className="wall-top" src={window2ClosedPrologue} width="50" height="83"/>,
  window1EveningPrologue: <img className="wall-top" src={window1EveningPrologue} width="50" height="83"/>,
  window2EveningPrologue: <img className="wall-top" src={window2EveningPrologue} width="50" height="83"/>,
  innerCorner4Prologue: <img className="wall-top" src={innerCorner4Prologue} width="50" height="83"/>,
  innerCorner3AltPrologue: <img className="wall-top" src={innerCorner3AltPrologue} width="50" height="83"/>,
  innerCorner4AltPrologue: <img className="wall-top" src={innerCorner4AltPrologue} width="50" height="83"/>,
  innerCorner4AltWindowPrologue: <img className="wall-top" src={innerCorner4AltWindowPrologue} width="50" height="83"/>,
  
  bottomPrologue: <img className="wall-bottom" src={bottomPrologue} width="50" height="57"/>,
  pitPrologue: <img src={pitPrologue} width="50" height="50"/>,
  pit2Prologue: <img src={pit2Prologue} width="50" height="50"/>,
  topFuneralPrologue: <img className="wall-top" src={topFuneralPrologue} width="50" height="83"/>,
  topFuneralPicturePrologue: <img className="wall-top" src={topFuneralPicturePrologue} width="50" height="83"/>,
  topFuneralDoorLeftPrologue: <img className="wall-top" src={topFuneralDoorLeftPrologue} width="50" height="83"/>,
  topFuneralDoorRightPrologue: <img className="wall-top" src={topFuneralDoorRightPrologue} width="50" height="83"/>,

  windowAlt1Prologue: <img className="wall-top" src={windowAlt1Prologue} width="50" height="83"/>,
  windowAlt2Prologue: <img className="wall-top" src={windowAlt2Prologue} width="50" height="83"/>,
  windowRedA1Prologue: <img className="wall-top" src={windowRedA1Prologue} width="50" height="83"/>,
  windowRedA2Prologue: <img className="wall-top" src={windowRedA2Prologue} width="50" height="83"/>,
  windowRedB1Prologue: <img src={windowRedB1Prologue} width="50" height="50"/>,
  windowRedB2Prologue: <img src={windowRedB2Prologue} width="50" height="50"/>,
  windowRedC1Prologue: <img src={windowRedC1Prologue} width="50" height="50"/>,
  windowRedC2Prologue: <img src={windowRedC2Prologue} width="50" height="50"/>,

  vest: <img className="vest" id="prologue-float" src={vest} width="50" height="50"/>, 
  heater: <img className="heater" src={heater} width="60" height="50"/>, 
  poster1: <img className="poster" src={poster1} width="47" height="40"/>, 
  poster2: <img className="poster" src={poster2} width="47" height="40"/>, 
  table1: <img className="table1" src={table1} width="65" height="90"/>, 
  table1Alt: <img className="table1" src={table1Alt} width="65" height="90"/>,
  table2: <img className="table2" src={table2} width="53" height="90"/>, 
  laptop1: <img className="laptop1" src={laptop1} width="50" height="90"/>, 
  laptop2: <img className="laptop2" src={laptop2} width="50" height="90"/>, 
  bookshelf: <img className="bookshelf" src={bookshelf} width="52" height="90"/>, 
  sink1: <img className="sink1" src={sink1} width="55" height="80"/>, 
  sink2: <img className="sink2" src={sink2} width="55" height="80"/>, 
  fridge: <img className="fridge" src={fridge} width="63" height="85"/>, 
  fridgeOpen: <img className="fridge-open" src={fridgeOpen} width="57" height="100"/>, 
  fridgeDoor: <img className="fridge-door" src={fridgeDoor} width="50" height="100"/>, 
  tv1: <img className="tv1" src={tv1} width="50" height="90"/>, 
  tv2: <img className="tv2" src={tv2} width="50" height="90"/>, 
  sofa1: <img className="sofa1" src={sofa1} width="53" height="90"/>, 
  sofa2: <img className="sofa2" src={sofa2} width="53" height="90"/>, 
  sofaAlt1: <img className="sofa1" src={sofaAlt1} width="53" height="90"/>, 
  sofaAlt2: <img className="sofa2" src={sofaAlt2} width="53" height="90"/>,
  bed1: <img className="bed1" src={uglyBed1} width="52" height="75"/>, 
  bed2: <img className="bed2" src={uglyBed2} width="52" height="75"/>, 
  bed1Alt: <img className="bed1-alt" id="prologue-float" src={uglyBed1} width="52" height="75"/>, 
  bed2Alt: <img className="bed2-alt" id="prologue-float" src={uglyBed2} width="52" height="75"/>, 
  dresser1: <img className="dresser" src={dresser1} width="65" height="70"/>, 
  dresser1Alt: <img className="dresser" src={dresser1Alt} width="65" height="70"/>, 
  dresser2: <img className="dresser" src={dresser2} width="65" height="70"/>,
  mat: <img className="mat" src={mat} width="45" height="20"/>, 
  coffeeT: <img className="table-small" src={coffeeT} width="70" height="80"/>, 
  coffeeTAlt: <img className="table-small" id="prologue-float" src={coffeeTAlt} width="70" height="80"/>, 
  coffee: <img className="coffee" src={coffee} width="50" height="85"/>,

  //filter
  overlayOld: <img src={overlayOld} width="50" height="50"/>,

  //blocks
  blockMetal:  <img className="block-sprite" src={blockMetal} width="63" height="63"/>,
  blockMetalRise:  <img className="block-sprite" id="sprite-rise" src={blockMetal} width="63" height="63"/>,
  blockMetalFall:  <img className="block-sprite" id="sprite-sink" src={blockMetal} width="63" height="63"/>,
  
  blockWood:  <img className="block-sprite"  src={blockWood} width="63" height="63"/>,
  blockWoodRise:  <img className="block-sprite"  id="sprite-rise" src={blockWood} width="63" height="63"/>,
  blockWoodFall:  <img className="block-sprite"  id="sprite-sink" src={blockWood} width="63" height="63"/>,

  blockWarp:  <img className="block-sprite"  src={blockWarp} width="63" height="63"/>,
  blockMetalSink: <img className="block-sprite"  src={blockMetalSink} width="63" height="63"/>,
  blockWoodSink: <img className="block-sprite"  src={blockWoodSink} width="63" height="63"/>,
  blockBroken: <img  src={blockBroken} width="50" height="50"/>,
  blockBreaking: <img  src={blockBreaking} width="60" height="70"/>,
 
  icePipeWest: <img id="ice-pipe" src={icePipeWest} width="50" height="45"/>,
  icePipeEast: <img id="ice-pipe" src={icePipeEast} width="50" height="45"/>,
  icePipeWestBroken: <img id="ice-pipe" src={icePipeWestBroken} width="50" height="45"/>,
  icePipeEastBroken: <img id="ice-pipe" src={icePipeEastBroken} width="50" height="45"/>,
  iceChunk: <img id="ice-chunk" src={iceChunk} width="50" height="55"/>,
  //switches
  switchOff: <img src={switchOff} width="50" height="50"/>,
  switchOn: <img src={switchOn} width="50" height="50"/>,
  spookySwitchOff: <img src={spookySwitchOff} width="50" height="50"/>,
  spookySwitchOn: <img src={spookySwitchOn} width="50" height="50"/>,
  elecSwitchOn: <img className="sprite" src={elecSwitchOn} width="75" height="60"/>,
  elecSwitchOff: <img className="sprite" src={elecSwitchOff} width="75" height="60"/>,
  elecSwitchBroken: <img className="sprite" src={elecSwitchBroken} width="75" height="60"/>,
  //platforms
  platformOffNS: <img src={platformOffNS} width="50" height="50"/>,
  platformOnNS: <img src={platformOnNS} width="50" height="50"/>,
  platformOffEW: <img src={platformOffEW} width="50" height="50"/>,
  platformOnEW: <img src={platformOnEW} width="50" height="50"/>,
  //doors
  lockedDoorNorth: <img className="door-top" src={lockedDoorNorth} width="50" height="82"/>,
  closedDoorNorth: <img className="door-top" src={closedDoorNorth} width="50" height="82"/>,
  openingDoorNorth: <img className="door-top" src={openingDoorNorth} width="50" height="82"/>,
  closingDoorNorth: <img className="door-top" src={closingDoorNorth} width="50" height="82"/>,
  openDoorNorth: <img className="door-top" src={openDoorNorth} width="50" height="82"/>,
  closedDoorNorthFrozen: <img className="door-top" src={frozenDoorNorth} width="50" height="82"/>,

  lockedDoorEast: <img src={lockedDoorEast} width="50" height="80"/>,
  closedDoorEast: <img src={closedDoorEast} width="50" height="80"/>,
  openingDoorEast: <img src={openingDoorEast} width="50" height="80"/>,
  closingDoorEast: <img src={closingDoorEast} width="50" height="80"/>,
  openDoorEast: <img src={openDoorEast} width="50" height="80"/>,

  lockedDoorSouth: <img className="door-bottom" src={lockedDoorSouth} width="50" height="47"/>,
  closedDoorSouth: <img className="door-bottom" src={closedDoorSouth} width="50" height="47"/>,
  openingDoorSouth: <img className="door-bottom" src={openingDoorSouth} width="50" height="47"/>,
  closingDoorSouth: <img className="door-bottom" src={closingDoorSouth} width="50" height="47"/>,
  openDoorSouth: <img className="door-bottom" src={openDoorSouth} width="50" height="47"/>,

  closedDoorSouthFrozen: <img className="door-bottom" src={frozenDoorSouth} width="50" height="47"/>,

  lockedDoorWest: <img src={lockedDoorWest} width="50" height="75"/>,
  closedDoorWest: <img src={closedDoorWest} width="50" height="82"/>,
  openingDoorWest: <img src={openingDoorWest} width="50" height="75"/>,
  closingDoorWest: <img src={closingDoorWest} width="50" height="75"/>,
  openDoorWest: <img src={openDoorWest} width="50" height="75"/>,
  //spooky doors
  lockedDoorEastSpooky: <img src={lockedDoorEastSpooky} width="50" height="75"/>,
  closedDoorEastSpooky: <img src={closedDoorEastSpooky} width="50" height="75"/>,
  openingDoorEastSpooky: <img src={openingDoorEastSpooky} width="50" height="75"/>,
  closingDoorEastSpooky: <img src={closingDoorEastSpooky} width="50" height="75"/>,
  openDoorEastSpooky: <img src={openDoorEastSpooky} width="50" height="75"/>,

  lockedDoorWestSpooky: <img src={lockedDoorWestSpooky} width="50" height="75"/>,
  closedDoorWestSpooky: <img src={closedDoorWestSpooky} width="50" height="75"/>,
  openingDoorWestSpooky: <img src={openingDoorWestSpooky} width="50" height="75"/>,
  closingDoorWestSpooky: <img src={closingDoorWestSpooky} width="50" height="75"/>,
  openDoorWestSpooky: <img src={openDoorWestSpooky} width="50" height="75"/>,
  //prologue doors 
  closedPrologueDoorNorth: <img className="prologue-door-top" src={closedPrologueDoorNorth} width="50" height="69"/>,
  openPrologueDoorNorth: <img className="prologue-door-top" src={openPrologueDoorNorth} width="50" height="69"/>,

  closedPrologueDoorNorth1: <img className="prologue-door-top" src={closedPrologueDoorNorth1} width="50" height="69"/>,
  openPrologueDoorNorth1: <img className="prologue-door-top" src={openPrologueDoorNorth1} width="50" height="69"/>,

  closedPrologueDoorNorth2: <img className="prologue-door-top" src={closedPrologueDoorNorth2} width="50" height="69"/>,
  openPrologueDoorNorth2: <img className="prologue-door-top" src={openPrologueDoorNorth2} width="50" height="69"/>,
  
  closedPrologueDoorSouth: <img className="prologue-door-south" src={closedPrologueDoorSouth} width="50" height="57"/>,
  
  closedPrologueDoorSouth1: <img className="prologue-door-south" src={closedPrologueDoorSouth1} width="50" height="57"/>,
  closedPrologueDoorSouth2: <img className="prologue-door-south" src={closedPrologueDoorSouth2} width="50" height="57"/>,

  closedPrologueDoorWest: <img className="prologue-door-west" src={closedPrologueDoorWest} width="68" height="75"/>,
  
  closedPrologueDoorEast: <img className="prologue-door-east" src={closedPrologueDoorEast} width="68" height="75"/>,
  //keycard doors
  closedDoorNorthKeyCard1: <img className="door-top" src={closedKey1North} width="50" height="82"/>,
  openingDoorNorthKeyCard1: <img className="door-top" src={openingKey1North} width="50" height="82"/>,
  closingDoorNorthKeyCard1: <img className="door-top" src={closingKey1North} width="50" height="82"/>,
  closedDoorNorthKeyCard2: <img className="door-top" src={closedKey2North} width="50" height="82"/>,
  openingDoorNorthKeyCard2: <img className="door-top" src={openingKey2North} width="50" height="82"/>,
  closingDoorNorthKeyCard2: <img className="door-top" src={closingKey2North} width="50" height="82"/>,

  closedDoorEastKeyCard1: <img src={closedKey1East} width="50" height="75"/>,
  openingDoorEastKeyCard1: <img src={openingKey1East} width="50" height="75"/>,
  closingDoorEastKeyCard1: <img src={closingKey1East} width="50" height="75"/>,
  closedDoorEastKeyCard2: <img src={closedKey2East} width="50" height="75"/>,
  openingDoorEastKeyCard2: <img src={openingKey2East} width="50" height="75"/>,
  closingDoorEastKeyCard2: <img src={closingKey2East} width="50" height="75"/>,

  closedDoorSouthKeyCard1: <img className="door-bottom" src={closedKey1South} width="50" height="47"/>,
  openingDoorSouthKeyCard1: <img className="door-bottom" src={openingKey1South} width="50" height="47"/>,
  closingDoorSouthKeyCard1: <img className="door-bottom" src={closingKey1South} width="50" height="47"/>,
  closedDoorSouthKeyCard2: <img className="door-bottom" src={closedKey2South} width="50" height="47"/>,
  openingDoorSouthKeyCard2: <img className="door-bottom" src={openingKey2South} width="50" height="47"/>,
  closingDoorSouthKeyCard2: <img className="door-bottom" src={closingKey2South} width="50" height="47"/>,
  
  closedDoorWestKeyCard1: <img src={closedKey1West} width="50" height="75"/>,
  openingDoorWestKeyCard1: <img src={openingKey1West} width="50" height="75"/>,
  closingDoorWestKeyCard1: <img src={closingKey1West} width="50" height="75"/>,
  closedDoorWestKeyCard2: <img src={closedKey2West} width="50" height="75"/>,
  openingDoorWestKeyCard2: <img src={openingKey2West} width="50" height="75"/>,
  closingDoorWestKeyCard2: <img src={closingKey2West} width="50" height="75"/>,
};

export default sprites;
