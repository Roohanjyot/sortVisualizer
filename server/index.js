// requires
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// app uses
const app = express();
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "..", "client", "dist")));
//server
let port = process.env.NODE_ENV | 6969;

app.listen(port, () => {console.log(`Ahoy! listening on port : ${port}`)});