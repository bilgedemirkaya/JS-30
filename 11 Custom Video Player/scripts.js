// Get Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

// Build Functions
function togglePlay () {
    video.paused ? video.play() : video.pause()
    video.paused ? toggle.innerHTML = "►" :toggle.innerHTML = '❚ ❚'
}

function skip (e) {
    console.log(e.target.dataset.skip) // will give the skip number
    console.log(video.currentTime);
    video.currentTime += parseFloat(e.target.dataset.skip);
}

function handleRange (e) {
     // console.log(e.target.value);
     // console.log(e.target.name);
     // e.target.name == 'volume' ? video.volume = parseFloat(e.target.value) : video.playbackRate =  parseFloat(e.target.value);
     // the better way to do it 
    video[e.target.name] = e.target.value;
}

function handleProgress () {
    // will update the progressbar every time video progresses
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percentage}%`
}

function updateTime (e) {
    const updateTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = updateTime;
}

function toggleFullscreen() {
    video.webkitRequestFullscreen();
}
function makeBig() { 
    console.log(video.width) 
    video.width = 600;  
}  
  
function makeSmall() {  
    console.log(video.width) 
    video.width = 300;  
}  
// Event listeners 
video.addEventListener('click',togglePlay);
toggle.addEventListener('click',togglePlay);
skipButtons.forEach(btn => btn.addEventListener('click',skip));
ranges.forEach(btn => btn.addEventListener('click',handleRange));
video.addEventListener('timeupdate', handleProgress); 

// fullscreen
fullscreen.addEventListener('click', toggleFullscreen);

let mousedown = false; // when someone is mouses down we will set it to true
progress.addEventListener('click', updateTime);
progress.addEventListener('mousemove', () => mousedown && updateTime); // if mousedown true, is gonna update time
progress.addEventListener('mousedown' , () => mousedown = true);
progress.addEventListener('mouseup' , () => mousedown = false);
