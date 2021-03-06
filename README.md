
  <h1 align="center">NodeJS README Generator using ES6</h1>
  
![badge](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
This is a command-line application that runs with Node.js that dynamically generates a README.md file based on your input about your project.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
`git clone` the repo to your local machine. Run `npm install` in terminal to install the package dependencies as specified in the package.json. Run `node index.js` in the command line. Answer the prompts in your command line to generate the README file. Once you have answered all prompts, your README.md file will be ready.

## Usage
The application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub information and your project. It takes your answers and will generate markdown and a table of contents based on your responses to the prompts. Once all prompts are answered, `fs.writeFile` method will be used to generate your project's README.md file.

## Demo

<img src="demo.gif" alt="demo" />

**[⬆ back to top](#table-of-contents)**

## License
This application is licensed under MIT license. 

**[⬆ back to top](#table-of-contents)**

## Contributing
This application is developed by Baofeng Guo. If you would like to contribute it, please follow the guidelines for how to do so.

**[⬆ back to top](#table-of-contents)**

## Tests
No testing required beyond the test-run of the application. The repo comes with every module you need.

**[⬆ back to top](#table-of-contents)**

## Questions
For any question, please contact me on GitHub: [magickw](https://github.com/magickw) or email me at peterguo1983@gmail.com.

**[⬆ back to top](#table-of-contents)**

