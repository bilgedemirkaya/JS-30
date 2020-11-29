## Whack A Mole

It is a project part of JS30 course which has a purpose of creating a small Whack a mole game. 

![alt text](https://github.com/bilgedemirkaya/JS-30/blob/main/30%20Whack%20A%20Mole/mole.JPG)

## Notes:
- in order to prevent getting the same hole, we declared a lastHole variable and store last returned hole into it.

![alt text](https://github.com/bilgedemirkaya/JS-30/blob/main/30%20Whack%20A%20Mole/holeconsole.JPG)

- If random hole is the same as the previous one, we call randomHole() function again recursively until we get a different hole.
- in the peep function after we show a mole, we setInterval function with a random time, and hide it again after it.
- with the startgame function we run the game ten seconds, and then set the ``timeUp`` variable to ture which ends the game.
- in the bonk function ``if(!e.isTrusted) return; // cheeat`` will detect if a click is not real.



**Demo [here](https://bilgedemirkaya.github.io/JS-30/30%20Whack%20A%20Mole/index-START.html)**

