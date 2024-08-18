delimiter $$
create procedure somavendas(out soma float(10,2))
begin

declare vv float(10,2) default 0;
declare fimloop int default 0;

declare meucursor cursor for select f_valor_venda from venda;
declare continue handler for not found set fimloop = 1;

set soma= 0;

open meucursor;
while (fimloop != 1 ) do
fetch meucursor into vv;
set soma = soma + vv;
end while;

end $$
delimiter ;

call somavendas(@ret);
select round(@ret,2);