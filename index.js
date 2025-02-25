// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js'


// TODO: Create an array of questions for user input
const questions = [
{
  type:"input", 
  name:"title",
  message:"what is the name of the project?"
},
{
  type:"input", 
  name:"description",
  message:"what is the description of the project?"
},
{
  type:"input", 
  name:"installation",
  message:"what do we need to install?"
},
{
  type:"input", 
  name:"usage",
  message:"how is this project used?"
},
{
  type:"list", 
  name:"license",
  message:"choose a license?",
  choices: ["mit","apache","no license",]
},
{
  type:"input", 
  name:"contribution",
  message:"how to us contribution in this project?"
},
{
  type:"input", 
  name:"tests",
  message:"are there any tests for this project?"
},
{
  type:"input", 
  name:"email",
  message:"what is your email?"
},
{
  type:"input", 
  name:"username",
  message:"what is you github username?"
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

inquirer
  .prompt(
    questions
  )
  .then((response) => { 
    const markdown = generateMarkdown(response)
    fs.writeFile('output/readme.md', (markdown), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Success!');
      }
    });
  });


// Function call to initialize app
init();

