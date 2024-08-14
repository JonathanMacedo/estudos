/*HAVING é utilizada para filtrar dados combinado ao GROUP BY.*/
select v.d_data_venda as 'Data venda:', count(v.i_venda_venda) as 'Quantidade de vendas por dia:'
 from venda v
group by v.d_data_venda
having count(d_data_venda) >= 2
