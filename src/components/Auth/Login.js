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
                    <div className={stl.title}>Welcome to Amodoc.com</div>
                    <div className={stl.des}>Please Sign In</div>
                </div>

                <div className={stl.form_container}>
                    <div className={stl.f_1}>
                            <input className={stl.inp} type="text" placeholder="Login"/>
                            <input className={stl.inp} type="password" placeholder="Password"/>

                            <div className={stl.btn}>
                                <span>Sign In</span>
                            </div>
                    </div>
                    <div className={stl.line}></div>

                    <div className={stl.f_2}>
                    <div className={stl.des}>or continue with</div>

                    <div className={stl.or}>
                        <div className={stl.or_btn}>
                            <img src={fb} alt="" /> <span className={stl.fb}>Facebook</span>
                        </div>
                        <div className={stl.or_btn}>
                            <img src={google} alt="" /> <span className={stl.google}>Google</span>
                        </div>
                        <div className={stl.or_btn}>
                            <img src={apple} alt="" /> <span className={stl.apple}>Apple</span>
                        </div>
                    </div>
                    </div>
                </div>
           </div>
       </div>
    )
}