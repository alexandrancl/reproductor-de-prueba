const image = document.getElementById("image")
const play_btn = document.getElementById("play")
const pause_btn = document.getElementById("pause")
const replay_btn = document.getElementById("stop")
const audio = document.getElementById("audio")

play_btn.addEventListener('click',()=>{
    audio.play();
    image.index.animationPlayState = "running"
})

pause_btn.addEventListener('click',()=>{
    audio.pause();
    image.index.animationPlayState = "paused"
})

replay_btn.addEventListener('click',()=>{
    audio.load();
    image.style.animationPlayState = "running"
})