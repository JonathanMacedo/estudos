#LOCATE = pesquisa um conteúdo X em uma string e retorna a posição.
select s_nomecliente_cliente from cliente where i_cliente_cliente= 1;
select locate('b', s_nomecliente_cliente), s_nomecliente_cliente from cliente where i_cliente_cliente = 1;

#UPPER = converte toda a string em maiuscula.
select upper(s_nomecliente_cliente) as s_nomecliente_cliente from cliente where i_cliente_cliente = 1;

#LOWER = converte toda a string em minuscula.alter.
select lower(s_nomecliente_cliente) as s_nomecliente_cliente from cliente where i_cliente_cliente = 1;

#SUBSTR = extrai parte da string (str,posINI, qtde).
select substr(s_nomecliente_cliente,2,3), s_nomecliente_cliente from cliente where i_cliente_cliente = 1;

#CONCAT = concatena duas strings
select concat('Nome: ',s_nomecliente_cliente) as 'Nome' from cliente where i_cliente_cliente = 1;

#FORMAT = formara um numeral para o padrão #,##,###.##, com a quantidade de casas decimais informadas.
select *, format(f_valor_venda, 2) from venda;

#ASCII = retorna o valor ACII do primeiro caractere da string.
select ASCII(s_nomecliente_cliente), substr(s_nomecliente_cliente,1,1), s_nomecliente_cliente from cliente where i_cliente_cliente=2;

#CHAR_LENGHT = retorna o tamanho da string.
select char_length(s_nomecliente_cliente) as 'Quantidade de caracteres:', s_nomecliente_cliente as 'Nome:' from cliente where i_cliente_cliente = 1;

# Fim do Curso 😁