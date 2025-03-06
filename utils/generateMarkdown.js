// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==="mit"){
    return `![license](https://img.shields.io/badge/license-mit-blue)`
  }

if (license==="apache"){
  return `![license](https://img.shields.io/badge/license-apache-blue)`
}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license==="mit"){
  return `[license](https://opensource.org/licenses/MIT)`
} 
if (license==="apache"){
  return `[license](https://opensource.org/licenses/Apache-2.0)`
}
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
if (license==="mit"){
  return `This project is licensed under the [MIT](${renderLicenseLink(license)}) license.`
}
if (license==="apache"){
  return `This project is licensed under the [Apache](${renderLicenseLink(license)}) license.`
}
if (license==="none"){
  return `This project is not licensed.`
}
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}${renderLicenseBadge(data.license)}
 
## Description
${data.description}

## table of contents
1. [installation](#installation)
2. [usage](#usage)
3. [license](#licence)
4. [contribution](#contribution)
5. [tests](#tests)
6. [questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
email [${data.email}](${data.email})
github [www.github.com/${data.github}](www.github.com/${data.github})

`;
}

export default generateMarkdown;
