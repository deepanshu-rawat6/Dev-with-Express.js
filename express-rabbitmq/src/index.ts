import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
// import { connect as connectPublisher } from './publisher';
// import { connect as connectConsumer } from './consumer';

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {

    // connectPublisher();

    console.log(`Server is running on http://localhost:` + PORT);

    // connectConsumer();
})