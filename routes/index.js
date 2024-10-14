const express = require('express')
const router = express.Router()
const QRcode = require("qrcode");

router.get('/',(req,res)=>{
    res.render('index')
})

router.post('/submit',(req,res)=>{
    console.log(req.body)
})

module.exports = router;