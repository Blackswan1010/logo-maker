// Importing required packages
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shape');

// Create an array of prompt questions for the user
// Questions to ask user for: 3 letters, text color, list of shapes, shape color
const questions = [
    {
        message: 'Enter 3 letters for your logo.',
        type: 'input',
        name: 'letters',
        validate: (letters) => {
            if(!letters || letters.length > 3 || letters.length < 3){
                return 'Please provide 3 letters!';
            }
            return true;
        }
    },
    {
        message: 'Enter a text color. (OR a hexadecimal number)',
        type: 'input',
        name: 'textColor',
    },
    {
        message: 'Choose a shape for your logo.',
        type: 'list',
        name: 'shape',
        choices: ['triangle', 'circle', 'square'],
    },
    {
        message: 'Enter a color for your shape. (OR a hexadecimal number)',
        type: 'input',
        name: 'shapeColor'
    }
];

// Create a function to write an SVG file
const writeToFile = (fileName, data) => {
    // Use FS module to write data and fileName to svg file
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg!')
    );
}

// Create a function to generate svg logo
const generateLogo = (data) => {
    switch(data.shape){
        case 'triangle':
            const triangle = new Triangle(data.shapeColor, data.letters.toUpperCase(), data.textColor).render();
            return triangle;
        
        case 'square':
            const square = new Square(data.shapeColor, data.letters.toUpperCase(), data.textColor).render();
            return square;
        
        case 'circle':
            const circle = new Circle(data.shapeColor, data.letters.toUpperCase(), data.textColor).render();
            return circle;

        default: return `What shape am I?`;
    }
    
}

// Create a function to initialize app
init = () => {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile('./results/logo.svg', generateLogo(response));
    })
}

// Function call to initialize app
// Use inquirer to display questions to user
init();