function isValidFirstName (firstName) {
  if (!firstName || typeof firstName !== 'string') return false;

  return true;
}

module.exports = isValidFirstName;