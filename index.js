const Employee = require("./Employee");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./generateMarkdown.js");
const teamCreation = [];

function managerCard() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your manager's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your manager's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your manager's email?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Manager's Office Number:",
            }])
        .then((answer) => {
            const manager = new Manager(
                answer.name, answer.id, answer.email, answer.officeNumber
            )
            console.log(manager);
            teamCreation.push(manager);
            teamBuilder();
        });
}
managerCard();

function teamBuilder() {
    inquirer
        .prompt([{
            type: "list",
            name: "employeeTitle",
            message: "What's the employee's title",
            choices: ["Engineer", "Intern", "Done"]
        }
        ]).then((answer) => {
            if (answer.employeeTitle === "Engineer") {
                //* Call engineer function
                function engineerCard() {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "name",
                                message: "What is your engineer's name?",
                            },
                            {
                                type: "input",
                                name: "id",
                                message: "What is your manager's id?",
                            },
                            {
                                type: "input",
                                name: "email",
                                message: "What is your engineer's email?",
                            },
                            {
                                type: "input",
                                name: "officeNumber",
                                message: "Engineer's GitHub Profile:",
                            }
                        ]) 
                }
                console.log(Engineer);
                teamCreation.push(Engineer);
                engineerCard();
            } else if (answer.employeeTitle === "Intern") {
                //*Call intern function
                function internCard() {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "name",
                                message: "What is your intern's name?",
                            },
                            {
                                type: "input",
                                name: "id",
                                message: "What is your intern's id?",
                            },
                            {
                                type: "input",
                                name: "email",
                                message: "What is your intern's email?",
                            },
                            {
                                type: "input",
                                name: "school",
                                message: "What is your intern's school name?:",
                            }
                        ])
                }
                console.log(Intern);
                teamCreation.push(Intern);
                internCard();
            } else {
                //*Call the done and write everything to html file
            }

        })
}

// {
//     type: "input",
//     name: "name",
//     message: "What is your name?",
// },
// {
//     type: "input",
//     name: "id",
//     message: "What is your id?",
// },
// {
//     type: "input",
//     name: "officeNumber",
//     message: "Office Number:",
//     when: answer => {
//         if (answer.employeeTitle === "Manager") {
//             return true;
//         }
//     },
// },
// {
//     type: "input",
//     name: "github",
//     message: "Github username:",
//     when: answer => {
//         if (answer.employeeTitle === "Engineer") {
//             return true;
//         }
//     },
// },
// {
//     type: "input",
//     name: "school",
//     message: "School Name:",
//     when: answer => {
//         if (answer.employeeTitle === "Intern") {
//             return true;
//         }
//     },
// },
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

// teamBuilder();