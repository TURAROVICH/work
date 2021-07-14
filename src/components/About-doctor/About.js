import React from 'react'

// imgs    
import profile from '../../assets/profile.png'
import Arrow from '../../assets/Arrow.png'
import Star from '../../assets/Star 6.png'
import important from '../../assets/Group 14.png'
import important_1 from '../../assets/Group 29.png'
import important_2 from '../../assets/Frame 81.png'
import important_3 from '../../assets/Group.png'
import eng from '../../assets/eng.png'
import kor from '../../assets/kor.png'
import vidoe from '../../assets/video.png'
// end imgs

import './about.css'
import {
    Link
  } from "react-router-dom";

export default function About(){
    return(
        <div className="container-">
            <div className="links">
                <Link to={"/"}>Main</Link> <img src={Arrow} alt="" />
                 <Link to={"/doctors"}>Doctors</Link><img src={Arrow} alt="" />
                 <span>Dr. Woo Sik Lee</span>
            </div>

            <div className="grid">
                <div className="profile">
                    <div className="img-container">
                        <img src={profile} alt="" />
                    </div>
                    <div className="name">
                        <div className="first-name">
                        Dr. Woo Sik Lee
                        </div>
                        <div className="last-name">
                        Doctor of Medicine, Professor
                        </div>
                    </div>

                    <div className="about-practice">
                        <div className="card">
                            <div className="card-title">
                            4,5 <img src={Star} alt="" />
                            </div>
                            <div className="card-des">
                            112 reviews
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-title">
                            30 <span>years</span>
                            </div>
                            <div className="card-des">
                            of practice
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-title">
                            59 <span>$</span>
                            </div>
                            <div className="card-des">
                            per visit
                            </div>
                        </div>
                    </div>
                </div>


                <div className="about-the-doctor">
                    <div className="f-1">
                        <div className="about-title">
                            <img src={important} alt="" /><span>About the doctor</span>
                        </div>

                        <div className="mini-grid">
                            <div className="about-card">
                                <div className="about-card-title">
                                Career
                                </div> 
                                <div className="about-card-des">
                                    <span> 1991 — nowadays</span> — South Korean Medical University (Director of Cardiology)
                                </div>
                            </div>

                            <div >
    
                            </div>


                            <div className="about-card">
                                <div className="about-card-title">
                                Advanced Training
                                </div> 
                                <div className="about-card-des">
                                    <span> 1991 </span> — New York Medical University (Cardiology)   
                                </div>
                            </div>


                            <div className="about-card">
                                <div className="about-card-title">
                                Education
                                </div> 
                                <div className="about-card-des">
                                    <span>1987</span> — South Korean Medical University
                                </div>
                            </div>
                        </div>



                    </div>


                    <div className="f-2">
                        <div className="specializes">
                        <div className="about-title">
                            <img src={important_1} alt="" /><span>Specializes In</span>
                        </div>
                        <div className="about-card">
                                <div className="about-card-title">
                                Cardiology
                                </div> 
                               
                            </div>
                        </div>
                        <div>
                        <div className="about-title">
                            <img src={important_2} alt="" /><span>Languages</span>
                        </div>

                        <div className="btns">
                            <div className="btn">
                                <img src={eng} alt="" />
                                <span>English</span>
                            </div>
                            <div className="btn">
                                <img src={kor} alt="" />
                                <span>Korean</span>
                            </div>
                        </div>
                        </div>
                     </div>
                </div>


                <div className="to-call">
                    <div className="btn-w-t">
                        <span>Make an Appointment</span>
                    </div>
                    <div className="btn-video-call">
                        <img src={vidoe} alt="" />
                    </div>
                </div>

                <div className="last">
                <div className="about-title">
                            <img src={important_3} alt="" /><span>Treatments</span>
                        </div>
                        <div className="des">
                  Treatment #1, Treatment #2, Treatment #3, Treatment #4, Treatment #5
                  </div>
                </div>
                
            </div>
        </div>
    )
}