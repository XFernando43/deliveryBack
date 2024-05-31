CREATE TABLE users(
	id BIGSERIAL PRIMARY KEY,
	email varchar(255) NOT NULL UNIQUE,
	name VARCHAR(255) NOT NULL,
	lastname VARCHAR(255) NOT NULL,
	phone varchar(80) NOT NULL,
	image TEXT NULL,
	password VARCHAR(255) NOT NULL,
	is_avaliable BOOLEAN NULL,
	session_token VARCHAR(255),
	created_at TIMESTAMP(0) NOT NULL,
	updated_at TIMESTAMP(0) NOT NULL
)