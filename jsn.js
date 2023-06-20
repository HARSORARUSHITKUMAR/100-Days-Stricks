console.log("Welcome To Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Jatti Da Crush", filePath: "song/Jatti Da Crush.mp3", coverPath: "coverimg/1.jpg" },
    { songName: "Jeena Jeena", filePath: "song/Jeena Jeena.mp3", coverPath: "coverimg/2.jpg" },
    { songName: "Kahani Suno", filePath: "song/Kahani Suno.mp3", coverPath: "coverimg/3.jpg" },
    { songName: "Kesariya", filePath: "song/Kesariya.mp3", coverPath: "coverimg/4.jpg" },
    { songName: "kya loge tum", filePath: "song/kya loge tum.mp3", coverPath: "coverimg/5.jpg" },
    { songName: "Maan Meri Jaan", filePath: "song/Maan Meri Jaan.mp3", coverPath: "coverimg/6.jpg" },
    { songName: "Pehli Dafa", filePath: "song/Pehli Dafa.mp3", coverPath: "coverimg/7.jpg" },
    { songName: "Raatan Lambiyan", filePath: "song/Raatan Lambiyan.mp3", coverPath: "coverimg/8.jpg" },
    { songName: "Tu Hai To Mujhe Phir Aur Kya Chahiye", filePath: "song/Tu Hai To Mujhe Phir Aur Kya Chahiye.mp3", coverPath: "coverimg/9.jpg" },
    { songName: "Musafir Hoon Yaron", filePath: "song/Musafir Hoon Yaron.mp3", coverPath: "coverimg/10.jpg" },
];

songItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("span")[0].innerText = songs[i].songName;
});

// audioElement.play();

// Handle Play/Pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    // Update seek bar
    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});
