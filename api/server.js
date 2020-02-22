const express = require('express');
const helmet = require('helmet');
const cors = require('cors'); 

const authRouter = require('../auth/auth-router'); 
const usersRouter = require('../users/users-router'); 
const fileUpload = require('express-fileupload');
const server = express(); 

server.use(fileUpload())
server.use(helmet()); 
server.use(express.json()); 
server.use(cors()); 

server.use('/api', authRouter); 
server.use('/api/users', usersRouter); 

server.get('/', (req, res) => { 
    res.send('Saltiest Server is starting');
})
module.exports = server; 