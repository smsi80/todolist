let SaveButton = document.querySelector("#SaveButton");
let TextInput = document.querySelector("#TextInput");
let Divp = document.querySelector("#AddP");

SaveButton.onclick = function () {
  if (TextInput.value !== "") {
    let para = document.createElement("p");
    para.innerHTML = TextInput.value;
    Divp.appendChild(para);
  } else {
    alert("Please input text");
  }
};
