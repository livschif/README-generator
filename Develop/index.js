// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;
 // function
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'How would you like to title your README file?',
        },
        {
            type: 'input',
            name: 'descriptions',
            message: 'Provide a short description explaining the what, why, and how of your project.'
        },
        // {
        //     type: 'input',
        //     name: 'table of contents',
        //     message: '',
        // },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If you would like other developers to contribute, you can include guidelines for how to do so.',

        },
        {
            type: 'input',
            name: 'tests',
            message: 'Go the extra mile and write tests for your application.',

        },
        {
            type: 'input',
            name: 'email',
            message: 'Add your email or any additional contact information.',

        },
        {
            // search how to do multiple choice questions
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.',

        },
        {
            type: 'input',
            name: 'license',
            message: 'Choose a license for your project. If you are unsure then just choose MIT',
        },
    ]);  
};

const generateReadme = 
`# ${promptUser.title}

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
    ${answers.license}`;
// const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
  