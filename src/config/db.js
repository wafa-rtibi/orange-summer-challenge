const mongoose=require('mongoose')

module.exports= connectDB =()=>{
    try {
        mongoose.connect(process.env.URI)
        console.log("data base connected")
    } catch (error) {
        console.log(error)
    }
}