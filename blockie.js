const {createCanvas} = require("canvas")
const {render} = require("ethereum-blockies")

async function createBlockie(seed, size) {
  return new Promise((resolve, reject) => {
    const options = {}
    switch(size) {
      case 8:
        options.size = 8
        options.scale = 1
        break
      case 32:
        options.size = 8
        options.scale = 4
        break
      case 64:
        options.size = 8
        options.scale = 8
        break
      default:
        return reject(new Error("Unsupported size"))
    }
    options.seed = seed

    canvas = createCanvas(size, size)
    render(options, canvas)

    canvas.toBuffer((err, buf) => {
      if (err) {
        return reject(err)
      }

      return resolve(buf)
    })
  })  
}

module.exports = createBlockie
