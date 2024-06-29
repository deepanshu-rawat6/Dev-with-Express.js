import express from 'express';
import bodyParser from 'body-parser';
import { init as stringInit } from './string';
import { init as listInit } from './list';
import axios from 'axios';
import client from './client';


const app = express();

app.use(bodyParser.json());

stringInit()
listInit()

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {

    const cahceValue = await client.get('todos')

    if (cahceValue) {
        return res.json(JSON.parse(cahceValue))
    }

    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/')

    await client.set('todos', JSON.stringify(data))

    await client.expire('todos', 30)

    return res.json(data);
});

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT);
})