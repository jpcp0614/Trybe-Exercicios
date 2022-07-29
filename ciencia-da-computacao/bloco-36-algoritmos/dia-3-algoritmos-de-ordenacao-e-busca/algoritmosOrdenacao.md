# Algoritmos de Ordenação

- Fazem parte de uma categoria que busca colocar elementos de uma sequência em uma determinada ordem definida.
  Esta ordem pode ser numérica, lexicográfica ou qualquer outra característica


# Algoritmos que usam força bruta

-> Selection Sort:
    1️⃣ Encontre o menor elemento da lista (nesse caso, a ideia é ordenar em ordem alfabética);
    2️⃣ Adicione o elemento encontrado em uma outra lista;
    3️⃣ Repita o processo para todos os elementos restantes.

-> Insertion Sort:
    1️⃣ O algoritmo reorganiza os elementos da lista a cada iteração.

-> Bubble Sort:
    1️⃣ Movimentação dos elementos lembra o movimento de bolhas flutuando
    2️⃣ Múltiplas iterações sobre a coleção, sempre comparando o valor ao
       item adjacente e realizando a troca daqueles que estão fora de ordem
    3️⃣ A cada iteração o próximo maior valor é colocado em sua posição correta,
       ou seja, cada item se desloca como uma bolha para a posição a qual pertence.

-> Merge Sort:
    1️⃣ Vamos dividindo a nossa coleção em porções menores até atingirmos uma coleção mínima
    2️⃣ Vamos misturando as porções de forma ordenada até que toda a coleção
       seja reunida novamente, resultando na ordenação.

-> Quick Sort:
    1️⃣ Sua estratégia de ordenação consiste em determinar um elemento pivô
       (nome dado ao elemento que divide o array em porções menores)
    2️⃣ Todos os elementos maiores que o pivô serão colocados à direita e os menores à esquerda
    3️⃣ O pivô será colocado em sua posição correta e teremos duas subcoleções não ordenadas ao seu redor
    4️⃣ Recursivamente ordenamos os sub arrays, repetindo o mesmo processo de escolha do pivô e particionamento (divisão).