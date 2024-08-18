/*
delimiter $$
create procedure loopwhile(in max int, out soma int)
begin
declare x int default 0;

while(x < max) do
set x = x +1;
end while;
set soma = x;

end $$
delimiter ;

call loopwhile(1000, @soma);
select @soma;*/

delimiter $$
create procedure looploop(in max int, out soma int)
begin
declare x int default 0;

meuloop: loop
if (x > max) then
leave meuloop;
end if;
set x = x + 1;
end loop;

set soma = x;

end $$
delimiter ;

call looploop(1000, @soma);
select @soma