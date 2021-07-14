import React from 'react'
import stl from './style.module.css'

// imgs
import fb from '../../assets/Groupdsfads.png'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
// endimg
export default () => {
    return (
       <div className={stl.wrapper}>
           <div className={stl.container}>
                <div className={stl.title_container}>
                    <div className={stl.title}>Sign Up</div>
                    <div className={stl.as}>
                    <span>I register as a</span>

                    <div className={stl.container_radio}>
  <div className={stl.radio}>
    <input id="radio-1" className={stl.radio_2} name="radio" type="radio"  />
    <label htmlFor="radio-1" className={stl.radio_label}>Doctor</label>
  </div>

  <div className={stl.radio}>
    <input id="radio-2" className={stl.radio_2} name="radio" type="radio" />
    <label  htmlFor="radio-2" className={stl.radio_label}>Clinic</label>
  </div>

</div>

                  </div>
                </div>

                <div className={stl.form_container}>
                    <div className={stl.f_1}>
                            <input className={stl.inp} type="text" placeholder="First name"/>
                            <input className={stl.inp} type="text" placeholder="Last name"/>
                            <input className={stl.inp} type="text" placeholder="Speciality"/>
                            <input className={stl.inp} type="text" placeholder="Phone number"/>
                    </div>

                    <div style={{marginTop:30}} className={stl.f_2}>
                    <input className={stl.inp} type="text" placeholder="E-mail"/>
                            <input className={stl.inp} type="password" placeholder="Password"/>
                            <input className={stl.inp} type="password" placeholder="Confirm password"/>

                            <div className={stl.btn}>
                                <span>Sign In</span>
                            </div>
                    </div>
                </div>
           </div>
       </div>
    )
}