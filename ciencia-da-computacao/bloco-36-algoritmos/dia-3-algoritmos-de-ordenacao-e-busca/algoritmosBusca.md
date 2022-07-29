# Algoritmos de Busca

-> Busca linear:
    Uma forma simples de fazer a busca de algum valor em um array ou lista é usando a busca linear, que consiste em percorrer toda a estrutura elemento a elemento, tentando encontrar o valor. Também é conhecida como busca sequencial, por conta da maneira com que percorremos a estrutura em busca do valor.
    A busca linear pode ser simples, mas não necessariamente será a solução mais rápida, já que ela faz uma verificação de todos os elementos para encontrar qual é o correspondente.

-> Busca binária:
    Vamos supor a seguinte lista: [1, 10, 35, 42, 51, 60, 75].
    Nesse caso, o número buscado é 60.
    Dividimos a lista em duas partes e verificamos se o elemento do meio (42) é o elemento procurado.
    Como sabemos que a lista está ordenada e que o valor buscado é maior que o encontrado, não precisamos comparar com todos os outros à esquerda. Vamos procurar somente os valores posteriores a ele [51, 60, 75].
    Realizamos o mesmo processo de divisão e nosso elemento do meio passa a ser 60.
    Como encontramos o valor, vamos retornar o seu índice, 5.