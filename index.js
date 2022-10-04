// POST /api/users/register
// POST /api/users/login
// DELETE /api/users/:id

// GET /api/posts
// POST /api/posts
// PATCH /api/posts/:id
// DELETE /api/posts/:id

// GET /api/tags
// GET /api/tags/:tagName/posts

// server.post('/api/users/register', () =>{});
// server.post('/api/users/login', () => {});
// server.delete('/api/users/:id', () => {});

const PORT = 3000;
const express = require('express');
const morgan = require('morgan');
const server = express();

const { client } = require('./db');
client.connect();

server.use(morgan('dev'));
server.use(express.json())

server.use((req, res, next) => {
    console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<_____Body Logger END____>");

    next();
});

const apiRouter = require('./api');
server.use('/api', apiRouter);

server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
});