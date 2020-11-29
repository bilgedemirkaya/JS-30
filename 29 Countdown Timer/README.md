## Countdown Timer

It is a project part of JS30 course which has a purpose of making a countdown timer when you click a button or type a minute.

![alt text](https://github.com/bilgedemirkaya/JS-30/blob/main/29%20Countdown%20Timer/countdown.JPG)

## First Steps 
Function countdown take seconds to countdown as parameter or it is set in the dataset.
``
function countDown (secs) {
    dataset = this.dataset.time || secs;
}
``
<br>
``let hours = new Date().getHours()`` && ``let minutes = new Date().getMinutes()`` will give us the current hours, minutes.

## Second Steps
Calculate the time when you stop counting down, and display the result in the endtime property.
Adjust time and convert minutes to hours && seconds to minutes.

## last Step
Use ``setInterval`` to count down the time given, unless it is zero. Use ``clearInterval`` to stop the interval when finished or other buttons are clicked.

Set event listeners to the buttons and call countDown function if the form is submitted.


**Demo [here](https://bilgedemirkaya.github.io/JS-30/29%20Countdown%20Timer/index.html)**

