"use strict";

const keyMap = [
  { keyCode: "KeyQ", sound: "clap", element: null },
  { keyCode: "KeyW", sound: "hihat", element: null },
  { keyCode: "KeyE", sound: "kick", element: null },
  { keyCode: "KeyI", sound: "openhat", element: null },
  { keyCode: "KeyO", sound: "boom", element: null },
  { keyCode: "KeyP", sound: "ride", element: null },
  { keyCode: "KeyX", sound: "snare", element: null },
  { keyCode: "KeyC", sound: "tom", element: null },
  { keyCode: "KeyM", sound: "tink", element: null },
];

const btnArr = document.querySelectorAll(".btn");
btnArr.forEach((elmnt) => {
  const i = keyMap.findIndex(
    (row) => elmnt.children[1].textContent.toLowerCase() == row.sound
  );
  keyMap[i].element = elmnt;
});

const playAudio = function (audioName) {
  const audio = new Audio(`sounds/${audioName.toLowerCase()}.wav`);
  audio.currentTime = 0; // rewind audio to 00:00
  audio.play();
};

btnArr.forEach((elmnt) => {
  console.log(elmnt.textContent);
  elmnt.addEventListener("click", () => {
    playAudio(elmnt.children[1].textContent);
  });
});

window.addEventListener("keydown", (e) => {
  const mapValues = keyMap.find((row) => row.keyCode == e.code);
  if (mapValues) {
    playAudio(mapValues.sound);
    mapValues.element.classList.toggle("btn--playing");
    setTimeout(() => {
      mapValues.element.classList.toggle("btn--playing");
    }, 100);
  }
});
