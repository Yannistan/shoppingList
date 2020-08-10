const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");

  // Sons
  const sounds = document.querySelectorAll(".sound-picker button");
  // Affichage du temps
  const timeDisplay = document.querySelector(".time-display");
  const timeSelect = document.querySelectorAll(".time-select button");
  // Recuperer la longueur de l'outline

  const outlineLength = outline.getTotalLength();
  console.log(outlineLength);

  // Durée
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  // Pick different sounds
  sounds.forEach((sound) => {
    sound.addEventListener("click", function () {
      song.src = this.getAttribute("data-sound");
      video.src = this.getAttribute("data-video");
      checkPlaying(song);
    });
  });

  //  faire jouer des sons

  play.addEventListener("click", () => {
    checkPlaying(song);
  });

  // Choirir un son
  timeSelect.forEach((option) => {
    option.addEventListener("click", function () {
      fakeDuration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
        fakeDuration % 60
      )}`;
    });
  });

  // créer une fonction qui permet de lancer et d'arreter les sons
  const checkPlaying = (song) => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "svg/pause.svg";
    } else {
      song.pause();
      video.pause();
      play.src = "svg/play.svg";
    }
  };
  // Nous pouvons animate the sound
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    // Animate the circle
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;
    // Animate the text
    timeDisplay.textContent = `${minutes}:${seconds}`;
    if (currentTime >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = "svg/play.svg";
      video.pause();
    }
  };
};

app();
