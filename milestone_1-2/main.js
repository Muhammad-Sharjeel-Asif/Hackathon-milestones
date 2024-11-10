var ToggleButton = document.getElementById('toggle-exp');
var Experience = document.getElementById('experience');
ToggleButton.addEventListener("click", function () {
    if (Experience.style.display === 'none') {
        Experience.style.display = 'block';
    }
    else {
        Experience.style.display = 'none';
    }
});
var darkModeButton = document.getElementById('toggle-dark');
var DarkMode = document.getElementsByTagName('body');
darkModeButton.addEventListener('click', function () {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
    }
    else {
        document.body.classList.add('dark-mode');
    }
});
