const mongoose=require('mongoose')
const {movieStatus}=require('../utils/constants')

async function validateMovieReq(req,res,next){
    if(!req.body.name){
        return res.status(400).send({msg:"name is mandatory"})
    }
    if(!req.body.releaseStatus){
        return res.status(400).send({msg:"releaseStatus is mandatory"})
    }
    const releaseStatus=req.body.releaseStatus

    const correctStatus=[movieStatus.block,movieStatus.released,movieStatus.unreleased]

    if(!correctStatus.includes(releaseStatus)){
        return res.status(400).send({msg:`Falied!! Select the correct option ${correctStatus}`})
    }

    next()

}
module.exports={validateMovieReq}