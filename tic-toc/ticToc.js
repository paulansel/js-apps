"use strict";

const longHand = document.querySelector(".clock__hand--long");
const shortHand = document.querySelector(".clock__hand--short");
const secondsHand = document.querySelector(".clock__hand--seconds");

console.log(longHand, shortHand, secondsHand);

const startClock = function () {
  const currentDate = new Date();
  const hoursDeg = currentDate.getHours() * 15;
  const minutesDeg = currentDate.getMinutes() * 6;
  const secondsDeg = currentDate.getSeconds() * 6;

  shortHand.style.setProperty("--rotation", hoursDeg);
  longHand.style.setProperty("--rotation", minutesDeg);
  secondsHand.style.setProperty("--rotation", secondsDeg);
};

setInterval(startClock, 1000);
