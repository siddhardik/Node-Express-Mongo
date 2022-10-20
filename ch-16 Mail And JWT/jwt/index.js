const http=require('http');
const jwt =require('jsonwebtoken');
// jwt - json web token       Send Api response as jwt token formate that is not understandable  token means encrypted formate of below "sucMsg"
// jwt module not installed you have to installed it manually and jwt helps to convert a api response into toke
const crypto = require('crypto'); // No need to install crypto module
const key=crypto.randomBytes(9).toString('hex'); // crypto.randomBytes(9) return a key into buffer formate ,convert Array buffer/chunks into hexadecimal format .
const server=http.createServer((request,response)=>{
    /* const sucMsg=JSON.stringify({
        messgae:" Wow it works !",
        data: [1,2,6,8,]
     })
     */
     const sucMsg=jwt.sign({
        messgae:" Wow it works !",
        data: [1,2,6,8,]
     },
     //Second Argument is key
     key
     )

     



     response.writeHead(200,{
        'Content-Type': 'application/json'
     })
     response.write(sucMsg);

    response.end();
}
)

server.listen(8080,()=>{
    console.log("Server Has been started");
})

