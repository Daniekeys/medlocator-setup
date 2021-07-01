import React from 'react'
import './Topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';

function Topbar() {

 return (
  <div className="topbar">
   <div className="topbarwrapper">
    <div className="topLeft">
     <span className="logo">
      MedLocator
   </span>
     {/* <img src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1624778346/medlocatorproject_1_n6zqtd.png" alt="medlocator" className="logo-img" /> */}
    </div>
    <div className="input-group mt-2 w-50">
     <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
     <button className="btn bg-btn" type="button" id="button-addon2"><SearchIcon /> </button>

    </div>
    <div className="topRight">



     <div className="topbarIconsContainer">
      <NotificationsNone />
      <span className="topIconBadge">2  </span>

     </div>
     <div className="topbarIconsContainer">
      <Language />
      <span className="topIconBadge">2  </span>

     </div>

     <img src="https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605272137/profile2_aqodkv.jpg" alt="" className="topAvatar" />
     <h5 className="text-dark">
      Ayeni Daniel
         </h5>
    </div>
   </div>
  </div>

 )
}

export default Topbar
