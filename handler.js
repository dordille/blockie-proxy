"use strict"
const createBlockie = require("./blockie")

module.exports.createBlockie = async (event, context, callback) => {
  const seed = event["pathParameters"]["seed"].toLowerCase()
  const scale = event["queryStringParameters"]
    ? parseInt(event["queryStringParameters"]["scale"]) || 1
    : 1

  const body = await createBlockie(seed, scale)
  const response = {
    statusCode: 200,
    body: body.toString("base64"),
    headers: {
      "Content-Type": "image/png",
    },
    isBase64Encoded: true,
  }

  callback(null, response)
}
