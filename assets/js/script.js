window.addEventListener('keydown', (e) => {
    let keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key='${keyCode}'`);
    const key = document.querySelector(`.key[data-key='${keyCode}'`);
    console.table(audio);

    // if the document.querySelector doesn't find anything then get out of the addEventListener function using return.
    // not sure why I have never used the addEvenetListener word. 
    if(!audio) return;

    // rewind the audio file to the beginning everytime this 'keydown' event happens.
    audio.currentTime = 0; 
 
    // I guess play is just another thing I have never used in JS but it is simpleeeee
    // and I think it is obvious what it does.
    audio.play() 
});