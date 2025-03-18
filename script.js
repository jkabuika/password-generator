document.addEventListener("DOMContentLoaded", () => {
  const passwordDisplay = document.querySelector(".password");
  const copyBtns = document.querySelectorAll(".copy-btn button, .large-copy-btn");
  const generateBtn = document.querySelector(".generate-btn button");
  const lengthInput = document.querySelector(".length-option-container input");
  const checkboxes = document.querySelectorAll(".character-type input");

  const charSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+[]{}|;:,.<>?/~"
  };

  function generatePassword() {
    const length = parseInt(lengthInput.value) || 12;
    let charPool = "";
    checkboxes.forEach((box, i) => {
      if (box.checked) charPool += Object.values(charSets)[i];
    });

    if (!charPool) {
      passwordDisplay.textContent = "Select Options";
      return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      password += charPool[Math.floor(Math.random() * charPool.length)];
    }
    passwordDisplay.textContent = password;
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(passwordDisplay.textContent)
      .then(() => alert("Password copied!"))
      .catch(() => alert("Failed to copy"));
  }

  generateBtn.addEventListener("click", generatePassword);
  copyBtns.forEach(btn => btn.addEventListener("click", copyToClipboard));
});
