const dbconnect = require('./config-connect-mongo');

const insert = async () => {
    const data = await dbconnect();
    const result = await data.insert(
        [
            {model:'oneplus',price:26000,name:'nord CE'},
            {model:'iphone',price:200000,name:'X'},
            {model:'iphone',price:500000,name:'XR'}
        ]
    );
    if(result.acknowledged){
        console.log("data inserted");
    }
}

insert();