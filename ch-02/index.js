// JSON cannot contain functions.	JavaScript objects can contain functions.
// JSON can be created and used by other programming languages.	JavaScript objects can only be used in JavaScript.

// // json object
// const jsonData = '{ "name": "John", "age": 22 }';

// // converting to JavaScript object
// const JsObj = JSON.parse(jsonData);

// // accessing the data
// console.log(JsObj); 
// // { name: 'John', age: 22 }

// const JSONObj= JSON.stringify(JsObj);
// console.log(JSONObj); 
// // {"name":"John","age":22}

// npx nodemon index.js
const http=require("http");
//http is a object

// console.log(http.STATUS_CODES);

// When Server is created then its return a object server store it in const variable
const server=http.createServer((request,response)=>{
    // request and response are two objects in this callback function
    //we follow api's algorithm
    // 1. Operation Perform
    const date=new Date();
    const date_real=date.toLocaleDateString();

    // 2. Header Response
    response.writeHead(200,{
          'Content-Type':'application/json'
    })

    // 3. Response in JSON format  
    // First Create A JS Object , Then Convert it in   String Format 
    const result = {
        current_date: date_real
      };

    const string_data = JSON.stringify(result);

    response.write(string_data);
    response.write('\n')
    response.write(" 'current_date': " + date_real );

    // disconnect user
    response.end();


})

server.listen(8080);
