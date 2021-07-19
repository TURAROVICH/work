import React, {  useState,useEffect} from 'react'
import './footer-header.css'
import { connect } from 'react-redux'
// imgs
import logo from '../assets/logo 1.png'
import title from '../assets/Amodoc.com.png'
// end imgs
import {
    Link,useHistory
  } from "react-router-dom";
import axios from 'axios'
import {Auth, User} from '../store/Auth/Action'
import Loader from '../fragments/Loader'
import profile from '../assets/profile1.png'
function Header ({authorized,Auth,name}){


  const Modal = () =>{
    return (
      <div  className="modal ">
      <div className="link">
          <div className="link-title">
          Find a hospital
          </div>
          <div className="link-des">
          Find a clinics worldwide
          </div>
      </div>
  
      <div className="link">
          <div className="link-title">
          Treatments
          </div>
          <div className="link-des">
          Choose medical area
          </div>
      </div>
  
  
      <div className="link">
          <div className="link-title">
          Medical trip
          </div>
          <div className="link-des">
          Flight, hotel, visa, etc.
          </div>
      </div>
  
      <div className="link">
          <div className="link-title">
          How it works
          </div>
          <div className="link-des">
          About Hospaltrip service
          </div>
      </div>
  
    </div>
    )
  }
const checkModal = () =>{
  if(miniModal){
    setMiniModal(false)
  }else{
    setMiniModal(true)
  }
}
const MiniModal = () => {
  return (
    <div  onMouseMove={()=>setMiniModal(true)} onMouseLeave={()=>setMiniModal(false)} onClick={()=>checkModal()} className="mini-modal">
      <Link style={{textDecoration:'none'}} to="/profile">
                 <div className="log-in">
                   <img src={profile} alt="" />
                     <span>Profile</span>
                  </div>
                 </Link> 
       <div onClick={logout} style={{textDecoration:'none'}} to="/auth/login">
                 <div className="log-in">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke=" #55BA78 ">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg>
                     <span>logout</span>
                  </div>
                 </div> 
    </div>
  )
}



    const [loader,setLoader] = useState(false)
    const [burger,setBurger] = useState(false)
    const [miniModal,setMiniModal] = useState(false)
    useEffect(async ()=>{
     axios.get('https://amoback.herokuapp.com/auth/state',{withCredentials:true}).then(d=>{
         Auth(d.data.authorized)
         User(d.user)
     })
    },[])
    useEffect(async ()=>{
        let auth =await (await axios.get('https://amoback.herokuapp.com/auth/state',{withCredentials:true}))
        Auth(auth.data.authorized)
    })

    const history = useHistory()
    const [url,setUrl] = useState(window.location.pathname.includes('auth'))
     history.listen(async (h,a)=>{
      return setUrl(h.pathname.includes('auth'))
    })

    const logout = () => {
      setLoader(true)
     
      axios.get('https://amoback.herokuapp.com/auth/logout',{withCredentials:true}).then(m=>{
        history.push('/auth/register')
      Auth(false)
      setLoader(false)
      }).catch(e=>{
        setLoader(false)
      })
    
    }

    return (
    <div className={`header ${burger && 'header-fixed'}`}>
     {burger && <Modal/>}
      <div onClick={()=>setBurger(!burger)} className="burger flex flex-col ">
        <div className={`b-line ${burger && 'active-burger-line'}`}></div>
        <div className={`b-line ${burger && 'active-burger-line'}`}></div>
        <div className={`b-line ${burger && 'active-burger-line'}`}></div>
      </div>
      {loader && <Loader/>}
        <header>
          <Link to="/"> <div className="logo">
            <img src={logo} alt="" />
             <img className="amodoc" src={title} alt="" />
             </div>
             </Link> 
{ !url && (
             <div className="nav">
               <div className="link">
                   <div className="link-title">
                   Find a hospital
                   </div>
                   <div className="link-des">
                   Find a clinics worldwide
                   </div>
               </div>

               <div className="link">
                   <div className="link-title">
                   Treatments
                   </div>
                   <div className="link-des">
                   Choose medical area
                   </div>
               </div>


               <div className="link">
                   <div className="link-title">
                   Medical trip
                   </div>
                   <div className="link-des">
                   Flight, hotel, visa, etc.
                   </div>
               </div>

               <div className="link">
                   <div className="link-title">
                   How it works
                   </div>
                   <div className="link-des">
                   About Hospaltrip service
                   </div>
               </div>

             </div>
)}

           {  !authorized ?(<div className="auth">
                 <Link style={{textDecoration:'none'}} to="/auth/login">
                 <div className="sign-up">
                     <span>Sign Up</span>
                  </div>
                 </Link>
                 <Link style={{textDecoration:'none'}} to="/auth/register">
                  <div className="log-in">
                      <span>Log In</span>
                  </div>
                  </Link>
            </div>) :  (<div className="buger-dot">
                <div className="user-name">
                    <span>{name}</span>
                </div>
                <div onMouseMove={()=>setMiniModal(true)} onClick={()=>checkModal()} className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div> 
                  <div className="dot"></div>
                </div>
                {miniModal && <MiniModal/>}
              {/* <div onClick={logout} style={{textDecoration:'none'}} to="/auth/login">
                 <div className="log-in">
                     <span>logout</span>
                  </div>
                 </div> */}
                 </div>
                 )}

        </header>
    </div>
    )
}





const mapStateToProp = state =>{
    return {authorized:state.auth.authorized,name:state.user.firstName}
}


export default connect(mapStateToProp,{Auth,User})(Header)