const {MongoClient}  = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

//dbName
const dbName = 'local';

async function dbConnect(){
    await client.connect();
    console.log('Connected Successfully to Server');

    // connection with db
    const db = client.db(dbName);
    const collection  = db.collection('users');

    return collection
    

}

module.exports = dbConnect;