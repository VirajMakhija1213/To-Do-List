let task = document.getElementById("task");
let inputBox = document.getElementById("input-box");
let button = document.getElementById("add-btn");

button.addEventListener("click", function () {
  if (inputBox.value == "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    task.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});

task.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  saveData();
});

function saveData() {
  localStorage.setItem("data", task.innerHTML);
}
function getData() {
  task.innerHTML = localStorage.getItem("data");
}
getData();