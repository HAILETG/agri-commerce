const express = require("express")
const mongoose = require("mongoose")
const app = express()
const products = require("./models/products")
app.use(express.json());
mongoose.connect("mongodb+srv://JOBS:jobs@agro.kk569.mongodb.net/agrocommerce?retryWrites=true&w=majority",{
    useNewUrlParser:true
});

app.get("/", async(req, res) => {
    const product = new products({productName : "Bunna" ,productSymbol:"JIMA",ProductID:"BU155",producedDate:"11-11-22",rating:"8.3",typeOfProduct:"Bunna"});
try {
    await product.save();
    res.send("inseted data");
} catch (error) {
    console.error(err);
}
});

app.listen(3001,()=>{
    console.log("Sever is Running");
})