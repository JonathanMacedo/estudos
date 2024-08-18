delimiter $$
create procedure idade (in idcliente int, out idade int, out res varchar(20))
begin 
declare dt datetime;
set dt = (select d_nascimentocliente_cliente from cliente where i_cliente_cliente = idcliente);
set idade = year(now()) - year(dt);

if (idade >=18)
then 
set res = "Maior de idade";
else
set res = "Menor de idade";
end if;

end $$
delimiter ;

call idade(4, @idadecliente,@resultado);
select @idadecliente,@resultado;