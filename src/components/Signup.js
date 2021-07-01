
import {Link} from 'react-router-dom';
import person from '../images/svg.png';
import { FaGoogle, FaFacebookF, FaTwitter} from 'react-icons/fa'
import google from '../images/google.png';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';
import main from '../images/mainpicture.png'
import {Form, Button } from 'react-bootstrap'

import logo from '../images/medlocatorproject_1.png';


import './Signup.css';

function Signup() {
  
  return (
      <>
      <div className="contaner-fluid">
      <div className="signup-header ">
      <div className="signup-header-img-container">
      <img src={logo} alt="medlocator logo" className="signup-header-img"/>
      </div>
      <div className="signup-option">
      <h5 className="text-fade">
      Sign into account 
      </h5>
        <Link to="/signin" className="signin-btn">
          Signin
        </Link>
      </div>
      </div>

      <div className="w-100 mt-3 .signup-section">
      <div className="row">
      <div className="col-md-6">
      <div className="form-parker px-3">
                  <div className="form-img-container">
                    <img src={person} alt="medlocator logo" className="form-img mb-3" />
                  </div>
              <div className="signup-info d-flex  d-block mb-4">
              <h5 className="text-dark">
              Sign up on </h5>
              <h5 className="info-color">
              Medlocator
              </h5>
              </div>
                <Form className="form-parent">
                  <Form.Group controlId="formBasicEmail" className="mb-4">
                   
                    <Form.Control type="email" placeholder="Email" />
              
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" className="mb-4">
                   
                    <Form.Control type="email" placeholder="Name" />
              
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail" className="mb-4">
                   
                    <Form.Control type="email" placeholder="Password" />
              
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mb-4">
                  
                    <Form.Control type="password" placeholder="Confirm Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                  <div className="d-flex">
                  
                    <Form.Check type="checkbox" label=""  className="checkbox" variant="info"/>
                    <p className="text-dark ml-1">
                    I agree to the <span className="info-color">Terms and Conditions</span> and <span className="info-color">
                    Privacy and Policy
                    </span> of Medlocator.
                    </p>
                  </div>
                  </Form.Group>
                  <Button className="btn-background d-block btn mb-3" type="submit">
                    Submit
  </Button>
      <p className="text-center mb-2">
      Or continue with these social profile 
      </p>
      
      <div className="row option-split mt-2">
      <div className="col">
      <Link to="www.github.com" >
             <div className="option-icons">
             < FaGoogle />
             </div>             
      </Link>
      </div>
      <div className="col">
      <Link to="www.facebook.com" >
             <div className="option-icons">
                          <FaFacebookF />
             </div>             
      </Link>
      </div>
      <div className="col">
      <Link to="www.github.com" >
             <div className="option-icons">
                          <FaTwitter />
             </div>             
      </Link>
      </div>
      </div>


                </Form>
                <div className="signup-info d-flex  d-block mb-4">
                  <p className="text-dark">
                    Already have an account </p>
                  <Link to="/signin" className="info-color decoration-none ml-1">
                    Sign in
              </Link>
                </div>

      </div>
      </div>
      <div className="col-md-6">
      <div className="main-img-container">
      <img src={main} alt="" className="main-img"/>
      </div>
      </div>
      </div>
      
      </div>





      </div>
      
      
      
      
      </>
         
  );
}
export default Signup;





















// 
// {/* <img src={image} className= "BodyImg" alt="medlocator"/> */ }
// <div className="mt-4 pt-4">
//   <header className="mt-2">
//     <img src={logo} className="MedLogo" alt="medlocator logo" />
//     <button className="SignIn">Sign in</button>
//   </header>
//   <main>

//     <div className="Form">
//       <div className="buttonSwitcher">

//       </div>
//       <img src={person} className="Person" alt="" />
//       <p className="Sign">Sign up on <span>MedLocator</span></p>
//       <div>
//         <input id="email" className="input" type="text" placeholder="E-mail" />
//       </div>
//       <div>
//         <input id="name" className="input" type="text" placeholder="Name" />
//       </div>
//       <div>
//         <input id="password" className="input" type="password" placeholder="Password" />
//       </div>
//       <div>
//         <input id="password" className="input" type="password" placeholder="Confirm Password" />
//       </div>
//       <div className="Terms">
//         <input type="checkbox" name="check" value="on" /> I agree to the <a className="link" href="www.signin.com">Terms and Conditions</a> and <br /> <a className="link" href="www.signin.com">Privacy Policy</a> of MedLocator
//                 </div>
//       <div>
//         <button className="SignUp">Sign Up</button>
//       </div>
//       <p>Or continue with these social profiles</p>
//       <div>
//         <img src={google} className="Svg" alt="med" />
//         <img src={facebook} className="Svg" alt="med" />
//         <img src={twitter} className="Svg" alt="med" />
//       </div>
//       <p className="Account">Already have an account? <a className="link" href="www.signin.com">Sign In</a></p>
//     </div>


//   </main>
// </div>
//   <footer>&copy; 2021 MedLocator, All rights reserved.</footer>









// The below code is just a sample implementation of how a profession signup looks like





// import React, { useRef, useState } from 'react'
// import { Card, Form, Button, Alert } from 'react-bootstrap'
// import { useAuth } from '../contexts/AuthContext'
// import { Link, useHistory } from 'react-router-dom'

// function Signup() {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const passwordConfirmRef = useRef();
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const history = useHistory();
//   const showValues = () => {
//     console.log(emailRef.current.value, passwordRef.current.value);
//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       console.log("i ama boyssss and i dont match")
//       setError("hey whats this")
//       // return setError("passwords doesn't match");

//     }
//   }
//   const submo = (e) => {
//     e.preventDefault()
//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("passwords doesn't match");

//     }
//   }
//   // we destructred the signup function coming from the auth context

//   const { signup } = useAuth();
//   async function handleSubmition(e) {
//     e.preventDefault()
//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       // console.log("i ama boyssss")
//       return setError("passwords doesn't match");


//     }
//     try {
//       setError("")
//       setLoading(true)
//       await signup(emailRef.current.value, passwordRef.current.value)
//       history.push('/')

//     } catch {
//       setError("Failed to create an account")
//       console.log(error)
//     }
//     setLoading(false)

//   }
//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Sign Up</h2>
//           {/* { currentUser.email} */}
//           {/* <Alert variant="danger" >{error}</Alert> */}
//           {error && <Alert variant="danger" >{error}</Alert>}
//           <Form >
//             <Form.Group id="email">
//               <Form.Label>Email </Form.Label>
//               <Form.Control type="email" placeholder="Enter email" ref={emailRef} required />

//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password </Form.Label>
//               <Form.Control type="password" placeholder="Enter password" ref={passwordRef} required />

//             </Form.Group>
//             <Form.Group id="password-confirm">
//               <Form.Label>Password confrimation </Form.Label>
//               <Form.Control type="password" placeholder="password" ref={passwordConfirmRef} required />


//             </Form.Group>
//             <Button disabled={loading} className="w-100" type="submit" onClick={handleSubmition}>Sign Up</Button>
//           </Form>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         Already have an account? <Link to="/login">lOG IN</Link> </div>

//     </>
//   )
// }


// export default Signup
