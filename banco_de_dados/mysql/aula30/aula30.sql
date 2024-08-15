select * from cliente 
where d_nascimentocliente_cliente in (
select 
d_nascimentocliente_cliente
from cliente
where
d_nascimentocliente_cliente > '2000-01-01' and d_nascimentocliente_cliente < '2010-01-01')