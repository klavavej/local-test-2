const { schedule } = require('@netlify/functions')

const handler = async function(event, context) {
    console.log("Received event:", event)

    return {
        statusCode: 200,
        body: "hello world",
    };
};

module.exports.handler = schedule("@hourly", handler);