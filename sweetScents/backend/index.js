const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const env = require("dotenv");

const app = express();
env.config();

// connect with Db 
 
// SweetScentsByUsama ? retryWrites = true & w=majority
mongoose.connect(`mongodb+srv://usama:uq_-3tgL92LX74y@cluster0.fkzuf.mongodb.net/`).then((success) => {
    console.log('Database Connected Successfully.')
}).catch(err => console.log(err));

app.use(cors);
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`You server is running at port ${process.env.PORT}`);
})