var express = require("express");
var process = require("process");
var path = require("path");
var app =  express();
var port = process.env.PORT || 3000;

app.use("/assets/js",express.static(path.resolve(__dirname,'./dist/assets/js')));
app.use("/assets/css",express.static(path.resolve(__dirname,'./dist/assets/css')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname,'.src//public/index.html'));
});

app.listen( process.env.PORT || 3000, function () {
  /* eslint-disable no-console */
  console.log('Express server started on port %s', port);
})