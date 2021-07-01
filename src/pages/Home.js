import React from 'react'
import Signup from '../components/Signup'
import {Link} from 'react-router-dom'

const Home = () => {

 return (
  <>
  <div className="container-fluid">
  
  
<h1>i am the home page</h1>
<Link to="/signup" className="btn btn-primary mb-3 m-3" >
signup
</Link>
<Link to="/signin" className="btn btn-primary mb-3 m-3" >
signin
</Link>
<Link to="/inventory" className="btn btn-primary mb-3 m-3" >
inventory
</Link>
<Link to="/order" className="btn btn-primary mb-3 m-3" >
order
</Link>
  </div>
  </>
 )
}



export default Home;