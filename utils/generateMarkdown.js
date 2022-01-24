// // Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   switch (license){
//   case "MIT":
//    return "[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//    break;
//   case "GPLv3":
//    return "[![GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
//    break;
//   case "Apache-2.0":
///   return "[![Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//    break;
//   case "ISC":
//    return "[![ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
//    break;
//   return "";
// }

// // Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
  // switch (license){
  //   case "MIT":
  //     return `This application is licensed under [MIT](https://opensource.org/licenses/MIT) license`;
  //     break; 
  //   case "GPLv3":
  //     return `This application is licensed under [GPLv3](https://www.gnu.org/licenses/lgpl-3.0) license`;
  //     break;
  //   case "Apache-2.0":
  //     return `This application is licensed under [Apache 2.0](https://opensource.org/licenses/Apache-2.0) license`;
  //     break;
  //   case "ISC":
  //     return `This application is licensed under [ISC](https://opensource.org/licenses/ISC) license`;
  //     break;
  //     return ""; 
// }

// Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license !== "None") {
//     return (
//       `## License
//       This application is licensed under ${answers.license} license.`
//     )
//   }
//   return ''
// }

// Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  <h1 align="center">${answers.title}</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Demo

<img src="demo.gif" alt="demo" />

**[⬆ back to top](#table-of-contents)**

## License
This application is licensed under ${answers.license} license. 

**[⬆ back to top](#table-of-contents)**

## Contributing
This application is developed by ${answers.contributing}. If you would like to contribute it, please follow the guidelines for how to do so.

**[⬆ back to top](#table-of-contents)**

## Tests
${answers.test}

**[⬆ back to top](#table-of-contents)**

## Questions
For any question, please contact me on GitHub: [${answers.username}](https://github.com/${answers.username}) or email me at ${answers.email}.

**[⬆ back to top](#table-of-contents)**

`;
}

module.exports = generateMarkdown;
