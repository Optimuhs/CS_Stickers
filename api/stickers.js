const express = require('express')
const router = express.Router()
const queries = require("../db/queries")

function validId(req, res, next){
    if(!isNaN(req.params.id)) return next()
    next(new Error("Invalid Id"))
}

router.get("/", (req, res) => {
    queries.getAll().then(stickers => {
        res.json(stickers)
    })
}) 

router.get("/:id", validId, (req, res) => {
    queries.getOne(req.params.id).then(sticker =>{
        if(sticker){
            res.json(sticker)
        }else{
            next()
        }
        
    })
  
})
module.exports = router