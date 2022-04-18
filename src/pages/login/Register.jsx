import React from 'react'

function Register() {
  return (
    <div className='Container'>
      <form action="" className="register">
        <label htmlFor="fname" >First Name</label>
        <input type="text" name='fname'  placeholder='First Name'/>
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" id="" placeholder='Last Name' />
        <label htmlFor="orgin">Orgin</label>
        <input type="text" name="orgin" id="" placeholder='Orgin' />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="" placeholder='email' />
        <label htmlFor="number">Phone Number</label>
        <input type="number" name="email" id="" placeholder='Phone Number' />
      </form>
      <button className="newbtn">Register</button>
    </div>
  )
}

export default Register