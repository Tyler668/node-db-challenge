const express = require('express');

const ProjectRouter = require('./projects/projects-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);

server.get('/', (req, res) =>{
    res.status(200).json({Message: "You've reached the server 4242"});
})

module.exports = server;