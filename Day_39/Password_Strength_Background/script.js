const backgroundImage = document.getElementById("background");
const password = document.getElementById("password");

password.addEventListener("input", (e) => {
  const value = e.target.value;
  const blurValue = 20 - value.length * 2;

  backgroundImage.style.filter = `blur(${blurValue}px)`;
});
