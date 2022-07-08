class User:
    def __init__(self, email, name, password):
        self.email = email
        self.name = name
        self.password = password

    def login(self, email, password):
        if email != self.email:
            return False

        if password != self.password:
            return False

        return True
