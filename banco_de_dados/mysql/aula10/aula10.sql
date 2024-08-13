/*Quando se utiliza o comando UPDATE, é muito importante definir exatamente o campo que deseja alterar, pois pode alterar elementos que não deseje.*/

/*update cliente set d_nascimentocliente_cliente='2003-09-23' where i_cliente_cliente=1; 
select * from cliente
*/

/*Alterar os dados de todos os clientes.
update cliente set i_tipocliente_cliente=1 where i_cliente_cliente>1;
select * from cliente
*/

insert into cliente
select * from cliente_aux;
select * from cliente



