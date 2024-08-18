# PROCEDURE é muito interessante, por criar comando que podem ser chamados quando necessario, sem precisar ficar repetindo os codigos.

DELIMITER $$
create procedure canal(in curso varchar(50))
begin

 declare x varchar(50);
 set x= 'youtube.com.br/cfbcursos';
 select x, curso;

end $$
DELIMITER ;

call canal('SQL');