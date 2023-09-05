let audioelement=new Audio('songs/1.mp3');
let myprogressbar=document.getElementById('myprogressbar');
let currentindex=0;
let currentindex1=0;
let next=document.getElementById('next');
let songitem=document.getElementsByClassName('songitem');
let masterplay=document.getElementById('masterPlay');
let previous=document.getElementById('previous');
let songitema=document.getElementsByClassName('songitema');

let songs = [
    {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]
// audioelement='songs/2.mp3';

Array.from(songitem).forEach((element,i)=>{
element.getElementsByTagName('img')[0].src=songs[i].coverPath;
element.getElementsByTagName('span')[0].innerText=songs[i].songName;
element.addEventListener('click',(e)=>{
audioelement.src=`${songs[i].filePath}`;
currentindex=i;
audioelement.currentTime=0;
audioelement.play();
masterplay.classList.add('fa-pause-circle');

})
})
Array.from(songitema).forEach((element,i)=>{
element.getElementsByTagName('img')[0].src=songs[i].coverPath;
element.getElementsByTagName('span')[0].innerText=songs[i].songName;
element.addEventListener('click',(e)=>{
audioelement.src=`${songs[i].filePath}`;
currentindex1=i;
audioelement.currentTime=0;
audioelement.play();
masterplay.classList.add('fa-pause-circle');

})
})

myprogressbar.addEventListener('change',()=>{
audioelement.currentTime=parseInt(myprogressbar.value*(audioelement.duration)/100);
})
audioelement.addEventListener('timeupdate',()=>{
    myprogressbar.value=parseInt((audioelement.currentTime/audioelement.duration)*100);
})
//play-pause button
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<0){
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    audioelement.play();
    }
    else{
        masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    audioelement.pause();
    }
})

// forward button
next.addEventListener('click',()=>{
    if(currentindex==7){
        currentindex=-1;
       
    }
    
    audioelement.src=`${songs[currentindex+1].filePath}`
    audioelement.play();
    currentindex+=1;
})

// previous button
previous.addEventListener('click',()=>{
    if(currentindex==0){
    currentindex=8;
    }
    audioelement.src=`${songs[currentindex-1].filePath}`
    audioelement.play();
    currentindex-=1;
})

