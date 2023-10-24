const express= require("express");
const https=require("https");

const app=express();

app.get("/", function(req,res){
  const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=8b625327122dc0d72bbb98b02c4201ce"
  https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
    //  const weatherdata=JSON.parse(data)
    //console.log(weatherdata);
    const weatherdata=JSON.parse(data)
    const weatherdesc= weatherdata.weather[0].description
  console.log(weatherdesc); })
  })
  res.send("server is up & running.")
})


app.listen(3000,function(){
  console.log("server running on port 3000!");
})
