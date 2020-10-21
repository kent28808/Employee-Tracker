USE Employee_Tracker;

INSERT INTO department (name) VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("John", "Doe", 1, null), ("Jane", "Doe", 2, 1), ("Fred", "Flinstone", 3, 2), ("Barney", "Rubble", 4, null), ("Mike", "Chan", 5, 3);

INSERT INTO role (title, salary, department_id) VALUES ("Engineer", 100000, 2), ("Sales", 75000, 1), ("Accountant", 100000, 3), ("Lawyer", 60000, 4);