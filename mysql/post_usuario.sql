SELECT p.id, p.texto, p.data_postagem, p.imagem, p.fk_usuario, u.nome_completo FROM growing.post p
INNER JOIN usuario u ON p.fk_usuario = u.id; 