import amqp from 'amqplib';

const msg = {
    number: process.argv[2]
}

// first abstraction, making connection with the server
export async function connect() {
    try {
        // tcp connection
        const connection = await amqp.connect('amqp://user:password@localhost:5672',);

        // create a channel
        const channel = await connection.createChannel();

        // create a queue
        const result = await channel.assertQueue('jobs');

        // send message to the queue
        channel.sendToQueue('jobs', Buffer.from(JSON.stringify(msg)));

        console.log(`Job sent successfully ${msg.number}`);

    } catch (err) {
        console.log(err);
    }
}

connect();