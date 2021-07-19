import React from 'react'
import LinkTMP from '../../fragments/Links'
import heart from '../../assets/heart.png'
import './doctors.css'
import Geolocation from '../../assets/geolocation.png'
import Star from '../../assets/Star 6.png'
import Doctors from './Doctors'
export default ()=>{
    return (
        <div className="container w-4/5 min-h-screen ">
             <LinkTMP route2={{path:'/doctors',name:'Clinics'}} lastRoute={' CHA Gangnam Medical Center'} />
             <div className="mini-container w-full my-14">

                 <div className="doctors-header-flex flex justify-between w-full items-center">
                     <div>
                 <div className="title-doctors flex gap-6 items-center">
                     <h1>CHA Gangnam Medical Center</h1>  <img style={{width:24,height:20}} src={heart} alt="" />
                 </div>
                 <div className="about-title ">
                            <img style={{height:24,width:16}} src={Geolocation} alt="" /><span>Nonhyeon-ro, South Korea  </span>
                        </div>
                        </div>
                        <div className="card">
                            <div className="card-title flex items-end">
                            4,5<img style={{width:16,height:16}} src={Star} alt="" />
                            </div>
                            <div className="card-des">
                            112 reviews
                            </div>
                        </div>

                     
                </div>
                <div className="links-doctor flex gap-8">
                <div className="doctor-link  p-2">
                Summary
                            </div>
                            <div className="doctor-link doctors-active p-2">
                            Doctors
                            </div>
                            <div className="doctor-link  p-2">
                            Diagnostics
                            </div>
                            <div className="doctor-link  p-2">
                            Treatment
                            </div>
                            <div className="doctor-link  p-2">
                            Our hospitals
                            </div>
                        </div>
                        <Doctors/>
                        
             </div>
        </div>
    )
}