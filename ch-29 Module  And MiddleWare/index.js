const express=require("express");
const server=express();
const router=require("./modules/routing");

server.listen(8080,()=>{
    console.log("Server listening on 8080")
})

//Router Level Middleware, Routing is accessible via middleware
server.use("/user",router);
server.use("/employee",router);






























// Below Content is Basic 
// const verifiedModule=require("./modules/verify.js");

//MiddleWare
/*
server.use((request,response,next) => {
    const isVerified=false;
    if(isVerified){
        next();
    }
    else{
        response.status(401);
        response.json({
            message:" Email is not verified"
        })
    }
})
// This Above Middleware will be effecive for below All Routes and is middlware fail then we can not access below any API Route 
*/

// Create A Speacial Type Middle ware, CAll THis checkEmail Func before CAllBack 
/*
const checkEmail=()=>{
    return (request,response,next) => {
        const isVerified=false;
        if(isVerified){
            next();
        }
        else{
            response.status(401);
            response.json({
                message:" Email is not verified"
            })
        }
    }
}
const checkMobile=()=>{
    return (request,response,next) => {
        const isVerified=true;
        if(isVerified){
            next();
        }
        else{
            response.status(401);
            response.json({
                message:" Mobile is not verified"
            })
        }
    }
}
const mieddleware=[checkEmail(),checkMobile()];
server.listen(8080);
//server.get("/",checkEmail(),(request,response)=>{  // For One MiddleWare ,For More use Array
// server.get("/",[checkEmail(),checkMobile()],(request,response)=>{
    server.get("/",mieddleware,(request,response)=>{
    /*
    response.status(200);
    response.send("Success!");
    response.send(verifiedModule.testFun());
    response.send(verifiedModule.outMyName());
    */

    //User requests for API , before give them the response which code will be executed , That Codes will be MiddleWare .  Like Email Verification before redirect to user page

    //response.send(" Welcome to Profile Page");

// })

//  built Express Middleware
//  User Defined Middleware , created by user
//  Third party Middleware , access by npm 
//  Router Level Middleware 