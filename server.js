const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql");
const ctable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user "root",
    password: "password",
    database: "Employee_Tracker"
});

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
});

//Function for inquirer prompt
function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?"
            choices: [
                "View all employees",
                "View all employees by department",
                "View all employees by manager",
                "Add employee",
                "Add Department",
                "Add Role",
                "remove employee",
                "Update employee role",
                "Update employee manager"
            ]
        }).then(answers => {
            switch (answers.action) {
                case "View all employees":
                    employees();
                    runSearch();
                    break;
                case "View all employees by department":
                    department();
                    runSearch();
                    break;
                case "View all employees by manager":
                    manager();
                    runSearch();

            }
        })

}