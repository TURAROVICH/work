import React from 'react'
import './doctors.css'
import profile from '../../assets/profile.png'
import vidoe from '../../assets/video.png'

export default ()=>{
    return (
        
                <div className="doctor-card">
                <img src={profile} alt="" />
                <div className="left-g">
                <div className="name flex">
                        <div className="first-name text-left">
                        Dr. Woo Sik Lee
                        </div>
                        <img/>
                    </div>
                    <div className="doctor-card-des">
                    Director of the Cardiology department
                    </div>
                    <div className="doctor-card-des">
                    Speaks: <span className="font-semibold"> English, Korean</span>
                    </div>
                    </div>
                    
                    <div className="card fff">
                            <div className="card-title">
                            59 <span>$</span>
                            </div>
                            <div className="card-des">
                            per visit
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
                </div>
    )
}