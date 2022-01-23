// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 
// Include packages needed for this application
const generateReadme = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = () => {
    // using inquirer to prompt questions to user 
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Must enter a valid project title.");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: ",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid project description is required.");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
        type: 'checkbox', 
        name: 'license',
        choices: ["MIT", "GPLv3", "GPL"],
        message: 'Pick your License.'
    },{
        
    }
        
    ])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
