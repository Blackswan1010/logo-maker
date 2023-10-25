# Logo Maker 

![License: MIT](https://img.shields.io/badge/MIT-blue.svg) 


## Description 

Making a svg logo with object oriented programming. 

Demo Link: [https://drive.google.com/file/d/1Kd6HTYrpsf1I3FdcwfKUXpaOruj6YjTq/view](https://drive.google.com/file/d/1Kd6HTYrpsf1I3FdcwfKUXpaOruj6YjTq/view)

Sample Logo Image: 

![Logo](logo.png)

## Installation 

In the the command line, enter the command 'node index.js', then follow and answer prompts.

## Sample Code 

```js
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shape');
```
Importing files and packages required to run the app.

```js
const questions = [
    {
        message: 'Enter 3 letters for your logo.',
        type: 'input',
        name: 'letters',
        // Checks if the user input enters exactly 3 letters
        validate: (letters) => {
            if(!letters || letters.length > 3 || letters.length < 3){
                return 'Please provide 3 letters!';
            }
            return true;
        }
    },
```
One of the user prompts to enter a valid input for letters/characters to create the logo.

```js
// Create a function to generate svg logo
const generateLogo = (data) => {
    // Checks what shape was entered and goes to the case accordingly to instantiate a new object of triangle, square, or circle
    switch(data.shape){
        case 'triangle':
            const triangle = new Triangle(data.shapeColor, data.letters.toUpperCase(), data.textColor).render();
            return triangle;
```
Generates the logo depending on the user input, in the snippet above creates a triangle if the user has chosen the shape triangle.

```js
// Create a function to initialize app
init = () => {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile('./logo.svg', generateLogo(response));
    })
}
```
Initializes the app with the prompts.

```js
// Create a parent Shape class for child Triangle, Square, Circle classes to inherit the properties shapeColor, text, and textColor
class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;  
    }

    render = () => {
        throw new Error('Child class of Shape must implement render() method.');
    }
}
```
The Shape class is define with the shape color, text color, and text property, with a method of render to throw an error.

```js
// Create Circle class that inherits from Shape
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render = () => {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="115" r="80" fill="${this.shapeColor}" />
        <text x="50%" y="135" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}
```
The Circle class is define with the inherited properties of Shape class, with a method of render that is polymorphed to return a string.

## Author Info 

#### Anthony

* [https://github.com/Blackswan1010](https://github.com/Blackswan1010) 


## License
 https://api.github.com/licenses/MIT 


## Tests 

To run the following sample tests below, you must install the package jest by entering in the command line 'npm i jest', then enter the following command 'npm run test'.
```js
// Testing Shape's class function throws an error if it is called
describe('Shape', () => {
    describe('render', () => {
        // This test checks to see if an error is properly thrown if the function of Shape is called 
        it('should throw an error when render function is called from Shape', () => {
            function cb() {
                const shape = new Shape();
                shape.render();
            }
            const err = `Child class of Shape must implement render() method.`;
            expect(cb).toThrow(err);
        })
    })
})
```

```js
// Testing if class Triangle is created
describe('Triangle', () => {
    describe('render', () => {
        it('it should render a triangle', () => {
            const triangle = new Triangle('blue', 'AHN', 'white');

            expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        <text x="50%" y="160" font-size="60" text-anchor="middle" fill="white">AHN</text>
        </svg>`);
        })
    })
})
```

