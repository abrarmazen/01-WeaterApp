// javaScript empty object 
projectData = {};
//my own port
const port = 4000
// Require Express to run server and routes
const express = require('express');
//cors this allow server to indicate any origins
const cors = require('cors');
const bodyParser = require('body-parser');
//app is instance from express
const app = express();

//use body parsing middleware.
//body-barser is debrecated 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// instance app pointed to the folder website
app.use(express.static('website'));
//using function listen to run localhost 
app.listen( port , () => {
    console.log("you add a correct port")
    console.log(`the port to this project is :${port}`)
})
//using call back function to get 
const callGet = (req , res) => {
    //return javaScript object 
    console.log("your get data to weather")
    res.send(projectData)
    //projectData = {}
}

//call back function to post 
const callpost = (req , res) => {
    console.log(req.body)
    projectData.temp = req["body"]["temp"],
    projectData.date = req["body"]["date"],
    projectData.felling = req["body"]["felling"],
   
    console.log("your post data to weather")
    res.end()
}
//to get endboint 
app.get("/anynameget" , callGet)
//post requeste
app.post("/postAnyName", callpost)
