const mongo=require('mongodb').MongoClient;
const url="mongodb://localhost:27017";
exports.insertOne=(formdata,request,response)=>{
    // Now formdata in String Format
//   console.log(formdata);
const data=JSON.parse(formdata);
mongo.connect(url,(err,conn)=>{
 //Create Or Select Database
 const db=conn.db("sid-learn");
 //Craete Collection Or select
 db.collection("users")
 .insertOne(data,(error,dataRes)=>{
   if(error){
       sendResponse(response,500,"Internal Server Error 500 Means Data not Stored Successfully");
   }
   else{
        sendResponse(response,200,dataRes);
   }

 });
});

}

const sendResponse=(response,status_Code,messageText)=>{
    response.writeHead(status_Code,{
        'Content-Type': 'application/json'
      });
      let message = JSON.stringify({
        message: messageText 
      });
      response.write(message);
      return response.end();
}
