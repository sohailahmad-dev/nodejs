const express = require('express');
const con = require('./config');

const app = express();

app.use(express.json());

app.get('/users', (req, resp) => {
    con.query('select * from users', (err, result) => {
        if (err) {
            resp.send("Error in fetching users");
        } else {
            resp.send(result);
        }
    })
})

app.post('/user', (req, resp) => {
    con.query('insert into users set ?', req.body, (err, result, fields) => {
        if (err) {
            resp.send('Error in fetching user');
            console.log(err);
        }

        resp.send(result)
    })
})

app.post('/users', (req, resp) => {
    con.query('INSERT into users set ?', req.body, (err, result) => {
        if (err) {
            resp.send('Error in inserting user');
        } else {
            resp.send(result)
        }
    })
})

app.put('/user', (req, resp) => {
    const { id, name, email, password } = req.body;
    const data = [name, email, password, id];

    const updateQuery = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";

    con.query(updateQuery, data, (err, result) => {
        if (err) {
            resp.send('Error in updating user');
        }
        else {
            resp.send(result)
        }
    })
})

app.delete('/user/:id', (req, resp) => {
    let id = req.params.id;
    console.log(id)
    const deleteQuery = `DELETE from users WHERE id = ${id}`
    con.query(deleteQuery, (err, result) => {
        if (err) {
            console.log("in err", err);
            resp.send(err);
        }
        else {
            console.log("in rresult", result);
            resp.send(result);
        }
    })
})


app.listen(5000)