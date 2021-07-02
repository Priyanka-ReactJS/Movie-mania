const Movie = require('../models/Movie')
const bcrypt = require('bcryptjs')

const addMovie = (req, res, next) => {
    bcrypt.hash(req.body.year, 10, function(err, hashedPass) {

        if (err) {
            res.json({
                error: err
            })
        }
        let movie = new Movie({
            title: req.body.title,
            year: req.body.year,
            rated: req.body.rated,
            director: req.body.director,
            actors: req.body.actors,
            plot:req.body.post,
            images: req.body.images,
        })
        movie.save()
            .then(movie => {
                res.json({
                    message: 'movie addaed Successfully!'
                })
            })
            .catch(error => {
                res.json({
                    message: 'an error occured!'
                })
            })
    })
}
const getMovie = (req, res, db) => {
    bcrypt.hash(req.body.year, 10, function(err, hashedPass) {

        
        Movie.find({} ,function(err, results) {
            if (err) {
                res.json({
                    error: err
                })
            }
            res.json(results)
        });
   
    })
}

module.exports = {
    addMovie,getMovie 
}