/*
INNER JOIN = o que tem em comum entre as duas tabelas.
LEFT JOIN = além do que é comum entre as duas tabelas, todo conteudo da tabela 1 ou da esquerda.
RIGHT JOIN = além do que é comum entre as duas tabelas, todo conteudo da tabela do JOIN ou da direita.
FULL OUTER JOIN = retorna todo o conjunto das tabelas, idependente se tem relação ou não.
*/

select c.i_cliente_cliente,c.s_nomecliente_cliente,v.i_venda_venda
 from cliente c 
right join venda v 
 on c.i_cliente_cliente = v.i_cliente_cliente 

