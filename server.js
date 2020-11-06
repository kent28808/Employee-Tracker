const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql");
const ctable = require("console.table");
// const data = require("/seed.sql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "Employee_Tracker"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

//Function for inquirer prompt
function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View all Employees",
                "View all Departments",
                "View all Roles",
                "Add Employee",
                "Add Department",
                "Add Role",
                "Update Employee Role",
                // "Update Employee Manager",
                // "View Employees by Manager",
                // "Remove Department",
                // "Remove Role",
                // "Remove Employee",
                // "Quit",
            ]
        }).then(answers => {
            switch (answers.action) {
                case "View all Employees":
                    return viewEmployees();
                    break;
                case "View all Departments":
                    viewDepartment();
                    break;
                case "View all Roles":
                    viewRoles();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Update Employee Role":
                    updateEmployee();
                    break;
                default: break;

            }
        })

}

function viewEmployees() {
    connection.query("SELECT * FROM employee;", function (err, res) {
        if (err) throw err;
        console.log(res.length + "employees found!");
        console.table("All Employees:", res);
        runSearch();
    })
}

function viewDepartment() {
    connection.query("SELECT * FROM department;", function (err, res) {
        if (err) throw err;
        console.log(res.length + "departments found!");
        console.table("All Departments:", res);
        runSearch();
    })

}

function viewRoles() {
    connection.query("SELECT * FROM role;", function (err, res) {
        if (err) throw err;
        console.log(res.length + "roles found!");
        console.table("All Roles:", res);
        runSearch();
    })

}

function addEmployee() {
        inquirer
            .prompt([
                {
                    name: "firstname",
                    type: "input",
                    message: "Enter employee first name?"
                },
                {
                    name: "lastname",
                    type: "input",
                    message: "Enter employee last name?"
                },
                {
                    name: "role",
                    type: "input",
                    message: "Enter your role id."
                },
                {
                    name: "manager",
                    type: "input",
                    message: "Enter your manager id."
                }

            ])
            .then(function(res){
                connection.query("INSERT INTO employee SET ?",
                {
                    first_name: res.firstname,
                    last_name: res.lastname,
                    role_id: res.role,
                    manager_id: res.manager
                }, 
                function(err, res){
                    if (err) {
                        throw err;
                    }
                    //console.table(res);
                }
                );    
                runSearch();
            });
        
    }

    function addDepartment() {
        inquirer
            .prompt([
                {
                    name: "dept",
                    type: "input",
                    message: "What is the name of the Department?"
                }

            ])
            .then(function(res){
                connection.query("INSERT INTO department SET ?",
                {
                    name: res.dept
                }, 
                function(err, res){
                    if (err) {
                        throw err;
                    }
                    console.table(res);
                }
                );    
                runSearch();
            });
        
    }

    function addRole() {
        inquirer
            .prompt([
                {
                    name: "role",
                    type: "input",
                    message: "What is the name of the role?"
                },
                {
                    name: "salary",
                    type: "input",
                    message: "What is the salary of the role?"
                },
                {
                    name: "roledepartment",
                    type: "input",
                    message: "What is the department id?"
                },
            ])
            .then(function(res){
                connection.query("INSERT INTO role SET ?",
                {
                    title: res.role,
                    salary: res.salary,
                    department_id: res.roledepartment
                }, 
                function(err, res){
                    if (err) {
                        throw err;
                    }
                    //console.table(res);
                }
                );    
                runSearch();
            });
        
    }

function updateEmployee(){
    console.log('updating emp');
    inquirer
    .prompt({
      name: "employeeid",
      type: "input",
      message: "Enter employee id",
    })
    .then(function (res) {
      var id = res.employeeid;

      inquirer
        .prompt({
          name: "role",
          type: "input",
          message: "Enter role id",
        })
        .then(function (res) {
          var roleId = res.role;

          var query = "UPDATE employee SET role_id=? WHERE id=?";
          connection.query(query, [roleId, id], function (err, res) {
            if (err) {
              console.log(err);
            }
            runSearch();
          });
        });
    });
}