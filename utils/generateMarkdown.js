// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = answers.license; 
  let yourLicenseBadge = '';
  if(licenseType === 'MIT') {
    yourLicenseBadge = `![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicenseBadge = `![GPL](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else if (licenseType === 'Mozilla Public License 2.0') {
    yourLicenseBadge = `![MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-blue.svg)`
  }else {
    yourLicenseBadge = '';
  }
  return yourLicenseBadge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseType = answers.license; 
  let yourLicenseUrl = '';
  if(licenseType === 'MIT') {
    yourLicenseUrl = `https://choosealicense.com/licenses/mit/`
  } else if (licenseType === 'GPLv3') {
    yourLicenseUrl = `https://choosealicense.com/licenses/gpl-3.0/`
  } else if (licenseType === 'GPL') {
    yourLicenseUrl = `https://www.gnu.org/licenses/gpl-3.0.en.html`
  } else if (licenseType === 'Mozilla Public License 2.0') {
    yourLicenseUrl = `https://www.mozilla.org/en-US/MPL/2.0/`
  }else {
    yourLicenseUrl = '';
  }
  return yourLicenseUrl;
}

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
  
${yourLicenseBadge}
<br>
## Description
${answers.description}
<br>
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
<br>
## Installation
${answers.installation}
<br>
## Usage
${answers.usage}
<br>
## License
This application is licensed under ${answers.license} license. 
<br/>
## Contributing
This application is developed by ${answers.contributing}. If you would like to contribute it, please follow the guidelines for how to do so.
<br/>
## Tests
${answers.tests}
<br/>
## Questions
For any question, please contact me on GitHub: [${answers.username}](https://github.com/${answers.username})<br/>
<br/>


`;
}

module.exports = generateMarkdown;
