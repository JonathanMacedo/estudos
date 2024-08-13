/*DELETE é um comando perigoso, facilmente pode-se cometer o erro de deletar todo o banco de dados se não utilizar o WHERE.*/

/*
delete from cliente where i_cliente_cliente>0;
insert into cliente select * from cliente_aux;
select * from cliente
*/

/* Como deletar um elemento especifico:
delete from cliente where i_cliente_cliente>5;
select * from cliente