// "use strict";
// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer
    .prompt ([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "What was installed for the project?",
            name: "installation"
        },
        {
            type: "input",
            message: "Describe your project.",
            name: "description"
        },
        {
            type: "input",
            message: "List the table of contents.",
            name: "tableOfContents"
        },  
        {
            type: "input",
            message: "What is the usage of this project?",
            name: "usage"
        },  
        {
            type: "input",
            message: "What license is being used?",
            name: "license"
        },     
        {
            type: "input",
            message: "Who are the contributors?",
            name: "contributing"
        }, 
        {
            type: "input",
            message: "Tests performed?",
            name: "tests"
        },
        {
            type: "input",
            message: "What questions are there?",
            name: "questions"
        },          
//const questions = [];
])

.then(answers => {
     fs.writeFile('./answers.json', JSON.stringify(answers), () => {});
        console.log(answers);

        const README = 
        `# Title
        ${answers.title}
        ## Installation
        ${answers.installation}
        ## Description
        ${answer.description}
        ## Table of Contents
        ${answer.tableOfContents}
        ## Usage
        ${answer.usage}
        ## License
        ${answers}
        ## `
        

        fs.writeFile("./readme.md", README, () => {});
})

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

