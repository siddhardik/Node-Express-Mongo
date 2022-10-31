// Learn Create Module Under Express
//Module use to reusable the code
const testing=()=>{
    return "Verified It!"
}
const sidPrint=()=>{
    return "My Name is Siddhartha";
}

module.exports={
    testFun: testing ,
    outMyName: sidPrint
}