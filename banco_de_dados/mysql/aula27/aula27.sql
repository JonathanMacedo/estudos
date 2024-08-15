/* 
SUM = soma de todos os valores.
ROUND = arredonda os valores. 
AVG = a media dos valores.
COUNT = quantidades de valores contados.
*/

/*select round(sum(f_valor_venda),2) from venda
where d_data_venda > '2020-05-01'*/

select round(avg(f_valor_venda),2) from venda;
select MIN(f_valor_venda) from venda;
select max(f_valor_venda) from venda;

select count(f_valor_venda) as "Qtde vendas", round(avg(f_valor_venda),2) as "Valor medio das vendas" from venda
where f_valor_venda > (select min(f_valor_venda) from venda) and 
f_valor_venda < (select max(f_valor_venda) from venda)