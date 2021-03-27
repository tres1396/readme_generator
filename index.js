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
            message: "What is the usage of this project?",
            name: "usage"
        },  
        {
            type: "checkbox",
            choices: ["Apache", "Creative Commons", "Eclipse", "GNU", "Mozilla", "MIT"],
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
            message: "Enter your github username",
            name: "questions"
        },          
//const questions = [];
])

.then(answers => {
     fs.writeFile('./answers.json', JSON.stringify(answers), () => {});
        console.log(answers);

        const README = 
`# ${answers.title}

## Table of Contents
* [Installation](#installation)
* [Description](#description)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${answers.installation}

## Description
${answers.description}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions, please find me on Github at github.com/${answers.questions}, and reach out to the email address listed there.`;
        

        fs.writeFile("./readme.md", README, () => {});
})


const addBadge = function() {
    if (answers.license = Apache) {

    }
} 
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

