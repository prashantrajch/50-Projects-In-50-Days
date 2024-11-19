const result = document.getElementById("result");
const [numberLength, uppercase, lowercase, number, symbol] =
  document.querySelectorAll(".options input");
const copyClipboard = document.getElementById("clipboard");
const generatePasswordBtn = document.getElementById("generate");

const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
const numberChar = "0123456789";
const symbolChar = `~!@#$%^&*()_-+={[}]|\:;"'<,>.?/`;

const randomGenerator = (char) => {
  return char[Math.floor(Math.random() * char.length)];
};

function generatePassword(password = "") {
  if (Number(numberLength.value) < 4) {
    alert("Password lenght must be 4");
    return;
  }
  if (Number(numberLength.value) > 20) {
    alert("Password not be greater than 20");
    return;
  }
  if (
    !uppercase.checked &&
    !lowercase.checked &&
    !number.checked &&
    !symbol.checked
  ) {
    alert("Please select one checkbox");
    return;
  }

  if (uppercase.checked) {
    password += randomGenerator(uppercaseChar);
  }
  if (lowercase.checked) {
    password += randomGenerator(lowercaseChar);
  }
  if (number.checked) {
    password += randomGenerator(numberChar);
  }
  if (symbol.checked) {
    password += randomGenerator(symbolChar);
  }

  if (password.length <= numberLength.value) {
    return generatePassword(password);
  }

  result.value = trimString(password, numberLength.value);
}

function trimString(str, num) {
  if (str.length > num) {
    return str.substring(0, num);
  } else {
    return str;
  }
}

generatePasswordBtn.addEventListener("click", () => generatePassword());

copyClipboard.addEventListener("click", () => {
  result.select();
  document.execCommand("copy");
});
