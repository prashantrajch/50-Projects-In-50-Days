const addBtn = document.getElementById("add-note");

// Retrieve notes from localStorage
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => {
    addNewNote(note, true); // Show `div.main` for notes from localStorage
  });
}

function addNewNote(text = "", fromStorage = false) {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
        <div class="tools">
            <button class="edit" id='edit'><i class="fas fa-edit"></i></button>
            <button class="delete" id='delete'><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${fromStorage ? "" : "hidden"}" id='main'></div>
        <textarea name="note-write" class="${
          fromStorage ? "hidden" : ""
        }" id="note-write"></textarea>
    `;

  const editBtn = note.querySelector("#edit");
  const deleteBtn = note.querySelector("#delete");
  const main = note.querySelector("#main");
  const textare = note.querySelector("#note-write");

  textare.value = text;
  main.innerHTML = marked.parse(text);

  // Delete note
  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateInLS();
  });

  // Toggle between edit and view
  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textare.classList.toggle("hidden");
  });

  // Update content on input
  textare.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked.parse(value);
    updateInLS();
  });

  document.body.appendChild(note);

  // Add a short delay to avoid immediate window.onclick interference
  setTimeout(() => {
    window.addEventListener("click", (e) => {
      // Ensure clicks on the note itself don't hide textarea
      if (!note.contains(e.target)) {
        main.classList.remove("hidden");
        textare.classList.add("hidden");
      }
    });
  }, 100);
}

// Add a new note on button click
addBtn.addEventListener("click", () => {
  addNewNote(); // Add a new note
});

// Update localStorage
function updateInLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}
