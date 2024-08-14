/*ORDER BY indica como ordenar os resultados.*/

select * from cliente 
order by 
 left(s_cpfcliente_cliente, 3)