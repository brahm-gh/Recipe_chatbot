import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import fs from 'fs';

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

let smartAnswer;

let jsonData;

try {
    const filePath = 'recipe.json';
    const data = fs.readFileSync(filePath, 'utf8');
    jsonData = JSON.parse(data);
    console.log('JSON data loaded successfully');
} catch (error) {
    console.error('Error reading the file:', error);
    process.exit(1); // Exits the process with an error code
}

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('client message', (msg) => {
        console.log('message: ' + msg);
        smartAnswer = findAnswer(msg);
        socket.emit('bot-message', smartAnswer);
        console.log('response: ', smartAnswer);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));

function findAnswer(query) {
    let lowerCaseQuery = query.toLowerCase();

    // Check for greetings
    for (const keyword of jsonData["greeting"].keywords) {
        if (lowerCaseQuery.includes(keyword)) {
            return jsonData["greeting"].response;
        }
    }

    // Check for farewells
    for (const keyword of jsonData["farewell"].keywords) {
        if (lowerCaseQuery.includes(keyword)) {
            return jsonData["farewell"].response;
        }
    }

    // Check for recipe keywords
    for (const recipe of jsonData["provideRecipe"].responses) {
        if (lowerCaseQuery.includes(recipe.keyword)) {
            return `${recipe.response}\nIngredients:\n${recipe.ingredients}\nFor more instructions, visit: ${recipe.link}`;
        }
    }

    // Fallback response
    return jsonData["fallback"].response;
}
