import time


def saudacao():
    print("Olá, mundo!")
    print("Bem vindo ao mundo Python!")


def despedida():
    print("Até mais!")
    print("Adeus!")


def init():
    print("Iniciando...")
    time.sleep(2)
    saudacao()
    time.sleep(4)
    despedida()


init()
