/*
SQL SERVER 
SELECT TOP 5 * FROM cliente
*/

select * from venda v
inner  join cliente c on c.i_cliente_cliente = v.i_cliente_cliente
order by f_valor_venda desc limit 3
