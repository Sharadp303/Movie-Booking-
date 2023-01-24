const bodyParser = require('body-parser');
const express= require('express')
const mongoose=require('mongoose')
const {dbconfig}=require('./config/db.config')
const{serverport}=require('./config/server.config')


const app= express();


//app.use(express.json())
app.use(bodyParser.json())
require('./routes/movie.routes')(app);


mongoose.connect(dbconfig).then(()=>{console.log("connected to db",dbconfig)}).catch(console.log)

app.listen(serverport,()=>{
    console.log(`Server running on port localhost:${serverport}`)
})


