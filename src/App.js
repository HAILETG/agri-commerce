import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route  
} from "react-router-dom";
import React from 'react'
import  {Fragment} from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from "./pages/home/Home";
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

import Samplereq from './pages/samplereq/Samplereq';
import Messages from './pages/message/Messages';
import Report from './pages/report/Report';
import Feedback from './pages/feedback/Feedback';
import Login from './pages/login/Login';
import Newmessage from './pages/message/Newmessage';
import Employee from './Server/src/ui/Employee';
import Productdetail from "./pages/product/Productdetail";

function App() {
  return (
  <Router>
    <Fragment>
    <Topbar/>
    <div className="container">
    <Sidebar/>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Product />} />
    <Route path="/newproduct" element={<NewProduct />} />
    <Route path="/deliveryreq" element={<Employee/>} />
    <Route path="/samplereq" element={<Samplereq />} />
    <Route path="/message" element={<Messages />} />
    <Route path="/report" element={<Report />} />
    <Route path="/feedback" element={<Feedback />} />
    <Route path="/login" element={<Login />} />
    <Route path="/newmessage" element={<Newmessage />} />
    <Route path="/message" element={<Messages />} />
    <Route path="/productdetail" element={<Productdetail />} />

    
    </Routes>

    </div>
    </Fragment>
  </Router>
  )
}

export default App
