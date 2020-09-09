import * as itemConsts from '../../redux/modules/rooms/itemConstants';
import React from 'react';
import PropTypes from 'prop-types';
import './ItemGet.css';
import * as text from '../../redux/modules/text/textConstants';
import * as items from '../../redux/modules/rooms/itemConstants';

function ItemGet(props){
  let heading = text.flavorText[props.newItem][0]
  let description = text.flavorText[props.newItem][1]
  let before = '';
  let after = '';
  let special = '';
  let lineArr = description.split(" ");
  for (let i=0; i < lineArr.length; i++){
    if(lineArr[i] === 'EnterKey'){
      special = <span className="item-button-prompt">Enter</span>
      if(i > 0){
        for(let j=0; j < i; j++){
          before = before.concat(lineArr[j]) + ' ';
        };
      };
      if(i < lineArr.length){
        for(let j=i+1; j < lineArr.length; j++){
          after = after.concat(lineArr[j]) + ' ';
        };
      };
    };
  };
  if(special !== ''){
    description = <span>{before}{special} {after}</span>;
  }

  return (
    <div id="wrap">
      <div id="item-content">
        <div className="icon-box">
          <div id="item-icon">{items.sprites[props.newItem]}</div>
        </div>
        <div className="item-text-box">
          <div id="header">{heading}</div>
          <span id="item-text">{description}</span>
        </div>
      </div>
    </div>
  )
}

ItemGet.propTypes = {
  newItem: PropTypes.string
};

export default ItemGet;
