// ==== Envelope & Cat Opening ====
const envelope = document.getElementById("envelope");
const cat = document.getElementById("cat");
const letter = document.getElementById("letter");

envelope.addEventListener("click", () => {
  envelope.classList.add("hidden");
  cat.classList.remove("hidden");

  setTimeout(() => {
    letter.classList.remove("hidden");
  }, 1000);
});

// ==== YES & final text logic ====
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const finalText = document.getElementById("final-text");

yesBtn.addEventListener("click", () => {
  finalText.style.display = "block";
});

// ==== Crying popup logic ====
const cryingPopup = document.getElementById("cryingPopup");
const cryingImg = document.getElementById("cryingImg");
const cryText = document.getElementById("cryText");

const messages = ["PLEASE 😭", "DON’T 😭", "I’M SAD 😭"];
const cryingImages = ["crying1.png","crying2.png","crying3.png","crying4.png"];

let imgSize = 220;
let textSize = 32;

noBtn.addEventListener("click", () => {
  imgSize += 80;
  textSize += 10;

  cryingImg.style.width = imgSize + "px";
  cryText.style.fontSize = textSize + "px";

  cryText.textContent = messages[Math.floor(Math.random() * messages.length)];

  cryingImg.src = cryingImages[Math.floor(Math.random() * cryingImages.length)];

  cryingPopup.style.display = "block";
  setTimeout(() => {
    cryingPopup.style.display = "none";
  }, 2000);
});
