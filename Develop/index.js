// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
let markdownText = generateMarkdown(data)
    fs.writeFile(fileName, markdownText, (err) =>
        err ? console.log(err): console.log('README created'))
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(data => {
    const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
    writeToFile(fileName, data);
});
}
// Function call to initialize app
init();
