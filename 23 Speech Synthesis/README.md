## Speech Synthesis
It is a project part of JS30 course which has a purpose of using speech requests.

### Note: 
- ``const msg = new SpeechSynthesisUtterance()`` will get a new speech synthesis request and store it in msg variable.
- ``voices = this.getVoices()``  will grab all the voices in the SpeechSynthesisUtterance.
- ``speechSynthesis.cancel()`` will cancel the speaking
- ``speechSynthesis.speak(msg)`` will start the speaking
- `` msg[this.name] = this.value`` will set the options of the speech synthesis request


## Additional Feature 
I added a volume option for the speech synthesis.

## How it looks? 

![alt text](https://github.com/bilgedemirkaya/JS-30/blob/main/23%20Speech%20Synthesis/speeched.JPG)

**Demo [here](https://bilgedemirkaya.github.io/JS-30/23%20Speech%20Synthesis/index.html)**
 
**[SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)**