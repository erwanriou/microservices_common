"use strict"

module.exports = factory = (file) => {
  return require(`./factory/${file}`)
}

module.exports = middlewares = (file) => {
  return require(`./middlewares/${file}`)
}
