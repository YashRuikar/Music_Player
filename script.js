const music = new Audio("audio/1.mp3");
// music.play();

const songs = [
  {
    id: "1",
    songName: `On My Way <br>
        <div class="artist">Alan Walker</div>`,
    poster: "img/1.jpg",
  },
  {
    id: "2",
    songName: `Alan Walker-Fade <br>
        <div class="artist">Alan Walker</div>`,
    poster: "img/2.jpg",
  },
  {
    id: "3",
    songName: `Cartoon - on & on <br>
        <div class="artist">Daniel Levi</div>`,
    poster: "img/3.jpg",
  },
  {
    id: "4",
    songName: `Warriyo - Mortals <br>
        <div class="artist">Mortals</div>`,
    poster: "img/4.jpg",
  },
  {
    id: "5",
    songName: `Ertugrul Gazi <br>
        <div class="artist">Ertugrul</div>`,
    poster: "img/5.jpg",
  },
  {
    id: "6",
    songName: `Electronic Music <br>
        <div class="artist">Electro</div>`,
    poster: "img/6.jpg",
  },
  {
    id: "7",
    songName: `Agar Tum Sath Ho <br>
        <div class="artist">Tamashaa</div>`,
    poster: "img/7.jpg",
  },
  {
    id: "8",
    songName: `Suna Hai <br>
        <div class="artist">Neha Kakker</div>`,
    poster: "img/8.jpg",
  },
  {
    id: "9",
    songName: `Dilber <br>
        <div class="artist">Satyameva Jayate</div>`,
    poster: "img/9.jpg",
  },
  {
    id: "10",
    songName: `Duniya <br>
        <div class="artist">Luka Chuppi</div>`,
    poster: "img/10.jpg",
  },
  {
    id: "11",
    songName: `Lagdi Lahore Di  <br>
        <div class="artist">Street Dancer 3</div>`,
    poster: "img/11.jpg",
  },
  {
    id: "12",
    songName: `Putt Jatt Da <br>
        <div class="artist">Putt Jatt Da</div>`,
    poster: "img/12.jpg",
  },
  {
    id: "13",
    songName: `Baarishein <br>
        <div class="artist">Atif Aslam</div>`,
    poster: "img/13.jpg",
  },
  {
    id: "14",
    songName: `Vaaste <br>
        <div class="artist">Dhvani Bhanushali</div>`,
    poster: "img/14.jpg",
  },
  {
    id: "15",
    songName: `Lut Gaye <br>
        <div class="artist">Jubin Nautiyal</div>`,
    poster: "img/15.jpg",
  },
  {
    id: "16",
    songName: `Tu Meri Jindgi Hai Tu <br>
        <div class="artist">Jubin Nautiyal</div>`,
    poster: "img/16.jpg",
  },
  {
    id: "17",
    songName: `Batao Yaad Hai Tumko Wo Jab Dil Ko Churaya Tha <br>
        <div class="artist">Rahet Fateh Ali Khan</div>`,
    poster: "img/17.jpg",
  },
  {
    id: "18",
    songName: `Mere Dhol Judaiyan <br>
        <div class="artist">Ali Sethi</div>`,
    poster: "img/18.jpg",
  },
  {
    id: "19",
    songName: `Eh Munde Pagal Ne Saare <br>
        <div class="artist">AP Dhillon</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "20",
    songName: `Dunny 82k <br>
        <div class="artist">AP Dhillon, Gurinder</div>`,
    poster: "img/20.jpg",
  },
];


// Master play src, img, wave, play and pause 

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.add("bi-pause-fill");
    masterPlay.classList.remove("bi-play-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fil");
  }
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playlistPlay")).forEach((el) => {
    el.classList.add("bi-play-circle-fill");
    el.classList.remove("bi-pause-circle-fill");
  });
};

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((e) => {
    e.style.background = "rgb(105, 105, 105, .0)";
  });
};

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playlistPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.add("bi-pause-fill");
    masterPlay.classList.remove("bi-play-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
  });
});

// Seek Bar

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementById("dot");

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }

  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);

  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }

  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  let seekBar = seek.value;
  bar2.style.width = `${seekBar}%`;
  dot.style.left = `${seekBar}%`;
});

seek.addEventListener("input", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});