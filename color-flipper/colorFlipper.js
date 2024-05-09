"use strict";

const bodyElmnt = document.querySelector("body");

document.querySelectorAll(".btn").forEach((elmnt) => {
  const btnColor = elmnt.textContent;

  elmnt.style.backgroundColor = btnColor;
  elmnt.addEventListener("click", () => {
    bodyElmnt.style.backgroundColor = btnColor;
  });
});
