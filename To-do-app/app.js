const ul = document.getElementById("to-do-lists");
const form = document.querySelector("form");
// Create new Todos
form.addEventListener("submit", function (e) {
  // console.log("Hello World");
  e.preventDefault();
  var text = form.addToDo.value;
  if (text.length > 0) {
    var newList = document.createElement("li"),
      newSpan = document.createElement("span"),
      newBtn = document.createElement("button"),
      newLogo = document.createElement("i");
    newBtn.className = "delete";
    newLogo.className = "fa-sharp fa-solid fa-trash";
    newBtn.appendChild(newLogo);
    newSpan.textContent = text;
    newList.appendChild(newSpan);
    newList.appendChild(newBtn);
    ul.appendChild(newList);
    form.addToDo.value = "";
  }
});
// Remove Todos
ul.addEventListener("click", function (e) {
  console.log(e);
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
  if (e.target.tagName === "I") {
    e.target.parentElement.parentElement.remove();
  }
});
// Hide Todos
const hideAll = document.querySelector(".hide");
hideAll.addEventListener("click", function () {
  if (ul.children.length > 0) {
    if (!ul.classList.contains("hideAll")) {
      ul.classList.toggle("hideAll");
      hideAll.textContent = "Show All";
    } else {
      ul.classList.toggle("hideAll");
      hideAll.textContent = "Hide All";
    }
  }
});

// Find Todos
const search = document.getElementById("search");
search.addEventListener("keyup", function () {
  const lists = document.querySelectorAll("li");
  var searchValue = search.value.toLowerCase();
  lists.forEach(function (list) {
    if (
      list.firstElementChild.textContent
        .toLocaleLowerCase()
        .indexOf(searchValue) === -1
    ) {
      list.style.display = "none";
    } else {
      list.style.display = "flex";
    }
  });
});
