const dotenv = require('dotenv');
dotenv.config();
//No Need to put the above line in a constant
const http=require("http");
const nodemailer=require("nodemailer");
const fs=require("fs");
const port =process.env.PORT || 8080;

// console.log(process.env.EMAIL_USERNAME);
const mail=(message,response)=>{
    const authour=nodemailer.createTransport({
        service:"gmail",
        //Service means "Mail Service Provider Name
        auth:{
            user:"monsieur.the.piere.morel@gmail.com",
            pass:"wergrjvbrbvurbubucubub"
            
        }

    })

    const receipt={
        from:"monsieur.the.piere.morel@gmail.com",
        
        to:"siddharthabhunia2020@gmail.com",
        subject:"Verification Code",
         html:message,
         attachments:[
            {
                filename:"pic.jpg",
                content:fs.createReadStream("Assets/pic.png")
                //To create binary code
            },
            {
                filename:"note.pdf",
                content:fs.createReadStream("Assets/notes.pdf")
                //To create binary code

            }
         ]
    }

    authour.sendMail(receipt,(error,mailRes)=>{
      if(error) {
        throw error;
      }
      console.log("Success !");
      response.end();
    })
}
const server=http.createServer((request,response)=>{
   fs.readFile("template.html",(error,Emaildata)=>{
    if(error){
        throw error;
    }

    mail(Emaildata,response);


   })

})


server.listen(port,()=>{
    console.log(` Server has been Started Successfulluy at ${port} `);
})