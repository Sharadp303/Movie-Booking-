
const Movie=require('../models/movie.model')
const mongoose=require('mongoose')

async function createMovie(req,res){
    const obj=req.body 
    try{
          const result=await Movie.create(obj)
          res.status(201).send(result)
       }
       catch(err){
        console.log(err)
        res.status(500).send({msg:"Internal server ERROR"})
       }
}
 async function deleteMovie(req,res){
    
    try{
          const result=await Movie.findOneAndDelete({_id:req.params.id})
          res.status(201).send({msg:"deleted successfully"})
       }
       catch(err){
        console.log(err)
        res.status(500).send({msg:"Internal server ERROR"})
       }
 }
async function getAllMovies(req,res){
   const query={}
     if(req.query.name!=undefined){
        query.name=req.query.name
     }
    try{
        const result=await Movie.find(query)
        res.status(200).send(result)
     }
     catch(err){
      console.log(err)
      res.status(500).send({msg:"Internal server ERROR"})
     }
}
async function getMovie(req,res){
    try{
        const result=await Movie.findOne({_id:req.params.id})
        res.status(200).send(result)
     }
     catch(err){
      console.log(err)
      res.status(500).send({msg:"Internal server ERROR"})
     }
}

async function updateMovie(req,res){
    try{
        const result=await Movie.findOne({_id:req.params.id})
        if(!result){
            return res.send({msg:"Movie does not exist"})
        }
        result.name=req.body.name?req.body.name:result.name;
        result.description=req.body.description?req.body.description:result.description;
        result.casts=req.body.casts?req.body.casts:result.casts;
        result.trailerUrl=req.body.trailerUrl?req.body.trailerUrl:result.trailerUrl;
        result.posterUrl=req.body.posterUrl?req.body.posterUrl:result.posterUrl;
        result.language=req.body.language?req.body.language:result.language;
        result.releaseDate=req.body.releaseDate?req.body.releaseDate:result.releaseDate;
        result.director=req.body.director?req.body.director:result.director;
        result.releaseStatus=req.body.releaseStatus?req.body.releaseStatus:result.releaseStatus;
        
        const updatedM=await result.save()
        res.status(200).send(updatedM)


     }
     catch(err){
      console.log(err)
      res.status(500).send({msg:"Internal server ERROR"})
     }
}

module.exports={createMovie,deleteMovie,getAllMovies,getMovie,updateMovie}