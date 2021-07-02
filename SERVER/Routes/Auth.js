const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
const MovieController = require('../controllers/MovieController')




router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/addmovie', MovieController.addMovie)
router.get('/getmovie', MovieController.getMovie)



module.exports = router