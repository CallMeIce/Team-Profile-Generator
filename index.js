const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const InputPrompt = require("inquirer/lib/prompts/input");
const fs = require ("fs");
const inquirer = require("inquirer");
const markdown = require("./generateMarkdown.js");
const teamCreation = [];


function teamBuilder() {
    inquirer
    .prompt([{
        type: "list",
        name: "employeeTitle",
        message: "What's the employee's title",
        choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is your id?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Office Number:",
            when: answer => {
                if (answer.employeeTitle === "Manager") {
                    return true;
                }
            },
        },
        {
            type: "input",
            name: "github",
            message: "Github username:",
            when: answer => {
                if (answer.employeeTitle === "Engineer") {
                    return true;
                }
            },
        },
        {
            type: "input",
            name: "school",
            message: "School Name:",
            when: answer => {
                if (answer.employeeTitle === "Intern") {
                    return true;
                }
            },
        },
        // {
        //     type: "list",
        //     name: "addAnother",
        //     message: "Would you like to add another employee?",
        //     choices: ["yes", "no"],
        //     if (answer.addAnother = "yes") {
        //         teamBuilder();
        //     }else {
                
        //     }
        // }
        
    ]).then((answer) => {
        console.log(answer.employeeTitle, answer.officeNumber, answer.github, answer.school, answer.name, answer.id);

        fs.writeFile("index.html", markdown({ ...answer }), (err) => err ? console.log(err) : console.log("Success"))
    })}
