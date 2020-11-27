## Event Capture, Propagation, Bubbling and Once

It is a project part of JS30 course which has a purpose of using ``e.stopPropagation()``, ``capture``, ``once``

## Bubbling 

Means When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

## Event Propagation
 [event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation) prevents further propagation of the current event in the capturing and bubbling phases. It does not, however, prevent any default behaviors from occurring; for instance, clicks on links are still processed. If you want to stop those behaviors, see the preventDefault() method

---

``once`` is a boolean indicating that the listener should be invoked at most once after being added. If it is true, the listener would be removed automatically when it is invoked.

## How it looks? 

![alt text](https://github.com/bilgedemirkaya/JS-30/blob/main/25%20Event%20Capture/event.JPG)

**Demo [here](https://bilgedemirkaya.github.io/JS-30/25%20Event%20Capture/index-START.html)**