import "./newProduct.css";
import React from 'react'

function NewProduct() {
  return (
    <div className="newProduct"> 
    <div className="productinfo">
      <h1>Product Information</h1>
    <form action="" className="newform">
      <label htmlFor="">
        Choose the Product
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
       </select>
      </label>
      <label htmlFor="producerID">Enter Producer ID <input type="text" placeholder="Producer ID" /></label>
      <label htmlFor="producedDate">Produced Date<input type="date" /></label>
      <label htmlFor="product orgin">Product Orgin <input type="text" placeholder="Enter Product Orgin" /></label>
    </form>
    </div>
    <div className="storeinfo">
      <h1>Warehouse Storage Information</h1>
      <form action="">
        <label htmlFor="">Warehouse
        <select>
          <option value="grapefruit">3A</option>
          <option value="lime">JIMMA4</option>
          <option value="coconut">AAA3</option>
          <option value="mango">ADDIS65</option>
       </select>
        </label>
        <label htmlFor="">Rack 
        <select>
          <option value="grapefruit">3A</option>
          <option value="lime">JIMMA4</option>
          <option value="coconut">AAA3</option>
          <option value="mango">ADDIS65</option>
       </select> </label>
       <label htmlFor="">block
        <select>
          <option value="grapefruit">3A</option>
          <option value="lime">JIMMA4</option>
          <option selected value="coconut">AAA3</option>
          <option value="mango">ADDIS65</option>
       </select> </label>

      </form>
    </div>
   
      
    </div>
  )
}

export default NewProduct
