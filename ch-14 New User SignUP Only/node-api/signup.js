const database = require("./db");
exports.result = (request,response)=>{
  let formdata = "";

  request.on("data",(chunks)=>{
    formdata += chunks.toString();
  });

  // get data when chunks is completed
  request.on("end",()=>{
    const userInfo = JSON.parse(formdata);  // Convert Data into JSON Object
    const query = {
      email: userInfo.email
    };

    // check user exists or not
    const findRes = database.find(query);
    findRes
    .then((successRes)=>{
      sendResponse(
        response,
        successRes.status_code,
        successRes.message
      );
    })
    .catch((errorRes)=>{
      // new user try to proceed the signup
      createUser(userInfo);
    });
  });

  const createUser = (userInfo)=>{
    const insertRes = database.insertOne(userInfo);
    insertRes
    .then((successRes)=>{
      console.log("After insert SuccessFully Happen");
      console.log(successRes);
/*
      After insert SuccessFully Happen
{
  status_code: 200,
  message: CommandResult {
    result: { n: 1, ok: 1 },
    connection: Connection {
      _events: [Object: null prototype],
      _eventsCount: 5,
      _maxListeners: undefined,
      id: 2,
      options: [Object],
      logger: [Logger],
      bson: BSON {},
      tag: undefined,
      maxBsonMessageSize: 67108864,
      helloOk: undefined,
      port: 27017,
      host: 'localhost',
      socketTimeout: 0,
      keepAlive: true,
      keepAliveInitialDelay: 0,
      connectionTimeout: 10000,
      responseOptions: [Object],
      flushing: false,
      queue: [],
      writeStream: null,
      destroyed: false,
      timedOut: false,
      hashedName: '29bafad3b32b11dc7ce934204952515ea5984b3c',
      workItems: [],
      socket: [Socket],
      buffer: null,
      sizeOfMessage: 0,
      bytesRead: 0,
      stubBuffer: null,
      ismaster: [Object],
      lastIsMasterMS: 2,
      [Symbol(kCapture)]: false
    },
    message: BinMsg {
      parsed: true,
      raw: <Buffer 2d 00 00 00 78 05 00 00 06 00 00 00 dd 07 00 00 00 00 00 00 00 18 00 00 00 10 6e 00 01 00 00 00 01 6f 6b 00 00 00 00 00 00 00 f0 3f 00>,    
      data: <Buffer 00 00 00 00 00 18 00 00 00 10 6e 00 01 00 00 00 01 6f 6b 00 00 00 00 00 00 00 f0 3f 00>,
      bson: BSON {},
    },
    ops: [ [Object] ],
    insertedCount: 1,
    insertedId: 634bee8aa6e0c02f1478650a
  }
}
*/
      
    })
    .catch((errorRes)=>{
      console.log(errorRes);
    });
  }

  // send response
  const sendResponse = (response,status_code,responseMessage)=>{
    response.writeHead(status_code,{
      'Content-Type' : 'application/json'
    });
    response.write(JSON.stringify(responseMessage));
    return response.end();
  }
}
