import testimonials from "./data.js";

const testimonial = document.getElementsByClassName("testimonial")[0];
const userImg = document.getElementsByClassName("user-img")[0];
const username = document.getElementsByClassName("username")[0];
const role = document.getElementsByClassName("role")[0];

let index = 0;

function udpateTestimonial() {
  const { name, position, photo, text } = testimonials[index];

  testimonial.innerHTML = text;
  userImg.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  index++;

  if (index > testimonials.length - 1) {
    index = 0;
  }
}

setInterval(udpateTestimonial, 10000);
