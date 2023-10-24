// Create a parent Shape class for child Triangle, Square, Circle classes to inherit
class Shape{
    constructor(){
        this.color = '';
        this.text = '';
    }

    render = () =>{

    }
}

// Create Triangle class that inherits from Shape
class Triangle extends Shape{
    constructor(){
        super(color,text);
    }

    render = () =>{
       return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Create Square class that inherits from Shape
class Square extends Shape{
    constructor(){
        super(color,text);
    }

    render = () =>{
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

// Create Circle class that inherits from Shape
class Circle extends Shape{
    constructor(){
        super(color,text);
    }

    render = () =>{
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Square, Circle };