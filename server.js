const express = require('express');
const redis = require('redis');

const client = redis.createClient({
    host: 'redis-server',
    port: 6379,
});

const PORT = process.env.PORT;

const app = express();

client.set('number', 0);

app.get('/', (req, res) => {
    client.get('number', (err, number) => {
        client.set('number', parseInt(number) + 1);
        res.send(`숫자가 1씩 올라갑니다. 숫자: ${number}`);
    });
});

app.listen(PORT);
console.log(`Running on http://localhost:${PORT}`);
