const {createMovie,deleteMovie,getAllMovies,getMovie,updateMovie}=require('../controller/movie.controller')
const {validateMovieReq}=require('../middleware/validate.movierequest')
module.exports = function(app){
    app.post('/mba/api/v1/movies',[validateMovieReq],createMovie)
    app.get('/mba/api/v1/movies/:id',getMovie)
    app.get('/mba/api/v1/movies',getAllMovies)
    app.put('/mba/api/v1/movies/:id',updateMovie)
    app.delete('/mba/api/v1/movies/:id',deleteMovie)
}