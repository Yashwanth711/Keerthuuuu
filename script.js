// Elements
const envelope = document.getElementById("envelope");
const cat = document.getElementById("cat");
const letter = document.getElementById("letter");
const windowFrame = document.getElementById("windowFrame");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const finalText = document.getElementById("final-text");
const cryingPopup = document.getElementById("cryingPopup");
const cryingImg = document.getElementById("cryingImg");
const cryText = document.getElementById("cryText");

// Crying popup data
const messages = ["PLEASE 😭", "DON’T 😭", "I’M SAD 😭"];
const cryingImages = ["crying1.png","crying2.png","crying3.png","crying4.png"];
let imgSize = 220;
let textSize = 32;

// --- Envelope click ---
envelope.addEventListener("click", () => {
  envelope.classList.add("hidden");        // hide envelope
  windowFrame.classList.remove("hidden");  // show window
  cat.src = "cat_heart.gif";               // cat holds heart
  cat.classList.remove("hidden");
  letter.classList.remove("hidden");       // show letter
});

// --- YES click ---
yesBtn.addEventListener("click", () => {
  cat.src = "cat_dance.gif";           // cat dances
  finalText.style.display = "block";   // show final Valentine text
});

// --- NO click ---
noBtn.addEventListener("click", () => {
  imgSize += 40;    // grow image
  textSize += 5;

  cryingImg.style.width = imgSize + "px";
  cryText.style.fontSize = textSize + "px";

  cryingImg.src = cryingImages[Math.floor(Math.random() * cryingImages.length)];
  cryText.textContent = messages[Math.floor(Math.random() * messages.length)];

  cryingPopup.style.display = "block";

  setTimeout(() => {
    cryingPopup.style.display = "none";
  }, 1000);
});
