const express = require('express');
const User = require('./models/User');
require('./config');

const app = express();

app.use(express.json())

app.get('/users', async (req, resp) => {
    const res = await User.find({});
    resp.send(res);
})

app.get('/user/:name', async (req, resp) => {
    const res = await User.find(req.params)
    resp.send(res);
})

app.post('/user', async (req, resp) => {
    const data = new User(req.body)
    const res = await data.save();
    resp.send(res);
})

app.put('/user', async (req, resp) => {
    const res = await User.updateOne({ name: req.body.name }, {
        $set: req.body.updated
    })
    resp.send(res)
})

app.delete('/user/:_id', async (req, resp) => {
    const res = await User.deleteOne(req.params);
    resp.send(res);
})

app.get('/search/:id', async (req, resp) => {
    const res = await User.find({
        "$or": [
            { "name": { $regex: req.params.id } },
        ]
    })

    resp.send(res)
})

app.listen(5000)