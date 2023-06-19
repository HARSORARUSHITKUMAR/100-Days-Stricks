console.log("Welcome To Spotify");
//intialize the variables

let songIndex = 0;
let audioElement = new Audio('1.mpo3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName: "Kya-Loge-Tum",
    filepath:"2.mp3",
    coverpath:"bg_images\2.png"}
    {songName: "Kya Loge Tum",filepath:"songs/Kya Loge Tum.mp3",coverpath:"bg_images\2.png"},
    {songName: "Kya Loge Tum",filepath:"songs/Kya Loge Tum.mp3",coverpath:"bg_images\2.png"},
    {songName: "Kya Loge Tum",filepath:"songs/Kya Loge Tum.mp3",coverpath:"bg_images\2.png"},
    {songName: "Kya Loge Tum",filepath:"songs/Kya Loge Tum.mp3",coverpath:"bg_images\2.png"},
    {songName: "Kya Loge Tum",filepath:"songs/Kya Loge Tum.mp3",coverpath:"bg_images\2.png"},
    {songName: "Kya Loge Tum",filepath:"songs/Kya Loge Tum.mp3",coverpath:"bg_images\2.png"},
    {songName: "Kya Loge Tum",filepath:"songs/Kya Loge Tum.mp3",coverpath:"bg_images\2.png"},
    {songName: "Kya Loge Tum",filepath:"songs/Kya Loge Tum.mp3",coverpath:"bg_images\2.png"},
    {songName: "Kya Loge Tum",filepath:"songs/Kya Loge Tum.mp3",coverpath:"bg_images\2.png"},

]
// let audioElement = new Audio('1.mp3');

//audioElement.play();
// handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
});
//listen to events

myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
})