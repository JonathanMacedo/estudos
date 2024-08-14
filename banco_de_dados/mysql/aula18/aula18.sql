/*WHERE é um filtro basicamente.*/
 
/*select * from cliente 
where 
s_cpfcliente_cliente = '00000000000' 
or 
s_cpfcliente_cliente='11111111111'*/

select * from cliente 
where 
i_tipocliente_cliente in (1,2)
and 
month(d_nascimentocliente_cliente) >= 3 and month(d_nascimentocliente_cliente) <= 9

