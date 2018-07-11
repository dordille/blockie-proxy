const {createCanvas} = require("canvas")
const {render} = require("ethereum-blockies")

async function createBlockie(seed, scale) {
  return new Promise((resolve, reject) => {
    const options = {
      size: 8,
      scale: scale,
    }
    options.seed = seed

    const dim = options.size * options.scale
    canvas = createCanvas(dim, dim)
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
