/*
AND = as duas afirmações tem que ser verdadeiras.
OR = uma das afirmações tem que ser verdadeira.
NOT = negando a afirmação, basicamente o inverso.
*/

select * from cliente 
where
(i_tipocliente_cliente != 1 AND i_tipocliente_cliente !=2) and not d_nascimentocliente_cliente is not null