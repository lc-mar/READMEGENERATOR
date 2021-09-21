function renderLicenseBadge(license) {
    switch(license) {
      case 'Apache': return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'BSD': return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      case 'GNU': return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      case 'IBM': return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
      case 'MIT': return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      case 'Mozilla': return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      default: return '';
    }
  }
  
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const markdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Enter Title of Project:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter Description of Project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter Installation Instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter Usage Information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter Contributors:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter Test Instructions',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Select a License:',
        name: 'license',
        choices: ['Apache', 'BSD', 'GNU', 'IBM', 'MIT', 'Mozilla'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

function writeToFile(fileName, data) {
let markdownText = generateMarkdown(data)
    fs.writeFile(fileName, markdownText, (err) =>
        err ? console.log(err): console.log('README created'))
}

function init() {
inquirer.prompt(questions).then(data => {
    const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
    writeToFile(fileName, data);
});
}

init();
