import React from 'react'
import "./report.css"
function Report() {
  return (
    <div className='report'>
      <h1>report Gen</h1>
      <div className="reportdetail">
        <form action="">
          <label htmlFor="to">TO<input type="text" name="to" id="" /></label>
          <label htmlFor="Subject">Subject<input type="text" name='Subject' /></label>
          <label htmlFor="Detail">Detail <input type="text" name='Messagedetail' /></label>
        </form>
        <button className="sendmessage">Send Envy</button>
      </div>
    </div>
  )
}

export default Report