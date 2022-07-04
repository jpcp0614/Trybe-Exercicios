/* 

2) Converta a tabela desnormalizada abaixo para a 1ª Forma Normal.

|  residencia_id  |  residencia_locador  |  tipo  |  endereco  |  inquilinos  |

Tabela residência
|  residencia_id  |  residencia_locador  |  tipo  |  endereco  |  cidade  |  estado  |

Tabela inquilino
|  inquilino_id  |  nome  |  residencia_id  |



3) Converta a tabela desnormalizada abaixo (que já está nos padrões da 1ª Forma Normal) para a 2ª Forma Normal

|  heroi_id  |  heroi  |  liga  |  universo  |  criador  |  criador_idade  |

Tabela herois
|  heroi_id  |  heroi  |  lida_id  |  universo_id  |

Tabela ligas
|  liga_id  |  liga  |  universo_id  |

Tabela Universos
|  universo_id  |  universo  |

Tabela criadores
|  criador_id  |  criador  |  idade  |



4) Agora, converta essa outra tabela (que já está nos moldes das duas primeiras formas) para a 3ª Forma Normal

|  filme_id  |  genero_id  |  genero  |  valor_entrada  |

Tabela filmes
|  filme_id  |  genero_id  |  preco  |

Tabela generos
|  genero_id  |  genero  |
