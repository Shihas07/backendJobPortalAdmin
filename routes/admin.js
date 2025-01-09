
const express=require("express")
const router=express.Router()
const adminController=require("../controller/adminController")


router.post("/addData",adminController.addData)
router.get("/fetchData",adminController.fetchData)


module.exports=router;