import { Kafka } from 'kafkajs';

export async function run() {
    try {
        const kafka = new Kafka({
            clientId: "my-app",
            brokers: ["localhost:9092"]
        })


        const admin = kafka.admin();
        console.log("Connecting...");

        await admin.connect()
        console.log("Connected...");

        // A-M, N-Z
        await admin.createTopics({
            topics: [{
                "topic": "Users",
                "numPartitions": 2
            }]
        })
        console.log("Created successfully!");

        await admin.disconnect();


    } catch (err) {
        console.log(`Something bad happened ${err}`);

    } finally {
        process.exit(0);
    }
}

run();