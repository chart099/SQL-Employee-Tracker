const fs = require("fs");
const inquirer = require("inquirer");

const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );

inquirer 
.prompt (
    [
        { type: "list",
        message: "Select an option:  ",
        choices: ["view all departments", "view all roles","view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
        name: "choice"
    },  
    ]
)

.then( function(input) {
    let query;
    switch (input.query){
        case "view all departments":
            query = "SELECT * FROM departments"
            break;
        case "view all roles":
            query = "SELECT * FROM roles"
            break;
        case "view all employees":
            query = "SELECT * FROM employees"
            break;
        case "add a department":
            inquirer
            .prompt ({
                    type: "input",
                    message: "enter name of new department",
                    name: "new_department"
                } )
            .then( (input) =>
                query = `INSERT INTO departments (dept_name) VALUE ${input.new_department}`
            )
            break;
        case "add a role":
            inquirer
            .prompt ({
                    type: "input",
                    message: "enter name of new role",
                    name: "new_role"
                },
                {
                    type: "input",
                    message: "enter salary of new role",
                    name: "new_role_salary"
                },
                {
                    type: "input",
                    message: "enter department of new role",
                    name: "new_role_department"
                }
                )
            .then ( (input) => {
                query = `INSERT INTO roles (title, salary, department) VALUE ${input.new_role}, ${input.new_role_salary}, ${input.new_role_department}`
            })
            break;
        case "add an employee":
            inquirer 
            .prompt ({
                type: "input",
                message: "enter first name of new employee",
                name: "new_first_name",
            },{
                type: "input",
                message: "enter last name of new employee",
                name: "new_last_name",
            }, {
                type: "input",
                message: "enter role of new employee",
                name: "new_em_role",
            } ,{
                type: "input",
                message: "enter manager of new employee",
                name: "new_em_manager",
            }
            )
            .then ( (input) => {
                query = `INSERT INTO roles (first_name, last_name, role, manager) VALUE ${input.new_first_name}, ${input.new_last_name}, ${input.new_em_role}, ${new_em_manager}`
            })
    }

})

fs.writeFile()