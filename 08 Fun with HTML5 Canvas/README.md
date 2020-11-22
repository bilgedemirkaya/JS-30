## Fun with HTML5 Project 
It is a project part of JS30 course which has a purpose of using canvas properties and functions such as;
``ctx.lineCap ``, `` ctx.lineJoin`` `` ctx.lineWidth`` ``ctx.strokeStyle`` ``ctx.fillStyle`` ``ctx.beginPath()`` ``ctx.stroke() `` ``ctx.moveTo()`` ``ctx.lineTo()``

**Note** : to implement a rainbow-like color;
We made ``` ctx.strokeStyle ``` equal to HSL colour which is Hue-saturation-lightness model using the hsl() function. H(hue) gives the color withing the range with 0 to 360. By making hue value a variable and incrementing by one, we could get a rainbow color. However we need to reset it back to 0 when it is 360.

## Additional Feature 
I added a small erase button so that you can clear the canvas and start drawing again.

**Demo [here](https://bilgedemirkaya.github.io/JS-30/07%20Fun%20with%20HTML5%20Canvas/index.html)**

### How it looks? 
![alt text](https://github.com/bilgedemirkaya/JS-30/blob/main/07%20Fun%20with%20HTML5%20Canvas/canvas.JPG)
