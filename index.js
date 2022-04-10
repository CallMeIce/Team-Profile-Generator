const Employee = require("./Employee")
const Manager = require("./Manager")
const Engineer = require("./Engineer")
const Intern = require("./Intern")
const InputPrompt = require("inquirer/lib/prompts/input")
const fs = require ("fs")
const inquirer = require("inquirer")
const markdown = require("./generateMarkdown.js")


function teamBuilder() {
    inquirer
    .prompt([{
        type: "list",
        name: " input.employeeTitle",
        message: "What's the employee's title",
        choices: ["Manager", "Engineer", "Intern"]
        },
        {
            when: input => {
                return input.role === "Manager"
            },
            type: "input",
            name: "officeNumber",
            message: "Office Number:",
        },
        {
            when: input => {
                return input.role === "Engineer"
            },
            type: "input",
            name: "github",
            message: "Github username:",
        },
        {
            when: input => {
                return input.role === "Intern"
            },
            type: "input",
            name: "school",
            message: "School Name:",
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
    
    
    
    
    ]).then((answer) => {
        console.log(answer.input.employeeTitle, answer.officeNumber, answer.github, answer.school, answer.name, answer.id);

        fs.writeFile("index.html", markdown({ ...answer }), (err) => err ? console.log(err) : console.log("Success"))
    })}