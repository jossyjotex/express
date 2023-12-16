require('dotenv/config')
const express = require('express')
const app = express()
const port = process.env.PORT || 9090;
const mongoose = require('mongoose')
const connect = require('./config/db')

// app.get('/', function (req, res) {
//   res.send('app is running')
// })
app.get(`/about`,(reg,res)=>{
    res.send({message:'about page'})
})

// listen(port,()=>console.log(`server is connected to http://localhost:${port}`))


// server
// npm init -y (this would iniyitialize npm and would create node-modules folder,package-lock.json)
// npm install express,this would create a server
// npm install --save-dev nodemon and do the below in your script(found in package.json file)
// server
// npm init -y (dis wud initialize npm and wud create node_modules folder,package.json file and also package-lock.json)
// npm i express ,dis wud create a server
// npm install --save-dev nodemon and do d below in ur script(found in package.json file)
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "dev":"nodemon index",
//     "start":"node index"
//   },
// remember to require express,use sample from express by searching for express on npmjs.com
// ===============
// We have 4 requests.get,post,delete and update request,which can be summed as crud operations -


connect()
.then(()=>{
    try {
        app.listen(port,()=>console.log(`server is connected to http://localhost:${port}`));


    } catch (error) {
        console.log('cannot connect to the server');
        
        
    }
})
.catch((error)=>{
   
    console.log('invalid database connection!',error);
})



app.get('/', function (req, res) {
    res.send('app is running')
  })
  app.use(function (req,res){
    res.send(`route does not exist`)
  })


