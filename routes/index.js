const express = require('express')
const router = express.Router()
const QRcode = require("qrcode");

router.get('/',(req,res)=>{
    res.render('index')
})

router.post('/qrcode',(req,res)=>{
    const URL = req.body.url;

    QRcode.toDataURL(URL,(err, link)=>{
        if(err){
            res.json(err)
        }
        
        res.render('qrcode',{url: link})
    })
})

module.exports = router;