select * from cliente c1, cliente c2 
where c1.i_tipocliente_cliente = c2.i_tipocliente_cliente
and
c1.s_nomecliente_cliente = 'Jonathan'
order by c1.i_tipocliente_cliente