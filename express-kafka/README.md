# Express + Kafka( Distributed Stream Processing System)

![kafka](https://static-00.iconduck.com/assets.00/kafka-icon-2048x935-cvu4503l.png)

## Installation & Setup

To setup the node project

```
npm init -y
```

For the rest of the steps, we will be shifting to `pnpm`.

Installing `express`

```
pnpm i express @types/express 
```

Installing `typescript`

```
pnpm add typescript tsx -D
```

Installing `dotenv`

```
pnpm i dotenv --save
```

Installing `ts-node`

```
pnpm i typescript ts-node @types/node --save-dev 
```

Creating `tsconfig.json`

```
npx tsc --init
```

Installing `body-Parser`

```
pnpm i body-parser @types/body-parser
```

Installing `nodemon`

```
pnpm i nodemon --save-dev
```

Installing package for `Kafka`,

```
pnpm i kafkajs
```

### Installation : Kafka

For installation of `kafka` we will be using `docker`. To setup and run kafka, refer to the docker-compose file in the repo. 

## Architecture of Kafka

Kafka : Distributed Stream Processing System

### Kafka Broker

![kafka-broker](./img/01-kafka-broker.excalidraw.png)

### Kafka Producer

![producer](./img/02-kafka-producer.excalidraw.png)

### Kafka Consumer

![consumer](./img/03-kafka-consumer.excalidraw.png)

### Kafka Partitions

![partitions](./img/04-kafka-partitions.excalidraw.png)

### Queue vs Pub-Sub

![pub-sub](./img/05-pub-sub.excalidraw.png)

* Queue  : Message published once, consumed once     (good for job execution, specially when we want to execute anything once)

* Pub - Sub : Message published once, consumed many times (mutlicast or broadcast the messages, we don't want to the data to be removed from our source)

* Kafka : How can we do both??

* Answer : Consumer Groups

### Consumer Groups

![consumer-groups](./img/06-consumer-groups.excalidraw.png)

* To act like a queue, put all your consumers in one group

* To act like a pub/sub, put each consumer in a unique group

* Parallel processing

### Distributed Systems

![kafka](./img/07-distributed-systems.excalidraw.png)

### Zookeeper

![zookeeper](./img/08-distributed-systems.excalidraw.png)

## Observation on Kafka (Pros and Cons)

### Pros

* Append only commit log (we write to the log, and the information append to the end) (WORM => Write Once Read Many)

    * We can append quickly in the end
    * We can traverse to the end very quickly
    * We can insert efficiently append data to the end(rather than having complex structures like B-Trees to change its structure or fragments on each push)

* Performance
* Distributed
    * With zookeeper the concept is still append only log, we have a leader partition and can write to it
    * The data written to the leader will be copied to the follower partitions. 
* Long polling
    * RabbitMQ uses the push model(`tcp-connection`) to send the information to the consumer
    * Limitations of push model is consumer can't consume as fast as producer pushes the information.
    * Kafka does this smartly, instead of continuous polling from the consumer. The consumer does:

        ```
        Is there a message, and don't respond immediately that there is a message. Wait for x amount of time and btw there are n number of messages push them to me or m bytes of messages then push them to me.

        Don't send me empty responses
        ```

    * Continuous polling is harmful for CPU cyles from both server and client.

* Event driven, Pub Sub and Queue
    * Queue: We can put consumers in a group(consumer group) and each consumer recieve only one message and not other consumer.

    * Pub Sub: Broadcast messages (publish and consume : some consumers can do certain tasks (consumer groups))

    * Event driven: Kafka with Microservices
        * Kafka work naturally with mircoservices
        * If something happends do this
    
* Scaling

* Parallel processing (partitions)

### Cons

* Zookeeper
    * It doesn't behaves properly in scale with microservices.
    * It is used as service discovery mechanism
    * If zookeeper is down, kafka can't work.

* Producer explicit partition can lead to problems.
    * Similar problem with sharding with relational DBs. Like if want to query in a specific range then we need to have sharding key, references for which DB holds this range. (Beneficial but complex!) (Vitess for SQL)

* Complex to install, configure and manage
