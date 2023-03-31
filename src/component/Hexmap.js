import React from 'react'
import Databar from './Databar';
import HexMap from './icons/HexMap.svg'
import '../App.css'
import AssessmentIcon from '@mui/icons-material/Assessment';

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


     <Databar heading="Total Earning" color="#9B1BFA" />
       <Databar heading="Sales" color=  "#4DC0F4"/>
       <Databar heading="Purchase" color= "#FFA63F" icon={<AssessmentIcon/>}/>;

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
