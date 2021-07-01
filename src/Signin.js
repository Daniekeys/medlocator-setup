// import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import person from './images/svg.png';

import './Signin.css';


export default function SignIn() {
    return (
      <Router>
        <div>
          <header>
            <img src="./images/mainpicture.png" className= "MedLogo" alt="medlocator logo"/>
            <Link to= "/SignIn" className="SignIn">Sign In</Link>
          </header>

          <Route exact path= "/">

          <div className="Form">
              <div className= "buttonSwitcher">

              </div>
              <img src= {person} className= "Person" alt=""/>
              <p className="Sign">Sign up on <span>MedLocator</span></p>
                <div> 
                  <input id="email" className="input" type="text" placeholder="E-mail" />
                </div> 
                <div>  
                  <input id="name" className="input" type="text" placeholder="Name" />
                </div> 
                <div>
                  <input id="password" className="input" type="password" placeholder="Password" />
                </div>
                <div>
                  <input id="password" className="input" type="password" placeholder="Confirm Password" />
                </div>
                <div className="Terms">
                  <input type = "checkbox" name = "check" value = "on" /> I agree to the <a className="link" href="www.signin.com">Terms and Conditions</a> and <br/> <a className="link" href="www.signin.com">Privacy Policy</a> of MedLocator
                </div>
                <div>
                  <button className= "SignUp">Sign Up</button>
          
                </div>
            </div>
            </Route>
        </div>
        <Route path= "/SignIn">
          


        </Route>
      </Router>








    );





}