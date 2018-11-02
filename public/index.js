var form = document.querySelector('form');
var button = document.querySelector('.submit-btn')
var spinner = document.querySelector('.spinner')
var inputField = document.querySelector('#input-field');
var hedgie1 = document.querySelector('#hedgie1');
var hedgie2 = document.querySelector('#hedgie2');
var hedgie3 = document.querySelector('#hedgie3');
var hedgie4 = document.querySelector('#hedgie4');

button.addEventListener("click", function(event) {
  event.preventDefault();
  var keyword = inputField.value;
  getImages(keyword);
})

function getImages(keyword) {
  button.value = "Looking for photos..."
  fetch(`/api/v1/hedgie_images/${keyword}`)
    .then(response => response.json())
    .then(images => updateImages(images))
    .then(() => button.value = "Get Hedgie Photos")
    .then(() => clearInput())
    .catch(error => console.error(error, "sorry, please try again."));
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
