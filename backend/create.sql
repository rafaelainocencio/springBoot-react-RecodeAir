create table tb_destino (id int8 generated by default as identity, descricao varchar(255), imagem varchar(255), nome varchar(255), preco float8, primary key (id));
create table tb_user (id int8 generated by default as identity, email varchar(255), nome varchar(255), telefone varchar(255), primary key (id));
INSERT INTO tb_destino(nome, descricao, imagem, preco) VALUES ('Maranhão', 'bonito lugar', 'https://hostellencoispark.com.br/assets/images/sobrevoo-lencois-maranhenses-1080x720.jpg', 500.0);
INSERT INTO tb_destino(nome, descricao, imagem, preco) VALUES ('Salvador', 'lugar MUITO bonito', 'https://hostellencoispark.com.br/assets/images/sobrevoo-lencois-maranhenses-1080x720.jpg', 400.0);
INSERT INTO tb_destino(nome, descricao, imagem, preco) VALUES ('São Paulo', 'lugar muito chato', 'https://hostellencoispark.com.br/assets/images/sobrevoo-lencois-maranhenses-1080x720.jpg', 50.0);
INSERT INTO tb_user(email, nome, telefone) VALUES ('thi@gmial.com', 'Thi', '999999999');
INSERT INTO tb_user(email, nome, telefone) VALUES ('rafa@gmial.com', 'Rafa', '999999999');
INSERT INTO tb_user(email, nome, telefone) VALUES ('peterparker@gmial.com', 'Peter', '999999999');
