const songID =[
    {songPath :"music/Alan Walker - Faded.mp3", songName :"Alan Walker - Faded.mp3"},
    {songPath : "music/Imagine Dragons - Whatever It Takes.mp3", songName : "Imagine Dragons - Whatever It Takes"},
    {songPath : "music/see-you-again.mp3", songName : "See You Again"},
    {songPath : "music/Sia - Unstoppable.m4a", songName : "Sia - Unstoppable"},
    {songPath : "music/Taki_Taki.m4a", songName : "Taki Taki"},
    {songPath : "music/Taylor Swift - Only The Young.mp3" , songName: "Taylor Swift - Only The Young"},
    {songPath : "music/Gone_ Gone.mp3" , songName : "The Amazing Spider-Man Tribute Gone_Gone"},
    {songPath : "music/The Script - Hall Of Fame.m4a",songName : "The Script - Hall Of Fame"}
]
const songList = document.getElementsByClassName("songList")[0];
const audio = document.getElementsByClassName("audio")[0];
const songDuraitonTime = document.getElementsByClassName("songDurationTime")[0];
const currentProgress = document.getElementsByClassName("currentProgress")[0];
const perviousButton = document.getElementsByClassName("previousButton")[0];
const playButton = document.getElementsByClassName("playButton")[0];
const pauseButton = document.getElementsByClassName("fa-pause-circle")[0];
const nextButton = document.getElementsByClassName("nextButton")[0];
console.log(audio)

for(let i = 0 ; i<songID.length ; i++){
    const divTag = document.createElement("div");
    divTag.addEventListener("click",() => {
        const musicSongPath=songID[i].songPath;
        playSong(musicSongPath)
        musicPlayingIndex = i;
    });
    
    const songeName =(i + 1).toString() + ". "+ songID[i].songName;
    divTag.classList.add("song");
    divTag.textContent = songeName;
    songList.append(divTag);
}  
let durationText;
let duration = 0;
audio.addEventListener("loadeddata", () => { //loadeddata ဆိုသည် event ထုပ်ပေးပါသည်  audio ပါလာသည် second ထုပ်ပေးပါသည် 
    duration = Math.floor(audio.duration); // eg. 210sec ထွက်လာပါတယ်ဆိုပါဆို
    durationText=duration_currentTime(duration);
    
});

audio.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audio.currentTime);
    const currentTimeText = duration_currentTime(currentTime)
    songDuraitonTime.textContent= currentTimeText+ " / " + durationText;
    progressBar(currentTime);
})
const progressBar = (currentTime) =>{
    const progressBar= (400/duration) * currentTime;
    currentProgress.style.width = progressBar.toString() +"px"; //toString()ပေးရပါမယ်
}
const duration_currentTime = (totoalSecond) => {
    const min = Math.floor(totoalSecond / 60 );
    const sec = totoalSecond % 60
    const minText = min < 10 ? "0" + min.toString() : min ;
    const secText = sec < 10 ? "0" + sec.toString() : sec ;
    return minText+":"+ secText ;
}

/* Play and Pause */
let musicPlayingIndex = 0;
let isPlaying = false;
playButton.addEventListener("click", () => {
    const currentTime = Math.floor(audio.currentTime);//0
    console.log(currentTime)
    if(currentTime === 0){
        const firstPlayMusic=songID[musicPlayingIndex].songPath;
        playSong(firstPlayMusic)
    }else{
        //playSong()
        isPlaying = true;
        updatePlayAndPausButton()
        audio.play();
    }
    
});

pauseButton.addEventListener("click", () => {
    isPlaying = false;
    audio.pause();
    updatePlayAndPausButton();
})




const nextSong = () => {
    musicPlayingIndex++
    console.log("Next music playing Index",musicPlayingIndex)
    if(musicPlayingIndex === songID.length -1){
        return
    }else{
        musicPlayingIndex +=1;
        let nextMusic = songID[musicPlayingIndex].songPath
        playSong(nextMusic)
    }
}
nextButton.addEventListener("click", nextSong);

audio.addEventListener("ended", nextSong)
perviousButton.addEventListener("click", () => {
    console.log("perviousButton",musicPlayingIndex)
    if( musicPlayingIndex === 0){
        return;
    }else{
        musicPlayingIndex -= 1;
        const previousMusic = songID[musicPlayingIndex].songPath;
        playSong(previousMusic)
    }
    
})

const updatePlayAndPausButton = () => {
    if(isPlaying === true){
        //playSong();
        playButton.style.display = "none";
        pauseButton.style.display = "inline"
    }else{
        playButton.style.display = "inline";
        pauseButton.style.display = "none";
    }
}

const playSong = (playingMusing) => {
    audio.src=playingMusing;
    audio.play()
    isPlaying = true; //playSong(); 
    updatePlayAndPausButton()
}
/*---------- song control -------*/
const vloumeRange = document.querySelector(".range")
vloumeRange.addEventListener("change", () => {
    console.log("audio volume",audio.volume) // 1 audio volumeက အများဆုံး ၁ ပါ
    console.log("before",vloumeRange.value) //audio.value က range တန်ဖိုးပေးထားသည် min max ဖြစ်တယ်
    audio.volume = vloumeRange.value / 100
    
    console.log("audio volume after -->",audio.volume)
})
const muteSong = document.querySelector(".fa-volume-down")
muteSong.addEventListener("click", () => {
    audio.volume = 0;
    volume.value =0;
})