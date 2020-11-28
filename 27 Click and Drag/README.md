## Click and Drag to Scroll

It is a project part of JS30 course which has a purpose of practicing dragging and scrolling a element using ``mouse`` events

![alt text](https://github.com/bilgedemirkaya/JS-30/blob/main/27%20Click%20and%20Drag/drag.JPG)

## Notes 
-- mousedown function--
- ``startX = e.pageX - slider.offsetLeft`` substraction is to prevent the starting point of element to start from 0 of the page. So we store where exactly we grap the item at first in startX.
- ``loc = slider.scrollLeft`` gets and sets the number of pixels that an slider is scrolled from its left edge.(location of element)
-- mousemove function--
- ``const x = e.pageX - slider.offsetLeft;`` this time we store where we grab item to in the end in x variable.
- ``const scrolled = (x - startX)`` so this will give us the amount we scrolled 
- ``slider.scrollLeft = loc - scrolled`` we set where our slider is based on previous location - how muc we scrolled

**Demo [here](https://bilgedemirkaya.github.io/JS-30/27%20Click%20and%20Drag/index-START.html)**

