'use strict';
const createBlockie = require("./blockie")

module.exports.createBlockie = async (event, context, callback) => {
  const body = await createBlockie(event['pathParameters']['seed'].toLowerCase(), 64)
  const response = {
    statusCode: 200,
    body: body.toString('base64'),
    headers: { 
      'Content-Type': 'image/png'
    },
    isBase64Encoded: true
  }

  callback(null, response)
}
