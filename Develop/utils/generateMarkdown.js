const generateMarkdown = data => {
  return `# ${data.title}

 ![License](https://img.shields.io/badge/license-${data.license}-blue)
  
  ## Table of Contents
  - [Project description](#description)
  - [Usage](#usage)
  - [Installation](#installation)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)
    
  ## Description 
  ${data.description}

  ## Usage 
  ${data.usage}

  ## Installation 
  ${data.install}

  ## Contributing
  ${data.contributing}

  ## Questions
  ${data.email}
  ${data.github}

  ## License
  ${data.license}`;
}

module.exports = generateMarkdown;
