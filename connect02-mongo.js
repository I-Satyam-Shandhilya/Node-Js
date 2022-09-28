const dbconnect = require('./config-connect-mongo');


const main = async () => {
    let data = await dbconnect();
    data = await data.find().toArray().then();
    console.log(data);
}

main();