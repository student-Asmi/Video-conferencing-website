import React from 'react'
import "../App.css"
import background from "../assets/background.png"
import mobile from "../assets/mobile.png";
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {

    const router = useNavigate();
  return (
    <div className='LandingPageContainer' >
        <nav>
            <div className='navHeader'>
                <h2>Cool Dude</h2>
            </div>
            <div  className='navlist'>
                <p onClick={() => {
                    router("/ad23")
                }}>Join as Geust</p>
                <p onClick={() =>{
                    router("/auth")
                }}>Register</p>
                <button onClick={() =>{
                    router("/auth")
                }} className='btn'>Login</button>
            </div>
        </nav>

        <div className="LandingPageBody">
            <div className='l-left'>
                <h1><span>Connect</span> with your </h1>
                <h1>Loved Ones</h1>
                <h5>Cover a distance by Cool Dube</h5>
                <Link to={"/auth"}>
                <button className="btn">Get Started</button>
                </Link>
            </div>
            <div className='l-right'>
                <img src={mobile}></img>
            </div>
        </div>
      
    </div>
  )
}
