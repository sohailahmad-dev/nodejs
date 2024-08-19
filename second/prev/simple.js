const mongoose = require('mongoose');

// connecting db
mongoose.connect("mongodb://localhost:27017/local");

// user schema 
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// user model 
const User = new mongoose.model('users', UserSchema);

const addUser = async (user) => {
    const data = new User(user);
    const res = await data.save();
    console.log(res)
}

const updateUser = async () => {
    const res = await User.updateOne(
        { name: 'Ali' },
        { $set: { name: 'M Ali', age: 31 } }
    )
    console.log(res)
}

const deleteUser = async () => {
    const res = await User.deleteMany({ name: 'Sam' })
    console.log(res)
}

const getUsers = async () => {
    const res = await User.find();
    console.log(res)
}

const getUser = async () => {
    const res = await User.find({ name: 'Riaz Ahmad' });
    console.log(res)
}
const main = async () => {
    // addUser({ name: 'Riaz Ahmad', age: 45 });
    // updateUser()
    // deleteUser()
    // getUsers()
    // getUser()

}

main();