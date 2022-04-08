const Employee = require("./Employee")
const Manager = require("./Manager")
const Engineer = require("./Engineer")
const Intern = require("./Intern")
const inquirer = require("inquirer")
const InputPrompt = require("inquirer/lib/prompts/input")

function teamBuilder() {
    inquirer
    .prompt([{
        type: "list",
        name: "employeeTitle",
        message: "What's the employee's title",
        choices: ["Manager", "Engineer", "Intern"]
        },
        {when: input => {
            return input.role === "Manager"
        },{
            when: input => {
                return input.role == "Manager"
            },
            type: "input",
            name: "github",
            message: "Enter your github username:",
        },

        }


    


    }])
}