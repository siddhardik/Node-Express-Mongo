const http = require("http");
const mongo = require("mongodb").MongoClient;
const server = http.createServer((request,response)=>{
  var url = "mongodb://127.0.0.1/27017";
  mongo.connect(url,(error,conn)=>{
    if(error)
    throw error;

    const db = conn.db("Sid_Academy");
    db.createCollection("result",(error,collection)=>{
      if(error)
      {
        if(error.code == 48)
        {
          response.writeHead(409,{
            'Content-Type': 'application/json'
          });
          const dupMessage = JSON.stringify({
            message: "Duplicate collection !"
          });
          response.write(dupMessage);
          response.end();
        }
      }
      else{
        const data = {
          name: "Hardik Pandya",
          rollNo: 12,
          subject: "maths",
          marks: "80%"
        };
        db.collection("result").insertOne(data,(error,dataRes)=>{
          if(error)
          throw error;

          // success
          response.writeHead(200,{
            'Content-Type': 'application/json'
          });
          const successMessage = JSON.stringify({
            message: dataRes
          });
          response.write(successMessage);
          response.end();
        });
      }


    });
  });

});

server.listen(8080);


// install mongodb in terminal npm install mongodb , Open Compas And Connect
// First Run This Js File ,Then Go to Browser   url bar   http://localhost:8080/

