const btn = document.querySelector(".btn");
const main = document.querySelector(".main");
const note = document.querySelector(".note");
const modal = document.querySelector(".modal");
const end = document.querySelector(".close-button");
const overlay = document.querySelector("#overlay");
const modalBody = document.querySelector(".modal-body");

btn.addEventListener("click", () => {
  let body = document.createElement("div");
  body.classList.add("sub");

  // body.innerText = note.value;

  let text = document.createElement("h2");
  text.innerText = note.value;

  let button = document.createElement("button");
  // button.classList.add("btn2");
  button.innerText = "view";

  console.log(note.value);
  // button.addEventListener("click", () => {
  //   modal.classList.add("active");
  //   overlay.classList.add("active");
  //   let modalText = document.createElement("p");
  //   modalText.innerText = note.value;
  //   modalBody.appendChild(modalText);
  //   console.log(modalText.value);
  // });

  button.addEventListener("click", () => {
    modal.classList.add("active");
    overlay.classList.add("active");

    // Create a new paragraph element to hold the note content
    let modalText = document.createElement("p");
    modalText.textContent = text.value; // Use textContent to set the text

    // Append the new paragraph element to the modal body
    modalBody.appendChild(modalText);
  });
  body.appendChild(text);
  body.appendChild(button);

  main.appendChild(body);

  note.value = "";
});

end.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});
