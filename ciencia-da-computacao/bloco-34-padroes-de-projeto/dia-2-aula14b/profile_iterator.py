from collections.abc import Iterable, Iterator


class ProfileIterator(Iterator):
    def __init__(self, friends):
        self.__friends = friends
        self.__index = 0

    def __next__(self):
        try:
            current_value = self.__friends[self.__index]
        except IndexError:
            raise StopIteration()
        else:
            self.__index += 1
            return current_value


class SocialNetwork(Iterable):
    def __init__(self, friends):
        self.friends = friends

    def __iter__(self):
        return ProfileIterator(self.friends)


network = SocialNetwork(["Ana", "Fernando", "Maria", "Miguel", "Natalia"])
for profile in network:
    print(profile)
