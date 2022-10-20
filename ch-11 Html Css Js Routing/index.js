const http=require("http");
const fs=require("fs");
// npx nodemon index.js

const route =(path,response,type,statusCode=200)=>{
    //If Staus Code not Pass It will be By Default 200 ok
        response.writeHead(statusCode,{
            "Content-Type": type
            //For Processing Data As HTML
        })
        fs.readFile(path,(error,data)=>{
            //  if(error) response.writeHead(404);
            response.write(data);
            return  response.end();
            // Use return beacuse not execute this function more than one or twice , in node js callback function are executed more than one
        })
}


const server =http.createServer((request,response)=>{
    // response.write(request.url);
    if(request.url=="/"  || request.url=="/home" || request.url=="/homepage"){
        let type="text/html";
        let path="html/home.html";
        route(path,response,type);
    }
        //   '/' is very important like request.url=="/contact"
    else if(request.url=="/contact" || request.url=="/contact-us"){
        let type="text/html";
        let path="html/contact.html";
        route(path,response,type);
    }
    
    else if(request.url=="/about-us" || request.url=="/about"){
        let type="text/html";
        let path="html/about_us.html";
        route(path,response,type);
    }
    // All CSS Routing
     
    else if(request.url=="/css/about.css"){
        let type="text/css";
        let path="css/about.css";
        route(path,response,type);
    }

    else if(request.url=="/css/home.css"){
        let type="text/css";
        let path="css/home.css";
        route(path,response,type);
    }

    else if(request.url=="/css/contact.css"){
        let type="text/css";
        let path="css/contact.css";
        route(path,response,type);
    }

    else if(request.url=="/css/not-found.css"){
        let type="text/css";
        let path="css/not-found.css";
        route(path,response,type);
    }

    //Javascript Page Routing

    else if(request.url=="/js/home.js"){
        let type="text/javascript";
        let path="js/home.js";
        route(path,response,type);
    }

    else if(request.url=="/js/contact.js"){
        let type="text/javascript";
        let path="js/contact.js";
        route(path,response,type);
    }

    else if(request.url=="/js/not-found.js"){
        let type="text/javascript";
        let path="js/not-found.js";
        route(path,response,type);
    }

    else if(request.url=="/js/about.js"){
        let type="text/javascript";
        let path="js/about.js";
        route(path,response,type);
    }
    

    else{
        let type="text/html";
        let path="html/not-found.html";
        route(path,response,type,404);
    }

})

server.listen(8080,()=>{
    console.log(" Server Has been started Successfulluy !");
})