const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../authorization/auth-router');
// const *some resource* = require('../auth/* insert name of resource*')


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', authRouter);
// server.use('/api/ *Insert resource name *', *Insert resource name *)



server.get('/', (req, res) => {
  res.status(200).json({api: "It's working! It's working!"});
});

module.exports = server;