import React from 'react'
import Home from './pages/Home'
// import Login from './pages/Login'
import Message from './pages/Message';
import Order from './pages/Order';
import Inventory from './pages/Inventory';
import People from './pages/People';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import ForgotPassword from './components/ForgotPassword'
import UpdateProfile from './components/UpdateProfile'
import Login from './components/Login'
import Signin from './components/Signin'
import { Container } from 'react-bootstrap'

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import PrivateRoute from './components/PrivateRoute'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const App = () => {
console.log('i am a boy')

return (

  <Router>
    
  <Switch>
<Route exact path="/" >
<Home />
</Route>
<Route  path="/login" >
<Login />
</Route>
{/* <Route  path="/PrivateRoute" >
<PrivateRoute />
</Route> */}
<Route  path="/people" >
<People />
</Route>
<Route  path="/updateProfile" >
<UpdateProfile />
</Route>
<Route  path="/forgotPassword" >
<ForgotPassword />
</Route>

<Route  path="/dashboard" >
<Dashboard />
</Route>
<Route  path="/signin" >
<Signin />
</Route>
<Route  path="/payment" >
<Payment />
</Route>
<Route  path="/Signup" >
<Signup />
</Route>
<Route  path="/profile" >
<Profile />
</Route>
<Route  path="/inventory" >
<Inventory />
</Route>
<Route  path="/message" >
<Message />
</Route>
<Route  path="/order" >
<Order />
</Route>




  </Switch>
  



  </Router>

)
}

export default App