from model.user import User
from tests.factories.user_factory import UserFactory


def test_create_user():
    user = User('zebirita@gmail.com', "Jose", "123456")

    assert user.email == 'zebirita@gmail.com'
    assert user.name == "Jose"
    assert user.password == "123456"


def test_login():
    user = UserFactory()

    assert user.login(user.email, user.password) is True
