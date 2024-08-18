/*
CASE = SWITCH CASE do JavaScript.
*/

select
i_cliente_cliente, 
case 
when d_nascimentocliente_cliente is null then now()
else d_nascimentocliente_cliente
end 'Data de nascimento',
i_tipocliente_cliente,
case 
when (datediff(now(),d_nascimentocliente_cliente)/365) > 18 then "Maior de idade"
else "Menor de idade"
end "Situação"
from cliente