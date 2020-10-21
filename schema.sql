DROP DATABASE IF EXISTS Employee_Tracker;
CREATE database Employee_Tracker;

USE Employee_Tracker;

CREATE TABLE department(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30)
);


CREATE TABLE role(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
    -- FOREIGN KEY(department_id) REFERENCES department(id)
);


CREATE TABLE employee(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
    -- FOREIGN KEY(role_id) REFERENCES role(id),
    -- FOREIGN KEY(manager_id) REFERENCES employee(id)
);