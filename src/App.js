import React from 'react'
import HeaderTmp from './components/Header'
import FooterTmp from './components/Footer'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
 
import AboutDoctor from './components/About-doctor/Main'

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
        </Switch>
      </div>
       </Router>




         <FooterTmp/>
       </>
   )
}