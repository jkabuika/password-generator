
const passwordDisplay = document.querySelector('.password');
const copyBtn = document.querySelector('.copy-btn')
const generateBtn = document.querySelector('.generate-btn')
const largeCopyBtn = document.querySelector('.large-copy-btn')
const lengthInput = document.querySelector(".length-option-container input");
const checkboxes = document.querySelectorAll(".character-type input");

const charSets = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*?"
};

function generatePassword() {
  const length = parseInt(lengthInput.value) || 8;
}

let charPool = "";
checkboxes.forEach((box, i) => {
  if (box.checked) charPool += Object.values(charSets)[i];
});
