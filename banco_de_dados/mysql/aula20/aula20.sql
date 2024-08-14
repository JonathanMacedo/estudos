/*GROUP BY é muito util para realizar agrumamentos de dados.*/

/*
select 
c.i_tipocliente_cliente as Tipos_Clientes,
count(c.i_cliente_cliente) as Quantidade
from cliente c
inner join 
tipocliente tc on tc.i_tipocliente_tipocliente = c.i_cliente_cliente
group by c.i_tipocliente_cliente;*/

select v.d_data_venda as 'Data venda:', count(v.i_venda_venda) as 'Quantidade de vendas por dia:'
 from venda v
group by v.d_data_venda