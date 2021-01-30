import React from 'react';
import blaineStandSouth from '../../../assets/images/npc/blaine-front.gif';
import blaineStandNorth from '../../../assets/images/npc/blaine-back.gif';
import blaineDoor from '../../../assets/images/npc/blaine-door.gif';
import blaineDoorPreAppear from '../../../assets/images/npc/blaine-door-pre-appear.gif';
import blaineDoorAppear from '../../../assets/images/npc/blaine-door-appear.gif';
import blaineDoorOpen from '../../../assets/images/npc/blaine-door-open.gif';
import blaineDoorOpened from '../../../assets/images/npc/blaine-door-opened.gif';
import mutinyStandIndoorsSouth from '../../../assets/images/npc/mutiny-stand-indoors-south.gif'
import mutinyStandIndoorsEast from '../../../assets/images/npc/mutiny-stand-indoors-east.gif'
import mutinyStandIndoorsNorth from '../../../assets/images/npc/mutiny-stand-indoors-north.gif'
import mutinyStandIndoorsWest from '../../../assets/images/npc/mutiny-stand-indoors-south.gif'
import mutinyStandSouth from '../../../assets/images/npc/mutiny-stand-south.gif'
import mutinyStandNorth from '../../../assets/images/npc/mutiny-stand-north.gif'
import mutinyTroll from '../../../assets/images/npc/mutiny-troll.gif'
import mutinyWalkNorth from '../../../assets/images/npc/mutiny-walk-north.gif'
import mutinyWalkEast from '../../../assets/images/npc/mutiny-walk-east.gif'
import mutinyWalkWest from '../../../assets/images/npc/mutiny-walk-west.gif'
import mutinyWalkSouth from '../../../assets/images/npc/mutiny-walk-south.gif'
import mutinyConfused from '../../../assets/images/npc/mutiny-confused.gif'
import lucyStandSouth from '../../../assets/images/npc/lucy-stand-south.gif';
import youngLucyStandSouth from '../../../assets/images/npc/lucy-young-south.gif';
import youngLucyStandNorth from '../../../assets/images/npc/lucy-young-north.gif';
import youngLucyStandWest from '../../../assets/images/npc/lucy-young-west.gif';
import youngLucyStandEast from '../../../assets/images/npc/lucy-young-east.gif';
import youngLucyWalkSouth from '../../../assets/images/npc/lucy-young-walk-south.gif';
import youngLucyWalkNorth from '../../../assets/images/npc/lucy-young-walk-north.gif';
import youngLucyWalkEast from '../../../assets/images/npc/lucy-young-walk-east.gif';
import youngLucyWalkWest from '../../../assets/images/npc/lucy-young-walk-west.gif';
import youngLucyAngry from '../../../assets/images/npc/lucy-young-angry.gif';
import youngLucySweat from '../../../assets/images/npc/lucy-young-sweat.gif';
import youngLucySigh from '../../../assets/images/npc/lucy-young-sigh-east.gif';
import youngLucySink from '../../../assets/images/npc/lucy-young-sink.gif';
import youngLucyFuneral from '../../../assets/images/npc/lucy-young-funeral.gif';
import mourner from '../../../assets/images/npc/mourner.png';
import mourner2 from '../../../assets/images/npc/mourner2.png';
import presidentStand from '../../../assets/images/npc/prez.gif';
import presidentFuneralStand from '../../../assets/images/npc/prez-funeral.gif';
import presidentWalk from '../../../assets/images/npc/prez-funeral-walk.gif';
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
    mutiny: {
        stand: {
                north: <img id="mutiny-sprite" src={mutinyStandIndoorsNorth} width="90" height="100"/>,
                south: <img id="mutiny-sprite" src={mutinyStandIndoorsSouth} width="90" height="100"/>,
                east: <img id="mutiny-sprite" src={mutinyStandIndoorsEast} width="90" height="100"/>,
                west: <img id="mutiny-sprite" src={mutinyStandIndoorsWest} width="90" height="100"/>,
        },
        standOutdoors: {
                north: <img id="mutiny-sprite" src={mutinyStandNorth} width="90" height="100"/>,
                south: <img id="mutiny-sprite" src={mutinyStandSouth} width="90" height="100"/>,
        },
        walk: {
            north: <img id="mutiny-sprite" src={mutinyWalkNorth} width="90" height="100"/>,
            east: <img id="mutiny-sprite" src={mutinyWalkEast} width="90" height="100"/>,
            south: <img id="mutiny-sprite" src={mutinyWalkSouth} width="90" height="100"/>,
            west: <img id="mutiny-sprite" src={mutinyWalkWest} width="90" height="100"/>,
        },
        confused: {
            south: <img id="mutiny-sprite" src={mutinyConfused} width="90" height="100"/>,
        },
        troll: {
            south: <img id="mutiny-sprite" src={mutinyTroll} width="90" height="100"/>
        } 
    },
    lucyYoung: {
        stand: {
            south: <img id="young-lucy-sprite" src={youngLucyStandSouth} width="50" height="70"/>,
            north: <img id="young-lucy-sprite" src={youngLucyStandNorth} width="50" height="70"/>,
            east: <img id="young-lucy-sprite" src={youngLucyStandEast} width="50" height="70"/>,
            west: <img id="young-lucy-sprite" src={youngLucyStandWest} width="50" height="70"/>
        },
        walk: {
            south: <img id="young-lucy-sprite" src={youngLucyWalkSouth} width="50" height="70"/>,
            north: <img id="young-lucy-sprite" src={youngLucyWalkNorth} width="50" height="70"/>,
            east: <img id="young-lucy-sprite" src={youngLucyWalkEast} width="50" height="70"/>,
            west: <img id="young-lucy-sprite" src={youngLucyWalkWest} width="50" height="70"/>,
        },
        angry: {
            south: <img id="young-lucy-sprite" src={youngLucyAngry} width="50" height="70"/>
        },
        sweat: {
            south: <img id="young-lucy-sprite" src={youngLucySweat} width="50" height="70"/>
        },
        sigh: {
            east: <img id="young-lucy-sprite" src={youngLucySigh} width="50" height="70"/>
        },
        sink: {
            south: <img id="young-lucy-sprite" src={youngLucySink} width="50" height="70"/>
        },
        funeral: {
            south: <img id="young-lucy-sprite" src={youngLucyFuneral} width="50" height="70"/>
        },
        vanish: {
            south: <img id="young-lucy-sprite" className="vanish" src={youngLucyStandSouth} width="50" height="70"/>
        },
    },
    mourner1: {
        stand: {south: <img id="mourner-sprite" src={mourner2} width="65" height="115"/>}
    },
    mourner2: {
        stand: {south: <img id="mourner-sprite" src={mourner2} width="65" height="115"/>}
    },
    mourner3: {
        stand: {south: <img id="mourner-sprite" src={mourner} width="65" height="125"/>}
    },
    president: {
        stand: {south: <img id="president-sprite" src={presidentStand} width="70" height="125"/>},
        funeralStand: {south: <img id="president-sprite" src={presidentFuneralStand} width="70" height="125"/>},
        walk: {south: <img id="president-sprite" src={presidentWalk} width="70" height="125"/>}
    }
}

export default sprites;