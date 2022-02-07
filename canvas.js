var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillRect(810, 100, 100, 100);
c.fillRect(1010, 100, 100, 100);
c.fillRect(810, 300, 300, 100);


console.log(canvas);
