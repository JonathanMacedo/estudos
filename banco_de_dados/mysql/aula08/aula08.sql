/*DML = Data manipulation language(Linguagem de manipulação de dados)
Comandos: 
INSERT - EX: insert into <tabela> (colunas) values (valores)

insert into tipocliente values (01, 'Pessoa Fisica');
insert into tipocliente values (02, 'Pessoa Jurídica');
insert into tipocliente values (03, 'Clinte Especial');

Não é necessario especificar  o local em que sera armazenado o dado quando for em todos os campos.
insert into cliente values (01, 'Jonathan', '00000000000', '1978-03-07', 01);
insert into cliente values (02, 'Carlos', '11111111111', '1979-03-07', 02);
insert into cliente values (03, 'João', '22222222222', '1980-03-07', 03);
insert into cliente values (04, 'Clovis', '33333333333', '1981-03-07', 03);
insert into cliente values (05, 'Geovane', '44444444444', '1983-03-07', 02);
insert into cliente values (06, 'Antonio', '55555555555', '1984-03-07', 03);
insert into cliente values (07, 'Luis', '66666666666', '1978-04-07', 01);
insert into cliente values (08, 'Fastou', '77777777777', '1978-03-12', 02);
insert into cliente values (09, 'Silva', '88888888888', '1978-03-03', 03);
insert into cliente values (10, 'Bruno', '99999999999', '1978-03-04', 01);

Quando ira ter valores null, é necessario especificar os aonde sera armazenado os dados.
insert into cliente (i_cliente_cliente,s_nomecliente_cliente, s_cpfcliente_cliente, i_tipocliente_cliente) values (11, 'Ruan', '10101010101', 02);
 

*/

/*DQL =  Data Query Language(Linguagem de consulta de dados)
Comandos: 
SELECT - EX: select * from tipocliente
select * from cliente
*/


