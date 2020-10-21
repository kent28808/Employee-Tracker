USE Employee_Tracker;

INSERT INTO department (name) VALUES ("HR"), ("Engineering"), ("Finance");
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("John", "Doe", 1, null), ("Jane", "Doe", 1, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Engineer", 100000, 2), ("HR Manager", 75000, 1);