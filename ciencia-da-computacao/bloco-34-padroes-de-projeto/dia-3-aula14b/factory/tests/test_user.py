from model.user import User


def test_create_user():
    user = User('zebirita@gmail.com', "Jose", "123456")

    assert user.email == 'zebirita@gmail.com'
    assert user.name == "Jose"
    assert user.password == "123456"


def test_login():
    email = 'zebirita@gmail.com'
    password = '123456'

    user = User('zebirita@gmail.com', "Jose", "123456")

    assert user.login(email, password) is True
