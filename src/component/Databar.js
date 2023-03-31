import React from 'react'
import { FaAdn } from "react-icons/fa";
const Databar = (props) => {
  return (
    <div className="info-component">
      
    <div className="icon-container"  style={{ backgroundColor: props.color }}>
    <a>{props.icon}</a>
    </div>
    <div className="text-container">
      <h2>{props.heading}</h2>
      <p>data</p>
    </div>
  </div>
  )
}

export default Databar
