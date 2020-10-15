module.exports = importCommon = (folder, file) => {
  return require(`./${folder}/${file}`)
}
