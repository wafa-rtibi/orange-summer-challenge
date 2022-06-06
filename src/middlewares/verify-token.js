
const verifyToken=(req,res,next)=>{
     let token = req.header["x-access-token"] || req.header["authorization"];
     if (token.startsWith("Bearer ")) {
      
       token = token.slice(7, token.length);
     }
     if (!token) {
       return res.status(403).send({
         message: "No token provided!",
       });
     }
     jwt.verify(token, config.secret, (err, decoded) => {
       if (err) {
         return res.status(401).send({
           message: "Unauthorized!",
         });
       }
       req.id = decoded.id;
       next();
     });
}

module.exports=verifyToken