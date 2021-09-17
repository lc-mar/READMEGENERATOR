// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

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
