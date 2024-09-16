import React, { Component } from 'react';
import "../App.css";
import { Link } from "react-router-dom";

export default class Result extends Component {

  score = localStorage.getItem("score");
  attempt = localStorage.getItem("attempt");

  
  render() {
    return (
      <div className='body flex align-center'>
        <h1 style={{color:"green",padding:"20px"}}>Result</h1>
        <div className="result-bx flex align-center just-center">
            <h2>You need more practice</h2>
            <h1 style={{color:"blue",marginBlock:"20px"}}>Your score is 20%</h1>
            <div className='flex result-text'>
                <span>Total number of questions</span>
                <span>15</span>
            </div>
            <div className='flex result-text'>
                <span>Number of attempted question</span>
                <span>{this.attempt}</span>
            </div>
            <div className='flex result-text'>
                <span>Number of correct answers</span>
                <span>{this.score}</span>
            </div>
            <div className='flex result-text'>
                <span>Number of wrong answers</span>
                <span>{15 - this.score}</span>
            </div>
        </div>
        <div className="btn" style={{margin:"50px"}}>
        <Link to="/Quiz">
          <button className='play-btn'>Play Again</button>
        </Link>
        <Link to="/">
          <button className='home-btn'>Back to home</button>        
        </Link>
          
        </div>

      </div>
    )
  }
}
