const fs = require('fs');
const dirname  = require('path');
const path = require('path');
const dirPath =path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'this is a sample text file');

// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)
//     console.log("file name is updated");
// })

fs.unlinkSync(`${dirname}/fruit.txt`)