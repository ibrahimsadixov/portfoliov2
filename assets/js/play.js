const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const music = document.querySelector(".music")
const myAudio = document.getElementById("myAudio")
const musicTextt = document.querySelector(".music-text")
let isPlaying = false;
let pauseTime = 0;

music.addEventListener("click", function() {
  if (isPlaying) {
    console.log("Pause button clicked");
    musicTextt.innerHTML="Want to listen to music while browsing my web page?"
    pauseTime = myAudio.currentTime;
    myAudio.pause();
    pause.style.fontSize="0"
    play.style.fontSize="1rem"
    isPlaying = false;
 
  } else {
    console.log("Play button clicked");
    musicTextt.innerHTML="Vivaldi - Violin Concerto in A Minor RV356"
    myAudio.currentTime = pauseTime;
    myAudio.play();
    pause.style.fontSize="1rem"
    play.style.fontSize="0"
    isPlaying = true;
   
  }

});
