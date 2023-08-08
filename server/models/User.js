const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    id: String,
    name: { type: String, unique: true },
    email: String,
    password: String,
});

userSchema.pre('save', async function(next)
{
    //Hash password if new or modified
    if(!this.isModified('password')) return next();

    //Generate salt for hashing
    const salt = await bcrypt.genSalt(10);

    //Hash
    this.password = await bcrypt.hash(this.password, salt);

    next();
});

module.exports = mongoose.model('User', userSchema)

