## Follow Along Links

It is a project part of JS30 course which has a purpose of practicing ``getBoundingClientRect()`` method to get coordinates of an element and applying a style accordingly.

### First Step 
We created a span with a class of highlight and added it into the DOM. We see that in the console on the top. Later on we add an event listener for mouse entering which can grab the element that mouse is hovering.

![alt text](https://github.com/bilgedemirkaya/JS-30/blob/main/22%20Follow%20Along%20Link%20Highlighter/console.JPG)

### Second Step
Rather than just consoling out the element, we need to figure out the coordinates of the element so we can add height and width attributes to the our highlight span element. ``getBoundingClientRect()`` get the coordinates of the element. we get the width and height of the element but we also need to figure out if user scrolls down how coordinates changes accordingly. So we add 

``top: coordinate.top + window.scrollY `` means get the coordinate.top but also with how much user scrolled down from the bottom.

So we can see the coordinate difference between element static coordinate and our window related coordinate here

![alt text](https://github.com/bilgedemirkaya/JS-30/blob/main/22%20Follow%20Along%20Link%20Highlighter/secondconsole.JPG)

### Third step
Lastly apply coordinates in highlight span element as inline for each element

```
  highlight.style.width =`${coords.width}px`;
  highlight.style.height =`${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

```

## How it looks? 

![alt text](https://github.com/bilgedemirkaya/JS-30/blob/main/22%20Follow%20Along%20Link%20Highlighter/Capture.JPG)

**Demo [here](https://bilgedemirkaya.github.io/JS-30/22%20Follow%20Along%20Link%20Highlighter/index.html)**