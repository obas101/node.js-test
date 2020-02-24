//requiring express
const express = require("express");

//initialize app
const app = express();

app.get("/", (req, res) => {
    res.send("My first NodeJs connection");
})

//initialize the PORT
const PORT = process.env.PORT || 1000
app.listen(PORT, () => {
    console.log(`port is running at port ${PORT}`)
});