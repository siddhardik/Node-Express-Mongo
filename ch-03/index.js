const http = require("http");
const query=require("querystring")
const server = http.createServer((request,response)=>{

  var userData = "";

  request.on('data',(chunks)=>{
    // chunks in progress

    userData += chunks.toString();
  });
  // data and end are two events 
  // The request object passed in the connection callback is a stream.So, we must listen for the body content to be processed, and it's processed in chunks.We first get the data by listening to the stream data events, and when the data ends, the stream end event is called.

  request.on('end',()=>{
    // data received 100% successful 
    const data = JSON.parse(userData);
    var username = data.username;
    var password = data.password;
    if(username == "siddhardik" && password == "123@wer")
    {
      response.writeHead(200,{
        'Content-Type': 'application/json'
      });
        
      // Make Response in JSON format
      const successMessage = query.stringify({
        message: "User authenticated , Login Successful !"
      });

      response.write(successMessage);
    }
    else{
      response.writeHead(401,{
        'Content-Type': 'application/json'
      });

    // Make Response in JSON format
      const errorMessage = JSON.stringify({
        message: "User unauthenticated ! , Sorry Try With right information"
      });
      response.write(errorMessage);
    }
    response.end();
  });

  // Javascript runs Asynchronously , So Junks are not come totally but response.end dissconnect user, So we write response.end()  under request.on function 



});

server.listen(8080);
