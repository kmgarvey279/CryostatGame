import React from 'react';
import PropTypes, { number } from 'prop-types';
import './Filter.css';

function Filter(props){
  let statusFilter = null;
  if(props.playerHealth === 10 || props.filter.includes('rage-filter')){
    statusFilter = <div id="circle-background"><div id="circle"></div></div> 
  };
  let levelFilter = null;
  if (props.branch == 3) {
    levelFilter = <div id="spooky"><div id="spookyAnimate"></div></div>
  } else if(props.filter === 'static'){
    levelFilter = <div className="power-off"></div>
  }
  let overlayFilter = <div className={props.filter}></div>
return <div>{overlayFilter}{statusFilter}{levelFilter}</div>
}


Filter.propTypes = {
  branch: PropTypes.number,
  filter: PropTypes.string,
  playerHealth: PropTypes.number
};

export default Filter;