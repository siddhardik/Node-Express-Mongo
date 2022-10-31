const fs = require("fs");
const expressClass=require("express");
//Return A Class , Now We need to create A Object 
const server=expressClass();   // expressClass()   or new expressClass() 
//server is a instamce of expressClass

// Routing 
server.get("/",(request,response) => {
   const message={
           message:"The response is from Server"
   }
   response.status(200);
   // response.write()   response.end()  both work done by response.send in Express
   //response.send("Wow you are good!"); // Nornmal Response
   // No Need to define Content-type in Express For Some Area
   response.json(message); // API response  , Here Default content type will be defined as "application/json"
})

server.get("/home",(request,response) => {
    response.status(200);
    const data =fs.readFileSync("./html/homepage.html")
    response.type("text/html");  // Set Content TYpe
    response.send(data);
    
})

server.get("/contact-us",(request,response) => {
    response.status(200);
    const data =fs.readFileSync("./html/contact-us.html")
    response.type("text/html");  // Set Content TYpe
    response.send(data);
    
})

server.get("*",(request,response) => {
    response.status(404);
    const data =fs.readFileSync("./html/not-found.html")
    response.type("text/html");  // Set Content TYpe
    response.send(data);
    
})

/*
server.get("/home",(request,response) => {
    //home is an API
    response.status(200);
    response.json({
        message: "OK",
    })
})
*/
/*
Same API returns different responses According to the http METHOS GET/POST/PUT/DELETE   , But ALL http methods returns the same response for all http requests
*/
 

server.listen(8080,() => {
    console.log("Server listening on 8080 port")
})