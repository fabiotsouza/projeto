-- atualizar dados da tela cortes

UPDATE cortes SET preco = 80 WHERE id = 5;



-- selecionar tudo da pagina de cortes

SELECT * FROM cortes;


-- deletar tudo de um corte 

DELETE * FROM cortes WHERE nome = 'Degrade';




-- remover algo especifico de um corte 

UPDATE cortes SET nome = NULL WHERE nome = 'degrade';



-- inserir cortes na lista


INSERT INTO cortes (nome, preco, imagem) VALUES ('Degrade', 35, 'https://via.placeholder.com/80');
INSERT INTO cortes (nome, preco, imagem) VALUES ('Undercut', 45.00, 'https://via.placeholder.com/80');
INSERT INTO cortes (nome, preco, imagem) VALUES ('Black Power',  50.00, 'https://via.placeholder.com/80');
INSERT INTO cortes (nome, preco, imagem) VALUES ('Buzzed', 60.00, 'https://via.placeholder.com/80');
INSERT INTO cortes (nome, preco, imagem) VALUES ('Pompadour', 80.00, 'https://via.placeholder.com/80');
INSERT INTO cortes (nome, preco, imagem) VALUES ('luzes', 120.00, 'https://via.placeholder.com/80');

