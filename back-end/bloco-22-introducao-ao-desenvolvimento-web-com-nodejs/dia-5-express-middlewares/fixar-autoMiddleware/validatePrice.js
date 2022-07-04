function validatePrice(req, res, next) {
  const { price } = req.body;
  if (!price || price === '' || price < 0) {
    return res.status(400).json({ message: 'Invalid price!'});
  }
  next();
};

module.exports = validatePrice;