import React from 'react'
import './about.css'

//imgs
import Logo2 from '../../assets/logo2.png'
import Group from '../../assets/Group100.png'
import Group1 from '../../assets/ffff.png'
import Layer2 from '../../assets/fffff.png'
//endimgs

export default () => {
    return(
        <>
    <div className="welcome">
    <div className="text">
        <span>Amodoc</span> is an online booking platform that helps to find a specialist doctor nearby or hospital and make an appointment, diagnostics or treatments.
    </div>
    <img src={Logo2} alt="" />
    </div>



<div className="why-us">
    <div className="container">
        <div className="title">Why us?</div>

        <div className="cards">
            <div className="card">
                <img src={Group} alt="" />
                <div className="card-title">It’s cheaper</div>
                <div className="card-des">We believe that medical treatment should be affordable for everyone. By using our service you save up to 30%.</div>
            </div>

            <div className="card">
                <img src={Group1} alt=""/>
                <div className="card-title">More options</div>
                <div className="card-des">Our service has a lot of useful features and we constantly implementing new ones.</div>
            </div>

            <div className="card">
                <img src={Layer2} alt=""/>
                <div className="card-title">Friendly interface</div>
                <div className="card-des">Since our clients represent different age groups we’ve built a simple and empathic interface.</div>
            </div>

        </div>
    </div>
</div>




<div className="form-container">
    <div className="form">
        <div className="form-title">
            Leave us your e-mail
        </div>
        <div className="form-des">
            and we’ll provide you with full information
        </div>

        <input placeholder="E-mail" type="text" />

        <div className="form-btn">Submit</div>
    </div>
</div>
</>
)
}