const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  /*
  fs.open("Demo.txt", "w", (error, success) => {
    /* 1. File Name With Extension 2. It willl be on which mode Here "w", 3. CAllBack Function */
    /*
    fs.writeFile("Demo.txt","My name is siddhardik",(error,data)=>{
         // You can use writeFile Directly 
        if (error) throw error;
        response.write("Writing is successfully done");
        console.log(data);
        return response.end();
        
        // Why return Because it is under multiple callback functions
    })
    
    
  });
  
  */

  /*
  fs.readFile("demo.txt",(error, data) => {
    if (error) throw error;
      response.write(data);
      return response.end();
  })
  */
/*
  //Rename the File Name
  fs.rename("demo.txt","NewFile.txt",(error)=>{
    response.write("Success");
    return response.end();
  })
  */
/*
  //Delete A File

  fs.unlink("newFile.txt",(error)=>{
    response.write("Success");
    return response.end();
  })
  */
/*
  fs.open("Wouw.txt","w",(error,data)=>{
    console.log(data);  //Random Numbers 4 5    6 7
    response.write("Success");
    return response.end();
  })
  */

  /* Above All Function Are ASynchronous means not wait for response Go Forward   One think  CAllBack mile to Asynchronous
  Make All Above Functions Synchronous Add Sync Keyword And Remove CAlLBAck Function
  */
  fs.writeFileSync("Demo.txt","My name is siddhardik")
  response.write("It is Synchronous")
  response.end();
});

server.listen(8080,()=>{
    console.log("Server listening on 8080");
})