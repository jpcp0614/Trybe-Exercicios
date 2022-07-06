'''
Vamos implementar o diagrama abaixo

- volume
- canal
- tamanho
- ligada

+ aumentar_volume
+ diminuir_volume
+ modificar_canal
+ ligar_desligar

ATRIBUTOS - privados:
volume - será inicializado com um valor de 50 e só pode estar entre 0 e 99;
canal - será inicializado com um valor de 1 e só pode estar entre 1 e 99;
tamanho - será inicializado com o valor do parâmetro;
ligada - será inicializado com o valor de False,
          pois está inicialmente desligado.

MÉTODOS:
aumentar_volume - aumenta o volume de 1 em 1 até o máximo de 99;
diminuir_volume - diminui o volume de 1 em 1 até o mínimo de 0;
modificar_canal - altera o canal de acordo com o parâmetro
                  recebido e deve lançar uma exceção (ValueError)
                  caso o valor esteja fora dos limites;
ligar_desligar - alterna o estado da TV entre ligado e desligado (True/False).
'''


class TV():
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False
        self.__tamanho = tamanho

    def get__volume(self):
        return self.__volume

    def get__canal(self):
        return self.__canal

    def get_tamanho(self):
        return self.__tamanho

    def aumentar_volume(self):
        if 0 <= self.__volume <= 99:
            self.__volume += 1

    def diminuir_volume(self):
        if 0 <= self.__volume <= 99:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if 1 <= canal <= 99:
            self.__canal = canal
        else:
            raise ValueError('Canal inválido')
        self.__canal = canal

    def ligar_desligar(self):
        if self.__ligada:
            self.__ligada = False
        else:
            self.__ligada = True

    def __str__(self):
        return f'''
            Volume: {self.__volume}
            Canal: {self.__canal}
            Tamanho: {self.__tamanho}
            Ligada: {self.__ligada}
            '''


televisão = TV('65\'')
print(televisão)

televisão.diminuir_volume()
print(televisão)
