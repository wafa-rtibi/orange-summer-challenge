const express=require('express')
const router=express.Router()

const {signIn, registre}=require('../controllers/auth')

router.route("/signin").post(signIn)
router.route('/registre').post(registre)


module.exports=router