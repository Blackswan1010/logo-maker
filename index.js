// Importing required packages
const inquirer = require('inquirer');

// Array of prompt questions for the user
const questions = [
    {
        message: 'Enter 3 letters you wish for your logo.',
        type: 'input',
        name: 'letters',
    },
    {
        message: 'Enter a text color.',
        type: 'input',
        name: 'textColor',
    },
    {
        message: 'Enter a shape for your logo.',
        type: 'list',
        name: ['triangle', 'circle', 'square'],
    },
    {
        message: 'Enter a color for your shape.',
        type: 'input',
        name: 'shapeColor',
    }
];


init = () => {
    inquirer
    .prompt(questions)
    .then((response) => {
        
    })
}


init();