DROP DATABASE IF EXISTS employment_db;
CREATE DATABASE employment_db;

USE employment_db;

CREATE TABLE departments (
  id INT NOT NULL PRIMARY KEY,
  dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    dept_id INT,
);

CREATE TABLE employees (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    
);