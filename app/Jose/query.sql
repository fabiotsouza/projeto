SELECT * FROM cortes;

SELECT * FROM cortes WHERE nome LIKE 'De%';
SELECT * FROM cortes WHERE nome LIKE 'Un%';
SELECT * FROM cortes WHERE nome LIKE 'Bl%';
SELECT * FROM cortes WHERE nome LIKE 'Bu%';
SELECT * FROM cortes WHERE nome LIKE 'Po%';


SELECT * FROM cortes WHERE preco >= 20;
SELECT * FROM cortes WHERE preco <= 120;

REMOVE FROM cortes WHERE id = 1;

INSERT INTO cortes (nome, preco, imagem) VALUES ('Degrade', 35, 'https://via.placeholder.com/80');
INSERT INTO cortes (nome, preco, imagem) VALUES ('Undercut', 45.00, 'https://via.placeholder.com/80');
INSERT INTO cortes (nome, preco, imagem) VALUES ('Black Power',  50.00, 'https://via.placeholder.com/80');
INSERT INTO cortes (nome, preco, imagem) VALUES ('Buzzed', 60.00, 'https://via.placeholder.com/80');
INSERT INTO cortes (nome, preco, imagem) VALUES ('Pompadour', 120.00, 'https://via.placeholder.com/80');