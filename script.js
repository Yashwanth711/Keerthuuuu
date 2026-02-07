// Elements
const openLetterBtn = document.getElementById("openLetterBtn");
const letter = document.getElementById("letter");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const finalText = document.getElementById("final-text");

const cryingPopup = document.getElementById("cryingPopup");
const cryingImg = document.getElementById("cryingImg");
const cryText = document.getElementById("cryText");

// Messages for NO clicks
const messages = ["PLEASE 😭", "DON’T 😭", "I’M SAD 😭"];

// Gimmick sizes
let imgSize = 220;
let textSize = 32;

// Open letter button
openLetterBtn.addEventListener("click", () => {
  openLetterBtn.style.display = "none";
  letter.classList.remove("hidden");
});

// YES logic → show final text
yesBtn.addEventListener("click", () => {
  finalText.style.display = "block";
});

// NO logic → crying gimmicks
noBtn.addEventListener("click", () => {
  // Increase size
  imgSize += 40;
  textSize += 6;

  cryingImg.style.width = imgSize + "px";
  cryText.style.fontSize = textSize + "px";

  // Random text
  const randomIndex = Math.floor(Math.random() * messages.length);
  cryText.textContent = messages[randomIndex];

  // Show popup
  cryingPopup.style.display = "block";

  // Hide after 2 seconds
  setTimeout(() => {
    cryingPopup.style.display = "none";
  }, 2000);
});
