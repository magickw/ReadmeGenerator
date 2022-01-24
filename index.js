// Importing File System module
const fs = require('fs'); 
// Importing Requirer module
const inquirer = require('inquirer'); 
// Importing Utilities module
const util = require('util');

// Include packages needed for this application
const generateReadme = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
function promptUser() {
    // Using inquirer to prompt questions to user 
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
            default: "NodeJS README Generator using ES6",
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
            default: "This is a command-line application that runs with Node.js that dynamically generates a README.md file based on your input about your project.",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Must enter a valid project description.");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if applicable.",
            default: "`git clone` the repo to your local machine. Run `npm install` in terminal to install the package dependencies as specified in the package.json. Run `node index.js` in the command line. Answer the prompts in your command line to generate the README file. Once you have answered all prompts, your README.md file will be ready.",
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?",
            default: "The application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub information and your project. It takes your answers and will generate markdown and a table of contents based on your responses to the prompts. Once all prompts are answered, `fs.writeFile` method will be used to generate your project's README.md file.",
        },
        {
            type: "checkbox", 
            name: "license",
            choices: ["MIT", "GPLv3", "GPL", "ISC"],
            message: "Pick your License.",
        },
        {
            type: "input",
            message: "What is your GitHub username? ",
            name: "username",
            default: "magickw",
            validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Must enter a valid GitHub username.");
            }
            return true;
        }
        },
        {
            type: "input",
            message: "Who are the contributor(s)? Provide guidelines on how other developers can contribute to your project.",
            name: "contributing",
            default: "Baofeng Guo",
        },
        {   type: "input",
            name: "test",
            message: "What command would you like to run tests?",
            default: "No testing required beyond the test-run of the application. The repo comes with every module you need.",
        },
        {
            type: "input",
            message: "What is the name of your GitHub repo?",
            name: "repo",
            default: "readmegenerator",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid GitHub repo is required for a badge.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
            default: "peterguo1983@gmail.com",
        },
        
    ]);

}

// Create a function to write README file
function writeToFile(fileName, data) {
    //fs.writeFile() method is used to asynchronously write the specified data to a file. 
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
        console.log("Congratulations! Successfully wrote to README.md!")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// Create a function to initialize app
async function init() {
    try {
        // Ask user questions and generate answers
        // await can only be used with async function
        const answers = await promptUser();
        //Log your answers
        console.log("Your answers: ", answers);
        const markdown = generateReadme(answers);
        // Write to README.md
        await writeFileAsync('README.md', markdown);
        console.log("Congratulations! Successfully wrote to README.md!");
    }   catch(err) {
        console.log(err);
    }
  }
  

// Function call to initialize app
init();
