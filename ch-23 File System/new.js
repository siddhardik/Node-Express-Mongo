const http = require("http");
const fs = require("fs");

//Error handling of Sync functions  Below one is Move function 
try{
const data = fs.readFileSync("were.txt");
fs.unlinkSync("were.txt");  // Remove it for make copy Functiojn
console.log(data.toString());
fs.writeFileSync("A://CARTOON/were.txt",data);
}
catch(error){
 console.log(error.message);
}