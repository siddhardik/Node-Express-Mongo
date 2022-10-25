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
        if(dataRes.length != 0)
        {
            resolve({
              status_code: 200,
              data: dataRes,
              message: "Match found !"
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
            data: dataRes,
            message: "Data inserted !"
          });
        }
      });
    });
  });
}
