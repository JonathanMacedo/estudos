/*
UNION = o numero de colunas tem que ser as mesmas, e dos mesmo tipos.
*/

select 'Cliente' as tabela, i_cliente_cliente, s_nomecliente_cliente from cliente
union
select 'Cliente_aux', i_cliente_cliente, s_nomecliente_cliente from cliente_aux
union
select 'Venda', v.i_cliente_cliente, c.i_cliente_cliente from venda v
inner join cliente c on v.i_cliente_cliente = c.i_cliente_cliente