const express   = require('express')
const mongooes  = require('mongoose')
const morgan    = require('morgan')
var cors = require('cors');

const AuthRoute = require('./Routes/Auth')

mongooes.connect('mongodb://localhost:27017/testdb', {useUnifiedTopology: true, useNewUrlParser : true, useFindAndModify: true})
const db = mongooes.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open' , () => {
    console.log('Database Connection is Established!!')
})


const app = express()
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'OPTIONS'
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  app.use(cors())
  app.use(cors(corsOpts));
app.use(morgan('dev'))
//app.use(express.Urlencoded({extended:true}))
app.use(express.json())


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

app.use('/api' , AuthRoute)