var form = document.querySelector('form');
var inputField = document.querySelector('#input-field');
var hedgie1 = document.querySelector('#hedgie1');
var hedgie2 = document.querySelector('#hedgie2');
var hedgie3 = document.querySelector('#hedgie3');
var hedgie4 = document.querySelector('#hedgie4');

form.addEventListener("submit", function(e) {
  e.preventDefault();
  var keyword = inputField.value;
  getImages(keyword);
})

function getImages(keyword) {
  fetch(`http://localhost:3000/api/v1/hedgie_images/${keyword}`)
    .then(response => response.json())
    .then(images => updateImages(images))
    .then(() => clearInput())
    .catch(error => console.error(alert(error, "sorry, please try again.")));
}

function clearInput() {
  inputField.value = "";
}

function updateImages(images) {
  hedgie1.src = images["hedgieImages"][0];
  hedgie2.src = images["hedgieImages"][1];
  hedgie3.src = images["hedgieImages"][2];
  hedgie4.src = images["hedgieImages"][3];
}
