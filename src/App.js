import React,{useEffect} from 'react'
// pages
import HeaderTmp from './components/Header'
import FooterTmp from './components/Footer'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import AboutDoctor from './components/About-doctor/Main'
import AboutUs from './components/About/Main'
import Doctors from './components/Doctors/Main'
import UserHome from './components/Home/Main'
//end-pages

//route
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
 //end-route


export default function App() {
  
   return (
       <>
         <Router>
         <HeaderTmp/>
             <div>
        <Switch>
          <Route path="/doctors/:id" children={<AboutDoctor />}>
          </Route>

          <Route path="/auth/login" >
              <Login/>
          </Route>
          <Route path="/auth/register" >
              <Register/>
          </Route>
          <Route path="/about-us">
            <AboutUs/>
          </Route>
          <Route path="/doctors">
            <Doctors/>
          </Route>
          <Route path="/profile">
            <UserHome/>
          </Route>
        </Switch>
      </div>
       </Router>




         <FooterTmp/>
       </>
   )
}