import React from 'react';
import PropTypes from 'prop-types';
import './PopUp.css';

function PopUp(props){
    let message;
    let checkBox;
    if (props.popUp === 'move') {
        message = <span id="popup-text">Use <span className="popup-button-prompt">W</span> <span className="popup-button-prompt">A</span> <span className="popup-button-prompt">S</span> <span className="popup-button-prompt">D</span> to move.</span>
    } else if (props.popUp === 'switchAttackType') {
        message = <span id="popup-text">Use <span className="popup-button-prompt">space</span> to switch between melee and ranged weapons.</span>
    } else if (props.popUp === 'switchGuns') {
        message = <span id="popup-text">Use <span className="popup-button-prompt">Q</span> to switch guns.</span>
    } else if (props.popUp === 'menu') {
        message = <span id="popup-text">Use <span className="popup-button-prompt">Enter</span> to open the menu.</span>
    } else if (props.popUp === 'keyCard1') {
        message = <span className="key1-popup" id="popup-text">Level 1 Security Access Required</span>
    } else if (props.popUp === 'keyCard2') {
        message = <span className="key2-popup" id="popup-text">Level 2 Security Access Required</span>
    } else if (props.popUp === 'useAbility') {
        message = <span id="popup-text">Use <span className="popup-button-prompt">Shift</span> to use equiped ability.</span>
    } else if (props.popUp === 'switchAbility') {
        message = <span id="popup-text">Use <span className="popup-button-prompt">E</span> to change equiped ability.</span>
    } else if (props.popUp === 'interact') {
        message = <span id="popup-text">Use <span className="popup-button-prompt">Space</span> to interact with objects.</span>
    } else if (props.popUp === 'text') {
         message = <span id="popup-text"><span className="popup-button-prompt">Space</span>: advance text/select choice, <span className="popup-button-prompt">Enter</span>(hold): skip.</span>
    //objectives
    } else if(props.popUp === 'objectiveSmash'){
        checkBox = <div className="check-incomplete"></div>
        message = <span id="popup-text">Objective: Smash it!</span>
    } else if(props.popUp === 'objectiveSmashComplete'){
        checkBox = <div className="check-complete"></div>
        message = <span id="popup-text">Objective: Smash it!</span>
    } else if(props.popUp === 'objectiveWhere'){
        checkBox = <div className="check-incomplete"></div>
        message = <span id="popup-text">Objective: Figure out where the hell you are.</span>
    } else if(props.popUp === 'objectiveWhereComplete'){
        checkBox = <div className="check-complete"></div>
        message = <span id="popup-text">Objective: <span className="crossed-out">Figure out where the hell you are.</span> Get a vague idea of W(here)TF you are.</span>
    } else if(props.popUp === 'objectiveWhenComplete'){
        checkBox = <div className="check-complete"></div>
        message = <span id="popup-text">Objective: Figure out <i>when</i> the hell you are.</span>
    } else if(props.popUp === 'objectivePerson'){
        checkBox = <div className="check-incomplete"></div>
        message = <span id="popup-text">Objective: Investigate that noise.</span>
    } else if(props.popUp === 'objectivePersonComplete'){
        checkBox = <div className="check-complete"></div>
        message = <span id="popup-text">Objective: Investigate that noise.</span>
    } else if(props.popUp === 'objectivePower'){
        checkBox = <div className="check-incomplete"></div>
        message = <span id="popup-text">Objective: Reroute the power.</span>
    } else if(props.popUp === 'objectivePowerComplete'){
        checkBox = <div className="check-complete"></div>
        message = <span id="popup-text">Objective: Reroute the power.</span>
    } else if(props.popUp === 'objectiveBoss'){
        checkBox = <div className="check-incomplete"></div>
        message = <span id="popup-text">Objective: Eliminate the source of the corruption.</span>
    } else if(props.popUp === 'objectiveBossComplete'){
        checkBox = <div className="check-complete"></div>
        message = <span id="popup-text">Objective: Eliminate the source of the corruption.</span>
    } else if(props.popUp === 'objectiveBoat'){
        checkBox = <div className="check-incomplete"></div>
        message = <span id="popup-text">Objective: Find a way off the tanker.</span>
    } else if(props.popUp === 'objectiveBoatComplete'){
        checkBox = <div className="check-complete"></div>
        message = <span id="popup-text">Objective: Find a way off the tanker.</span>
    } else if(props.popUp === 'chapterStart'){
        message = <span id="popup-text" className="chapter">Chapter 1: What year is this?</span>
    } else if(props.popUp === 'funeral1'){
        checkBox = <div className="check-incomplete"></div>
        message = <span id="popup-text">Objective: Get the hell out of here.</span>
    } else if(props.popUp === 'funeral2'){
        checkBox = <div className="check-incomplete"></div>
        message = <span id="popup-text">Objective: Get out. Get out. Get out. Get out.</span>
    } else if(props.popUp === 'funeral3'){
        checkBox = <div className="check-incomplete"></div>
        message = <span id="popup-text">Objective: outoutoutoutoutoutoutoutoutoutoutoutoutoutoutoutoutout</span>
    } else if(props.popUp === 'funeral4'){
        checkBox = <div className="check-incomplete"></div>
        message = <span id="popup-text">Objective: Throw up in the bushes over there like a piece of complete guarbage.</span>
    };

    if (props.popUp !== null){
        return (
            <div id="popup-wrap">
                <div id="popup-content" className={props.transition}>{checkBox}{message}</div>
            </div>
        );
    } else {
        return null
    };
}

PopUp.propTypes = {
  popUp: PropTypes.number,
  transition: PropTypes.string
};

export default PopUp;