// TODO: Create a function that returns a license badge based on which license is passed in
class generateMarkdown {
  static generateReadme(answers) {
    return `
    # ${answer.title}

    ## Table of Contents
    - [Project description](#Description)
    - [Usage](#Usage)
    - [Contributing](#Contributing)
    - [Installation](#Installation)
    - [Questions](#Questions)
    - [License](#License)
    
    ## Description 
    ${answer.description}

    ## Usage 
    ${answers.usage}

    ## Installation 
    ${answers.installation}

    ## Contributing
    ${answers.contributing}

    ## Questions
    ${answers.email}
    ${answers.github}

    ## License
    ${answers.license}
    `
  }
}
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
 function generateMarkdown(data) {
   return `
# ${data.title}

## Table of Contents
- [Project description](#Description)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Installation](#Installation)
- [Questions](#Questions)
- [License](#License)

## Description 
${answer.description}

## Usage 
${answers.usage}

## Installation 
${answers.installation}

## Contributing
${answers.contributing}

## Questions
${answers.email}
${answers.github}

## License
${answers.license}
`
}


// `;
// }

 module.exports = generateMarkdown;
