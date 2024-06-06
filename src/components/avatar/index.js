import React from 'react';
import logo from '../../logo.svg';
import './style.css';

import { useState } from 'react';


const   basic = [
  { text:'Simple text here',mark:true},      
  { text:'Other text here',mark:false }, 
  { text:'Text space goes here',mark:false }, 
  { text:'Description Space',mark:false },        
];

const   standard = [
  { text:'Simple text here',mark:true},      
  { text:'Other text here',mark:true }, 
  { text:'Text space goes here',mark:true }, 
  { text:'Description Space',mark:false },        
];

const   premium = [
  { text:'Simple text here',mark:true},      
  { text:'Other text here',mark:true }, 
  { text:'Text space goes here',mark:true }, 
  { text:'Description Space',mark:true },        
];

export function Card (props) {

  const [showThanks, setShowThank] = useState(false);

  let info = [];
  if (props.name === 'Basic') {
    info = basic;
  } else if (props.name === 'Standard') {
    info = standard;
  } else if (props.name === 'Premium'){
    info = premium;
  }


  const SignUp = () => {
    setShowThank("(Thank you for being with us my dear friend!!!!!!!!!!!)");
  };


  return (
    <div className="card__container">
      
      <div className="card__header">
        <p>{props.name}</p>
      </div>
        <div className='card__price'>
          <p>${props.price}</p>
        
        </div>
      <div className="card__main">
        <p>
                <ul>{
                  info.map(item => <ListItem value={item.text} mark={item.mark}/>)
                 }</ul> 
       </p>
      </div>
      <div className="card__footer" onClick={SignUp}>
        <p>Sign Up</p>
        {showThanks}
      </div>
    </div>
  );
}
function ListItem(props )
{

  return <li className={props.mark ? 'marked' : ''}>{props.value}</li>;
}
