exports.result = (request,response)=>{
  let formdata = "";

  request.on("data",(chunks)=>{
    formdata += chunks.toString();
  });

  // get data when chunks is completed
  request.on("end",()=>{
    console.log(formdata);
    return response.end();
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
