const jwt=require('jsonwebtoken')
const User=require('../models/User')

const signIn=async(req,res)=>{
    const {email , password}= req.body
    if( !email || ! password) {
        res.status(400).send("please provide email or password")
    }
    
try {
        const user = await User.findOne({email:email}).select("+password");
        if(!user){
            res.status(404).send('invalid entry')
        }
         const isMatch = await user.matchPassword(password);
         if (!isMatch) {
           res
             .status(404)
             .json({ sucess: false, msg: "not valid credentiels" });
         }
        const token=jwt.sign(user.toJSON(), "secret-key" , {expiresIn:8400})

        res.status(201).send({
            user:user,
            token:token,
            role:user.role
        })
} catch (error) {
    res.status(500).send(error)
}
}
const registre=async(req,res,next)=>{           
let {name, email, password ,role , image }=req.body

try {
    const user=await User.create({name , email , password , role , image })
    res.status(201).json({success:true , user: user})
    next()
} catch (error) {
    res.status(500).send({success:false, msg: error})
}
}
module.exports={signIn, registre}