const faqs = document.querySelectorAll(".faq");
const faqToggleBtns = document.querySelectorAll(".faq-toggle");

faqToggleBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    removeActive();
    btn.parentNode.classList.add("active");
  });
});

function removeActive() {
  faqs.forEach((faq) => {
    faq.classList.remove("active");
  });
}
