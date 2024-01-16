


CREATE TABLE IF NOT EXISTS espaco (
	id serial PRIMARY KEY,
	nome VARCHAR ( 50 ) NOT NULL,
	localizacao VARCHAR ( 255 ) NOT NULL,
	abertura VARCHAR ( 50 ) NOT NULL,
    fecho VARCHAR ( 50 ) NOT NULL
);


CREATE TABLE IF NOT EXISTS servico (
	id serial PRIMARY KEY,
	categoria VARCHAR ( 50 ) NOT NULL,
	nome VARCHAR ( 255 ) NOT NULL
);


CREATE TABLE IF NOT EXISTS cliente (
	id serial PRIMARY KEY,
	nome VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	telemovel VARCHAR ( 50 ) UNIQUE NOT NULL
);


CREATE TABLE IF NOT EXISTS marcacao (
	id serial PRIMARY KEY,
	id_cliente int NOT NULL, 
	id_espaco int NOT NULL, 
	id_servico int NOT NULL, 
	data VARCHAR ( 50 ) NOT NULL,
	FOREIGN KEY(id_cliente) REFERENCES cliente(id),
	FOREIGN KEY(id_espaco) REFERENCES espaco(id),
	FOREIGN KEY(id_servico) REFERENCES servico(id)
);

CREATE TABLE IF NOT EXISTS espaco_servico (
	id_espaco int NOT NULL, 
	id_servico int NOT NULL, 
	preco VARCHAR ( 50 ) NOT NULL,
	FOREIGN KEY(id_espaco) REFERENCES espaco(id),
	FOREIGN KEY(id_servico) REFERENCES servico(id)
);