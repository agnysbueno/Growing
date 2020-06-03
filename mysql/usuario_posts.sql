SELECT u.id, u.nome_completo, p.texto, p.data_postagem FROM growing.usuario u
INNER JOIN post p on p.fk_usuario = u.id