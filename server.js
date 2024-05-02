

/*/const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static('public'))

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});*/




const express = require('express');
const { createServer } = require('http');
const { join } = require('path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('a user connected');

    // Événement pour créer une nouvelle partie
    socket.on('createGame', (data) => {
        console.log('Creating new game with', data);
        // Implémente la logique pour créer une nouvelle partie
        // Envoie une réponse ou un message à l'utilisateur
    });

    // Événement pour rejoindre une partie
    socket.on('joinGame', (data) => {
        console.log('Joining game with', data);
        // Implémente la logique pour rejoindre une partie existante
        // Envoie une réponse ou un message à l'utilisateur
    });
});

server.listen(3001, () => {
    console.log('Server running at http://localhost:3001');
});
