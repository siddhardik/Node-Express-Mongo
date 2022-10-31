const express=require("express");
const router=express.Router();
const user=require("./user");
const employee=require("./employee");

const controller=(middlewareRoute)=>{
    switch(middlewareRoute)
    {
        case "/users":
            // console.log(user());
            return user()
            break;

        case "/employee":
            // console.log(employee());
            return employee();
            break;

        default:
            // console.log("Not Found");
            return "Not Found!";
                    
    }
}

router.get("/",async(request,response) => {
    // console.log(request.originalUrl);
    // response.send("This is get request !");
    const result =await controller(request.originalUrl);
    response.send(result);
})

router.post("/",async(request,response) => {
    // response.send("this is Post request !");
    controller(request.originalUrl);
    const result =await controller(request.originalUrl);
    response.send(result);
})

router.put("/",async(request,response) => {
    // response.send("this is put request !");
    controller(request.originalUrl);
    const result =await controller(request.originalUrl);
    response.send(result);
})

router.delete("/",async(request,response) => {
    // response.send("this is delete Request !");
    controller(request.originalUrl);
    const result =await controller(request.originalUrl);
    response.send(result);
})


module.exports=router;