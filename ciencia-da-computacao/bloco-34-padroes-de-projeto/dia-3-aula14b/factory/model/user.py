class User:
    def __init__(self, email, name, password):
        self.email = email
        self.name = name
        self.password = password

    def login(self, email, password):
        if email != 'zebirita@gmail.com':
            return False

        if password != '123456':
            return False

        return True
