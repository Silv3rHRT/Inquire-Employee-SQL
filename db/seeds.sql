INSERT INTO department(name)
VALUES ('Sales'),
       ('Marketing'),
       ('IT'),
       ('Custodial');

INSERT INTO role(title, salary, department_id)
VALUES ('Call center rep', 25000, 1),
       ('CC Manager', 57000, 1), 
       ('Marketing Rep', 55000, 2),
       ('Programmer Extrodanaire', 1000000000, 3),
       ('Cleaning Specialist', 120000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Lina', 'Silverheart', 4, NULL),
       ('Luis', 'Sachez', 2, NULL),
       ('Junghoon', 'Yoon', 1, 2),
       ('Jessica', 'Song', 5, 1),
       ('Billybob', 'Joebobjohnmike', 3, NULL);