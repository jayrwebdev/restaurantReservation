var express = require("express")
var path = require("path")
var start = express()
var PORT = process.env.PORT || 1001
var routes = require("routes.js")



// Sets up the Express app to handle data parsing
start.use(express.urlencoded({ extended: true }));
start.use(express.json());


// Displays Home Page
start.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})
// Displays Reservation Table
start.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "viewTables.html"))
})
// Displays Reservation Form
start.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "makeReservation.html"))
})
// Post reservation info into json format
start.post("/postReservation", function (req, res) {

    var reservation = req.body
    
    
})



start.listen(PORT, function () {
    console.log("The server is listening")
})