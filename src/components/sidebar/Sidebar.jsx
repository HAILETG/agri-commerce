import "./sidebar.css";
import { Link  } from "react-router-dom";

import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">
     <div className="sidebarWrapper">
       <div className="sidebarMenu">
         <h1 className="sidebarTitle">Dashboard</h1>
         <ul className="sidebarList">
           <Link className="sidebarListItem" to="/">Home</Link> 
           <Link className="sidebarListItem" to="/products  ">Products</Link>         
           <Link className="sidebarListItem" to="/newproduct  ">NewProduct</Link> 
           <Link className="sidebarListItem" to="/deliveryreq  ">Delivery Requests</Link> 
           <Link className="sidebarListItem" to="/samplereq  ">Sample Requests</Link> 
         </ul>
         <h1 className="sidebarTitle">More</h1>
         <ul className="sidebarList">
         <Link className="sidebarListItem" to="/message  ">Messages</Link> 
         <Link className="sidebarListItem" to="/feedback  ">FeedBack</Link> 
         <Link className="sidebarListItem" to="/report  ">Report</Link>  
         <Link className="sidebarListItem" to="/login  ">login</Link>  
         </ul>
       </div>
     </div>
    </div>
  )
}

export default Sidebar
