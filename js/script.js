/* ================= MUSIC ================= */
const audio = document.getElementById("audio");
const nowPlaying = document.getElementById("nowPlaying");
const playBtnIcon = document.querySelector("#playBtn i");

const playlist = [
  { title: "Bùi Công Nam - I Love You", src: "images/Bùi Công Nam - I Love You .mp3" },
  { title: "Dangrangto - Thế giới của anh", src: "images/Dangrangto - 'thế giới của anh' (Prod. DONAL, Lespace).mp3" },
  { title: "Em - MAYDAYs", src: "images/Em - MAYDAYs (Official Visualizer).mp3"},
  { title: "Hodge - Waltz for Moon", src: "images/Hodge - Waltz for Moon.mp3"},
  { title: "Lady Gaga, Bruno Mars - Die With A Smile", src: "images/Lady Gaga, Bruno Mars - Die With A Smile.mp3"},
  { title: "Mindme - I'll Do It All Over Again", src: "images/Mindme - I'll Do It All Over Again.mp3"},
  { title: "Stephen Sanchez - Until I Found You", src: "images/Stephen Sanchez - Until I Found You.mp3" },
];

let index = 0;
let isShuffle = false;
let isRepeat = false;

function playSong(i) {
  index = i;
  audio.src = playlist[index].src;
  audio.play().catch(()=>{});
  nowPlaying.innerText = "🎵 " + playlist[index].title;
  playBtnIcon.className = "fa-solid fa-pause";
  renderPlaylist();
}


function togglePlay() {
  if (audio.paused) {
    if (!audio.src) playSong(index);
    else audio.play();
    playBtnIcon.className = "fa-solid fa-pause";
  } else {
    audio.pause();
    playBtnIcon.className = "fa-solid fa-play";
  }
}

function nextSong() {
  index = isShuffle
    ? Math.floor(Math.random() * playlist.length)
    : (index + 1) % playlist.length;
  playSong(index);
}

function prevSong() {
  index = index === 0 ? playlist.length - 1 : index - 1;
  playSong(index);
}

function toggleShuffle(btn) {
  isShuffle = !isShuffle;
  btn.classList.toggle("active");
}

function toggleRepeat(btn) {
  isRepeat = !isRepeat;
  btn.classList.toggle("active");
}

audio.onended = () => {
  isRepeat ? playSong(index) : nextSong();
};

/* ================= COUNTDOWN ================= */
const targetTime = new Date(new Date().getFullYear(), 1, 14, 18, 30).getTime();
const box = document.getElementById("countdownBox");
const overlay = document.getElementById("overlay");
const climaxAudio = document.getElementById("climaxAudio");

setInterval(() => {
  const now = Date.now();
  const d = targetTime - now;

  if (d <= 0) return startTransition();

  days.innerText = Math.floor(d / 86400000);
  hours.innerText = Math.floor(d / 3600000) % 24;
  minutes.innerText = Math.floor(d / 60000) % 60;
  seconds.innerText = Math.floor(d / 1000) % 60;

  if (d < 10000) box.classList.add("shake");
}, 1000);

/* ================= HEART FALL ================= */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerText = ["💗", "✨", "💖"][Math.floor(Math.random() * 3)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 18 + "px";

  document.getElementById("heart-container").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 1000);

/* ================= TRANSITION ================= */
function startTransition() {
  climaxAudio.play();
  overlay.classList.add("show");
  setTimeout(() => {
    location.href = "main.html";
  }, 1500);
}
const playlistBox = document.getElementById("playlist");

function renderPlaylist(){
  playlistBox.innerHTML = "";
  playlist.forEach((song, i) => {
    const div = document.createElement("div");
    div.className = "song-item" + (i === index ? " active" : "");
    div.innerHTML = `
      <i class="fa-solid ${i === index ? "fa-music" : "fa-heart"}"></i>
      <span>${song.title}</span>
    `;
    div.onclick = () => playSong(i);
    playlistBox.appendChild(div);
  });
}
renderPlaylist();
