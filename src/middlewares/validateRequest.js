const validator = require("express-validator")
const { RequestValdationError } = require("../factory/errors")


module.exports = (req, res, next) => {
  const errors = validator.validationResult(req)
  if (!errors.isEmpty()) {
    throw new RequestValdationError(errors.array())
  }
  next()
}
