document.getElementById('change-theme-btn').addEventListener('click', function () {
  let darkThemeEnabled = document.body.classList.toggle('dark-theme');
  localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
  if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
    document.body.classList.add('dark-theme');
    document.documentElement.classList.add('transition');
    document.getElementById("change-theme-btn").src = "./images/moon.png";
  }
  else{
    document.documentElement.classList.add('transition');
    document.getElementById("change-theme-btn").src = "./images/sun.png";
  }
});

if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
  document.body.classList.add('dark-theme');
  document.getElementById("change-theme-btn").src = "./images/moon.png";
}
else{
  document.getElementById("change-theme-btn").src = "./images/sun.png";
}

// weather api call
var climateCondition = document.querySelector('.climateCondition');
var temperature = document.querySelector('.temp');
const wind = document.querySelector('.winds');
const humidity = document.querySelector('.humidity');

window.onkeyup = keyup;
//creates a global Javascript variable
function keyup(e) {
  //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
  if (e.keyCode == 13) {
    var search = document.getElementsByClassName("input")[0].value;
    search = String(search);
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+search+'&appid=daef535c29750b1a31263719f56e4d1a')
    .then(res => res.json())
    .then(data => {
      climateCondition.innerHTML = data.weather[0].description;
      temperature.innerHTML = (data.main.temp-272.15).toFixed(2) + ' °c';
      wind.innerHTML = data.wind.speed + ' m/s';
      humidity.innerHTML = data.main.humidity;
    })
    .catch(err => {
      alert("kindly enter city name correctly");
    })
  }
}