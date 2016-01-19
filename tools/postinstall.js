/* eslint-disable no-console */

var path = require("path");
var fs = require("fs");
var file = path.join(path.resolve(__dirname,"../"),".env");

fs.stat(file, function(err) {
    if(err == null) {
        console.log(".env file already exists. Skipping ...");
    } else if(err.code == "ENOENT") {
        fs.writeFile(file, "# configuration file");
        console.log(".env file created");
    } else {
        console.log("Error while accessing .nev file: "+ err.code);
    }
});
