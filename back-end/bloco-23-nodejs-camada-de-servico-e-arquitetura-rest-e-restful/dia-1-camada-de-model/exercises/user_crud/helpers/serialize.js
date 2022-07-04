function serialize (dataUser) {
  return {
    id: dataUser.id,
    firstName: dataUser.first_name,
    lastName: dataUser.last_name,
    email: dataUser.email,
    password: dataUser.password
  }
}

module.exports = serialize;