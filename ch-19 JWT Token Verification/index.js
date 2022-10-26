const http = require("http");
const fs = require("fs");
const signup = require("./node-api/signup");
const login = require("./node-api/login");

const route = (path,response,status_code,type)=>{
  fs.readFile(path,(error,data)=>{
    response.writeHead(status_code,{
      'Content-Type': type
    });
    response.write(data);
    return response.end();
  });
}

const server = http.createServer((request,response)=>{

  // html page routing
  if(request.url == "/" || request.url == "/home" || request.url == "/homepage")
  {
    let type = "text/html";
    let status_code = 200;
    let path = "html/homepage.html";
    route(path,response,status_code,type);
  }
  else if(request.url == "/about" || request.url == "/about-us")
  {
    let type = "text/html";
    let status_code = 200;
    let path = "html/about-us.html";
    route(path,response,status_code,type);
  }
  else if(request.url == "/contact" || request.url == "/contact-us")
  {
    let type = "text/html";
    let status_code = 200;
    let path = "html/contact-us.html";
    route(path,response,status_code,type);
  }

  // css page routing
  else if(request.url  == "/css/homepage.css")
  {
    let type = "text/css";
    let status_code = 200;
    let path = "css/homepage.css";
    route(path,response,status_code,type);
  }

  else if(request.url  == "/css/contact-us.css")
  {
    let type = "text/css";
    let status_code = 200;
    let path = "css/contact-us.css";
    route(path,response,status_code,type);
  }

  else if(request.url  == "/css/about-us.css")
  {
    let type = "text/css";
    let status_code = 200;
    let path = "css/about-us.css";
    route(path,response,status_code,type);
  }

  else if(request.url  == "/css/not-found.css")
  {
    let type = "text/css";
    let status_code = 200;
    let path = "css/not-found.css";
    route(path,response,status_code,type);
  }

  // javascript page routing
  else if(request.url  == "/js/homepage.js")
  {
    let type = "text/javascript";
    let status_code = 200;
    let path = "js/homepage.js";
    route(path,response,status_code,type);
  }

  else if(request.url  == "/js/about-us.js")
  {
    let type = "text/javascript";
    let status_code = 200;
    let path = "js/about-us.js";
    route(path,response,status_code,type);
  }

  else if(request.url  == "/js/contact-us.js")
  {
    let type = "text/javascript";
    let status_code = 200;
    let path = "js/contact-us.js";
    route(path,response,status_code,type);
  }

  else if(request.url  == "/js/not-found.js")
  {
    let type = "text/javascript";
    let status_code = 200;
    let path = "js/not-found.js";
    route(path,response,status_code,type);
  }

  // nodeapis routing
  else if(request.url  == "/api/signup" && request.method == "POST")
  {
    signup.result(request,response);
  }

  else if(request.url  == "/api/login" && request.method == "POST")
  {
    login.result(request,response);
  }

  else{
    let type = "text/html";
    let status_code = 404;
    let path = "html/not-found.html";
    route(path,response,status_code,type);
  }

});

server.listen(8080);
