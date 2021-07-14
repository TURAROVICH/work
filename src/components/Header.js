import React, { useEffect, useState } from 'react'
import './footer-header.css'

// imgs
import logo from '../assets/logo 1.png'
import title from '../assets/Amodoc.com.png'
// end imgs
import {
    Link
  } from "react-router-dom";

export default function Header (){
    const [url,setUrl] = useState(window.location.href.includes('auth'))
    useEffect(()=>{
        console.log('hello');
    },[url])
    return (
    <div className="header">
        <header>
            <div className="logo">
            <img src={logo} alt="" />
             <img src={title} alt="" />
             </div>
{!url && (
             <div className="nav">
               <div className="link">
                   <div className="link-title">
                   Find a hospital
                   </div>
                   <div className="link-des">
                   Find a clinics worldwide
                   </div>
               </div>

               <div className="link">
                   <div className="link-title">
                   Treatments
                   </div>
                   <div className="link-des">
                   Choose medical area
                   </div>
               </div>


               <div className="link">
                   <div className="link-title">
                   Medical trip
                   </div>
                   <div className="link-des">
                   Flight, hotel, visa, etc.
                   </div>
               </div>

               <div className="link">
                   <div className="link-title">
                   How it works
                   </div>
                   <div className="link-des">
                   About Hospaltrip service
                   </div>
               </div>

             </div>
)}

            <div className="auth">
                 <Link style={{textDecoration:'none'}} to="/auth/login">
                 <div className="sign-up">
                     <span>Sign Up</span>
                  </div>
                 </Link>
                 <Link style={{textDecoration:'none'}} to="/auth/register">
                  <div className="log-in">
                      <span>Log In</span>
                  </div>
                  </Link>
            </div>
        </header>
    </div>
    )
}