import React from 'react'
import Databar from './Databar';
import HexMap from './icons/HexMap.svg'
import '../App.css'

export const Hexmap = () => {
  return (
    <div className="my-component">


     <div className='databar'>

<div className='dtls1'>
     <div className='dtls'>
      <a>All users</a>
      <a>Details</a>
      </div>
      <h1>fetch data</h1>
      </div>


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
