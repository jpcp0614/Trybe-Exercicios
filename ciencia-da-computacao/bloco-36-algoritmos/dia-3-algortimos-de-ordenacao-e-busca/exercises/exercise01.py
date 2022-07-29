'''
Dado um array com os seguintes elementos
["zebra", "macaco", "elefante", "arara", "javali"],
após duas iterações utilizando bubble sort, como estaria este array?

Visualizando a estrutura do Course:

1) Flutuar o primeiro elemento para a última posição da lista
"zebra" -> "macaco" (z vem depois da letra m)
["macaco", "zebra", "elefante", "arara", "javali"]
"zebra" -> "elefante" (z vem depois da letra e)
["macaco", "elefante", "zebra", "arara", "javali"]
"zebra" -> "arara" (z vem depois da letra a)
["macaco", "elefante", "arara", "zebra", "javali"]
"zebra" -> "javali" (z vem depois da letra j)
["macaco", "elefante", "arara", "javali", "zebra"]

2) Flutuar o primeiro elemento para a última posição da lista
"macaco" -> "elefante" (m vem depois da letra e)
["elefante", "macaco", "arara", "javali", "zebra"]
"macaco" -> "arara" (m vem depois da letra a)
["elefante", "arara", "macaco", "javali", "zebra"]
"macaco" -> "javali" (m vem depois da letra j)
["elefante", "arara", "javali", "macaco", "zebra"]
"macaco" -> "zebra" (m vem antes da letra z)
["elefante", "arara", "javali", "macaco", "zebra"]

'''
