import React,{useEffect,useState} from 'react'
import "home/jobs/Documents/agri_commerce/client/src/pages/deliveryreq/deliveryreq.css"
import axios from "axios"
function Deliveryreq() {
  const[data,setData]=useState([]);
  const GetEmployeeData = () =>{
    const url ='http://localhost:8000/employee'
    axios.get(url).then(
      Response=>{
        const result = Response.data;
        const {status,message,data}=result;
        if(status !== 'SUCCESS'){
          alert(message,status)
        }
        else{
          setData(data)
          console.log(data)
        }
      }
    ).catch(err =>{
      console.log(err)
    })
  }
  useEffect(()=>{
    GetEmployeeData();
  })

  return (
    <div className='delivery'>
     <table>
       <thead>
         <th>Name</th>
         <th>Email</th>
         <th>Number</th>
         <th>NIC</th>
         <th>Address</th>
         <th>Action</th>
       </thead>
       <tbody>

       </tbody>
     </table>
    </div>
  )
}

export default Deliveryreq
