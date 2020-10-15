module.exports = importFactory = (file) => {
  return require(`./factory/${file}`)
}

module.exports = importMiddlewares = (file) => {
  return require(`./middlewares/${file}`)
}
