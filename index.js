// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer.prompt([

{
    type: "input",
    name: "title",
    message: "README Generator",

},
{
    type: "input",
    name: "github",
    message: "what is your Github username?",
},
{
    type: "input",
    name: "email",
    message: "what is your email address?",
},
{
    type: "input",
    name: "description",
    message: "Description",
},
{
    type: "input",
    name: "installation",
    message: "installation instructions",
},
{
    type: "input",
    name: "usage",
    message: "usage information",
},
{
    type: "input",
    name: "contribution",
    message: "contribution guidlines",
},
{
    type: "input",
    name: "test",
    message: "test instructions",
},
{
    type: "list",
    name: "license",
    message: "what license did you use",
    choices: ["apache license","BSD license","Eclipse license","MIT license"]
}
]).then((response)=>{
let license;
    switch (response.license) {
        case "apache license":
            license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case "BSD license":
            license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        case "MIT license":
            license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "Eclipse license":
            license = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
}
var READMEpg = 
`# ${response.title}
## ${response.description}
## ${response.installation}
## ${response.usage}
## ${response.contribution}
## ${response.test}
## ${license}
### ${response.github}
### ${response.email}`



fs.appendFile("README.md", READMEpg, (err) =>
err ? console.error(err) : console.log('Commit logged!')
);})