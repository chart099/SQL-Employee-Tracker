
const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'employment_db'
    },
    console.log(`Connected to the employment_db database.`)
);

let inputQuery;
let changeTable;

inquirer
    .prompt([{
        type: "list",
        name: "userinput",
        message: "Select an option:  ",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
       
    }])
    .then(function (input) {
        switch (input.userinput) {
            case "view all departments":
                inputQuery = "SELECT * FROM departments"
                doQuery()
                break;
            case "view all roles":
                inputQuery = "SELECT * FROM roles"
                doQuery()
                break;
            case "view all employees":
                inputQuery = "SELECT * FROM employees"
                doQuery()
                break;
                case "add a department":
                    inquirer.prompt({
                      type: "input",
                      message: "Enter the id of the new department",
                      name: "new_department"
                    }).then((input) => {
                      changeTable = `INSERT INTO departments (dept_name) VALUE ('${input.new_department}');`;
                      inputQuery = "SELECT * FROM departments";
                      addToQuery();
                      doQuery();
                    });
                    break;
                case "add a role":
                    inquirer.prompt([
                        {
                        type: "input",
                        message: "Enter the name of the new role",
                        name: "new_role"
                        },
                        {
                        type: "input",
                        message: "Enter the salary of the new role",
                        name: "new_role_salary"
                        },
                        {
                        type: "input",
                        message: "Enter the department of the new role",
                        name: "new_role_department"
                        }
                    ]).then((input) => {
                        changeTable = `INSERT INTO roles (title, salary, department) VALUES ('${input.new_role}', ${input.new_role_salary}, '${input.new_role_department}')`;
                        inputQuery = "SELECT * FROM roles";
                        addToQuery();
                        doQuery();
                    });
                    break;
            case "add an employee":
                inquirer.prompt([
                    {
                      type: "input",
                      message: "Enter the first name of the new employee",
                      name: "new_first_name"
                    },
                    {
                      type: "input",
                      message: "Enter the last name of the new employee",
                      name: "new_last_name"
                    },
                    {
                      type: "input",
                      message: "Enter the role of the new employee",
                      name: "new_em_role"
                    },
                    {
                      type: "input",
                      message: "Enter the manager of the new employee",
                      name: "new_em_manager"
                    }
                  ]).then((input) => {
                    changeTable = `INSERT INTO employees (first_name, last_name, role, manager) VALUES ('${input.new_first_name}', '${input.new_last_name}', '${input.new_em_role}', '${input.new_em_manager}')`;
                    inputQuery = "SELECT * FROM employees"
                    addToQuery();
                    doQuery();
                  });
                  break;
                case "update an employee role":
                    inquirer.prompt ({
                        type: "input",
                        message: "enter last name of employee whose role needs updating",
                        name: "em_role_change"
                    }, {
                        type: "input",
                        message: "enter new role",
                        name: "em_updated_role"
                    })
                    .then ( (input) => {
                        changeTable = `UPDATE employees SET role = ${em_updated_role} WHERE last_name = ${em_role_change}`;
                        inputQuery = "SELECT * FROM employees";
                        addToQuery();
                        doQuery();
                    })
                    break;
            default:
                console.log("Something went wrong")
                break;
        }

    })


   function doQuery() {
    db.query(inputQuery, function (err, results) {
        console.table(results);
    })
   }

   function addToQuery() {
    db.query(changeTable, function (err, results) {
        if (err) {
            console.log(err)
        }
    })
   }
