'use strict';

//Declare a new variable `rect` that represents a rectangle
//This should be an Object with properties:
//  x-coordinate of 30, y-coordinate of 50
//  width of 100, height of 50

var rect = {
    x: 30,
    y: 50,
    width:100,
    height:50
};

//Log out the rectangle's starting position (as "30, 50")
console.log(rect.x + ', ' + rect.y );

//Log out the rectangle's area
console.log(rect.width * rect.height);

//"Move" the rectangle to the right by 20 and up by 10
//by changing its properties

rect.x += 20;
rect.y -= 10;

//Log out the rectangle's new position
console.log(rect.x + ', ' + rect.y );

//Declare a variable `circle` that represents a circle
//This should be an Object with properties:
//  center-x-coord of 50, center-y-coord of 50
//  radius of 35

var circle = {
    cx: 50,
    cy: 50,
    radius: 35
}

//Declare a variable `shapes` that represents a list of shapes
//The list should contain the rectangle and the circle

var shapes = [rect, circle];
console.log(shapes);

function getArea(circle){
    return Math.PI*circle.radius*circle.radius;
}

console.log(getArea(circle));

function sayHello(name, other) 
{
    var names = name; //local variable
    if(other !== undefined){ //there is a second
        names += " and "+other;
        return "Hello, "+names;
    }

}

console.log(sayHello('Joel'));
console.log(sayHello('Joel','Mike'));

sayHello('Joel');

Math = {
    sqrt: function(a,b){
        //return ...squarerooting
    }
}

var doAtOnce = function(funcA, funcB) {
    funcA();
    console.log(' and ');
    funcB();
    console.log(' at the same time! ');
}

var patHead = function(name) {
    console.log("pat your head");
}

var rubBelly = function(name) {
    console.log("rub your belly");
}


doAtOnce( rubBelly, patHead );




