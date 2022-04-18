import React from 'react'
import "./message.css"
import { Link } from 'react-router-dom';
function Messages() {
  return (
    <div className='message'>
      <Link className="sidebarListItem" to="/newmessage  ">new message</Link> 

    </div>
  )
}

export default Messages