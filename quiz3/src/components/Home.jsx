import React, { Component } from 'react'
import "../App.css"
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className='flex just-center align-center body'>
        <h1 style={{color:"white"}}>Quiz play</h1>
        <Link to="/Quiz">
        <button className='start-btn'>Play</button>
          </Link>
        
      </div>
    )
  }
}
