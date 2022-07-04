function isValidPassword (password) {
  if (!password || typeof password !== 'string' || password.length < 6) return false;

  return true;
}

module.exports = isValidPassword;