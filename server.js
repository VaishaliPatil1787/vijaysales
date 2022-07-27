var express=require('express');
var app=express();
app.get("/",(req,res)=>{
res.send("<h1>Vijay Sales </h1>"+
"<hr/>"+
"<h3>Smart Devices for sales<h3/>");
});


var server=app.listen(9000);
console.log("vijay sales online shopping running on porst 9000");