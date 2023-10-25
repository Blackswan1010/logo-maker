// Importing classes to test
const { Triangle, Square, Circle, Shape } = require('./shape');

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

// Testing if class Square is created
describe('Square', () => {
    describe('render', () => {
        it('it should render a square', () => {
            const square = new Square('blue', 'AHN', 'white');
            square.render();


            expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="73" y="40" width="160" height="160" fill="blue" />
        <text x="50%" y="135" font-size="60" text-anchor="middle" fill="white">AHN</text>
        </svg>`);
        })
    })
})

// Testing if class Circle is created
describe('Circle', () => {
    describe('render', () => {
        it('it should render a circle', () => {
            const circle = new Circle('blue', 'AHN', 'white');
            circle.render();


            expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="115" r="80" fill="blue" />
        <text x="50%" y="135" font-size="60" text-anchor="middle" fill="white">AHN</text>
        </svg>`);
        })
    })
})