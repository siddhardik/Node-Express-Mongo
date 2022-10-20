const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

// establish connection
const config = ()=>{
  return new Promise((resolve,reject)=>{
    mongo.connect(url,(error,conn)=>{
      const db = conn.db("nodewap");
      const collection = db.collection("users");
      resolve(collection);
    });
  });
}

// fetch or find data
exports.find = (query)=>{
  return new Promise((resolve,reject)=>{
    config().then((collection)=>{
      collection.find(query).toArray((error,dataRes)=>{
        console.log("Existing Array-> ");
        console.log(dataRes);
        
        //Print The Array means dataRes
        if(dataRes.length != 0)
        {
          
            resolve({
              status_code: 200,
              message: dataRes
            });
        }
        else{
            reject({
              status_code: 404,
              message: "Data not found !"
            })
        }
      });
    });
  });
}

// insert data
exports.insertOne = (formdata)=>{
  return new Promise((resolve,reject)=>{
    config().then((collection)=>{
      collection.insertOne(formdata,(error,dataRes)=>{
        //When insertion will be going to happen
        console.log(`When insertion will be going to happen" ${dataRes}  " Khatam Tata Bye Bye`);
        /*
        When insertion will be going to happen" {"result":{"n":1,"ok":1},"connection":{"id":1,"host":"localhost","port":27017},"ops":[{"name":"gergwergergg hrtg","email":"siddharthabhunia27601@gmail.com","mobile":"463453453454","password":"123456789","_id":"634bebb235fcbc42046e4f93"}],"insertedCount":1,"insertedId":"634bebb235fcbc42046e4f93","n":1,"ok":1}  " Khatam Tata Bye Bye
        */
        if(error)
        {
          reject({
            status_code: 500,
            message: "Internal server error !"
          });
        }
        else{
          resolve({
            status_code: 200,
            message: dataRes
          });
        }
      });
    });
  });
}
