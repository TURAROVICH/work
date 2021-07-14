import React from 'react'
import reviews from '../../assets/Frame 26.png'
import'./reviews.css'
import profile from '../../assets/Ellipse 2.png'
import Star from '../../assets/Star 7.png'
export default () => {
    return(
        <>
        <div className="reviews-title">
       <div className="about-title">
        <img style={{width:24,height:24}} src={reviews} alt="" /><span>Reviews (112)</span>
    </div>

    <div className="all">
        see all
    </div>
    </div>


    <div className="cards">
        <div className="card-rev">
            <div className="title">
            <img src={profile} alt="" />
                <div className="name-container">
                    <div className="full-name">David Atkinson</div>
                    <div className="stars">
                        <img src={Star} alt="" />
                        <img src={Star} alt="" /> <img src={Star} alt="" /> <img src={Star} alt="" /> <img src={Star} alt="" />
                    </div>
                </div>
            </div>
            <div className="des">
            I fully enjoyed my stay at CHA Gangnam Medical Center. The doctors are great. I will recommend this center to all of my friends.
            </div>
        </div>

        <div className="card-rev">
            <div className="title">
            <img src={profile} alt="" />
                <div className="name-container">
                    <div className="full-name">David Atkinson</div>
                    <div className="stars">
                        <img src={Star} alt="" />
                        <img src={Star} alt="" /> <img src={Star} alt="" /> <img src={Star} alt="" /> <img src={Star} alt="" />
                    </div>
                </div>
            </div>
            <div className="des">
            I fully enjoyed my stay at CHA Gangnam Medical Center. The doctors are great. I will recommend this center to all of my friends.
            </div>
        </div>
    </div>

        </>
    )
}