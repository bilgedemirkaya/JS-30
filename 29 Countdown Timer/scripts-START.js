let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function countDown () {
    dataset = this.dataset.time;
    //console.log(countdown);
    let mins;
    let secs;
    let beBack;
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
   
    let totalMin;
    clearInterval(countdown);

    if (dataset > 60) {
        mins = parseInt(dataset / 60);
        secs = parseInt(dataset % 60);
        totalMin = mins + minutes;
        console.log(mins,secs);
        if (totalMin >  60) {
            totalMin -= 60;
            hours += 1;
        }
    }
    else {
        mins = 00;
        secs = dataset;
        totalMin = mins+minutes;
    }

    beBack = `${hours}:${totalMin < 10 ? '0' : '' }${totalMin}`;
    endTime.textContent = `Be back at ${beBack}`;
  
    console.log(totalMin);
    if ( secs >= 60 ) {
        secs = secs - 60;
        mins += 1;
    }
    timerDisplay.textContent = `${mins}:${secs < 10 ? '0' : '' }${secs}`
    countdown = setInterval(() => {
        console.log(mins,secs);

        if (mins!== 0 && secs === 0) {
            secs = 59;
            mins -= 1;
        }

        secs = secs - 1;
        console.log(secs);
        // check if we should stop it!
        if(secs < 0) {
        clearInterval(countdown);
        return;
        }
        timerDisplay.textContent = `${mins}:${secs < 10 ? '0' : '' }${secs}`;
        document.title = `${mins}:${secs < 10 ? '0' : '' }${secs}`;
    }, 1000);
}

// add listener on buttons 
buttons.forEach(button => button.addEventListener('click', countDown));
document.customForm.addEventListener('submit', function(e) {

  });
  