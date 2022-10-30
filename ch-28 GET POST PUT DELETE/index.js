const fs = require("fs");
const bodyParser = require("body-parser");
const urlEncoder=bodyParser.urlencoded({extended:false});
// To receive Form Data
const jsonEncoder=bodyParser.json();
// To receive Post request Json data using ajax
const express=require("express");
//Return A Class , Now We need to create A Object 
const server= new express();
const database=require("./db.js")
// Those codes are to be executed before giv the response , those codes are called middleware
server.use(jsonEncoder);
server.use(urlEncoder);

// Generally, We will create An API When we need to perform certain task with database 

// Without Any Condition , IF we want to fetch all data , Then we need to use get request method
/*
server.get("/user",(request,response) => {
    const findRes=database.findAllData("users");
    findRes.then((succRes)=>{
        console.log(succRes);
    })
    .catch((errorRes)=>{
        console.log(errorRes);
    });
}) */

server.get("/user",async(request,response) => {
   //Via Exception Handling 
   // await If CAllBack Function is Async
try{
    const findRes= await database.findAllData("users");
    response.status(findRes.status_code);
    response.send(findRes.data);
}
catch(errorResponses) {
    console.log(errorResponses);
}
})


server.get("/user/:id",async(request,response) => {
    // id name are variables  "/user/:id/:name" For multiple params
    try{

    const id=request.params.id;
        const dataRes=await database.findById(id,"users");
        response.status(dataRes.status_code);
        response.json(dataRes.data);
    }
    catch(errorResponses){
         console.log(errorResponses);
    }
})

/* To insert data into database or send data into server the we use post request method of API ,post data access , we have to use "body-parser" library
*/

server.get("/user/:id",async(request,response) => {
    // id name are variables  "/user/:id/:name" For multiple params
    try{

    const id=request.params.id;
        const dataRes=await database.findById(id,"users");
        response.status(dataRes.status_code);
        response.json(dataRes.data);
    }
    catch(errorResponses){
         console.log(errorResponses);
    }
})
server.post("/user",async(request,response)=>{
      const data=request.body;
      try{
      const insertRes=await database.insertOne(data,"users");
      response.status(insertRes.status_code);
      response.send(insertRes);
      }
      catch(errorResponses){
        console.log(errorResponses);
      }
      
})

//For Updating the Data use put http request
server.put("/user/:id",async(request,response)=>{
    const id=request.params.id;
    const data = request.body;
    console.log(id);
    try{
        const updateRes=await database.updateById(id,{
            $set: data
        },"users");
        response.status(updateRes.status_code);
        response.send(updateRes);
     }
    catch(errorResponses){
        console.log(errorResponses);
    }
})
//For delete
server.delete("/user/:id",async(request,response)=>{
    const id=request.params.id;
    try{
        const deleteRes=await database.deleteById(id,"users");
        response.status(deleteRes.status_code);
        response.send(deleteRes);
     }
    catch(errorResponses){
        console.log(errorResponses);
    }
})


server.listen(8080,() => {
    console.log("Server listening on 8080 port")
})