const { response } = require("express");
const express = require("express");
const app = express();
app.listen(3000 , function()
{
    console.log("Server started on port 3000")
});

app.get("/" , function(request,response){

response.sendFile(__dirname + "/index.html");

});