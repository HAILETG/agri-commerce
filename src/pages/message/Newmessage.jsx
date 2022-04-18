import React from 'react'
import { Link } from 'react-router-dom';

function Newmessage () {
  return (
    <div className='message'>
        <Link className="sidebarListItem" to="/message  ">Back</Link>
        <h1>Message</h1>
        <div className="newmessage">
            <form action="">
                <label htmlFor="">To <input type="text" name="to" id="" placeholder='ReciverID' /></label>
                <label htmlFor="">Subject <input type="text" placeholder='Subject' /></label>
                <label htmlFor="">Message <input type="textArea" name="" id="" /></label>
            </form>
            <button className="sendmessage">Send Message</button>
        </div>
    </div>
  )
}

export default Newmessage 