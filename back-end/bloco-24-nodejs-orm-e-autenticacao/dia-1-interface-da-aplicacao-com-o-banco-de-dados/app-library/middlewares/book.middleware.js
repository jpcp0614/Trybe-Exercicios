function validateTitle (req, res, next) {
  const { title } = req.body;

  if (!title || typeof title !== 'string' || title.length < 3) {
    return res.status(422).json({ message: 'data invalid' })
  }
  next();
}

function validateAuthor (req, res, next) {
  const { author } = req.body;

  if (!author || typeof author !== 'string' || author.length < 3) {
    return res.status(422).json({ message: 'data invalid' })
  }
  next();
}

function validatePageQuantity (req, res, next) {
  const { pageQuantity } = req.body;

  if (!pageQuantity || typeof pageQuantity !== 'number' || pageQuantity.length < 1) {
    return res.status(422).json({ message: 'data invalid' })
  }
  next();
}


module.exports = {
  validateTitle,
  validateAuthor,
  validatePageQuantity
}