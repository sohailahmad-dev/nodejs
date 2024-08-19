const express = require('express');
const Student = require('./models/Student');
require('./config');

const app = express();

app.use(express.json())

app.get('/students', async (req, resp) => {
    const res = await Student.find({});
    resp.send(res);
});

app.get('/student/:username', async (req, resp) => {
    const res = await Student.find(req.params);
    resp.send(res);
})

app.post('/student', async (req, resp) => {
    const data = new Student(req.body);
    const res = await data.save();
    resp.send(res);
})

app.put('/student/:username', async (req, resp) => {
    const res = await Student.updateOne(
        req.params,
        { $set: req.body }
    )
    resp.send(res);
})

app.delete('/student/:_id', async (req, resp) => {
    const res = await Student.deleteOne(req.params);
    resp.send(res);
})


app.listen(5000)
