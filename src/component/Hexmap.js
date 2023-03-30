import React from 'react'
import HexMap from './icons/HexMap.svg'

export const Hexmap = () => {
  return (
    <div className="my-component">
    <div className="content">
      {/* Your content goes here */}
    </div>
    <div className="image-container">
      <img src={HexMap} className="image" />
    </div>
  </div>
  );
}
