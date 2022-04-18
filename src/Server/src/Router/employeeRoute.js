const express = require("express")
const employee = require("../models/employee")
const router = express.Router();

router.post("/employee",async(req,res)=>{
    console.log(req.body)
    const data = new employee(req.body)
    const result = await data.save()
    if(!result){
        res.json({
            status:"FAILD",
            message:"employee not register sueccessfully..."
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            message:"employee register successfully...",
            data:result
        })
    }
})

//get records
router.get("/employee" ,async(req,res)=>{
try {
    const result =await employee.find()
    if(!result){
        res.json({
            status:"SUCCESS",
            message:"Not found record"
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            message:"recored Found",
            data:result
        })
    }
} catch (e) {
    
}
})

//get singel recored
router.get("/employee/:id", async(req,res)=>{
    try {
        const _id = req.params.id;
        const result =await employee.findById(_id);
        if(!result){
            req.json({
                status:"Failed",
                Failed  })
        }
    } catch (e) {
        res.send(e)
    }
})

//update record
router.put("/employee/:id" ,async(req,res)=>{
    try {
        const _id = req.params.id;
        const result =await employee.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!result){
            req.json({
                status:"success",
                message:"Updated successfully" 
            })
        }
        else{
            res.json({
                status:"not success",
                message:"update was not successful",
                data: result
            })
        }
    } catch (e) {
        res.send(e)
    }
})

//delete recored
router.delete("/employee/:id", async(req,res)=>{
    try {
        const _id = req.params.id;
        const result =await employee.findByIdAndDelete(req.params.id);
        if(!result){
            req.json({
                status:"success",
                message:"Delete successfully" 
            })
        }
        else{
            res.json({
                status:"not success",
                message:"Delete was not successful",
                data: result
            })
        }
    } catch (e) {
        res.send(e)
    }
})

module.exports = router