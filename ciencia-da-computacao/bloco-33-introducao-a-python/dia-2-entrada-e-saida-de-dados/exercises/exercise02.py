'''
Jogo da palavra embaralhada. Desenvolva um jogo em que o usuário
tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas.
O programa terá uma lista de palavras e escolherá uma aleatoriamente.
O jogador terá três tentativas para adivinhar a palavra. Ao final a
palavra deve ser mostrada na tela, informando se o usuário
ganhou ou perdeu o jogo.

-> Para embaralhar uma palavra faça:
scrambled_word = "".join(random.sample(word, len(word)))

-> O sorteio de uma palavra aleatória pode ser feito utilizando choice:
random.choice(["word1", "word2", "word3"]) -> "word2".
'''

import random


WORDS = [
    'home',
    'door',
    'window',
    'floor',
    'wall',
    'fireplace',
    'table',
    'chair',
    'sofa'
]
MAX_ATTEMPTS = 3


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
        print(f'You win!!! {secret_word}')
    else:
        print(f'You lose!!! {secret_word}')


if __name__ == '__main__':
    secret_word, scrambled_word = secret_word(WORDS)
    print(f'Secret word: {scrambled_word}')
    words = get_word_input()
    check_game(secret_word, words)
