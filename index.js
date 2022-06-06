require('dotenv').config({path:"./config.env"})
const express=require("express")
const cors=require('cors')
const app=express()
const fileUpload = require("express-fileupload");
const PORT= process.env.PORT || 5222
const connectDB=require('./src/config/db')

app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.use('/api/auth', require('./src/routes/auth'))
app.use('/api/item', require('./src/routes/item'))
app.use('/api/user', require('./src/routes/user'))

app.post("/upload", (req, res) => {
  const file = req.files.file;
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

// connect data base 
connectDB()

app.listen(PORT, (err)=>{
    (err)? console.log(err) : console.log(`server running at port ${PORT}`)
})

