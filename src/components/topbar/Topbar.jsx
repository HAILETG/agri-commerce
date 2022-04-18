import React from "react";
import "./topbar.css";


function Topbar() {
  return (
    <div className="topbar">
   <div className="topbarWrapper">
     <div className="topleft">

       <span className="logo">Agro-Commerce
         </span>
         </div>
     <div className="topRight">
       <input type="text" placeholder="12EDS" />
       <button>Search</button>
     </div>
   </div>
  </div>
  )
}

export default Topbar
