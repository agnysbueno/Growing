SELECT g.id, g.fk_usuario, u.nome_completo, g.fk_servico, s.servico FROM growing.usuario_servico_geral g
INNER JOIN growing.servico_geral s ON growing.g.fk_servico = growing.s.id
INNER JOIN growing.usuario u ON growing.g.fk_usuario = growing.u.id