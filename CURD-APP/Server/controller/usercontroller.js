import curd from "../model/schema.js"

export const create =async(req,resp)=>{
try{
     const userdata=new curd(req.body);
     if(!userdata)
        {
            return resp.status(404).json({msg:"User data not found"})
        }
        const saveData=await userdata.save();
        resp.status(200).json({success:true,message:"User Created SucessFully",userdata})
}
catch(error)
{
    error.status(500).json({success:false,message:"Server error",userdata})
}
}
export const getdata=async (req,res)=>{
    try{
        const data= await curd.find();
        if(!data)
            {
                return res.status(404).json({msg:"User data not found"})
            } 
            res.status(200).json({data})
    }
    catch(error)
{
    error.status(500).json({error:error})
}

}

export const getOne=async(req,res)=>{
   try{
    const id=req.params.id;
    const userExist=await curd.findById(id) 
    if(!userExist)
        {
            return res.status(404).json({msg:"User not found"})
            
        }
        res.status(200).json(userExist)
    }
    catch(error)
{
    error.status(500).json({error:error})
}
   
}
 export const update=async(req,res)=>{
try{
    let id=req.params.id;
    let userExist=await curd.findById(id);
    if(!userExist)
        {
            return res.status(404).json({msg:"User not found"})
        }
        let updatedata=await curd.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({msg:"User Updated SucessFully"})
} 
catch(error)
{
    error.status(500).json({error:error})
}
}
export const deleteUser=async(req,resp)=>{
try{
const id = req.params.id;
const userExist=await curd.findById(id);
if(!userExist)
    {
        return resp.status(404).json({msg:"User not found"})
    }
    await curd.findByIdAndDelete(id);
    resp.status(200).json({msg:"User deleted SuccessFully"})
}
catch(error)
{
    error.status(500).json({error:error})
}
}