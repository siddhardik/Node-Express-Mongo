const database=require("./db");
//you can Require File Without using extention

exports.result = (request,response)=>{
  let formdata = "";

  request.on("data",(chunks)=>{
    formdata += chunks.toString();
  });

  // get data when chunks is completed
  request.on("end",()=>{
    // console.log(formdata);
    database.insertOne(formdata,request,response);
    // return response.end(); Where work will be ended there put response.end()
  });

  /*
  response.writeHead(200,{
    'Content-Type': 'application/json'
  });
  let message = JSON.stringify({
    message: "Success"
  });
  response.write(message);
  return response.end();
  */
}
