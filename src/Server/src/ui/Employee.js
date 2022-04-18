import React,{useEffect,useState} from 'react'
import axios from "axios"
function Employee() {
  const[Data,setData]=useState([]);
  const GetEmployeeData = () =>{
    const url ='http://localhost:8000/employee'
    axios.get(url).then(
      response=>{
        const result = response.data;
        const {status,message,data}=result;
        if(status !== 'SUCCESS'){
          alert(message,status)
        }
        else{
          setData(data)
          console.log(data)
        }
      }).catch(err =>{
      console.log(err)
    })
  }
  useEffect(()=>{
    GetEmployeeData();
  },[])

  return (
    <div style={{flex:6}} className='delivery'>
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
         {Data.map((item)=>
         <tr key={item._id}>
           <td>{item.name}</td>
           <td>{item.email}</td>
           <td>{item.numer}</td>
           <td>{item.nic}</td>
           <td>{item.address}</td>
           <td style={{minWidth:190}}>
             <button>EDIT</button>
             <button>SSS</button>
           </td>
         </tr>
         )}
       </tbody>
     </table>
    </div>
  )
}

export default Employee
