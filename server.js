// load configuration
require("dotenv").config();

var express = require("express");
var process = require("process");
var path = require("path");
var app =  express();
const PORT = process.env.PORT||3000;
const HOST = process.env.HOST||"localhost";

app.use("/assets/js",express.static(path.resolve(__dirname,"./dist/assets/js")));
app.use("/assets/css",express.static(path.resolve(__dirname,"./dist/assets/css")));

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname,"./src/public/index.html"));
});

app.listen(PORT,HOST, function () {
    /* eslint-disable no-console */
    console.log("Express server started on %s:%s",HOST, PORT);
});