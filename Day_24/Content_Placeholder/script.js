const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

console.log(animatedBgs, animatedBgTexts);
setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="https://picsum.photos/400?random" alt="" />';
  title.innerText = "Lorem ipsum dolor sit amet.";
  excerpt.innerText =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, natus?";
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`;
  name.innerText = "Prashant Raj";
  date.innerText = "Jan 01, 2000";

  animatedBgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animatedBgTexts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
