const http = require("http");
const query = require("querystring");
const server = http.createServer((request,response)=>{

  if(request.method == "GET")
  {
    var userData = query.parse(request.url.replace("/?",""));
    var username = userData.username;
    var password = userData.password;
    if(username == "siddhardik" && password == "123wer")
    {
      response.writeHead(200,{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      });

      const successMessage = JSON.stringify({
        message: "User authenticated !"
      });

      response.write(successMessage);
    }
    else{
      response.writeHead(401,{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      });

      const successMessage = JSON.stringify({
        message: "User unauthenticated !"
      });

      response.write(successMessage);
    }
    response.end();
  }
  else{
    var postdata = "";
    request.on("data",(chunks)=>{
      postdata += chunks.toString();
    });

    request.on("end",()=>{
      const user = query.parse(postdata);
      var username = user.username;
      var password = user.password;
      if(username == "siddhardik" && password == "123wer")
      {
        response.writeHead(200,{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*'
        });
        const successMessage = JSON.stringify({
          message: "user authenticated !"
        });
        response.write(successMessage);
      }
      else{
        response.writeHead(401,{
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*'
        });
        const errorMessage = JSON.stringify({
          message: "user unauthenticated !"
        });
        response.write(errorMessage);
      }
      response.end();
    });
  }
});
server.listen(8080);


// Use Ajax For not open new Page 
