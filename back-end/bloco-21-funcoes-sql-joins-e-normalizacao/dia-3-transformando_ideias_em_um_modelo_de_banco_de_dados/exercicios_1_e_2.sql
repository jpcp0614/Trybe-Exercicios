-- 1) Normalize a tabela a seguir para a 1ª Forma Normal
/*

|  Funcionário_id  |  Nome  |  Sobrenome  |  Contato  |  Contato  |  DataCadastro  |  Setor  |


Tabela 1:  |  Funcionario_id  |  Nome  |  Sobrenome  |  Email  |  Telefone  |  DataCadastro  |

Tabela 2:  |  Setor_id  |  Funcionario_id  |  Setor  |

*/

-- 2) Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2ª Forma Normal

/*

Tabela 1:  |  Funcionario_id  |  Nome  |  Sobrenome  |  Email  |  Telefone  |  DataCadastro  |

Tabela 2:  |  setor_id  |  Setor  |

Tabela 3:  |  Funcionario_id  |  setor_id  |