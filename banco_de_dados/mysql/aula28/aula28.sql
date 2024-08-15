/*
Dependendo de que local se utiliza, modifica a busca. (j%) != (%j)
% = especificar qualquer caractere.
_ = quantidade de caracteres a partir do ponto de uso.
*/
select * from cliente 
where s_nomecliente_cliente like ('b%o')

