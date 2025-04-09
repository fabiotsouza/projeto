-- Ver agendamentos recentes
SELECT * FROM agendamentos ORDER BY dia, horario;

-- Ver agendamentos de dia especifico
SELECT * FROM agendamentos WHERE dia = '2025-03-30' ORDER BY dia, horario;
