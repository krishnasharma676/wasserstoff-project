import React from 'react'
import Databar from './Databar';
import HexMap from './icons/HexMap.svg'
import '../App.css'

export const Hexmap = () => {
  return (
    <div className="my-component">
     <div className='databar'>
     <Databar heading="Total Earning"/>
       <Databar heading="Sales"/>
       <Databar heading="Purchase" color="green"/>
     </div>
    <div className="content">
      {/* Your content goes here */}
    </div>
    <div className="image-container">
      <img src={HexMap} className="image" />
    </div>
  </div>
  );
}
