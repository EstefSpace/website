function darkTheme() {
  document.querySelector('html').setAttribute('data-theme', 'dark');
  document.querySelector("header").style.backgroundColor = "#13171f";
  document
    .getElementById('icon-theme')
    .setAttribute('class', 'fa-solid fa-moon');
  localStorage.setItem('theme', 'dark');

}

function lightTheme() {
  document.querySelector('html').setAttribute('data-theme', 'light');
  document.querySelector("header").style.backgroundColor = "#fff"
  document
    .getElementById('icon-theme')
    .setAttribute('class', 'fa-solid fa-sun');
  localStorage.setItem('theme', 'light');
}

const theme = localStorage.getItem('theme');

switch (theme) {
  case 'dark':
    darkTheme();
    break;
  case 'light':
    lightTheme();
}

const button = document.getElementById('change-theme');
button.addEventListener('click', () => {
  const DataTheme = document.querySelector('html').getAttribute('data-theme');

  switch (DataTheme) {
    case 'dark':
      lightTheme();
      break;
    case 'light':
      darkTheme();
  }
});
