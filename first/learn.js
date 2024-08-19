// -----------------------------------------------------------------------------------------------
                                // Lecture # 3
// -----------------------------------------------------------------------------------------------
                                // Lecture # 3
// -----------------------------------------------------------------------------------------------
                                // Lecture # 3
// -----------------------------------------------------------------------------------------------
                                // Lecture # 35

const express = require('express');
const dbConnect = require('./config/index');
const mongodb = require('mongodb');

const app = express();
app.use(express.json())


app.get('/users',async (req,res)=>{ 
    const collection = await dbConnect();
    const data = await collection.find().toArray();
    console.log(data)
    res.send(data)
});

app.post('/user', async (req, res) => {
    const collection = await dbConnect();
     const result = await collection.insertOne(req.body);
    res.send(result);
})

app.put('/user/:name', async (req, res) => {
    const collection = await dbConnect();
    const result = await collection.updateOne(
        { name: req.params.name },
        {$set:req.body}
    )
    res.send(result)
})

app.delete('/user/:name', async (req, res) => {
    const collection = await dbConnect();

    // delete by id
    // const result = await collection.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    
    const result = await collection.deleteOne({name:req.params.name})
    res.send(result)
})



app.listen(5000)

// -----------------------------------------------------------------------------------------------
                                // Lecture # 30 to 34


// adding new data 
// const dbConnect = require('./config/index');

// add data 
// const addData = async (collection) =>{
//     const insertResult = await collection.insertOne({ name: 'Saad', email: 'saad@gmail.com' });
//     console.log('Inserted documents =>', insertResult);
// }

//find with query
// const findData = async (collection, query) =>{
//     const data = await collection.find(query).toArray();
//     console.log('Found Data ==>',data);
//     return data;
// }

// update data 
// const updateData = async (collection) =>{
//     const updated = await collection.updateOne({age:30}, {$set: {age:24}});
//     console.log('Updated Documents => ', updated);
// } 


// delete data 
// const deleteData = async (collection) => {
    // deleting one 
    // const result = await collection.deleteOne({age:24});

    // deleting multiple 
    // const result = await collection.deleteMany({age:23});
    // console.log(result)
// }

// const main = async () => {
    // const collection = await dbConnect();
    // addData(collection)
    // findData(collection, {age: 22})
    // updateData(collection)
//     deleteData(collection)
// }

// main();







                                


// -----------------------------------------------------------------------------------------------
                                // Practice of Previous Lectures

// const express = require('express');

// const app = express();

// app.get('/',(req,res)=>{
//     res.send("Home Page")
// })

// app.listen(5000);

 // -----------------------------------------------------------------------------------------------

                                    //Lecture 25 & 26

//  const express = require('express');
//  const authChecker = require('./middleware/authChecker');

//  const app = express();
//  const route = express.Router();

//  route.use(authChecker);

 

//  app.use(authChecker)

//  app.get('/',(req,res)=>{
//    res.send('Welcome to Home Page');  
//  })

//  route.get('/about',(req,res)=>{
//     res.send('About Page')
//  })

//  route.get('/user',(req,res)=>{
//     res.send('User Page')
//  })


//  app.use('/',route)
 
//  app.listen(5000);
 // -----------------------------------------------------------------------------------------------
                                    //Lecture 23

//  const express = require('express');
 
//  const app = express();
//  app.set('view engine','ejs');

//  app.get('/',(req,res)=>{
//     const user = {
//         name: 'Sohail Ahmad',
//         age:23,
//     }
//     res.render('index',{user});
//  })

//  app.listen(5000)

 // -----------------------------------------------------------------------------------------------
                            // Lecture 22

// const express = require('express');
// const path = require('path');

// const app = express();

// const dirPath = path.join(__dirname,'public');

// app.get('/',(req,res)=>{
//     res.sendFile(`${dirPath}/index.html`)
// })

// app.get('/about', (req,res)=>{
//     res.sendFile(`${dirPath}/about.html`)
// })

// app.get('*', (req,res)=>{
//     res.sendFile(`${dirPath}/404.html`);
// })

// app.listen(5000);

 // -----------------------------------------------------------------------------------------------
                            // Lecture 21

//  const express = require('express');
//  const path = require('path');

//  const app = express();

//  const dirPath = path.join(__dirname,'public');
//  app.use(express.static(dirPath));

//  console.log(dirPath)

//  app.listen(5000)

 // -----------------------------------------------------------------------------------------------
                                    // Lecture 18, 19 & 20
// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send(`<h1>Welcome  ${req?.query?.name} </h1>`);
// })

// app.get('/About', (req,res)=>{
//     res.send(`
//         <input type='text' placeholder='Enter your name' value="${req?.query?.name}"  />
//         <button>Submit </button>
//         `);
// })

// app.get('/Help',(req,res)=>{
//     res.send('Help ')
// })

// app.listen(5000);
    

 // -----------------------------------------------------------------------------------------------

                                    // Lecture 15

// console.log(1);

// setTimeout(()=>{
//     console.log(2);
// },1000)

// console.log(3);

 // -----------------------------------------------------------------------------------------------

                            //Lecture 14

//  const fs = require('fs');
// const path = require('path');
// const  dirPath = path.join(__dirname,'CRUD');
// const filePath = `${dirPath}/file.txt`

// add 

// fs.writeFileSync(filePath,'Add File');


// read

// fs.readFile(filePath, 'utf-8',(err,content) => {
//     console.log(content)
// })


//update 

// fs.appendFile(filePath," and now it's updated", (err)=>{
//     if(!err) console.log('file updated successfully');
// })


//Tricky task to avoid duplication of content in update

// fs.readFile(filePath,'utf-8',(err,content)=>{
//     if(content.includes(' updated')){
//         console.log('File already updated ')
//     }else{
//         fs.appendFile(filePath,' updated', (err)=>{
//             if(!err) console.log('file updated')
//         })
//     }
// })


// Delete 

// fs.unlinkSync(filePath)


//Rename File 
// fs.rename(filePath,`${dirPath}/newFile.txt`,(err)=>{
//     if(!err) console.log('file renamed');
// })



 // -----------------------------------------------------------------------------------------------
 
                                //lecture 13

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'files');
// console.log(dirPath);

// fs.readdir(dirPath,(err,files)=>{
//     files.forEach(item=> console.log(item));
// });

 // ------------------------------------------------------------------------------------------------
 
                                                // Lecture 12

// const fs = require('fs');
// const input = process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3], input[4]);
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log('invalid parameters')
// }

// ---------------------------------------------------------------------------------------------

                                                //Lecture 11

// const http = require('http');
// const data = require('./data')

// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5000)