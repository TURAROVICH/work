import React,{useState} from 'react'
import stl from './style.module.css'
import { connect } from 'react-redux'
import { Auth,User } from '../../store/Auth/Action'
import axios from 'axios'
import Loader from '../../fragments/Loader'
import { useHistory } from "react-router-dom";
const REGTMP = ({Auth,User}) => {

    const history = useHistory()
    const [error,setError] = useState(false)
    const [loader,setLoader] = useState(false)
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [spec,setSpec] = useState('')
    const [phone,setPhone] = useState('')
    const [pass,setPass] = useState('')
    const [email,setEmail] = useState('')
    const [conf,setConf]  = useState('')
    const [sex,setSex] = useState('')
 
    const regis =async ()=>{
      const data = {
          phone:phone,
          firstName: fname,
          lastName:lname,
          email: email,
          password: pass,
          confirmPassword:  conf,
          sex:sex
      }
      setLoader(true)

        await axios.post('https://amoback.herokuapp.com/auth/register',data,{withCredentials:true}).then(d=>{
      setLoader(false)
      history.push('/')
        setError([d.data.message,'s'])
       axios.get('https://amoback.herokuapp.com/auth/state',{withCredentials:true}).then(d=>{
        Auth(d.data.authorized)
        User(d.data.user)
    })
        }).catch(e=>{
          setError([e.response.data.message,'e'])
          setLoader(false)
        })

    }
    return (
       <div className={stl.wrapper}>
         {loader && <Loader/>}
           <div className={stl.container}>
                <div className={stl.title_container}>
                    <div className={stl.title}>Sign Up</div>

                </div> 

                <div style={{'color':error[1] == "e" ? '#C70039' : '#6086E5',textAlign:'center',width:'100%',marginTop:20}} >{error[0]}</div>

                <div className={stl.form_container}>
                    <div className={stl.f_1}>
                            <input  onChange={e=>setFname(e.target.value)}
                            className={stl.inp} type="text" placeholder="First name"/>
                            <input onChange={e=>setLname(e.target.value)} className={stl.inp} type="text" placeholder="Last name"/>
                            <input onChange={e=>setSpec(e.target.value)} className={stl.inp} type="text" placeholder="Speciality"/>
                            <input onChange={e=>setPhone(e.target.value)} className={stl.inp} type="text" placeholder="Phone number"/>
                    </div>

                    <div style={{marginTop:30}} className={stl.f_2}>
                    <input onChange={e=>setEmail(e.target.value)} className={stl.inp} type="text" placeholder="E-mail"/>
                            <input onChange={e=>setPass(e.target.value)} className={stl.inp} type="password" placeholder="Password"/>
                            <input onChange={e=>setConf(e.target.value)} className={stl.inp} type="password" placeholder="Confirm password"/>

 <div className={stl.as}>
                    <span>пол</span>

                    <div className={stl.container_radio}>
  <div className={stl.radio}>
    <input value="male" onChange={e=>setSex(e.target.value)} id="radio-1" className={stl.radio_2} name="radio" type="radio"  />
    <label htmlFor="radio-1" className={stl.radio_label}>муж</label>
  </div>

  <div className={stl.radio}>
    <input value="famale" onChange={e=>setSex(e.target.value)} id="radio-2" className={stl.radio_2} name="radio" type="radio" />
    <label  htmlFor="radio-2" className={stl.radio_label}>жен</label>
  </div>

</div>

                  </div>

                            <div onClick={regis} className={stl.btn}>
                                <span>Sign In</span>
                            </div>
                    </div>
                </div>
           </div>
       </div>
    )
}



export default connect(null,{Auth,User})(REGTMP)