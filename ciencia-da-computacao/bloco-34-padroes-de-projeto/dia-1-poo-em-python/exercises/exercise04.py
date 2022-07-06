'''
Implemente um sistemas de logs por nível de severidade, seguindo o diagrama.
'''

from abc import ABC, abstractmethod
from datetime import datetime


class ManipuladorDeLog(ABC):
    @abstractmethod
    @classmethod
    def log(cls, msg):
        raise NotImplementedError


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        with open('log.txt', mode='a') as file:
            print(msg, file=file)


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, msg):
        print(msg)


class Log():
    def __init__(self, manipuladores: ManipuladorDeLog):
        self.__manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador):
        self.__manipuladores.add(manipulador)

    def info(self, msg):
        self.__log('INFO', msg)

    def alerta(self, msg):
        self.__log('ALERTA', msg)

    def erro(self, msg):
        self.__log('ERRO', msg)

    def debug(self, msg):
        self.__log('DEBUG', msg)

    def __log(self, nivel, msg):
        for manipulador in self.__manipuladores:
            manipulador.log(f'{nivel}: {msg}')

    def __formatar(self, nivel, msg):
        data = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
        return f'[{nivel} - {data}]: {msg}'
