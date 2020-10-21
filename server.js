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
                "Update Employee Manager",
                "View Employees by Manager",
                "Remove Department",
                "Remove Role",
                "Remove Employee",
                "Quit",
            ]
        }).then(answers => {
            switch (answers.action) {
                case "View all Employees":
                    return viewEmployees();
                    break;
                // case "View all departments":
                //     viewDepartment();
                //     break;
                // case "View all roles":
                //     viewRoles();
                //     break;
                // case "Add Employee":
                //     addEmployee();
                //     break;
                // case "Add Department":
                //     viewDepartment();
                //     break;
                // case "Add Role":
                //     addRole();
                //     break;
                // case "Update Employee Role":
                //     updateEmployee();
                //     break;
                // case "Update Employee Manager":
                //     updateManager();
                //     break;
                // case "View Employees by Manager":
                //     viewManager();
                //     break;
                // case "Remove Department":
                //     removeDepartment();
                //     break;
                // case "Remove Role":
                //     removeRole();
                //     break;
                // case "Remove Employee":
                //     removeEmployee();
                //     break;
                default: break;

            }
        })

}

function viewEmployees() {
     connection.query("SELECT * FROM employee;", function (error, results, fields) {
        console.log(results)
    })
       runSearch();
}

function viewDepartment() {

}

function viewRoles() {

}
