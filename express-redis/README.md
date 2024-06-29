# Express + Redis

![redis](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Logo-redis.svg/1200px-Logo-redis.svg.png)

## Installation & Setup

### List of setup commands:

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

Installing `ioredis`

```
pnpm i ioredis
```

### Installation : Redis

We will be using docker image of `redis`, and `redis`is a command line tool. Since `redis-stack-server` is geared to be used in production so we will be using `redis-stack`.

Command for Redis-stack (we are using an older version because of stability issues from `Redis Insight`)

```
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:7.2.0-v2
```

## Redis

### Redis Strings

#### SET

We can `set` a string in redis, relaed to the format of `" < entity > < value > "`. But this approach is not suitable for working professionally.

Example:

```
-> set name deepanshu
    O.K.
```

Instead, we `set` a string, this format: `" < entity > : < id > < value > "`.

Example:

```
-> set user:1 deepanshu
    O.K.
```

#### GET

In order to `get` a string from the memory store, we use the get command.

Example:

```
-> get user:1
    "deepanshu"
```


#### SETNX

Also, we have some flags: `nx` and `xx`. The `nx` flag is used to set the string only if the `id` of a `key` or `entity` is not fixed.

Example:

Let's say we set a user at id 3 named jhon_doe

```
-> set user:3 jhon_doe
    O.K.
```

Now, let's try to another user at id 3 named jake

```
-> set user:3 jake nx
    (nil)
```

#### MGET

In order to get multiple strings using a single operation, we can use `mget` command.

Example:

```
-> mget user:1 user:2 msg:1
    1) "deepanshu"
    2) "doe"
    3) "hello!"
```

#### MSET

Similar to `mget`, we can multiple strings in a single operation, using the `mset` command.


#### INCR

In order to increment a value, we can use the `incr` command.

Example:

```
-> set count 0
    OK

-> incr count
    (integer) 1
```

We can also, use `incrby` to increment a variable by a certain value.

Example:

```
-> set count 0
    OK

-> incrby count 10
    (integer) 10
```


### Redis Lists

Lists in Redis are important data structure that are linked lists of string values. They can used to implement `stacks` and `queues`, and build queue management for background worker systems.

Some basic commands for Lists:

1. `LPUSH` (adds a new element to the head of the list) ; `RPUSH` (adds element to the tail).
2. `LPOP` (removes and returns an element from the head of a list) ; `RPOP` (does same but from the tails of a list).
3. `LLEN` (length!)
4. `LMOVE` (automatically moves elements from one list to another)
5. `LTRIM` (reduces a list to the specified range of elements)


Some blocking commands

1. `BLPOP` (pop normally till no values are left to pop, and then enter in blocking mode till a certain timeout or a new value is inserted)
