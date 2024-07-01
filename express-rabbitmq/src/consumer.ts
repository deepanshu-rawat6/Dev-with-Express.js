import amqp from 'amqplib';

const msg = {
    number: 6
}

// first abstraction, making connection with the server
export async function connect() {
    try {
        // tcp connection
        const connection = await amqp.connect('amqp://user:password@localhost:5672',);

        // create a channel
        const channel = await connection.createChannel();

        // create a queue
        // const result = await channel.assertQueue('jobs');

        // consume the message from the queue (dequeue the message from the queue)
        channel.consume('jobs', message => {
            const input = JSON.parse(message.content.toString());

            console.log(`Received job with input ${input.number}`);

            if (input.number == 100) {
                channel.ack(message);
            }
        })

        console.log("Waiting for messages...");


    } catch (err) {
        console.log(err);
    }
}


connect();