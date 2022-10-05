// DELETE /api/users/:id

// GET /api/posts
// POST /api/posts
// PATCH /api/posts/:id
// DELETE /api/posts/:id

// GET /api/tags/:tagName/posts

// server.post('/api/users/register', () =>{});
// server.post('/api/users/login', () => {});
// server.delete('/api/users/:id', () => {});

// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="utf-8">
// <title>Error</title>
// </head>
// <body>
// <pre>Cannot GET /what</pre>
// </body>
// </html>

const PORT = 3000;
const express = require('express');
const morgan = require('morgan');
const server = express();
require('dotenv').config();

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