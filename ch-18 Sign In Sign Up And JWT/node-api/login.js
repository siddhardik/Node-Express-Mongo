const database = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.result = (request,response)=>{
  let formdata = "";

  request.on("data",(chunks)=>{
    formdata += chunks.toString();
  });

  request.on("end",()=>{
    const user = JSON.parse(formdata);
    const query = {
      email: user.username
    }

    const findRes = database.find(query);
    findRes.then((successRes)=>{
      const userInfo = successRes;
      const realPassword = userInfo.data[0].password;

      // match encrypted password
      bcrypt.compare(user.password,realPassword)
      .then((isMatched)=>{
        if(isMatched)
        {
          // login success
          const token = jwt.sign(userInfo.data[0],"1234");
          const message = JSON.stringify({
            message: "User authenticated !",
            token : token
          });

          sendResponse(response,200,message);
        }
        else{
          // login failed
          const message = JSON.stringify({
            message: "Authentication failed !"
          });
          sendResponse(response,401,message);
        }
      });
    })
    .catch((errorRes)=>{
      const message = JSON.stringify({
        message: "User not found !"
      });
      sendResponse(response,404,message);
    });

  });

  const sendResponse = (response,status_code,message)=>{
      response.writeHead(status_code,{
        'Content-Type': 'application/json'
      });
      response.write(message);
      return response.end();
  }

}
