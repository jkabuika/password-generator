document.addEventListener("DOMContentLoaded", () => {

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

