import React from 'react';
import robotOff from '../../../assets/images/npc/robot-off.gif';
import robotOnSouth from '../../../assets/images/npc/robot-on-south.gif';
import blaineStandSouth from '../../../assets/images/npc/blaine-front.gif';
import blaineStandNorth from '../../../assets/images/npc/blaine-back.gif';
import blaineDoor from '../../../assets/images/npc/blaine-door.gif';
import blaineDoorPreAppear from '../../../assets/images/npc/blaine-door-pre-appear.gif';
import blaineDoorAppear from '../../../assets/images/npc/blaine-door-appear.gif';
import blaineDoorOpen from '../../../assets/images/npc/blaine-door-open.gif';
import blaineDoorOpened from '../../../assets/images/npc/blaine-door-opened.gif';
import mutinyStandSouth from '../../../assets/images/npc/mutiny-stand-south.gif'
import mutinyTroll from '../../../assets/images/npc/mutiny-troll.gif'
import mutinyConfused from '../../../assets/images/npc/mutiny-confused.gif'
import lucyStandSouth from '../../../assets/images/npc/lucy-stand-south.gif';

const sprites = {
    blaine: {
        stand: {
            south: <img className="blaine-sprite" src={blaineStandSouth} width="115" height="95"/>,
            north: <img className="blaine-sprite" src={blaineStandNorth} width="115" height="95"/>
        },
        door: {
            preAppear: <img className="blaine-door-sprite" src={blaineDoorPreAppear} width="115" height="95"/>,
            appear: <img className="blaine-door-sprite" src={blaineDoorAppear} width="115" height="95"/>,
            door: <img className="blaine-door-sprite" src={blaineDoor} width="115" height="95"/>,
            open: <img className="blaine-door-sprite" src={blaineDoorOpen} width="115" height="95"/>,
            opened: <img className="blaine-door-sprite" src={blaineDoorOpened} width="115" height="95"/>,
        }
    },
    robot: {
        off: {
            south: <img src={robotOff} width="85" height="90"/>
        },
        on: {
            south: <img src={robotOnSouth} width="85" height="90"/>
        }
    },
    mutiny: {
        stand: {
            south: <img src={mutinyStandSouth} width="80" height="90"/>,
        },
        confused: <img src={mutinyConfused} width="80" height="90"/>,
        troll: <img src={mutinyTroll} width="80" height="90"/>
    },
    lucyStandSouth: <img src={lucyStandSouth} width="80" height="80"/>
}

export default sprites;