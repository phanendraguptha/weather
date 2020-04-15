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