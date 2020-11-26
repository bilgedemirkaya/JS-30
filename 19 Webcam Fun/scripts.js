const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({video:true,audio:false}) // returns a promise
    .then(localMediaStream => {
        // console.log(localMediaStream)
        video.srcObject = localMediaStream;
        video.play();
        })
    .catch(err => { 
        console.error(err);
    });
}

function paintToCanvas() {
        const width  = video.videoWidth;
        const height = video.videoHeight;
        // explicitly made canvas width height as properties
        canvas.width = width;
        canvas.height = height;

        setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height)
        },16);
    }
function takePhoto() {
    // play the soound
    snap.currentTime = 0;
    snap.play()

    // take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'potato');
    link.innerHTML = `<img src="${data}" alt="potato" />`;
    strip.insertBefore(link, strip.firstChild);
    console.log(data);
}
getVideo();

video.addEventListener('canplay',paintToCanvas); // once the video plays, is gonna emit an event called canplay 