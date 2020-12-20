const express = require('express');
const helmet = require('helmet');
const cors = require('cors'); 

 
const usersRouter = require('../users/users-router'); 

const server = express(); 

server.use(helmet()); 
server.use(express.json()); 
server.use(cors()); 


server.use('/api/users', usersRouter); 

server.get('/', (req, res) => { 
    res.send('news-bookr Server is starting');
})
module.exports = server; 