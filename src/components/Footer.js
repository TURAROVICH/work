import React from 'react'
import './footer-header.css'

// imgs
import Vector from '../assets/Vector.png'
import Vector1 from '../assets/Vector-1.png'
import Vector2 from '../assets/Vector-2.png'

// end imgs

export default function Footer(){
          return(
            <div className="footer">
            <div className="flex">
                <div className="grid">
                        <div className="title-container">
                            <div className="title">
                                Hospaltrip.com
                            </div>
                            <div className="des">
                                QUALITY MEDICINE MORE AFFORDABLE THAN YOU THINK
                            </div>
                        </div>
    
                        <div className="mini-card">
                            <div className="title">WHO ARE WE</div>
                            
                            <div className="link">About us</div>
                            <div className="link">How it works</div>
                            <div className="link">Careers</div>
                            <div className="link">Contacts</div>
                        </div>
    
                        <div className="mini-card">
                            <div className="title"> FOR PATIENTS</div>
                            
                            <div className="link">Find a hospital</div>
                            <div className="link">FAQ's</div>
                        </div>
    
                        <div className="mini-card">
                            <div className="title"> FOR HOSPITALS</div>
                            
                            <div className="link">Become a partner</div>
                        </div>
    
                        <div className="mini-des">Copyright 2021</div>
                        <div className="mini-des">   About the Company</div>
                        <div className="mini-des">Terms and conditions</div>
                        <div className="mini-des">Reset password</div>
    
                </div>
    
                <div className="icons">
                      <img src={Vector} alt="" />
                      <img src={Vector1} alt="" />
                      <img src={Vector2} alt="" />
                </div>
            </div>
        </div>
          )
}