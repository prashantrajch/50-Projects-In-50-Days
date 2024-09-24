const allLabels = document.querySelectorAll(".form-control label");

allLabels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (text, ind) =>
        `<span style="transition-delay: ${ind * 100}ms">${text}</span>`
    )
    .join("");
});
