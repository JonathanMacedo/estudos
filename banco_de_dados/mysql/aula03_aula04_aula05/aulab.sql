/*
create table tipocliente(
i_tipocliente_tipocliente int primary key auto_increment,
s_descricaotipocliente_cliente varchar (100) not null 
);
*/

/*
alter table <tabela de origem> add constraint <nome da restrição> foreing key (<campo da tabela original>) references <tabela de destino> (<campo de tabela do destino>).
*/

alter table cliente add constraint fk_tipocliente foreign key (i_tipocliente_cliente) references tipocliente (i_tipocliente_tipocliente);
