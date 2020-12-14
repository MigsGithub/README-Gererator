//Packages and paths

const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions for README

const questions = [
    {
        type: "input",
        name: 'title',
        message: 'What is your title of your Project?',
    },
    {
        type: "input",
        name: 'desc',
        message: 'Provie a short discription of your project:',
    },
    {
        type: "input",
        name: 'install',
        message: 'What are the steps to install this project?:',
    },
    {
        type: "input",
        name: 'usage',
        message: 'Provide examples or instructions on how to use your program:',
    },
    {
        type: "input",
        name: 'contributing',
        message: 'Provide information on the contribution guidelines for your project:',
    },
    {
        type: "input",
        name: 'tests',
        message: 'Provide test instructions for your project:',
    },
    {
        type: "list",
        name: 'license',
        message: 'Choose a license for your application:',
        choices: [
            "Apache",
            "Boost",
            "MIT",
            "Mozilla",
            "Open",
            "None",
        ]
    },
    {
        type: "input",
        name: 'questions',
        message: 'Please provide instuctions on how to reach you with additional questions:',
    },
    {
        type: "input",
        name: 'username',
        message: 'What is your GitHub username?',
        default: 'I do not have',
    },
    {
        type: "input",
        name: 'email',
        message: 'What is your email address?',
    },
];

// README write function
function writeToFile(data) {
    fs.writeFile('README.md', data, error => {
        if (error) throw error;

        console.log("README CREATED")
    })
}

function init() {
    inquirer.prompt(questions)
        .then(generateMarkdown)
        .then(writeToFile);
}

// Call function
init();