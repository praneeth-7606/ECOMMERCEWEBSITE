import express from "express";
import {registercontroller,loginController,testController,forgotpasswordcontroller,updateProfileController,getOrdersController, getAllOrdersController,
    orderStatusController,} from "../controllers/authcontroller.js"
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
const router=express.Router()
router.post("/register",registercontroller)

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);



//forgot password 
router.post("/forgot",forgotpasswordcontroller)
//protected route-auth
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})


// protected admin route
router.get("/user-admin",requireSignIn, isAdmin ,(req,res)=>{
    res.status(200).send({ok:true})
})

router.put("/profile", requireSignIn, updateProfileController);
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);





export default router