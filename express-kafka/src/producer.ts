import { Kafka } from 'kafkajs';

const msg = process.argv[2];

export async function run() {
    try {
        const kafka = new Kafka({
            clientId: "my-app",
            brokers: ["localhost:9092"]
        })

        const producer = kafka.producer();
        console.log("Connecting...");

        await producer.connect()
        console.log("Connected...");

        // A-M 0, N-Z 1

        const partition = msg[0] < "N" ? 0 : 1;

        const result = await producer.send({
            "topic": "Users",
            "messages": [{
                "value": msg,
                "partition": partition
            }]
        })

        console.log(`Send successfully! ${JSON.stringify(result)}`);

        await producer.disconnect();

    } catch (err) {
        console.log(`Something bad happened ${err}`);

    } finally {
        process.exit(0);
    }
}

run();