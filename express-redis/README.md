# Express + Redis

![redis](data:image/jpeg;base64,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)

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