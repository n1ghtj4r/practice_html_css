document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".start-btn");
  btn.addEventListener("click", () => {
    const paraEl = document.createElement("p");
    const bodyEl = document.querySelector("body");

    bodyEl.appendChild(paraEl);
    paraEl.textContent = "The game has started!!!";
  });
});

const button = document.getElementById("custom-btn");

button.addEventListener("click", () => {
  alert("Button clicked!");
});

button.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault(); 
    button.click();
  }
});

const button2 = document.getElementById("update-status-btn");
const statusMessage = document.getElementById("status-msg");

button2.addEventListener("click", () => {
  statusMessage.textContent = "Your upload has completed successfully.";
});

const dialog = document.getElementById("custom-dialog");
const openBtn = document.getElementById("open-dialog");
const closeBtn = document.getElementById("close-dialog");
const confirmBtn = document.getElementById("confirm-btn");

openBtn.addEventListener("click", () => {
  dialog.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  dialog.style.display = "none";
});

confirmBtn.addEventListener("click", () => {
  alert("File deleted."); 
  dialog.style.display = "none";
});

const passwordEl = document.getElementById("password");
const passwordHelpText = document.getElementById("password-help");

passwordEl.addEventListener("input", (e) => { 
  const userInput = e.target.value;
  passwordHelpText.style.color = userInput.length >= 8 ? "green" : "red";
});