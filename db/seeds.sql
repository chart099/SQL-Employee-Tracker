INSERT INTO departments (dept_name)
VALUES ("Human Resources"),
       ("Marketing"),
       ("Sales"),
       ("Information Techonology");

INSERT INTO roles (title, salary, dept_id)
VALUES ('HR Director', 75000, 11),
       ("Marketing Director", 80000, 22),
       ("Sales Associate", 50000, 33),
       ("IT Associate", 55000, 44),
       ("IT Director", 75000, 44),
       ("Marketing Associate", 50000, 22);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 