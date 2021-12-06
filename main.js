let counter = 0;

const reload = () => {
  location.reload();
};

function rollTheDice() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  document
    .querySelector('.img')
    .setAttribute('src', './images/dice' + randomNumber + '.png');
  counter = counter + randomNumber;
  document.getElementById('score').innerHTML = counter;
  if (counter > 20) {
    document.getElementById('status').innerHTML = 'Winner!';
    document.getElementById('start').innerHTML =
      "<button onclick='reload()'>Start again</button>";
    document.getElementById('roll').innerHTML = '';
    counter = 0;
  } else if (counter < 20 && counter == 1) {
    document.getElementById('score').innerHTML = '0';
    document.getElementById('status').innerHTML = 'You lost!';
    document.getElementById('start').innerHTML =
      "<button onclick='reload()'>Start again</button>";
    document.getElementById('roll').innerHTML = '';
    counter = 0;
  }
}
