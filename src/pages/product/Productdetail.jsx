import React,{useEffect,useState}  from 'react'

function Productdetail() {
    const[RowData,SetRowData] =useState([])
    const [ViewShow,SetViewShow]=useState(false)
    const handleViewShow = () => {SetViewShow(true)}
    const handleViewClose = () => {SetViewShow(false)}
  return (
    <div className='product'>
        <div className="productDetail">
            <label htmlFor="name">Name <input value={RowData.name} disabled type="text" name='name' /></label>
            <label htmlFor="email">Email <input value={RowData.email} disabled type="text" name='email' /></label>
            <label htmlFor="number">Number <input value={RowData.number} disabled type="text" name='number' /></label>
            <label htmlFor="nic">Nic <input value={RowData.nic} disabled type="text" name='nic' /></label>
            <label htmlFor="address">Address <input value={RowData.address} disabled type="text" name='address' /></label>


        </div>
        <div className="updateproduct">
            <form action="">
            <label htmlFor="name">Name <input name='name' type="text" placeholder=''/></label>
            <label htmlFor="email">Email <input name='email' type="text" placeholder=''/> </label>
            <label htmlFor="number">Number <input name='number' type="text" placeholder=''/></label>
            <label htmlFor="nic">NIC <input name='nic' type="text" placeholder=''/></label>
            <label htmlFor="address">Address <input name='address' type="text" placeholder=''/></label>
            </form>
            <button>Update</button>
             </div>
    </div>
  )
}

export default Productdetail