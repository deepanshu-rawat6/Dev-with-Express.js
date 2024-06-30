# Express + RabbitMQ

![rabbit-mq](https://www.rabbitmq.com/img/rabbitmq-logo-with-name.svg)

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
pnpx tsc --init
```

Installing `body-Parser`

```
pnpm i body-parser @types/body-parser
```

Installing `nodemon`

```
pnpm i nodemon --save-dev
```

Installing package for `RabbitMQ`

```
pnpm i 
```

### Installation : RabbitMQ