select * from venda v 
inner join cliente c on c.i_cliente_cliente = v.i_cliente_cliente
where f_valor_venda = (select max(f_valor_venda) from venda)

