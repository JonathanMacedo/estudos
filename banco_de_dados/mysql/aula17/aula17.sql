/*Uma VIEW é util para não ficar criando um SELECT a todo
 momento que for necessario consultar uma tabela,
 alem que uma VIEW não armazena nenhum dado a mais, realizando apenas a consulta.*/
 
 
 /*create view cpfcliente as 
 select i_cliente_cliente, s_cpfcliente_cliente from cliente;
 
 select * from cpfcliente*/
 
 /*
 create view niverMesAtual as
 select 
i_cliente_cliente,
s_nomecliente_cliente,
day(d_nascimentocliente_cliente) as 'Dia Aniversario'
from cliente
where month(d_nascimentocliente_cliente) in (3,4) Mês atual se utiliza: curdate()*/

select * from niverMesAtual
