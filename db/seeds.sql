INSERT INTO departments (id, dept_name)
VALUES 
        (1, "Human Resources"),
       (2, "Marketing"),
       (3, "Sales"),
       (4, "Information Techonology");

INSERT INTO roles (title, salary, dept_id)
VALUES 
    ('HR Director', 75000, 1),
       ("Marketing Director", 80000, 2),
       ("Sales Associate", 50000, 3),
       ("IT Associate", 55000, 4),
       ("IT Director", 75000, 4),
       ("Marketing Associate", 50000, 2),
       ("Sales Director", 80000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
("Bob", "Belcher", 1, NULL),
        ("Turanga", "Leela",2 , NULL ),
        ("Leslie", "Knope", 3, 7),
        ("Grace", "Adler", 4, 5),
        ("Will", "Truman", 5, NULL),
        ("Bender", "Rodriguez", 6, 2),
        ("Percy", "Jackson", 7, NULL);