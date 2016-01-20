// load configuration
require("dotenv").config();

var express = require("express"),
    process = require("process"),
    path = require("path"),
    app =  express();
    
const PORT = process.env.PORT||3000,
    HOST = process.env.HOST||"localhost";
    //ENV = process.env.NODE_ENV||ENV_DEV;

app.use("/assets/js",express.static(path.resolve(__dirname,"./dist/assets/js")));
app.use("/assets/css",express.static(path.resolve(__dirname,"./dist/assets/css")));

app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname,"./src/public/index.html"));
});

app.listen(PORT,HOST, function () {
    /* eslint-disable no-console */
    console.log("Express server started on http://%s:%s. CRTL+C to exit.",HOST, PORT);
});