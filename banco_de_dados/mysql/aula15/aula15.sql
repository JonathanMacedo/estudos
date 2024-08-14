/*Muito util para cadastrar novos clientes sem verificar o ID a todo momento.
*/

insert into cliente values 
((select max(c.i_cliente_cliente)+1 from cliente c),
'Carlos', 
'1234567910',
'1982-10-21',
1);
select * from cliente

