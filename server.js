var express = require('express');
var app = express();

app.listen(3000,function(){

console.log("server is up and running at port 3000");
})

app.get('/', function(request,response){
response.send("Hello World");
})
