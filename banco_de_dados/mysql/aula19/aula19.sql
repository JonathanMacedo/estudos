/*INNER JOIN é para juntar os dados de duas tabelas.*/

/*
select 
c.i_cliente_cliente, c.s_nomecliente_cliente, c.s_cpfcliente_cliente,
c.d_nascimentocliente_cliente, c.i_tipocliente_cliente 
from cliente c
inner join tipocliente tc on c.i_tipocliente_cliente  = tc.i_tipocliente_tipocliente*/

select 
v.i_venda_venda,
c.s_cpfcliente_cliente,
v.d_data_venda,
v.f_valor_venda
from venda v
inner join cliente c on v.i_cliente_cliente = c.i_cliente_cliente
inner join tipocliente tc on c.i_tipocliente_cliente = tc.i_tipocliente_tipocliente 

/*Sem o ALLIAS pode dar erro, se atentar a isso*/

