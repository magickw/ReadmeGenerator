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
    yourLicenseBadge = `![MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  }else {
    yourLicenseBadge = '';
  }
  return yourLicenseBadge;
};
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
};
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  <h1 align="center">${answers.projectTitle}</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br>
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
<br>
## Description
${answers.description}
<br>
## Installation
${answers.installation}
<br>

`;
}

module.exports = generateMarkdown;
