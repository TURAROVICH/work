import React,{useState} from 'react'
import stl from './style.module.css'

// imgs
import fb from '../../assets/Groupdsfads.png'
import google from '../../assets/google.png'
import apple from '../../assets/apple.png'
// endimg
import Loader from '../../fragments/Loader'
import axios from 'axios'
import { connect } from 'react-redux'
import { Auth,User } from '../../store/Auth/Action'
import { useHistory } from "react-router-dom";
const LOGTMP = ({setAuth,User}) => {
    const history = useHistory()
    const [error,setError] = useState([])
    const [loader,setLoader] = useState(false)
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
 
    const log =async ()=>{
      const data = {
          email:login,
          password:password
      }
    
      setLoader(true)
        await axios.post('https://amoback.herokuapp.com/auth/login',data,{withCredentials:true}).then(d=>{
        setLoader(false)
        setError([d.data.message,'s'])
        history.push('/')
        
         axios.get('https://amoback.herokuapp.com/auth/state',{withCredentials:true}).then(d=>{
            setAuth(d.data.authorized)
            User(d.data.user)
        })
      }).catch((error) => {
          if(error.response){setError([error.response.data.message,'e']);}
        setLoader(false)
      })
    
      
    }


    return (
       <div className={stl.wrapper}>
           {loader && <Loader/>}
           <div className={stl.container}>
                <div className={stl.title_container}>
                    <div className={stl.title}>Welcome to Amodoc.com</div>
                    <div className={stl.des}>Please Sign In</div>
                    <div style={{'color':error[1] == "e" ? '#C70039' : '#6086E5',textAlign:'center'}} >{error[0]}</div>
                </div>

                <div className={stl.form_container}>
                    <div className={stl.f_1}>
                            <input onChange={e=>setLogin(e.target.value)} className={stl.inp} type="text" placeholder="Login"/>
                            <input  onChange={e=>setPassword(e.target.value)}  className={stl.inp} type="password" placeholder="Password"/>

                            <div onClick={log} className={stl.btn}>
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

  
export default  connect(null,{setAuth:Auth,User})(LOGTMP)