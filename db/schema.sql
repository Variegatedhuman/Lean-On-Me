DROP DATABASE IF EXISTS volunteer_db;
CREATE DATABASE volunteer_db;

USE volunteer_db

-- CREATE TABLE opportunity (
--   id SERIAL PRIMARY KEY,
--   title VARCHAR(255) NOT NULL,
--   description TEXT NOT NULL,
--   location VARCHAR(255) NOT NULL,
--   date DATE NOT NULL,
--   category VARCHAR(255) NOT NULL
-- );

-- CREATE TABLE volunteers (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   phone VARCHAR(20) NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   age INTEGER NOT NULL,
--   location VARCHAR(255) NOT NULL
-- );