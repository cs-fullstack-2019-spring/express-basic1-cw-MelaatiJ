const express = require('express');
const app = express();
app.use(express.static('public'));

// making the root route say //
app.get("/", (req, res) => {
    res.send("Melaati Jayah created a server here! ")
});


// when on index it sends a post request on postman //
app.post("/", (req, res) => {
    res.send("Melaati Jayah got a post request! ")
});


//tell which host to link to //
app.listen(8000,() => {
    console.log("example app listening")
});


// dont need a route to make it go to melaati].html//
// app.get("/melaati.html", (req, res) => {
//     res.send("")
// });




