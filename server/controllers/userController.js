const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secret = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5MTUwODg4OCwiaWF0IjoxNjkxNTA4ODg4fQ.XtTgBy4Uw9HKygOkg_ANOFjEv0xuVoQaWp3XnubKniw"

exports.createUser = async (req, res) => {
    try
    {
        if (await User.findOne({ name: req.body.name })) {
            return res.status(409).send("User Already Exists");
        }

        const user = new User(req.body);
        console.log(user + "Request Body:" + req.body);
        await user.save();
        res.status(201).send({ user });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).send();
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getAllUsers = async (req, res) => {
    try{
        const users = User.find({});
        res.send(users);
    } catch(error) {
        res.status(500).send(error);
    }
};

exports.updateUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if(!isValidOperation) return res.status(400).send({error: 'Invalid Updates!'})

    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).send();

        updates.forEach(update => user[update] = req.body[update]);
        await user.save();

        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) return res.status(404).send();
        res.send(user);
    } catch(error) {
        res.status(500).send(error);
    }
}


exports.loginUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.findOne({ name: req.body.name });
        if (!user) return res.status(404).send('User not found');

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) return res.status(401).send('Bad Password');
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).send({ token });
    } catch (error) {
        res.status(500).send(error);
    }
};