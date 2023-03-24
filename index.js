
(async () => {
    const fast = require("fastify");
    console.log(typeof fast, require, require.cache);
})()