const User=require('../models/User')

const isManager=async(req,res,next)=>{
    try {
        const user= await User.findById(req.params.id)
        if(user.role=="MANAGER")
        {next()}

    } catch (error) {
        res.send(error)
    }
}
const isUser=async(req,res,next)=>{
 try {
      const user = await User.findById(req.params.id);
      if (user.role == "USER") {
        next();
      }
 } catch (error) {
     res.send(error);
 }
}

module.exports={isManager , isUser}