
const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

// Create a parent Shape class for child Triangle, Square, Circle classes to inherit
class Shape {
    constructor() {
        this.shapeColor;
        this.text;
        this.textColor;
        
    }

    render = () => {
        return;
    }
}

// Create Triangle class that inherits from Shape
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render = () => {
        return `${svg}
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

// Create Square class that inherits from Shape
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render = () => {
        return `${svg}
        <rect x="73" y="40" width="160" height="160" fill="${this.shapeColor}" />
        <text x="130" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

// Create Circle class that inherits from Shape
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    }

    render = () => {
        return `${svg}
        <circle cx="150" cy="115" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

module.exports = { Triangle, Square, Circle };