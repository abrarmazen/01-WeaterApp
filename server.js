// Setup empty JS object to act as endpoint for all routes
projectData = {};
const port = 4000
// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

app.listen( port , () => {
    console.log(`your port code is ${port}`)
})
const funGet = (req , res) => {
    res.send(projectData)
    //projectData = {}
}
const funpost = (req,res) => {
    console.log(req.body)
    projectData.temp = req["body"]["temp"],
    projectData.date = req["body"]["date"],
    projectData.felling = req["body"]["felling"],
   
    //projectData={...req.body}
    res.end()
}
app.get("/anynameget" , funGet)
app.post("/postAnyName",funpost)
