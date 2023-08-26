class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color; 
    }
    render(canvas) {
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}
let xCoord = 10;
let yCoord = 10;
let rectangleWidth = 200;
let rectangleHeight = 100;
let rectangleColor = "#000000";
let rectangle = new Rectangle(xCoord, yCoord,rectangleWidth, rectangleHeight, rectangleColor);

let canvas = document.getElementById("mycanvas");
rectangle.render(canvas);