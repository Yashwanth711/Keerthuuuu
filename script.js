// Elements
const envelope = document.getElementById("envelope");
const cat = document.getElementById("cat");
const letter = document.getElementById("letter");

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const finalText = document.getElementById("final-text");

const cryingPopup = document.getElementById("cryingPopup");
const cryingImg = document.getElementById("cryingImg");
const cryText = document.getElementById("cryText");

// Messages for NO clicks
const messages = ["PLEASE 😭", "DON’T 😭", "I’M SAD 😭"];

// Crying images (replace with your 4 images)
const cryingImages = ["crying1.png", "crying2.png", "crying3.png", "crying4.png"];

// Gimmick sizes
let imgSize = 220; 
let textSize = 32;

// === Envelope opening logic ===
envelope.addEventListener("click", () => {
  envelope.classList.add("hidden");
  cat.classList.remove("hidden");

  // After some delay, show letter
  setTimeout(() => {
    letter.classList.remove("hidden");
  }, 1000); // 1 second delay, adjust as needed
});

// === YES logic ===
yesBtn.addEventListener("click", () => {
  finalText.style.display = "block";
});

// === NO logic ===
noBtn.addEventListener("click", () => {
  // Increase size
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

  setTimeout(() => {
    cryingPopup.style.display = "none";
  }, 2000);
});
