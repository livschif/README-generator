// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generatePage = require('./utils/generateMarkdown');

 
//const licenses = ['MIT License', 'Boost Software License 1.0', 'The Unlicense', 'N/A']

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'How would you like to title your README file?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project.'
        },
        {
            type: 'input',
            name: 'install',
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
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.',

        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your project. If you are unsure then just choose MIT',
            choices: ['MIT_License', 'Boost_Software_License_1.0', 'The_Unlicense'],
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please choose a license.')
                    return false;
                }
            }
        }
    ]);  
};

// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your README has been created!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        }
    }) 
};

// Function call to initialize app
promptUser()
.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})
  