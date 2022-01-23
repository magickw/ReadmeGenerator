// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 
// Include packages needed for this application
const generateReadme = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = () => {
    // Using inquirer to prompt questions to user 
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
            message: "Write a brief description of your project.",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Enter a valid project description.");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if applicable.",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project used for?"
        },
        {
        type: 'checkbox', 
        name: 'license',
        choices: ["MIT", "GPLv3", "GPL", "Mozilla Public License 2.0"],
        message: 'Pick your License.'},
        {
            type: 'input',
            message: "What is your GitHub username? ",
            name: 'username',
            validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Enter a valid GitHub username.");
            }
            return true;
        }
        },
        {
            type: 'input',
            message: "What is the name of your GitHub repo?",
            name: 'repo',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid GitHub repo is required for a badge.");
                }
                return true;
            }
        },
        
    ]);

}

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Congratulations! Successfully wrote to README.md!")
    });
}
}

// Create a function to initialize app
function init() {}

// Function call to initialize app
init();
