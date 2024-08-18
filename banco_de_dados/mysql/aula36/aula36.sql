/*
MySQL = IFNULL ou COALESCE
SQLSERVER = ISNULL
Oracle = NVL
*/

#update produtovenda set i_qtde_produtovenda=null where i_produtovenda_produtovenda=1

select *,
round((f_precoun_produtovenda * ifnull(i_qtde_produtovenda,0)),2) as 'Total'
from produtovenda