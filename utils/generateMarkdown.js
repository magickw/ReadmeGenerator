// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseType = license.license; 
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    // If there is no license, return an empty string
    license.license = ""
  }
  return yourLicense;
};
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
