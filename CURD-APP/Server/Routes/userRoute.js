import express from "express"
import { create,deleteUser,getdata,getOne, update } from "../controller/usercontroller.js";
 
const route=express.Router();

route.post("/create",create);
route.get("/getdata",getdata)
route.get("/getone/:id",getOne)
route.put("/update/:id",update)
route.delete("/delete/:id",deleteUser)
export default route; 