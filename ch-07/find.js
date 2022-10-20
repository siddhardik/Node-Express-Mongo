const http = require("http");
const mongo = require("mongodb").MongoClient;
const server = http.createServer((request,response)=>{
    const url = "mongodb://localhost:27017";
    mongo.connect(url,(error,conn)=>{
      const db = conn.db("sidCricketAcademy");

      db.collection("bat_info").find(null,{
        projection: {
          _id: 1,
          name: 0,
          Weight:1,
          height:1
        }
      }).toArray((error,data)=>{
        console.log(data);
      });
    });
});
server.listen(8080);