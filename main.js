var myName = "geTogethr";

var black = [0, 0, 0];
var yellow = [60, 100, 60]; 
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [black, black, black, yellow, red, orange, green, blue, purple];

drawName(myName, letterColors);

if(10 < 30)
{
    bubbleShape = 'square';
}
else
{
    bubbleShape = 'circle';
}

bounceBubbles();
