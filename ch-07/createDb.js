const http=require("http");
const mongo=require("mongodb");

const server = http.createServer((request,response)=>{
    const url ="mongodb://localhost:27017";

mongo.MongoClient.connect(url,(err,connec)=>{

    if(err){
        throw err;
    }
    // Creation of the Database If no error
 const db=connec.db("SidCricketAcademy");  //Rerturn A Object
 // Creation of the collection

 db.createCollection("bat_info",(err,collection)=>{
    if(err){
        if(err.code==48){

            response.writeHead(409,{
                "Content-Type":"application/json"
            });
             
            const duplimsg=JSON.stringify({
                  Message:"This Collection is Already Exists"
            })

            response.write(duplimsg);
            response.end();
        }
    }

    else{

        const data={
            name:"b1",
            Weight:1220,
            height:75
        };

        db.collection("bat_info").insertOne(data,(err,insertResult)=>{
            if(err){
                throw err;
            }

            //Success
            response.writeHead(200,{
                'Content-Type':'application/json'
            });

            //Success Messsage

            const SucMsg=JSON.stringify({
                Message:"Insert Data Successfully"
            });

            response.write(SucMsg);
            response.end();
        })



    }
});
});

}); 

server.listen(8080);





