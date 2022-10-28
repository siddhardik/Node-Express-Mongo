
const fs = require("fs");
// fs.mkdirSync("NewFolder");  // TO Create A Not Existing Folder
//fs.rmdirSync("NewFolder2");  // TO Delete A Folder

// If Any Files Or FOlder Present inside the NewFolder2 Then The Above Function Will not delete it 

// we/News.js
fs.rmdirSync("we",{recursive:true});  // This Will Delete All Files And Folder inside it

/*
How to check folder or file ?
const data = fs.statSync(“main.txt”);
data.isFile() // returns true if main.txt is a file
How to check file size ?
const data = fs.statSync(“main.txt”);
data.size // returns size in byte
How to convert byte to mb ?
const mb = (data.size/1024/1024);
mb.toFixed(1) // get only 1 digit after decimal
How to check when file is created ?
const data = fs.statSync(“main.txt”);
data.birthtime.toString() 
new Date()
const date = new Date(“your string here”);
// extract only date from string
date.toLocaleDateString(); // mm/dd/yyyy
// extract only time from string
date.toLocaleTimeString()
*/