const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;
const HOSTNAME = '127.0.0.1';
const PATH = '../client/build'

//Serve the Static Assets
app.use(express.static(path.join(__dirname, PATH)));
app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, PATH, 'index.html'));
})

app.listen(PORT, HOSTNAME, ()  => {
    console.log(`Server listening on port http://${HOSTNAME}:${PORT}/`);
})