from model.user import User
import factory


factory.Faker._DEFAULT_LOCALE = 'pt_BR'


class UserFactory(factory.Factory):
    class Meta:
        model = User

    name = factory.Faker('name')
    email = factory.Faker('free_email_domain')
    password = factory.Faker('password')
