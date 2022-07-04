function isValidLastName (lastName) {
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
}

module.exports = isValidLastName;