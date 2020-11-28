## Stripe Follow Along Dropdown

It is a project part of JS30 course which has a purpose of practicing using content-sized dropdown menu in the navbar. 

## Notes 
- We can use ``mouseenter`` ``mouseleave`` events to listen hovering the nav. [Check here](https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave) for differences of mouse events.
- ``getBoundingClientRect()`` for getting coordinates of the element as we did in highlight project.
- to prevent wrong position when the nav has be pushed down or moved offset on x coordinate
``` top: dropCoords.top - navCoords.top ```
- Showing dropdown basicly handled with CSS- ``opacity`` and ``display:hide`` properties. Used jss dor handling dropdown background size and location.


![alt text](https://github.com/bilgedemirkaya/JS-30/blob/main/26%20Stripe%20Follow%20Along%20Nav/nav.JPG)


**Demo [here](https://bilgedemirkaya.github.io/JS-30/26%20Stripe%20Follow%20Along%20Nav/index-START.html)**

