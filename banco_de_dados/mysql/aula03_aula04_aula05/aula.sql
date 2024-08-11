
/*
create schema cfbcursos;
create table cfbcursos.cliente(
   i_cliente_cliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
   s_nomecliente_cliente varchar(50) NOT NULL,
   s_cpfcliente_cliente varchar(11) NOT NULL,
   d_nascimentocliente_cliente datetime);
*/

/*
drop schema cfbcursos; Exclui a tabela com todos os dados dentro dele.

drop table cliente; Exclui apenas a tabela especificada.

alter table cliente modify column s_nomecliente_cliente varchar (50) not null;  Modifica uma coluna especificada.

alter table cliente add i_tipocliente_cliente int  not null; Adiciona uma coluna no local desejado.

alter table cliente drop column i_tipo_cliente; Exclui uma coluna.

Utilidade: se quiser rodar um codigo que está comentado, selecione o trecho comentado e rode ele. 😁
Utilisades2: para direcionar um caminho no MySQL, utiliza-se o "."
*/