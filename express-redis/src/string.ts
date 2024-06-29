import client from './client';

export async function init() {

    await client.set('msg:4', 'Hey, this message is send from Node.js!');

    // await client.expire('msg:4', 10);

    const result = await client.get('msg:4');

    console.log("Result -> ", result);
}
