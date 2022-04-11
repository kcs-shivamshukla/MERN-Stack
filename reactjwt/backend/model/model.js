import mongoose from 'mongoose';

// how our document look like
const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    password : String
});


const user = mongoose.model('user', userSchema);

export default user;