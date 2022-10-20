const http = require("http");
const mongo = require("mongodb").MongoClient;
const server = http.createServer((request,response)=>{
  var url = "mongodb://127.0.0.1/27017";
  mongo.connect(url,(error,conn)=>{
    if(error)
    throw error;
    const data = {
      name: "Ashish Nehra6",
      roll: 216,
      subject: "maths",
      marks: "98%"
    };
    const db = conn.db("Sid_Academy");
    db.collection("result").insertOne(data,(error,dataRes)=>{
      if(error)
      throw error;
      response.writeHead(200,{
        'Content-Type': 'application/json'
      });

    //   console.log(dataRes);
    //   {
    //     acknowledged: true,
    //     insertedId: new ObjectId("6338279d3da4e0faada3d92a")
    //   }

      const successMessage = JSON.stringify({
        message: dataRes
      });

      response.write(successMessage);
      response.end();
    });
  });
});

server.listen(8080);


// install mongodb in terminal npm install mongodb , Open Compas And Connect
// First Run This Js File ,Then Go to Browser   url bar   http://localhost:8080/