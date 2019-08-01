const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../authorization/auth-router');
//
const createdValuesRouter = require('../routers/createdValuesRouter');
const defaultValuesRouter = require('../routers/defaultValuesRouter');
const projectsRouter = require('../routers/projectsRouter');
const userValuesRouter = require('../routers/userValuesRouter');
//
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api', authRouter);
// server.use('/api/auth', authRouter);
server.use('/api/createdvalues', createdValuesRouter);
server.use('/api/defaultvalues', defaultValuesRouter);
server.use('/api/projects', projectsRouter);
server.use('/api/uservalues', userValuesRouter);



server.get('/', (req, res) => {
  res.status(200).json({api: "It's working! It's working!"});
});

module.exports = server;