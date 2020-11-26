 ## Unreal Webcam Fun
It is a project part of JS30 course which has a purpose of taking a photo of the webcam, get the pixels from that and implement filter on it.

For this project we are accessing the webcam which is must be tied to secure origin means that our website should be HTTPS, or a localhost. Therefore to start the project :

`npm install` && `` npm start `` 

## To take the data out ot canvas 

`` 
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'potato'); // u can set attribute of download to the link
    link.innerHTML = `<img src="${data}" alt="potato" />`;
    strip.insertBefore(link, strip.firstChild);
 ``

![alt text](https://github.com/bilgedemirkaya/JS-30/blob/main/19-Webcam%20Fun/webcam.JPG)
