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
    songName: `Meri Jindgi Hai Tu <br>
        <div class="artist">Jubin Nautiyal</div>`,
    poster: "img/16.jpg",
  },
  {
    id: "17",
    songName: `Zaroori Tha <br>
        <div class="artist">Rahet Fateh Ali Khan</div>`,
    poster: "img/17.jpg",
  },
  {
    id: "18",
    songName: `Pasoori <br>
        <div class="artist">Ali Sethi</div>`,
    poster: "img/18.jpg",
  },
  {
    id: "19",
    songName: `Insane <br>
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

// search data start
let search_results = document.getElementsByClassName("search_results")[0];

songs.forEach((element) => {
  const { id, songName, poster } = element;
  let card = document.createElement("a");
  card.classList.add("card");
  card.href = "#" + id;
  card.innerHTML = `
  <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>
  `;
  search_results.appendChild(card);
});

let input = document.getElementsByTagName("input")[0];

input.addEventListener("keyup", () => {
  let input_value = input.value.toUpperCase();
  let items = search_results.getElementsByTagName("a");

  for (let index = 0; index < items.length; index++) {
    let as = items[index].getElementsByClassName("content")[0];
    let text_value = as.textContent || as.innerHTML;

    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";
    } else {
      items[index].style.display = "none";
    }

    if (input.value == 0) {
      search_results.style.display = "none";
    } else {
      search_results.style.display = "";
    }
  }
});

// search data end

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
let download_music = document.getElementById("download_music");
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
    download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
      download_music.setAttribute("download", songName);
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

// Volume button

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("input", updateVolume);
vol.addEventListener("change", updateVolume);

function updateVolume() {
  let volValue = vol.value;

  if (volValue == 0) {
    vol_icon.classList.remove("bi-volume-up-fill", "bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  } else if (volValue > 0 && volValue <= 50) {
    vol_icon.classList.remove("bi-volume-up-fill", "bi-volume-off-fill");
    vol_icon.classList.add("bi-volume-down-fill");
  } else {
    vol_icon.classList.remove("bi-volume-down-fill", "bi-volume-off-fill");
    vol_icon.classList.add("bi-volume-up-fill");
  }

  vol_bar.style.width = `${volValue}%`;
  vol_dot.style.left = `${volValue}%`;
  music.volume = volValue / 100;
}

// Next song and back buttons part

let back = document.getElementById("back");
let next = document.getElementById("next");

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }

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

next.addEventListener("click", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }

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

// Shuffle Button

let shuffle = document.getElementsByClassName("shuffle")[0];

shuffle.addEventListener("click", () => {
  let a = shuffle.innerHTML;

  switch (a) {
    case "next":
      shuffle.classList.add("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "repeat";
      break;

    case "repeat":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.add("bi-shuffle");
      shuffle.innerHTML = "random";
      break;

    case "random":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.add("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "next";
      break;
  }
});

const next_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index++;
  }

  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  wave.classList.add("active1");
  masterPlay.classList.add("bi-pause-fill");
  masterPlay.classList.remove("bi-play-fill");
  download_music.href = `audio/${index}.mp3`;

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .1)";
  makeAllplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
};

const repeat_music = () => {
  index;
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  wave.classList.add("active1");
  masterPlay.classList.add("bi-pause-fill");
  masterPlay.classList.remove("bi-play-fill");
  download_music.href = `audio/${index}.mp3`;

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .1)";
  makeAllplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
};

const random_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index = Math.floor(Math.random() * songs.length + 1);
  }
  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  wave.classList.add("active1");
  masterPlay.classList.add("bi-pause-fill");
  masterPlay.classList.remove("bi-play-fill");
  download_music.href = `audio/${index}.mp3`;

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105, 105, 105, .1)";
  makeAllplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
};

music.addEventListener("ended", () => {
  let b = shuffle.innerHTML;

  switch (b) {
    case "next":
      next_music();
      break;

    case "repeat":
      repeat_music();
      break;

    case "random":
      random_music();
      break;
  }
});


let menu_list_active_button = document.getElementById('menu_list_active_button')
let menu_side = document.getElementsByClassName('menu_side')[0]

menu_list_active_button.addEventListener('click', () => {
  menu_side.style.transform = "unset"
  menu_list_active_button.style.opacity = 0
})


let song_side = document.getElementsByClassName('song_side')[0]

song_side.addEventListener('click', () => {
  menu_side.style.transform = "translateX(-100%)"
  menu_list_active_button.style.opacity = 1
})













// Left and right buttons to shuffle songs list on content section

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let artist_bx = document.getElementsByClassName("artist_bx")[0];

pop_art_right.addEventListener("click", () => {
  artist_bx.scrollLeft += 330;
});

pop_art_left.addEventListener("click", () => {
  artist_bx.scrollLeft -= 330;
});
