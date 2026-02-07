const envelope = document.getElementById("envelope");
const cat = document.getElementById("cat");
const letter = document.getElementById("letter");
const windowFrame = document.getElementById("windowFrame");

// Envelope click → show window + cat + letter
envelope.addEventListener("click", () => {
  envelope.classList.add("hidden");

  // Show window frame
  windowFrame.classList.remove("hidden");

  // Switch cat GIF to heart version
  cat.src = "cat_heart.gif";
  cat.classList.remove("hidden");

  // Show letter after 1s
  setTimeout(() => {
    letter.classList.remove("hidden");
  }, 1000);
});

// YES button logic
const yesBtn = document.getElementById("yes");
const finalText = document.getElementById("final-text");

yesBtn.addEventListener("click", () => {
  finalText.style.display = "block";
});

// NO button / crying popup
const noBtn = document.getElementById("no");
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
