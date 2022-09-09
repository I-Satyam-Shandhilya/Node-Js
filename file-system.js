const fs = require('fs');

const input = process.argv;

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3]);
}
else{
    console.log("invalid input");
}

console.log(process.argv);


//type in terminal to run 
//node file-system.js add data.txt 'this is a text'           //for creating a file through terminal