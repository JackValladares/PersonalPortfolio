const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');

const PORT = 3000;
const HOSTNAME = '127.0.0.1';
const PATH = '../client/build'

//Serve the Static Assets
app.use(express.static(path.join(__dirname, PATH)));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, PATH, 'index.html'));
})


//Body Parser for API Requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Middleware
app.use('/api', userRoutes);





// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err)
    );
app.listen(PORT, HOSTNAME, ()  => {
    console.log(`Server listening on port http://${HOSTNAME}:${PORT}/`);
})

