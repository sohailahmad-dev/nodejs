const express = require('express');
const mongodb = require('mongodb');
const dbConnect = require('./config/index');

const app = express();
let db;

app.use(express.json());

app.get('/', (req, resp) => {
    resp.send('Hello World!')
})

app.get('/users', async (req, resp) => {
    const res = await db.find().toArray();
    resp.send(res)
})

app.get('/user/:name', async (req, resp) => {
    const res = await db.find({ name: req.params.name }).toArray();
    resp.send(res);
})

app.post("/user", async (req, resp) => {
    const users = await db.find({}).toArray();
    let existing = users.filter(user => user.name === req.body.name);
    if (existing.length) {
        console.log(existing)
        resp.send("User already exists");
    } else {
        const res = await db.insertOne(req.body);
        resp.send(res);
    }
})

app.put('/user/:name', async (req, resp) => {
    const res = await db.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    resp.send(res);
})

app.delete('/user/:id', async (req, resp) => {
    const res = await db.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    resp.send(res);
})

app.listen(5000, async () => {
    db = await dbConnect();
})