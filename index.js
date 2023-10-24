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
                return 'Please provide 3 characters';
            }
            return true;
        }
    },
    {
        message: 'Enter a text color.',
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
        message: 'Enter a color for your shape.',
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
        if(data.shape === 'triangle'){
            const triangle = new Triangle(data.shapeColor, data.letters, data.textColor);
            return triangle.render();
        }
        if(data.shape === 'square'){
            const square = new Square(data.shapeColor, data.letters, data.textColor);
            return square.render();
        }
        if(data.shape === 'circle'){
            const circle = new Circle(data.shapeColor, data.letters, data.textColor);
            return circle.render();
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