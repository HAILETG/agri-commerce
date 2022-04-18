const mongoose = require("mongoose")

const product = new mongoose.Schema({
    productName:{
        type : String,
        required : true,
    },
    productSymbol:{
        type : String,
    },
    ProductID:{
        type: String,
        required : true
    },
    producedDate:{
        type : String
    },
    rating:{
        type:String,
    },
    typeOfProduct:{
        type:String,
    }, 
})

const products = mongoose.model("products",product)
module.exports = products