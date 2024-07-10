import { Kafka } from 'kafkajs';


export async function run() {
    try {
        const kafka = new Kafka({
            clientId: "my-app",
            brokers: ["localhost:9092"]
        })

        const consumer = kafka.consumer({ "groupId": "test" })
        console.log("Connecting...");

        await consumer.connect()
        console.log("Connected...");

        await consumer.subscribe({
            "topic": "Users",
            "fromBeginning": true
        })

        await consumer.run({
            "eachMessage": async result => {
                console.log(`Received message ${result.message.value} on partition ${result.partition}`);
            }
        })

    } catch (err) {
        console.log(`Something bad happened ${err}`);

    }
}

run();