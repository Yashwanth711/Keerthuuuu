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

// Crying images (replace with your 4 image filenames)
const cryingImages = [
  "crying1.png",
  "crying2.png",
  "crying3.png",
  "crying4.png"
];

// Gimmick sizes
let imgSize = 220; // starting width of crying image
let textSize = 32; // starting font size

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
  // Increase size each click
  imgSize += 80;   
  textSize += 10;

  cryingImg.style.width = imgSize + "px";
  cryText.style.fontSize = textSize + "px";

  // Random text
  cryText.textContent = messages[Math.floor(Math.random() * messages.length)];

  // Random crying image
  cryingImg.src = cryingImages[Math.floor(Math.random() * cryingImages.length)];

  // Show popup
  cryingPopup.style.display = "block";

  // Hide after 2 seconds
  setTimeout(() => {
    cryingPopup.style.display = "none";
  }, 2000);
});
