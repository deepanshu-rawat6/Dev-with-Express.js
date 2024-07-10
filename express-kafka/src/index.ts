import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import { run as runTopic } from './topic';
import { run as runProducer } from './producer';

const app = express();

app.use(bodyParser.json());

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    runTopic();
    runProducer();
    console.log(`Server is running on port ${PORT}`);
});