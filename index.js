const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const InputPrompt = require("inquirer/lib/prompts/input");
const fs = require ("fs");
const inquirer = require("inquirer");
const markdown = require("./generateMarkdown.js");
const teamCreation = [];

//TODO If I make 3 separate functions for the classes (intern, engineer, manager)
//TODO if I call on 1 it has to run the the prompts (so make new questions cause they all differ by 1) = make 3 consts for them
//TODO Have to add add another team member somehow...
//TODO Make it writeFile into html

const managerPrompts = [
    {
    type: "input",
    name: "name",
    message: "What's the manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What's the manager's id number?",
    },
    {
        type: "input",
        name: "office",
        message: "What's the manager's office number?",
    },
]

const engineerPrompts = [
    {
    type: "input",
    name: "name",
    message: "What's the engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What's the engineer's id number?",
    },
    {
        type: "input",
        name: "office",
        message: "What's the engineer's github account?",
    },
]

const internPrompts = [
    {
    type: "input",
    name: "name",
    message: "What's the intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What's the intern's id number?",
    },
    {
        type: "input",
        name: "office",
        message: "What school does the intern attend?",
    },
]
    //* Make a manager/intern/engineer function that calls the prompts and has to call the employee.js


function callManager() {

    const managerCard = new Manager();
    teamCreation.push(managerCard)



}


function teamBuilder() {
    inquirer
    .prompt([{
        type: "list",
        name: "employeeTitle",
        message: "What's the employee's title",
        choices: ["Manager", "Engineer", "Intern"]
        },
    
    
    ])}