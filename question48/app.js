var express = require("express");
var app = express();
var routes = require('./Routes/employee.routes');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/users',routes);
app.listen(4000,()=>{
    console.log("succesfully done");
})

module.exports = app;




