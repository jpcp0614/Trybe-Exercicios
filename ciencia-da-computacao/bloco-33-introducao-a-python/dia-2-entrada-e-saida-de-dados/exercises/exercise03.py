'''
Modifique o exercício anterior para que as palavras sejam lidas de um arquivo.
Considere que o arquivo terá cada palavra em uma linha
'''

import random


MAX_ATTEMPTS = 3


def open_file(file):
    with open(file, 'r') as file:
        return [word.strip() for word in file]


def secret_word(word):
    secret_w = random.choice(word)
    scrambled_word = ''.join(random.sample(secret_w, len(secret_w)))
    return secret_w, scrambled_word


def get_word_input():
    words = list()
    for i in range(MAX_ATTEMPTS):
        word = input('Digite uma palavra: ')
        words.append(word)
    return words


def check_game(secret_word, words):
    if secret_word in words:
        return print(f'You win!!! {secret_word}')
    else:
        return print(f'You lose!!! {secret_word}')


if __name__ == '__main__':
    WORDS = open_file('word.txt')
    secret_word, scrambled_word = secret_word(WORDS)
    print(f'Secret word: {scrambled_word}')
    words = get_word_input()
    check_game(secret_word, words)
