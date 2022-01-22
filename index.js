// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 
// Include packages needed for this application
const generateReadme = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = () => {
    // using inquirer to prompt questions to user 
    return inquirer.prompt([{
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
